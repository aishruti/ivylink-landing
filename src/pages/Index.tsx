import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import { LazyMount } from "@/components/LazyMount";

/*
 * PERF: Below-the-fold sections are now mounted via IntersectionObserver
 * (LazyMount), not Suspense. They don't even hit the network until the user
 * scrolls within 400px of them. This is the fix for the 196 KiB "Unused
 * JavaScript" PSI flag — chunks PSI never observes are never downloaded.
 *
 * The minHeight values are rough estimates of each section's rendered height
 * on mobile, used purely to reserve vertical space so the placeholder doesn't
 * cause CLS when the real component swaps in.
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LazyMount load={() => import("@/components/landing/WhoItsFor")} minHeight={800} />
      <LazyMount load={() => import("@/components/landing/AIDiscoveryEngine")} minHeight={2400} />
      <LazyMount load={() => import("@/components/landing/OutcomePillars")} minHeight={1400} />
      <LazyMount load={() => import("@/components/landing/WhyDifferent")} minHeight={900} />
      <LazyMount load={() => import("@/components/landing/FAQ")} minHeight={900} />
      <LazyMount load={() => import("@/components/landing/ClosingCTA")} minHeight={700} />
      <LazyMount load={() => import("@/components/landing/Footer")} minHeight={500} />
    </div>
  );
};

export default Index;
