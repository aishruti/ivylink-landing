import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";
import HeroProductUI from "./HeroProductUI";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-10 lg:py-16 w-full">
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
              We recover revenue<br />you've already earned.
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Most med spas have 200–800 lapsed clients worth $40,000–$150,000 sitting untouched in their database. We recover that revenue for you — without you touching any software, running any campaign, or spending anything upfront.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Cta size="xl" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group">
                Book Free Audit →
                <ArrowRight className="hidden sm:inline h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Cta>
              <button className="px-6 py-3 text-base font-medium text-primary hover:text-primary/80 transition-colors">
                See how it works
              </button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.25s' }}>
              Free to audit. No credit card. Results in 30 days.
            </p>

            {/* Trust band. Kills med-spa-only perception immediately. */}
            <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Built for
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Med Spas", "Wellness Clinics", "Salons", "Yoga Studios", "Nail Bars"].map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 transition-colors"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Product UI (real screenshot) */}
          <div className="relative animate-fade-up lg:animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <HeroProductUI />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
