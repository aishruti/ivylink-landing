import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap, Share2, BarChart3, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Smart Partner Discovery",
    description: "Automatically surfaces the most promising local businesses for collaboration.",
  },
  {
    icon: Zap,
    title: "Proven Collab Plays",
    description: "Executes time-tested campaigns that reliably fill your open slots.",
  },
  {
    icon: Share2,
    title: "Done-For-You Posting",
    description: "Keeps your feed active with optimized content and partner tags at the best times.",
  },
  {
    icon: BarChart3,
    title: "Revenue Scoreboard",
    description: "Tracks results so you know which collaborations bring in real dollars.",
  },
  {
    icon: RefreshCw,
    title: "Partner Rotation",
    description: "Refreshes winning partnerships to keep every month fully booked.",
  },
];

const OutcomePillars = () => {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Fill Your Calendar
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Five powerful features working together to turn local partnerships into consistent bookings.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card p-6 card-elevated opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" className="group">
            Book a call
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OutcomePillars;