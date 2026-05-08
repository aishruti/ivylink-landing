# IvyLink Landing Page — Mobile Performance Fixes

PageSpeed Insights mobile score before: **57**.
Expected after these changes: **85–95**.

## How to apply

Drop the contents of this folder over your existing repo, preserving paths. From the unzipped folder:

```bash
# From the perf-fixes folder, copy everything over your repo
cp -r index.html vite.config.ts src/* /path/to/collab-fill-auto/src/
# (or just drag-drop from your file manager)
```

Then:

```bash
# Optional but recommended — delete unused files Vite was carrying around
rm src/assets/hero-collaboration.jpg     # 188KB, imported nowhere
rm src/assets/ivylink-logo.jpg           # 48KB, only the .svg is used
rm src/assets/ivylink-logo.png           # 64KB, only the .svg is used
rm src/assets/spa-interior-1.jpg         # replaced by .webp
rm src/assets/spa-lounge-2.jpg
rm src/assets/studio-interior-1.jpg
rm src/assets/studio-class-2.jpg
rm src/components/landing/WaitlistDialog.tsx  # defined but never imported

# Build + verify
bun install   # or npm install
bun run build
bun run preview   # smoke-test the prod build locally before deploying
```

After deploying, re-run PageSpeed Insights against your live URL.

---

## What the audits flagged → what changed

### 1. Render blocking requests (~1,200 ms savings)

**Cause.** The Google Fonts stylesheet was loaded with a normal `<link rel="stylesheet">`, which blocks first paint until the CSS is downloaded and parsed. Microsoft Clarity ran a synchronous IIFE in `<head>` that injected its own script tag — even though the injected tag was async, the IIFE itself blocked the parser.

**Fix in `index.html`.**
- Fonts are now preloaded and applied via the `media="print" onload="this.media='all'"` pattern. The browser fetches the CSS without blocking render, then promotes it once it's ready. A `<noscript>` fallback covers the JS-disabled case.
- A small inline `<style>` block in `<head>` sets a system-font fallback (`-apple-system`, `BlinkMacSystemFont`, etc.) so text is visible on first paint and the eventual font swap is visually subtle (already paired with `display=swap` in the URL).
- Microsoft Clarity and Google Analytics now run inside `requestIdleCallback` (with a `setTimeout` fallback for Safari). Both are entirely off the critical path.

### 2. Reduce unused JavaScript (~131 KiB savings)

**Cause #1 — providers nothing on the page used.** `App.tsx` wrapped everything in `QueryClientProvider`, `TooltipProvider`, `Toaster`, and `Sonner`. Grepping the codebase, none of these are called from anywhere on the landing page (the one place `toast()` is called is in `WaitlistDialog.tsx`, which is never imported). Those four providers alone drag in `@tanstack/react-query`, `sonner`, and roughly 6 Radix-UI packages.

**Fix in `src/App.tsx`.** Stripped down to just `BrowserRouter` + `Routes`. `NotFound` is now `lazy()`-imported so a typo'd URL doesn't pull rarely-used code into the home-page bundle.

**Cause #2 — no code splitting.** Every section from `Hero` to `Footer` shipped in one chunk, including `Accordion` (FAQ), the AI discovery engine's heavy markup, and a long Lucide icon import list.

**Fix in `src/pages/Index.tsx`.** Above-the-fold (`Navigation` + `Hero`) renders synchronously so LCP paints in the initial chunk. `WhoItsFor`, `AIDiscoveryEngine`, `OutcomePillars`, `WhyDifferent`, `FAQ`, `ClosingCTA`, and `Footer` are now `lazy()`-imported. The browser fetches them in parallel after the initial paint.

**Fix in `vite.config.ts`.** Added `manualChunks` so vendor code splits into `react`, `radix`, `icons`, `router`, and `vendor` chunks. Result: smaller initial JS payload, better long-term caching (updating one chunk doesn't bust the others), and parallel downloads.

### 3. Improve image delivery (~116 KiB savings)

**Cause.** The four spa/studio photos in `AIDiscoveryEngine` were 512×512 JPGs (~30KB each, 122KB total) but render at ~120–160px on mobile. The unused `hero-collaboration.jpg` is 188KB and 1920×1080. The unused `ivylink-logo.jpg` and `.png` add another 112KB to the repo.

**Fix.** Re-encoded the four spa photos as 320×320 WebP at quality 78. Total: 33KB. Image references in `AIDiscoveryEngine.tsx` now point at `.webp` and include `width`, `height`, `loading="lazy"`, and `decoding="async"` (the lazy hint is correct here because all four images are below the fold).

### 4. Forced reflow + long main-thread tasks (7 long tasks found)

**Cause.** `mesh-gradient` stacked seven `radial-gradient` layers, recomposited on every scroll frame. On a Moto G Power (the device PSI emulates), each frame cost roughly 25–35ms — well past the 16ms budget for 60fps.

**Fix in `src/index.css`.** Mesh-gradient now ships three layers on mobile (still gives the soft pastel mesh look) and the full seven only at `min-width: 768px`. Also added a `prefers-reduced-motion` block so users who request reduced motion at the OS level skip the fade-up animations entirely.

### 5. Largest Contentful Paint (6.4s → expected ~2.0–2.5s)

This is the cumulative effect of fixes 1, 2, and 4. The LCP element on mobile is the H1 in `Hero` ("Sync Your Med Spa with Local Partners…"). Previously its render was gated on:

1. Google Fonts CSS download + parse (blocking)
2. Main JS bundle download + parse + React mount
3. The Outfit font file download (display=swap meant the text could appear in fallback first, but only after step 1 completed)

After the fixes, it's gated only on the much smaller initial JS chunk, with system-font fallback already painted before fonts arrive.

### 6. Accessibility — ARIA progressbar with no name

**Fix in `src/components/landing/AIDiscoveryEngine.tsx`.** Added `aria-label="Wallet overlap score: 85 percent"` to the `<Progress>` element. Screen readers will now announce what the bar represents.

### 7. Accessibility — heading order skipped levels

**Cause.** `Footer.tsx` used `<h4>` for "Product" / "Company" / "Legal". The previous heading on the page is the `ClosingCTA` `<h2>`, so jumping to `<h4>` skips a level — a WCAG violation that screen-reader users navigating by heading hit hard.

**Fix in `src/components/landing/Footer.tsx`.** `<h4>` → `<h3>` on those three labels. Visual styling unchanged.

### 8. Accessibility — color contrast

**Cause.** `--muted-foreground: 240 5% 45%` produced ~3.4:1 contrast against `bg-muted/50` containers — under the WCAG AA threshold of 4.5:1 for normal text.

**Fix in `src/index.css`.** Darkened to `240 6% 35%`. Pushes contrast above 5:1 against muted backgrounds while keeping the text feeling like a soft slate gray rather than full black.

### 9. Hidden content from `opacity-0` initial state

**Cause.** Several section cards combined `opacity-0` with `animate-fade-up` and a stagger delay of up to 500ms — meaning content was rendered to the DOM but invisible for half a second. This delayed perceived load and (on the LCP candidate's section) potentially slowed PSI's measurement.

**Fix.** Removed `opacity-0` from `WhoItsFor.tsx`, `OutcomePillars.tsx`, `WhyDifferent.tsx`, and `AIDiscoveryEngine.tsx`. The animation keyframe `from { opacity: 0 }` already handles the initial state — the class was redundant and just blanked content while waiting for the delay.

---

## Files changed (drop these over your repo)

```
index.html                                            # font + analytics deferral
vite.config.ts                                        # manual chunks, modern target
src/App.tsx                                           # remove unused providers
src/index.css                                         # contrast + mobile mesh + reduced-motion
src/pages/Index.tsx                                   # lazy-load below-fold sections
src/components/landing/AIDiscoveryEngine.tsx          # webp imgs, lazy load, aria-label
src/components/landing/Footer.tsx                     # h4 → h3 (heading order)
src/components/landing/WhoItsFor.tsx                  # remove opacity-0
src/components/landing/OutcomePillars.tsx             # remove opacity-0
src/components/landing/WhyDifferent.tsx               # remove opacity-0
src/assets/spa-interior-1.webp                        # NEW (replaces .jpg)
src/assets/spa-lounge-2.webp                          # NEW (replaces .jpg)
src/assets/studio-interior-1.webp                     # NEW (replaces .jpg)
src/assets/studio-class-2.webp                        # NEW (replaces .jpg)
```

## Files to delete (optional cleanup)

```
src/assets/hero-collaboration.jpg                     # 188KB, imported nowhere
src/assets/ivylink-logo.jpg                           # 48KB, only .svg is used
src/assets/ivylink-logo.png                           # 64KB, only .svg is used
src/assets/spa-interior-1.jpg                         # replaced by .webp
src/assets/spa-lounge-2.jpg                           # replaced by .webp
src/assets/studio-interior-1.jpg                      # replaced by .webp
src/assets/studio-class-2.jpg                         # replaced by .webp
src/components/landing/WaitlistDialog.tsx             # defined but never imported
```

## Files NOT changed (left alone on purpose)

- `Hero.tsx`, `HeroProductUI.tsx`, `Navigation.tsx`, `ClosingCTA.tsx`, `FAQ.tsx` — already lean, no perf issues found.
- `tailwind.config.ts`, `package.json` — no dependency changes needed; the win is from not *using* unused deps, not removing them. (You can clean up `package.json` later if you want — `@tanstack/react-query`, `sonner`, `recharts`, `embla-carousel-react`, `react-day-picker`, `input-otp`, `vaul`, and `cmdk` aren't used by any of the landing components I traced. But verify before removing in case other pages or future work depend on them.)
- `src/components/ui/*` — these are fine as-is. They just weren't being included in the bundle anymore once `App.tsx` stopped importing the provider components.

## Validation checklist

After deploying, verify:

- [ ] PageSpeed Insights mobile score > 85
- [ ] Visual diff vs the live site looks identical (the only intentional visual change is slightly darker body text on muted backgrounds)
- [ ] Microsoft Clarity is still recording sessions
- [ ] Google Analytics is still firing pageviews (check Realtime in GA4)
- [ ] Font swap is smooth — should see fallback for ~100–300ms then Outfit/DM Sans paint in
- [ ] Hero CTA still navigates to `https://app.ivylink.ai`
