import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, TrendingUp, Zap } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      
      <div className="section-container relative">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl gradient-border bg-card p-8 lg:p-12 card-elevated">
            <div className="text-center">
              <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
                Get Started
              </span>
              <h2 className="mb-6 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Your First Week with <span className="text-gradient">IvyLink</span>
              </h2>
              
              <div className="mb-8 grid gap-4 sm:grid-cols-4">
                <div className="rounded-xl bg-muted/50 p-5">
                  <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">7 Minutes</p>
                  <p className="text-sm text-muted-foreground">Setup time</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-5">
                  <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">4+ Partners</p>
                  <p className="text-sm text-muted-foreground">Connected automatically</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-5">
                  <Calendar className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">First Collab</p>
                  <p className="text-sm text-muted-foreground">Live within 7 days</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-5">
                  <TrendingUp className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-display font-bold text-foreground">8+ Bookings</p>
                  <p className="text-sm text-muted-foreground">Within 21 days</p>
                </div>
              </div>

              <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                In your first week, you'll connect with local partners and launch your first automated "Service Swap"—no cold outreach, no manual posting. By day 21, your spa operates on autopilot, turning hours of manual work into a system that keeps your schedule filled.
              </p>

              <Button variant="hero" size="xl" className="group">
                Book a call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
