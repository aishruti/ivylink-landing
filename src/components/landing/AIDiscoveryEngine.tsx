import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Mail, CalendarCheck, Users, Share2, CheckCircle, Globe, CloudSun, DollarSign } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import WaitlistDialog from "./WaitlistDialog";
import { useWaitlist } from "@/hooks/use-waitlist";
import spaInterior from "@/assets/spa-interior-1.jpg";
import spaLounge from "@/assets/spa-lounge-2.jpg";
import studioInterior from "@/assets/studio-interior-1.jpg";
import studioClass from "@/assets/studio-class-2.jpg";

const aiBubbles = [
  { icon: CloudSun, label: "Seasonality", description: "Demand patterns by time of year" },
  { icon: Globe, label: "Geolocation", description: "2-mile radius partner mapping" },
  { icon: DollarSign, label: "Economic Data", description: "Spending & wallet overlap signals" },
];

const timelineSteps = [
  {
    icon: Target,
    number: "01",
    title: "The Strategy",
    description: "AI selects the vertical play (Service Swap) based on your empty slots.",
    visual: "🎯",
    highlight: "Smart Selection",
  },
  {
    icon: Mail,
    number: "02",
    title: "The Outreach",
    description: "Automated DM/Email sends an influential proposition to the partner.",
    visual: "✉️",
    highlight: "Zero Effort",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "The Slot-Fill",
    description: "Capture new bookings with a 70%+ show-up rate via automated reminders.",
    visual: "📅",
    highlight: "70%+ Show Rate",
  },
  {
    icon: Users,
    number: "04",
    title: "The Dance",
    description: "You host the partner for a swap (we provide the 'What to Say' script).",
    visual: "🤝",
    highlight: "Scripted",
  },
  {
    icon: Share2,
    number: "05",
    title: "The Amplify",
    description: "We auto-post the recorded collab to IG to capture long-term referral revenue.",
    visual: "📱",
    highlight: "Auto-Posted",
  },
];

const AIDiscoveryEngine = () => {
  const { isOpen, openWaitlist, closeWaitlist } = useWaitlist("ai_discovery");
  return (
    <section id="ai-discovery" className="py-16 lg:py-20 relative overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            AI Discovery Engine
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How IvyLink Turns Neighbors into <span className="text-gradient">New Bookings</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Our AI finds your perfect match in a 2 mile radius, then runs the "Service Swap" play to fill your slots on total autopilot.
          </p>

          {/* AI Engine Bubbles */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-4">
            {aiBubbles.map((bubble, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border/60 shadow-md opacity-0 animate-fade-up w-full sm:w-auto"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <bubble.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground leading-tight">{bubble.label}</p>
                  <p className="text-xs text-muted-foreground">{bubble.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Single Column Match Card */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white border border-border/50 shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="p-6 pb-4 border-b border-border/50">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-3.5 w-3.5" />
                  94% Match: High Affinity
                </span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">The Pilates House</h3>
                <p className="text-sm text-muted-foreground">0.8 miles away</p>
              </div>
            </div>

            {/* Section 1: Mirror Audience */}
            <div className="p-6 border-b border-border/30">
              <h4 className="text-base font-display font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full gradient-primary text-white text-xs font-bold">1</span>
                Mirror Audience
              </h4>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-secondary-foreground">🎯 Demographic Match</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Their followers match your "High-End Bridal" demographic.
                </p>
              </div>
            </div>

            {/* Section 2: Shared Vibe Check */}
            <div className="p-6 border-b border-border/30">
              <h4 className="text-base font-display font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full gradient-primary text-white text-xs font-bold">2</span>
                Shared Vibe Check
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground text-center">Your Spa</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm border border-border/40">
                      <img src={spaInterior} alt="Luxury spa interior" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm border border-border/40">
                      <img src={spaLounge} alt="Spa lounge area" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground text-center">Their Studio</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm border border-border/40">
                      <img src={studioInterior} alt="Pilates studio interior" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm border border-border/40">
                      <img src={studioClass} alt="Pilates class in session" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3 italic">
                Aesthetic Check: Brands look great together in a co-branded Story.
              </p>
            </div>

            {/* Section 3: Wallet Overlap */}
            <div className="p-6 border-b border-border/30">
              <h4 className="text-base font-display font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full gradient-primary text-white text-xs font-bold">3</span>
                Wallet Overlap
              </h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Overlap Score</span>
                <span className="text-xs font-semibold text-primary">ROI Potential: High</span>
              </div>
              <Progress value={85} className="h-2.5 bg-muted" />
              <p className="text-xs text-muted-foreground mt-2">
                Clients who spend $150+ on Pilates are 4x more likely to book your $600+ Filler packages.
              </p>
            </div>

            {/* Ready-to-Go Play + CTA */}
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-xl gradient-border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎁</span>
                  <h4 className="text-sm font-bold text-foreground">Suggested Play: The Glow-Up Giveaway</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  They give your clients a free blowout; you give their VIPs a $50 credit.
                </p>
              </div>

              <Button variant="hero" className="w-full group" onClick={openWaitlist}>
                <span>Test Drive the Results — Join the Waitlist</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* How It Works Timeline */}
        <div className="mx-auto max-w-2xl mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              How It Works
            </h3>
            <p className="text-muted-foreground">
              From match to booked appointment, completely hands-off.
            </p>
          </div>

          <div className="relative space-y-4">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {index < timelineSteps.length - 1 && (
                  <div className="absolute left-8 top-full h-4 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20 z-0" />
                )}

                <div className="relative flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="h-16 w-16 rounded-2xl gradient-primary flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <span className="text-2xl mb-0.5">{step.visual}</span>
                      <span className="text-[10px] font-bold text-white/80">{step.number}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base font-display font-bold text-foreground">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                        {step.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result indicator */}
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-bold text-foreground">Result</span>
            </div>
            <p className="text-sm text-muted-foreground">
              5 guaranteed bookings in your first 21 days.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" className="group max-w-full" onClick={openWaitlist}>
            <span>We're Talking to 10 Power Users, Want In?</span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Button>
          <WaitlistDialog open={isOpen} onOpenChange={(open) => !open && closeWaitlist()} />
        </div>
      </div>
    </section>
  );
};

export default AIDiscoveryEngine;
