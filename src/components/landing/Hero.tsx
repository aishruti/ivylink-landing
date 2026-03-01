import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroProductUI from "./HeroProductUI";
import WaitlistDialog from "./WaitlistDialog";
import { useWaitlist } from "@/hooks/use-waitlist";

const Hero = () => {
  const { isOpen, openWaitlist, closeWaitlist } = useWaitlist("hero");
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
            <h1 className="mb-6 text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
              Sync Your Med Spa with Local Partners for <span className="text-gradient">Guaranteed Referrals</span>
            </h1>

            <p className="mb-6 text-lg text-muted-foreground sm:text-xl lg:text-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              IvyLink's AI automates med spa referral swaps with local partners to turn their foot traffic into your bookings on total autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" className="group" onClick={openWaitlist}>
                See Who's In My Area
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <WaitlistDialog open={isOpen} onOpenChange={(open) => !open && closeWaitlist()} />
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
