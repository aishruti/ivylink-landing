import { ArrowRight, Calendar, Users, TrendingUp, Zap } from "lucide-react";
import { Cta } from "@/components/ui/cta";

const ClosingCTA = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl gradient-border bg-card p-8 lg:p-12 card-elevated">
            <div className="text-center">
              <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
              <h2 className="mb-6 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Stop paying for ads. <br className="hidden sm:block" />
                Start <span className="text-gradient">sharing customers</span>.
              </h2>

              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl bg-muted/50 p-5">
                  <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">5 Minutes</p>
                  <p className="text-sm text-muted-foreground">To set up</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-5">
                  <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">5+ Partners</p>
                  <p className="text-sm text-muted-foreground">Matched nearby</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-5">
                  <Calendar className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">First Play</p>
                  <p className="text-sm text-muted-foreground">Live within minutes</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-5">
                  <TrendingUp className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">Bookings</p>
                  <p className="text-sm text-muted-foreground">Tracked in real time</p>
                </div>
              </div>

              <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join the local marketing platform built for wellness businesses. Sign up free, see who's nearby, and send your first partnership play today.
              </p>

              <Cta size="xl" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
                <span>Get Started Free</span>
                <ArrowRight className="hidden sm:inline h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Cta>

              <p className="mt-4 text-sm text-muted-foreground">
                No credit card. No contracts. Live in under 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
