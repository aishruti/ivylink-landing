import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";

const ClosingCTA = () => {
  return (
    <section className="py-10 lg:py-16 relative overflow-hidden w-full">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl gradient-border bg-card p-8 lg:p-12 card-elevated">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                The next step is <span className="text-gradient">simple</span>.
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Book the free leak audit. No obligation. No credit card.
              </p>

              <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="rounded-xl bg-muted/50 p-6 text-left">
                  <p className="mb-3 text-lg font-display font-bold text-primary">01</p>
                  <p className="mb-2 font-display font-bold text-foreground">We pull your numbers</p>
                  <p className="text-sm text-muted-foreground">Export your lapsed client list. You give access once.</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-6 text-left">
                  <p className="mb-3 text-lg font-display font-bold text-primary">02</p>
                  <p className="mb-2 font-display font-bold text-foreground">We size the exact gap</p>
                  <p className="text-sm text-muted-foreground">Real dollar figure. Your data, not our estimates.</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-6 text-left">
                  <p className="mb-3 text-lg font-display font-bold text-primary">03</p>
                  <p className="mb-2 font-display font-bold text-foreground">We show you the plan</p>
                  <p className="text-sm text-muted-foreground">30-day recovery plan. What it costs. What you net. You decide.</p>
                </div>
              </div>

              <Cta size="xl" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
                <span>Book Free Audit →</span>
                <ArrowRight className="hidden sm:inline h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
