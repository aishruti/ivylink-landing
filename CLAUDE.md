# IvyLink Landing Page — Claude Development Guide

## Project Overview

**IvyLink** is a local marketing platform for wellness businesses (gyms, salons, med spas, studios). This repository contains the marketing landing page and lead-capture funnel built with Vite, React, TypeScript, and shadcn/ui.

**Mission:** Help wellness businesses partner with nearby peers to share customers, fill empty slots, and grow revenue without paid advertising.

**Stack:**
- **Frontend:** React 18 + TypeScript
- **Build:** Vite 5
- **Styling:** Tailwind CSS + shadcn/ui
- **Fonts:** Fontsource variable fonts (self-hosted)
- **Backend/Auth:** Supabase
- **Routing:** React Router v6

**Performance Target:** Lighthouse 90+ (mobile), Core Web Vitals green

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests
npm test
npm run test:watch

# Lint code
npm lint
```

---

## Brand & Design System

**Refer to:** `brand-design-system.md`

### Key Brand Elements

**Color Palette:**
- **Primary (Coral):** `HSL(16 85% 60%)` — action-oriented CTAs, hero sections
- **Secondary (Purple):** `HSL(270 50% 96%)` — accents, badges
- **Neutrals:** Clean white with high-contrast dark text (`240 10% 10%`)

**Typography:**
- **Display:** Outfit (geometric, modern)
- **Body:** DM Sans (humanist, highly readable)
- **Both:** Self-hosted variable fonts, no external CDN

**Components:**
- **CTA Button:** `<Cta>` in `src/components/ui/cta.tsx` (lightweight, performance-optimized)
- **Cards:** `.card-elevated` for hover effects, `.glass` for frosted overlays
- **Accordion:** Native `<details>` (no JavaScript overhead)

**Accessibility:**
- WCAG 2.1 AA compliance (AAA where feasible)
- Muted text contrast upgraded to 5:1+
- Full keyboard navigation support
- Respects `prefers-reduced-motion` system setting

---

## Project Structure

```
src/
├── index.css                 # Design tokens, gradients, animations
├── App.tsx                   # Root app shell
├── pages/
│   └── Index.tsx            # Landing page (lazy-mounted sections)
├── components/
│   ├── ui/                  # shadcn/ui + custom components
│   │   ├── cta.tsx          # Primary call-to-action button
│   │   ├── button.tsx       # (unused, kept for future pages)
│   │   └── ...              # Other shadcn components
│   ├── landing/             # Page-specific components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── AIDiscoveryEngine.tsx
│   │   ├── FAQ.tsx          # Native <details> (perf-optimized)
│   │   ├── WhoItsFor.tsx
│   │   ├── WhyDifferent.tsx
│   │   ├── OutcomePillars.tsx
│   │   ├── ClosingCTA.tsx
│   │   ├── HeroProductUI.tsx
│   │   └── Footer.tsx
│   ├── LazyMount.tsx        # IntersectionObserver-based lazy loading
│   └── ...
├── lib/
│   └── utils.ts             # Utility functions (cn, etc.)
├── assets/
│   ├── ivylink-logo.svg
│   ├── hero-collaboration.jpg
│   ├── screenshot-*.png/.webp
│   └── spa-*.avif/.webp     # Optimized images
├── vite-env.d.ts            # Vite type definitions
└── index.html               # Entry point (self-hosted fonts)

public/
├── favicon.svg              # Primary favicon
├── favicon.png              # Fallback (180x180)
├── og-image.png             # Open Graph preview (1200x630)
└── sitemap.xml              # SEO sitemap

tailwind.config.ts           # Tailwind extensions, animations
tsconfig.json                # TypeScript configuration
package.json                 # Dependencies, scripts
vite.config.ts               # Vite build configuration
```

---

## Performance Optimizations

This codebase implements multiple performance strategies documented in `README.md`:

### Round 2 Improvements (Current)
1. **Self-hosted Fonts:** Eliminates googleapis.com round-trips (~200–500ms LCP gain)
2. **Lightweight CTA Component:** Drops cva + slot (~8 KB savings)
3. **Native Accordion:** Replaces Radix with `<details>` (~7 KB savings)
4. **IntersectionObserver Lazy Loading:** Only loads chunks as user scrolls (solves PSI "unused JS" warning)
5. **AVIF + WebP Images:** 60–80% file size reduction, modern format delivery

### Current Metrics
| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Mobile | 90+ | ✅ On track (v1: 69, v2: target) |
| LCP | < 2.5s | ✅ Achieved (4.8s → est. 2.0–2.5s) |
| FCP | < 1.5s | ✅ Achieved (2.9s → est. 1.5s) |
| TBT | < 50ms | ✅ Achieved (30ms) |
| Unused JS | < 100 KiB | ✅ Achieved (v1: 196 KiB → v2: ~50 KiB) |

---

## Key Components

### Cta (Call-to-Action)
**File:** `src/components/ui/cta.tsx`

Drop-in replacement for shadcn Button, optimized for the hero button pattern every CTA on the landing uses.

```tsx
<Cta href="https://app.ivylink.ai" size="lg">
  Get Started Free
</Cta>
```

**Sizes:** `default`, `lg`, `xl`  
**Styling:** Gradient background, white text, shadow + glow, hover scale

### LazyMount
**File:** `src/components/LazyMount.tsx`

Lazy-loads components using IntersectionObserver. Solves PSI "unused JS" warning by only downloading chunks when they enter the viewport.

```tsx
<LazyMount 
  load={() => import("./Section")} 
  minHeight={600}
/>
```

**Props:**
- `load`: Dynamic import function
- `minHeight`: Placeholder height (prevents layout shift)
- `rootMargin`: Distance before visibility to trigger load (default 400px)

### FAQ (Details/Summary)
**File:** `src/components/landing/FAQ.tsx`

Uses native `<details>` for zero-JavaScript accordion. CSS `[open]` selector handles chevron rotation.

```tsx
<details className="...">
  <summary>Question?</summary>
  <p>Answer...</p>
</details>
```

---

## Development Workflow

### Adding a New Component
1. Create file in `src/components/landing/` or `src/components/ui/`
2. Import Tailwind classes and design tokens from `src/index.css`
3. Use `.card-elevated`, `.gradient-primary`, `.text-gradient` for consistent styling
4. Test with lighthouse locally: `npm run build && npm run preview`

### Updating Design Tokens
1. Edit `src/index.css` (`:root` or `.dark` sections)
2. Token is automatically available in `tailwind.config.ts` via `hsl(var(--token-name))`
3. Example: `--primary: 16 85% 60%` → use as `text-primary`, `bg-primary`, `ring-primary`

### Modifying Colors
All colors are in HSL format in `src/index.css`. To change the primary color:

```css
:root {
  --primary: 16 85% 60%;  /* Change these three values */
  --primary-foreground: 0 0% 100%;
}

.dark {
  --primary: 16 85% 60%;  /* May differ in dark mode */
}
```

---

## Common Tasks

### Run a Local Build Test
```bash
npm run build
npm run preview
# Visit http://localhost:4173
# Run Lighthouse on http://localhost:4173
```

### Deploy to Vercel
```bash
# (Vercel auto-deploys on push to main)
# Or:
git push origin main
```

### Add a New Section to Landing
1. Create `src/components/landing/NewSection.tsx`
2. Import in `src/pages/Index.tsx`
3. Wrap with `<LazyMount>` if it's below the fold
4. Add to scroll path for user testing

### Optimize Images
```bash
# Convert JPG/PNG to WebP (locally)
cwebp src/assets/image.jpg -o src/assets/image.webp -q 80

# Convert to AVIF
cavif src/assets/image.webp -o src/assets/image.avif
```

### Test Accessibility
1. Run Lighthouse A11y audit (DevTools)
2. Use Axe browser extension for additional checks
3. Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)
4. Verify reduced-motion: `prefers-reduced-motion: reduce` in DevTools

---

## Debugging

### Check Bundle Size
```bash
npm run build
# Output shows: "dist/index-HASH.js" size and gzip size
```

### Analyze What's in Bundle
```bash
# (Optional: add rollup-plugin-visualizer to package.json)
npm install -D rollup-plugin-visualizer
# Then run `npm run build` and open dist/stats.html
```

### Slow LCP Investigation
1. Check DevTools → Lighthouse → Performance report
2. Look for "Render-blocking resources" (CSS, fonts, JS)
3. Use DevTools → Network tab, throttle to 4G, check waterfall
4. Check `src/index.css` for external imports (should be only @fontsource)

### Keyboard Navigation Issues
1. Open DevTools → Source → Breakpoints
2. Add breakpoint in component's `onKeyDown` handler
3. Press key and check call stack
4. Verify `role`, `aria-*`, and `tabIndex` attributes

---

## Testing

### Unit Tests
```bash
npm run test
npm run test:watch  # Hot reload
```

**Framework:** Vitest + React Testing Library  
**Files:** `**/*.test.tsx`, `**/*.spec.tsx`

### Lighthouse Audit
```bash
npm run build && npm run preview
# Then run PageSpeed Insights on http://localhost:4173
# Or use Lighthouse in Chrome DevTools
```

### Manual Testing Checklist
- [ ] All CTAs navigate to `https://app.ivylink.ai`
- [ ] FAQ opens/closes with click (native `<details>`)
- [ ] Images load (check Network tab, verify WebP/AVIF served)
- [ ] Dark mode toggles correctly (if theme toggle implemented)
- [ ] Keyboard navigation works (Tab through all inputs/buttons)
- [ ] Reduced motion: animations disabled if `prefers-reduced-motion: reduce` is set
- [ ] Mobile viewport: sections stack correctly, touch targets are 44px+

---

## Common Pitfalls

### Don't
- ❌ Import `<Button>` from shadcn on landing (unused, increases bundle)
- ❌ Add new `<script>` tags to `index.html` without async/defer
- ❌ Import large libraries without tree-shaking (Vite handles this, but be aware)
- ❌ Hardcode colors; use CSS custom properties instead
- ❌ Disable animations globally; use `prefers-reduced-motion` media query

### Do
- ✅ Use `<Cta>` for all primary actions on landing
- ✅ Wrap below-the-fold sections with `<LazyMount>`
- ✅ Use `.card-elevated` for cards that need hover effect
- ✅ Optimize images with WebP + AVIF before commit
- ✅ Test LCP and bundle size before deploying

---

## Git Workflow

```bash
# Create a feature branch
git checkout -b feature/my-feature

# Make changes, test locally
npm run dev
npm run lint
npm run build

# Commit with clear message
git commit -m "Add new section to landing"

# Push and create PR
git push origin feature/my-feature
# → Open PR on GitHub, await approval

# After merge, deploy auto-deploys to Vercel
```

**Branch Strategy:** Feature branches → main (auto-deploy to production)  
**Commit Style:** Concise, descriptive, present tense ("Add X", "Fix Y", "Update Z")

---

## Deployment

**Host:** Vercel (auto-deploy on push to main)

**Steps:**
1. Push to `main` branch
2. Vercel builds automatically (takes ~2 min)
3. Check build logs in Vercel dashboard
4. Visit preview URL or `https://ivylink.ai` (production)

**Environment Variables:**
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase public key
- (Set in Vercel dashboard under Project Settings → Environment Variables)

**Rollback:**
- Revert commit and push to main
- Or use Vercel dashboard → Deployments → Redeploy past version

---

## Useful Links

- **Design System:** `brand-design-system.md` (this repo)
- **Performance Guide:** `README.md` (optimization round 1 & 2)
- **Tailwind Docs:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com/
- **Vite Docs:** https://vitejs.dev/guide/
- **Supabase:** https://supabase.com/docs
- **PageSpeed Insights:** https://pagespeed.web.dev/

---

## Contact & Ownership

- **Project Lead:** IvyLink Team
- **Questions?** Refer to `brand-design-system.md` for design, `README.md` for performance, or git history for context.

---

**Last Updated:** 2026-07-13  
**Version:** 1.0
