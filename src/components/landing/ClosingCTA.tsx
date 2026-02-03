import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, TrendingUp } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your First Week with LocalCollab
          </h2>
          
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-card p-4 card-elevated">
              <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-semibold text-foreground">10 Local Partners</p>
              <p className="text-sm text-muted-foreground">Connected automatically</p>
            </div>
            <div className="rounded-xl bg-card p-4 card-elevated">
              <Calendar className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-semibold text-foreground">First Service Swap</p>
              <p className="text-sm text-muted-foreground">Live within 7 days</p>
            </div>
            <div className="rounded-xl bg-card p-4 card-elevated">
              <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-semibold text-foreground">Real-Time Results</p>
              <p className="text-sm text-muted-foreground">Track every booking</p>
            </div>
          </div>

          <p className="mb-8 text-lg text-muted-foreground">
            In your first week, expect to connect with 10 new local partners and see real-time results from your first Service Swap play. Within 21 days, the system helps you fill your empty slots and set up a repeatable collaboration engine that grows itself.
          </p>

          <Button variant="hero" size="xl" className="group">
            Book a call
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;