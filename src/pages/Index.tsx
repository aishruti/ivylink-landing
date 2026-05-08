import { lazy, Suspense } from "react";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";

/*
 * PERF: Above-the-fold (Navigation + Hero) is rendered synchronously so the
 * LCP element paints in the initial chunk. Everything below the fold is
 * lazy-loaded — this splits ~150KB+ of icon imports, accordion radix code,
 * and section trees out of the initial JS bundle.
 *
 * The Suspense fallback is `null` (not a spinner) because each lazy section
 * loads in well under a second on a real connection and an empty placeholder
 * avoids any visible loading flash.
 */
const WhoItsFor = lazy(() => import("@/components/landing/WhoItsFor"));
const AIDiscoveryEngine = lazy(() => import("@/components/landing/AIDiscoveryEngine"));
const OutcomePillars = lazy(() => import("@/components/landing/OutcomePillars"));
const WhyDifferent = lazy(() => import("@/components/landing/WhyDifferent"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const ClosingCTA = lazy(() => import("@/components/landing/ClosingCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Suspense fallback={null}>
        <WhoItsFor />
        <AIDiscoveryEngine />
        <OutcomePillars />
        <WhyDifferent />
        <FAQ />
        <ClosingCTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
