import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import { LazyMount } from "@/components/LazyMount";

/*
 * PERF: Below-the-fold sections are mounted via IntersectionObserver
 * (LazyMount), not Suspense. They don't even hit the network until the user
 * scrolls within 400px of them.
 *
 * Order is intentional:
 * 1. Hero. Primary keyword in H1, outcome+mechanism in sub.
 * 2. OutcomeBand. Show the result FIRST (revenue dashboard) before explaining
 *    how it works. Most compelling reason to sign up.
 * 3. HowItWorksSteps. 4 concrete steps with real product screenshots.
 * 4. WhyPartnerships. Comparison vs ads / referrals / DIY (replaces features).
 * 5. WhoItsFor. Qualifying pains, broadened beyond med spas.
 * 6. SocialProof. Quote + stats.
 * 7. FAQ. Long-tail SEO + objection handling.
 * 8. ClosingCTA. Final push.
 * 9. Footer.
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LazyMount load={() => import("@/components/landing/OutcomeBand")} minHeight={1100} />
      <LazyMount load={() => import("@/components/landing/HowItWorksSteps")} minHeight={3000} />
      <LazyMount load={() => import("@/components/landing/WhyPartnerships")} minHeight={1100} />
      <LazyMount load={() => import("@/components/landing/WhoItsFor")} minHeight={800} />
      <LazyMount load={() => import("@/components/landing/SocialProof")} minHeight={800} />
      <LazyMount load={() => import("@/components/landing/FAQ")} minHeight={900} />
      <LazyMount load={() => import("@/components/landing/ClosingCTA")} minHeight={700} />
      <LazyMount load={() => import("@/components/landing/Footer")} minHeight={500} />
    </div>
  );
};

export default Index;
