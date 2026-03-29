import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap, Share2, BarChart3, RefreshCw, Settings } from "lucide-react";
const pillars = [
  {
    icon: MapPin,
    title: "Smart Partner Discovery",
    description: "Finds and prioritizes nearby businesses most likely to send you bookings automatically.",
    gradient: "from-primary to-pink-500",
  },
  {
    icon: Zap,
    title: "Proven Collab Plays",
    description: "Launches ready-to-go campaigns that attract local clients without manual messaging.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Share2,
    title: "Done-For-You Posting",
    description: "Handles every post and DM for you. No late-night scheduling needed.",
    gradient: "from-primary to-orange-400",
  },
  {
    icon: BarChart3,
    title: "Revenue Scoreboard",
    description: "Shows exactly which plays and partners produce new bookings.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: RefreshCw,
    title: "Partner Rotation",
    description: "Keeps your campaigns fresh with automated monthly updates.",
    gradient: "from-purple-500 to-primary",
  },
  {
    icon: Settings,
    title: "Hands-Off Execution",
    description: "We handle all the maintenance. Campaign updates, partner outreach, and optimization run automatically.",
    gradient: "from-orange-400 to-pink-500",
  },
];

const OutcomePillars = () => {
  
  return (
    <section id="features" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to <span className="text-gradient">Fill Your Calendar</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Six powerful features working together to turn local partnerships into consistent bookings.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card p-8 card-elevated opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative rounded-2xl bg-card p-0">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${pillar.gradient}`}>
                  <pillar.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" className="group" onClick={openWaitlist}>
            Add 5 Guaranteed Bookings, Let's Talk
            <ArrowRight className="hidden sm:inline h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <WaitlistDialog open={isOpen} onOpenChange={(open) => !open && closeWaitlist()} />
        </div>
      </div>
    </section>
  );
};

export default OutcomePillars;
