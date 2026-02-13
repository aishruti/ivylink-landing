import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import WhoItsFor from "@/components/landing/WhoItsFor";
import AIDiscoveryEngine from "@/components/landing/AIDiscoveryEngine";
import HowItWorks from "@/components/landing/HowItWorks";
import OutcomePillars from "@/components/landing/OutcomePillars";
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
      <AIDiscoveryEngine />
      <HowItWorks />
      <OutcomePillars />
      <WhyDifferent />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
};

export default Index;
