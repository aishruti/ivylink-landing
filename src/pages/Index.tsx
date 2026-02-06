import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import WhoItsFor from "@/components/landing/WhoItsFor";
import OutcomePillars from "@/components/landing/OutcomePillars";
import HowItWorks from "@/components/landing/HowItWorks";
import AIDiscoveryEngine from "@/components/landing/AIDiscoveryEngine";
import WhyDifferent from "@/components/landing/WhyDifferent";
import FAQ from "@/components/landing/FAQ";
import ClosingCTA from "@/components/landing/ClosingCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoItsFor />
      <OutcomePillars />
      <HowItWorks />
      <AIDiscoveryEngine />
      <WhyDifferent />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
};

export default Index;