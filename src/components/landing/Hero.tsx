import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden py-20 lg:py-32">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground animate-fade-up">
            <Sparkles className="h-4 w-4" />
            <span>Automated Local Collaboration</span>
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fill Empty Slots with{" "}
            <span className="text-primary">Local Collabs</span>
          </h1>

          {/* Subhead */}
          <p className="mb-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            For single-location med spas ready to turn nearby gyms and studios into steady new bookings—automatically.
          </p>

          {/* Credibility line */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-secondary-foreground animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Guaranteed: 8 new bookings in 21 days, or we work free until you do.</span>
          </div>

          {/* CTA */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              Book a call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;