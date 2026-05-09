import { useEffect, useRef, useState, type ComponentType } from "react";

/*
 * PERF: Why this exists.
 *
 * The previous version used React.Suspense around all 7 below-the-fold sections,
 * which lazy-loaded their code chunks but kicked off the dynamic imports
 * immediately on mount. Result: every chunk hit the network right after FCP,
 * and PageSpeed Insights' "Unused JavaScript" metric counts bytes that
 * downloaded but never executed during its measurement window. Since PSI
 * doesn't scroll, the only chunk whose code actually runs is the first one.
 * That's why our score plateaued at 69 with 196 KiB of "unused JS".
 *
 * IntersectionObserver fixes this: each section's chunk is only fetched when
 * the placeholder enters (or gets close to) the viewport. PSI never scrolls,
 * never observes intersection, never downloads the chunks. Real users scroll,
 * trigger the observer 300px before the section is visible, and load happens
 * before they ever see a placeholder.
 *
 * The placeholder reserves vertical space (`minHeight`) to keep CLS at 0.
 */

interface LazyMountProps {
  /** Function that returns the dynamic import promise, e.g. `() => import("./Footer")`. */
  load: () => Promise<{ default: ComponentType }>;
  /** Estimated rendered height in CSS pixels. Placeholder uses this to avoid layout shift. */
  minHeight: number;
  /** How far before the section enters the viewport to start loading. */
  rootMargin?: string;
}

export function LazyMount({ load, minHeight, rootMargin = "400px" }: LazyMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!ref.current || Component) return;

    // Browsers without IntersectionObserver get the chunk immediately.
    // Not great for them, but they're a vanishingly small audience.
    if (typeof IntersectionObserver === "undefined") {
      load().then((mod) => setComponent(() => mod.default));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          obs.disconnect();
          load().then((mod) => setComponent(() => mod.default));
        }
      },
      { rootMargin },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [load, rootMargin, Component]);

  if (Component) return <Component />;
  return <div ref={ref} aria-hidden="true" style={{ minHeight }} />;
}
