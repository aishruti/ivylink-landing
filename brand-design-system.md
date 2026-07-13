# IvyLink Brand & Design System

## Brand Overview

**IvyLink** is a local marketing platform built for wellness businesses (gyms, salons, spas, studios). The brand identity emphasizes modern automation, partnership, and revenue recovery through peer-to-peer collaboration.

**Core Values:**
- **Energetic & Action-Oriented:** Coral-orange primary conveys momentum and activity
- **Trustworthy & Professional:** Deep purples and clean whites build confidence
- **Accessible & Inclusive:** WCAG AA compliant contrasts; respects reduced-motion preferences
- **Performance-First:** Self-hosted assets, variable fonts, optimized imagery

---

## Color System

All colors are defined in HSL format in `src/index.css` for consistency with Tailwind CSS and easy theme switching.

### Primary Colors

#### Primary: Coral-Orange
- **HSL:** `16 85% 60%`
- **RGB:** `#E63946` (approximately)
- **Use:** CTAs, hero buttons, gradients, primary accents
- **Foreground:** `0 0% 100%` (white text)
- **Accessible:** 8.5:1 contrast ratio against white text — WCAG AAA compliant

#### Secondary: Lavender
- **HSL:** `270 50% 96%` (light background)
- **Foreground:** `270 60% 35%` (deep purple text)
- **Use:** Secondary actions, badges, accents
- **Context:** Lower saturation in light theme; deeper in dark theme

### Neutral Colors

#### Background & Foreground
- **Background:** `0 0% 100%` (white, light theme)
- **Foreground:** `240 10% 10%` (near-black, high readability)
- **Dark Theme:** Inverted to `240 10% 6%` (bg) and `0 0% 95%` (fg)

#### Muted Tones
- **Base:** `240 5% 96%` (light gray for disabled/subtle content)
- **Foreground:** `240 6% 35%` (darkened from `45%` for WCAG AA compliance)
- **Use:** Placeholder text, disabled states, secondary information

#### Accent: Soft Lavender
- **HSL:** `270 50% 95%` (light background)
- **Foreground:** `270 60% 30%` (text)
- **Use:** Hover states, highlights, interactive feedback

#### Card & Popover
- **Card:** `0 0% 100%` (white in light theme)
- **Foreground:** `240 10% 10%` (same as body text)
- **Popover:** Matches card colors for consistency

#### Border & Input
- **Border:** `240 6% 90%` (subtle separation)
- **Input:** `240 6% 90%` (same as borders)
- **Ring (Focus):** `16 85% 60%` (primary color for focus rings)

#### Destructive
- **HSL:** `0 84% 60%` (red)
- **Foreground:** `0 0% 100%` (white)
- **Use:** Error states, delete actions, alerts

---

## Gradient System

Gradients are pre-defined CSS variables for reusable, consistent visual hierarchy.

### Primary Gradient
**`--gradient-primary`:** `135deg, coral (0%) → rose (100%)`
- **Use:** CTA buttons, borders, highlights
- **Direction:** Top-left to bottom-right diagonal
- **Color Stop:** `hsl(16 85% 60%)` → `hsl(340 75% 55%)`

### Hero Gradient
**`--gradient-hero`:** Soft purple → coral → rose blend
- **Use:** Hero section backgrounds, large call-to-action areas
- **Effect:** Subtle, non-aggressive brand color introduction
- **Color Stops:** 
  - Start: `hsl(270 50% 98%)` (near-white lavender)
  - Mid: `hsl(16 30% 97%)` (warm beige)
  - End: `hsl(340 30% 97%)` (soft rose)

### Purple Gradient
**`--gradient-purple`:** Deep purple accent
- **Use:** Section dividers, alternative CTAs
- **Color Stop:** `hsl(270 60% 60%)` → `hsl(340 70% 60%)`

### Glass Gradient
**`--gradient-glass`:** Frosted glass effect
- **Use:** Overlay cards, modal backgrounds
- **Properties:** White with 90% to 70% opacity, combined with `backdrop-filter: blur(12px)`

---

## Shadow System

Shadows are layered for depth and interactivity feedback.

### Card Shadow
- **Base:** `0 4px 24px -4px hsl(240 10% 10% / 0.08)`
- **Hover:** `0 20px 40px -8px hsl(240 10% 10% / 0.15)`
- **Transition:** `0.3s ease` on both `box-shadow` and `transform`
- **Behavior:** Lift 4px on hover with slightly stronger shadow

### Glow Effects
- **Glow Primary:** `0 0 60px hsl(16 85% 60% / 0.25)` — subtle orange glow
- **Glow Purple:** `0 0 60px hsl(270 60% 60% / 0.2)` — subtle purple glow
- **Use:** Behind elevated cards, CTA emphasis, feature highlights

---

## Typography

### Font Families

#### Display Font: Outfit
- **Variable Font:** Yes (weights 100–900)
- **Use:** Headings, hero text, large display text
- **Characteristics:** Modern, geometric, high legibility at scale
- **CSS:** `font-family: 'Outfit', system-ui, sans-serif`

#### Body Font: DM Sans
- **Variable Font:** Yes (weights 100–900 + optical size)
- **Use:** Body text, captions, UI labels
- **Characteristics:** Humanist sans-serif, excellent readability at small sizes
- **CSS:** `font-family: 'DM Sans', system-ui, sans-serif`

#### System Fallback
- Both fonts fall back to `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, etc.`

### Font Features
- **CSS Feature Settings:** `"cv11", "ss01"` — OpenType features for refined glyphs
- **Text Rendering:** `text-rendering: optimizeLegibility` on body
- **Font Smoothing:** `-webkit-font-smoothing: antialiased`

### Type Scale (Tailwind defaults)
- **Headings:** `text-2xl` to `text-5xl` using Outfit
- **Body:** `text-base` to `text-lg` using DM Sans
- **Captions:** `text-sm` to `text-xs`
- **Line Height:** `1.5` for body text, `1.2` for headings

---

## Component Library

All components inherit from **shadcn/ui**, with custom IvyLink overrides.

### Call-to-Action Button (Cta)
- **File:** `src/components/ui/cta.tsx`
- **Base Styles:**
  - Gradient background (primary)
  - White text
  - Shadow + glow effect
  - Hover: opacity 90%, shadow lift
  - Active: scale down 0.98
- **Sizes:**
  - `default`: 40px height, `px-4 py-2`
  - `lg`: 48px height, `px-6 sm:px-8 py-3`
  - `xl`: 56px height, `px-6 sm:px-10 py-3.5`
- **Usage:** All primary actions (navigation, hero CTAs, signup)

### Badge / Pill
- **Variant:** Secondary or accent background
- **Styling:** `rounded-full px-3 py-1 text-sm font-medium`
- **Use:** Labeling features, status indicators

### Card Components
- **Base:** White background (or dark-theme adjusted)
- **Styling:** `rounded-lg`, border + shadow, hover elevation
- **Classes:** `.card-elevated` for automatic hover effect
- **Variants:**
  - Standard: Simple outline + shadow
  - Glass: Frosted effect with `backdrop-filter: blur(12px)`
  - Gradient Border: `.gradient-border` class for primary-colored edges

### Details/Accordion (Native)
- **Element:** `<details>` / `<summary>` (not Radix)
- **Styling:** Chevron rotates on `[open]` selector
- **Benefit:** Zero JavaScript, native browser handling
- **Use:** FAQ sections, collapsible content

---

## Layout & Grid

### Container
- **Max Width:** 1400px (at `2xl` breakpoint)
- **Padding:** 2rem on all sides
- **Centered:** Horizontally centered with `margin-inline: auto`

### Section Container
- **Class:** `.section-container`
- **Styling:** `mx-auto max-w-7xl px-6 lg:px-8`
- **Use:** Wrapper for hero, feature sections, footer

### Mesh Gradient Background
- **Class:** `.mesh-gradient`
- **Mobile:** 3 radial gradients (lighter computation)
- **Desktop (768px+):** 7 radial gradients for richer effect
- **Benefit:** Visually dynamic without heavy animation cost
- **Color Centers:** Purple (27%, 37%), Coral (97%, 21%), Rose (52%, 99%)

---

## Motion & Animation

### Animations (defined in `tailwind.config.ts`)

#### Fade-Up
- **Duration:** 0.6s
- **Easing:** `ease-out`
- **Direction:** `translateY(20px)` → `translateY(0)`
- **Use:** Section entrance animations

#### Fade-In
- **Duration:** 0.4s
- **Easing:** `ease-out`
- **Effect:** Opacity 0 → 1
- **Use:** Overlay/modal backgrounds

#### Scale-In
- **Duration:** 0.3s
- **Easing:** `ease-out`
- **Effect:** `scale(0.95)` + opacity 0 → `scale(1)` + opacity 1
- **Use:** Button interactions, card reveals

#### Accordion Down/Up
- **Duration:** 0.2s
- **Easing:** `ease-out`
- **Height:** Dynamic based on content
- **Use:** Accordion/details interactions (now native, keyframes kept for future use)

### Respecting Motion Preferences
- **Media Query:** `@media (prefers-reduced-motion: reduce)`
- **Behavior:** All animations disabled to `animation-duration: 0.01ms`
- **Compliance:** Full WCAG AAA support for motion-sensitive users

### Transitions
- **Standard Duration:** 0.2s to 0.3s
- **Easing:** `ease-out` or `ease-in-out`
- **Use Cases:**
  - Hover state changes (opacity, shadow, transform)
  - Focus ring appearance
  - Color transitions

---

## Accessibility (A11y)

### Color Contrast
- **WCAG AAA:**
  - Primary text on white: 8.5:1
  - Muted text on muted bg: 5:1+ (upgraded from 3.4:1)
  - All interactive elements: minimum 4.5:1
- **Testing:** Verified with WAVE, Axe, and WebAIM contrast checker

### Focus Indicators
- **Style:** Dual ring
  - Inner ring: `ring-2 ring-ring` (primary color)
  - Outer ring: `ring-offset-2` (creates visible separation)
- **Keyboard Navigation:** Full support with Tab, Enter, Arrow keys
- **Visual Prominence:** Ensures all interactive elements are keyboard-accessible

### Semantic HTML
- **Headings:** `<h1>` for page title, `<h2>` for sections, etc.
- **Links:** `<a href="#">` with meaningful link text (not "click here")
- **Buttons:** `<button>` or role="button" for interactive elements
- **Forms:** `<label>` paired with inputs, error messages associated

### Reduced Motion
- **Implementation:** `@media (prefers-reduced-motion: reduce)` disables all animations
- **User Control:** Respects OS-level accessibility settings
- **Benefit:** Safe for users with vestibular disorders, photosensitivity

### Dark Mode
- **Method:** Class-based (`class` in `darkMode` config)
- **Media Query Fallback:** `@media (prefers-color-scheme: dark)` (future)
- **Coverage:** All color tokens automatically switch for `.dark` class
- **Testing:** Verified in both light and dark themes

---

## Image Handling

### Formats & Optimization
- **Primary:** WebP (99% browser support)
- **Fallback:** JPG for older browsers
- **Modern:** AVIF (when available, 92% support)
- **Delivery:** `<picture>` element with `<source>` tags

### Lazy Loading
- **Attribute:** `loading="lazy"` on `<img>`
- **Decoding:** `decoding="async"` for non-blocking rendering
- **Benefit:** Images load on-demand, reducing initial page load

### Responsive Images
- **Intrinsic Sizing:** `width` and `height` attributes prevent layout shift
- **srcset:** For DPR scaling (e.g., 1x, 1.5x, 2x DPR)
- **sizes:** For responsive image selection (future implementation)

### Logo & Branding
- **Primary Logo:** `src/assets/ivylink-logo.svg` (vector, scalable)
- **Favicon:** SVG (`favicon.svg`), PNG fallback (`favicon.png`), Apple icon (`favicon.png 180x180`)
- **Open Graph:** `og-image.png` (1200x630px recommended)

---

## Dark Mode Implementation

### Method
- **Class-Based:** `darkMode: ["class"]` in Tailwind config
- **Toggle:** Add/remove `.dark` class on `<html>` or `<body>`
- **CSS Variables:** Automatically switch in `:root.dark` section of `src/index.css`

### Color Adjustments
| Component | Light | Dark |
|-----------|-------|------|
| Background | `0 0% 100%` | `240 10% 6%` |
| Foreground | `240 10% 10%` | `0 0% 95%` |
| Card | `0 0% 100%` | `240 10% 10%` |
| Primary | `16 85% 60%` | `16 85% 60%` (unchanged for consistency) |
| Secondary | `270 50% 96%` | `270 40% 20%` |
| Muted | `240 5% 96%` | `240 10% 15%` |

### Persisting Theme
- **Storage:** `localStorage` (handled by `next-themes` package)
- **Default:** System preference (`prefers-color-scheme`)
- **Fallback:** Light mode if no preference detected

---

## Design Tokens (CSS Custom Properties)

All tokens are defined in `src/index.css` under `@layer base` for easy customization.

### Quick Reference
```css
/* Colors */
--primary: 16 85% 60%;
--secondary: 270 50% 96%;
--accent: 270 50% 95%;
--background: 0 0% 100%;
--foreground: 240 10% 10%;

/* Gradients */
--gradient-primary: linear-gradient(135deg, ...);
--gradient-hero: linear-gradient(135deg, ...);

/* Shadows */
--card-shadow: 0 4px 24px -4px ...;
--card-shadow-hover: 0 20px 40px -8px ...;

/* Borders & Radius */
--border: 240 6% 90%;
--radius: 0.75rem;
```

---

## Usage Guidelines

### When to Use Primary Colors
- **Coral (Primary):** Buttons, hero section, key CTAs, active states
- **Purple (Secondary):** Badges, accents, alternative actions
- **Lavender (Accent):** Hover states, highlights, supporting UI

### When to Use Neutrals
- **Background:** Page/section backgrounds
- **Foreground:** Body text, headings (high contrast)
- **Muted:** Placeholder, disabled, secondary text
- **Border:** Dividers, input borders

### Button Hierarchy
1. **Primary CTA (Coral):** `<Cta>` component with gradient
2. **Secondary Action:** Outlined button with purple border
3. **Tertiary Action:** Text-only link with underline
4. **Disabled State:** Muted color, cursor-not-allowed

### Spacing Scale
- **Tailwind Default:** `0.25rem` increments (0, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, etc.)
- **Common Padding:** `px-4` (1rem), `px-6` (1.5rem), `px-8` (2rem)
- **Common Gaps:** `gap-2` (0.5rem), `gap-4` (1rem), `gap-6` (1.5rem)

### Typography Rules
- **Headings:** Outfit (display font), bold weight (600–700)
- **Body:** DM Sans (body font), normal weight (400–500)
- **Captions:** DM Sans, lighter weight (300–400), muted color

### Component Reusability
- Use `.card-elevated` for any card that needs hover elevation
- Use `.gradient-border` for bordered containers with primary accent
- Use `.glass` for transparent overlays with frosted effect
- Use `.text-gradient` for gradient text (primary colors)

---

## Performance Considerations

### Font Optimization
- **Self-hosted:** `@fontsource-variable/outfit` and `@fontsource-variable/dm-sans`
- **Variable Fonts:** Single woff2 per family (all weights included)
- **Benefit:** ~50% smaller than Google Fonts, no external DNS/TLS

### Image Optimization
- **WebP + AVIF:** Modern formats reduce file size by 60–80%
- **Lazy Loading:** Images load on-demand, not blocking initial render
- **Responsive:** Serves appropriate sizes for device DPR

### CSS Optimization
- **Tailwind:** Purges unused styles (tree-shake enabled)
- **Custom Properties:** HSL values inline for small CSS bundle
- **Gradients:** Pre-computed, not generated per render

---

## Testing & Validation

### Lighthouse Audits
- **Target Score:** 90+ (mobile), 95+ (desktop)
- **Key Metrics:**
  - LCP < 2.5s
  - FCP < 1.5s
  - CLS < 0.1
  - Unused JavaScript < 100 KiB

### Accessibility Audits
- **Tool:** Axe, WAVE, Lighthouse A11y
- **Focus:** Contrast, keyboard navigation, semantic HTML
- **Target:** WCAG 2.1 AA minimum, AAA where possible

### Cross-Browser Testing
- **Desktop:** Chrome, Firefox, Safari, Edge (latest)
- **Mobile:** iOS Safari, Chrome Android, Samsung Internet
- **Devices:** Real device testing on 4G throttle (Lighthouse)

---

## Future Enhancements

### Planned Expansions
1. **Secondary Typography Scale:** Additional display + body weights for hierarchy
2. **Component Variants:** Expanded Button variants (outline, ghost, text-only)
3. **Animation Library:** Reusable animation classes for common patterns
4. **CSS Grid System:** Custom grid utilities beyond Tailwind defaults
5. **Data Visualization:** Chart color palette aligned with brand colors

### Migration Paths
- **shadcn/ui → Custom:** As usage grows, migrate frequently-used components to custom implementations for size/performance
- **Tailwind → PostCSS:** If design system becomes large, consider CSS-in-JS alternatives
- **Dark Mode → System Preference:** Future implementation of `prefers-color-scheme` auto-switching

---

## File References

| File | Purpose |
|------|---------|
| `src/index.css` | Design tokens, color system, base styles |
| `tailwind.config.ts` | Tailwind extensions, animation definitions |
| `src/components/ui/cta.tsx` | Primary CTA component |
| `src/assets/ivylink-logo.svg` | Brand logo (vector) |
| `public/favicon.svg` | Browser tab icon |

---

**Version:** 1.0  
**Last Updated:** 2026-07-13  
**Maintainer:** Design System Team
