import NavBar from "@/components/landing/NavBar";
import HeroDark from "@/components/landing/HeroDark";
import SocialProofBarDark from "@/components/landing/SocialProofBarDark";
import PainPanels from "@/components/landing/PainPanels";
import ReactivationResults from "@/components/landing/ReactivationResults";
import InteractiveDemo from "@/components/landing/InteractiveDemo";
import CalculatorDark from "@/components/landing/CalculatorDark";
import HowItWorksDark from "@/components/landing/HowItWorksDark";
import ComparisonTable from "@/components/landing/ComparisonTable";
import ClosingCtaCoraal from "@/components/landing/ClosingCtaCoraal";
import FooterDark from "@/components/landing/FooterDark";

/*
 * IvyLink Landing Page v2 - Gojiberry.ai inspired rebuild
 * Dark hero, pain panels, interactive demo, revenue calculator,
 * comparison table, closing CTA, footer.
 */

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      {/* 1. Navigation */}
      <NavBar />

      {/* 2. Hero */}
      <HeroDark />

      {/* 3. Social Proof Bar */}
      <SocialProofBarDark />

      {/* 4. Pain Panels */}
      <PainPanels />

      {/* 5. Reactivation Results */}
      <ReactivationResults />

      {/* 6. Interactive Demo */}
      <InteractiveDemo />

      {/* 7. Revenue Calculator */}
      <CalculatorDark />

      {/* 8. How It Works */}
      <HowItWorksDark />

      {/* 9. Comparison Table */}
      <ComparisonTable />

      {/* 10. Closing CTA */}
      <ClosingCtaCoraal />

      {/* 11. Footer */}
      <FooterDark />
    </div>
  );
};

export default Index;
