import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroProductUI from "./HeroProductUI";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-pink-400/5 blur-3xl" />

      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2 text-sm font-medium text-white animate-fade-up">
              <span>Local Partnership Engine</span>
            </div>

            {/* H1 */}
            <h1 className="mb-6 text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Turn Nearby Businesses into a <span className="text-gradient">Steady Stream of Bookings</span>
            </h1>

            {/* Subhead */}
            <p className="mb-6 text-lg text-muted-foreground sm:text-xl lg:text-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              IvyLink links you with nearby businesses that share your audience and swaps referrals on autopilot—so you grow without constant outreach.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" className="group">
                See Who Is In My Area
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Content - Product UI */}
          <div className="relative animate-fade-up lg:animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <HeroProductUI />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
