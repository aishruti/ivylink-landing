# IvyLink Landing Page — Mobile Performance Fixes (Round 2)

PSI mobile score progression:

| Round | Performance | FCP   | LCP   | TBT     | Speed Index |
|-------|-------------|-------|-------|---------|-------------|
| Start | 57          | 3.6 s | 6.4 s | 220 ms  | 16.8 s      |
| v1    | 69          | 2.9 s | 4.8 s | 30 ms   | 9.8 s       |
| v2    | **target 90+** | est ~1.5 s | est ~2.0–2.5 s | <50 ms | est ~5 s |

## How to apply

```bash
# 1. Unzip and overlay over your existing repo
cd /path/to/collab-fill-auto
unzip ~/Downloads/ivylink-perf-fixes-v2.zip
cp -r v2/* .

# 2. Install the new font packages
bun install   # or: npm install

# 3. (Optional but recommended) Delete files that are now unused
rm src/assets/hero-collaboration.jpg     # 188KB, imported nowhere
rm src/assets/ivylink-logo.jpg           # 48KB, only the .svg is used
rm src/assets/ivylink-logo.png           # 64KB, only the .svg is used
rm src/assets/spa-interior-1.jpg         # replaced by .avif/.webp
rm src/assets/spa-lounge-2.jpg
rm src/assets/studio-interior-1.jpg
rm src/assets/studio-class-2.jpg
rm src/components/landing/WaitlistDialog.tsx       # never imported

# 4. Build + deploy
bun run build
bun run preview   # smoke test locally
```

After deploy, re-run PageSpeed Insights against your live URL.

---

## Why round 1 plateaued at 69 (and what I changed)

### Diagnosis

The first round of fixes worked — TBT dropped from 220ms to 30ms (huge), FCP improved a full 700ms, and "Render blocking requests" moved into the passed audits. But three issues remained:

1. **"Reduce unused JavaScript" went from 131 KiB to 196 KiB.** Counter-intuitive but explainable: my Suspense-based lazy loading triggered all 7 below-the-fold chunk downloads immediately on mount. PSI doesn't scroll, so none of those chunks ever executed during the measurement window — and PSI counts non-executed-during-measurement bytes as "unused." Lazy loading helped real users (LCP went down), but hurt PSI's specific metric.
2. **Fonts still ran via fonts.googleapis.com.** Even with the non-blocking `media="print" onload` trick, the browser still needs DNS lookup + TLS handshake to googleapis.com for the CSS, then DNS + TLS again to gstatic.com for the woff2. On 4G mobile that's 200–500ms before the first font byte arrives.
3. **LCP at 4.8s was JS-execution-bound, not network-bound.** The hero contained Radix-Slot + class-variance-authority + tailwind-merge resolving on every Button render. Cheap individually, expensive on the critical path.

### The five structural changes in v2

#### 1. Self-host fonts via @fontsource-variable

`src/index.css` now starts with:
```css
@import "@fontsource-variable/outfit/index.css";
@import "@fontsource-variable/dm-sans/index.css";
```

These npm packages bundle Outfit and DM Sans as variable woff2 fonts. Vite ships them as hashed assets from your own origin — no external DNS lookups, no third-party CDN, same long cache lifetime as the rest of your assets. Variable fonts also pack all weights (100–900) into a single woff2 per family, so 4 weight files become 1.

Net: ~50% smaller font bytes over the wire, eliminates 2 round-trips, expected 200–500ms LCP improvement on 4G.

The `index.html` no longer references `fonts.googleapis.com` at all.

#### 2. Replace shadcn `Button` with a 25-line `<Cta>` component

I traced every `<Button>` on the landing page: every single one used `variant="hero"`. So the cva variant matrix and the `@radix-ui/react-slot` polymorphic forwarding were dead weight. The new `src/components/ui/cta.tsx` is a plain `<a>` with the hero styles inlined as a string.

Effect: drops `class-variance-authority`, `@radix-ui/react-slot`, and the `buttonVariants` definition out of the bundle. ~8 KB compressed plus runtime evaluation savings on every render.

The visual output is byte-identical to the previous Button.

#### 3. Replace Radix Accordion with native `<details>`

`src/components/landing/FAQ.tsx` now uses `<details>`/`<summary>` instead of the Radix accordion. The browser handles the open/close state for free — zero JavaScript at runtime, no hydration, no animation library. The chevron rotation is a CSS `[open]` selector.

Effect: drops `@radix-ui/react-accordion` (and the `tailwindcss-animate` accordion keyframes that supported it) from the lazy chunk that contains FAQ. ~7 KB compressed.

#### 4. Replace Radix Progress with a plain div

`AIDiscoveryEngine.tsx` had a single `<Progress value={85} />` — a Radix primitive's worth of code for one bar. The new inline `ProgressBar` is a div with `role="progressbar"` and the right ARIA attributes. Same accessibility, none of the bundle weight.

#### 5. IntersectionObserver-based lazy mounting (the big one)

This is the fix for the 196 KiB "Unused JS" warning.

`src/components/LazyMount.tsx` is a new tiny component that:
- Renders a placeholder div with `minHeight` (so no layout shift)
- Sets up an `IntersectionObserver` with `rootMargin: "400px"`
- Only kicks off the dynamic `import()` when the placeholder enters the observed window
- Once loaded, swaps in the real component

`src/pages/Index.tsx` replaces `<Suspense>` around the 7 sections with 7 `<LazyMount load={...} minHeight={...} />` calls.

**Why this works for PSI:** PSI never scrolls during measurement. So with `LazyMount`, the only JS chunks PSI ever downloads are the initial bundle + Hero. The 6 other section chunks never enter the viewport, never trigger the observer, never download. The "unused JS" metric drops dramatically.

**Why this works for real users:** the `rootMargin: "400px"` means the chunk loads *before* the user can see the placeholder — typically 1–2 scroll seconds early. By the time they reach the section, it's already mounted.

The `minHeight` placeholders preserve scroll position and prevent CLS as the real components mount in.

---

## Image delivery — AVIF + WebP via `<picture>`

The 4 spa images are now served as AVIF first (~92% browser support) with WebP fallback:

```jsx
<picture>
  <source srcSet={spaInteriorAvif} type="image/avif" />
  <source srcSet={spaInteriorWebp} type="image/webp" />
  <img src={spaInteriorWebp} alt="..." width="160" height="160" loading="lazy" decoding="async" />
</picture>
```

Resized from 320px to 240px (still 1.7x DPR for the ~140px max rendered size). All four images now total **19 KB**, down from 122 KB JPG originally (84% reduction; round 1 had 33 KB).

---

## Files changed in this round (drop these over your repo)

```
package.json                                          # adds @fontsource-variable/outfit + dm-sans
index.html                                            # drops external Google Fonts link
src/index.css                                         # imports fontsource at top
src/App.tsx                                           # (unchanged from v1)
src/pages/Index.tsx                                   # IntersectionObserver-based mounting
src/components/LazyMount.tsx                          # NEW
src/components/ui/cta.tsx                             # NEW (replaces Button on landing)
src/components/landing/Navigation.tsx                 # uses Cta
src/components/landing/Hero.tsx                       # uses Cta
src/components/landing/AIDiscoveryEngine.tsx          # uses Cta + ProgressBar + <picture>
src/components/landing/OutcomePillars.tsx             # uses Cta
src/components/landing/ClosingCTA.tsx                 # uses Cta
src/components/landing/FAQ.tsx                        # native <details>
src/components/landing/HeroProductUI.tsx              # (unchanged, included for completeness)
src/components/landing/WhoItsFor.tsx                  # (unchanged from v1)
src/components/landing/WhyDifferent.tsx               # (unchanged from v1)
src/components/landing/Footer.tsx                     # (unchanged from v1 — h4→h3 fix)
src/assets/spa-interior-1.avif      + .webp           # 240px, AVIF + WebP
src/assets/spa-lounge-2.avif        + .webp
src/assets/studio-interior-1.avif   + .webp
src/assets/studio-class-2.avif      + .webp
src/assets/ivylink-logo.svg                           # (unchanged, included for completeness)
vite.config.ts                                        # (unchanged from v1)
```

## What I deliberately did NOT change

- **`react-router-dom` is still used.** Removing it would save ~10 KB but breaks future routing plans (privacy page, terms, etc.). Keeping it.
- **The shadcn `Button` and friends still exist in `src/components/ui/`.** They're not imported by any landing component, so Vite tree-shakes them. They stay available for future pages.
- **`package.json` dependencies are barely trimmed.** I added two and removed none. Several packages (recharts, embla-carousel, react-day-picker, vaul, etc.) are imported by shadcn UI files that *aren't* used on the landing page, but Vite's tree-shaking handles that — they don't enter the bundle. Removing them from `package.json` is a hygiene exercise, not a perf one.

## Validation checklist

After deploying:

- [ ] PageSpeed Insights mobile score > 85 (target: 90+)
- [ ] "Reduce unused JavaScript" warning savings dropped well below 100 KiB
- [ ] LCP under 2.5s
- [ ] FAQ section open/close still works (it's now native `<details>`)
- [ ] All CTAs still navigate to `https://app.ivylink.ai`
- [ ] Microsoft Clarity still recording (check dashboard ~5 min after deploy)
- [ ] GA4 still firing pageviews (Realtime view)
- [ ] Visual diff vs current site looks identical (only intentional change: slightly darker body text on muted backgrounds, from the v1 round)

## If you still aren't satisfied with the score

The remaining levers, in roughly decreasing impact order:

1. **Pre-rendering / SSG.** Vite SPA → static HTML for the home page. Frameworks like Astro or vike could swap in for Vite without losing the existing component code. This makes FCP basically zero.
2. **Inline the entire above-the-fold CSS.** Right now the bundled CSS file is small but still requires a network request. Tools like `vite-plugin-critical` extract critical CSS and inline it in the HTML.
3. **Self-host Microsoft Clarity / Google Analytics.** "Use efficient cache lifetimes — 107 KiB" in PSI is almost entirely those two third-party scripts whose cache headers you don't control. Self-hosting via Partytown or similar moves them to your origin. Diminishing returns at this point.
4. **Drop framer/lottie-style animations entirely.** The fade-up animations are minor but audit-able. Removing them entirely gets you a few more points if you're chasing 100.

Let me know what you see after deploying and I'll dig into anything that's still red.
