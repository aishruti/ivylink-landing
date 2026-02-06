import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Mail, CalendarCheck, Users, Share2, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import spaInterior from "@/assets/spa-interior-1.jpg";
import spaLounge from "@/assets/spa-lounge-2.jpg";
import studioInterior from "@/assets/studio-interior-1.jpg";
import studioClass from "@/assets/studio-class-2.jpg";

const timelineSteps = [
  {
    icon: Target,
    title: "The Strategy",
    description: "AI selects the vertical play (Service Swap) based on your empty slots.",
  },
  {
    icon: Mail,
    title: "The Outreach",
    description: "Automated DM/Email sends an influential proposition to the partner.",
  },
  {
    icon: CalendarCheck,
    title: "The Slot-Fill",
    description: "Capture new bookings with a 70%+ show-up rate via automated reminders.",
  },
  {
    icon: Users,
    title: "The Dance",
    description: "You host the partner for a swap (we provide the 'What to Say' script).",
  },
  {
    icon: Share2,
    title: "The Amplify",
    description: "We auto-post the recorded collab to IG to capture long-term referral revenue.",
  },
];

const AIDiscoveryEngine = () => {
  return (
    <section id="ai-discovery" className="py-20 lg:py-28 relative overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            AI Discovery Engine
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How IvyLink Turns Neighbors into <span className="text-gradient">New Bookings</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI finds your perfect match in a 2-mile radius, then runs the "Service Swap" play to fill your slots—on total autopilot.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Magic Match Card */}
          <div className="relative">
            <div className="rounded-2xl bg-card border border-border/50 shadow-xl overflow-hidden">
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

              {/* Card Body */}
              <div className="p-6 space-y-6">
                {/* Why Them Badge */}
                <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-secondary-foreground">🎯 Mirror Audience</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Their followers match your "High-End Bridal" demographic.
                  </p>
                </div>

                {/* Shared Vibe Visualizer */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-3">Shared Vibe Check</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground text-center">Your Spa</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="aspect-square rounded-lg overflow-hidden">
                          <img src={spaInterior} alt="Luxury spa interior" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-lg overflow-hidden">
                          <img src={spaLounge} alt="Spa lounge area" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground text-center">Their Studio</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="aspect-square rounded-lg overflow-hidden">
                          <img src={studioInterior} alt="Pilates studio interior" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-lg overflow-hidden">
                          <img src={studioClass} alt="Pilates class in session" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-3 italic">
                    Aesthetic Check: Brands look great together in a co-branded Story.
                  </p>
                </div>

                {/* Wallet Overlap Meter */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-foreground">Wallet Overlap</h4>
                    <span className="text-xs font-semibold text-primary">ROI Potential: High</span>
                  </div>
                  <Progress value={85} className="h-2.5 bg-muted" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Clients who spend $150+ on Pilates are 4x more likely to book your $600+ Filler packages.
                  </p>
                </div>

                {/* Ready-to-Go Play */}
                <div className="p-4 rounded-xl gradient-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🎁</span>
                    <h4 className="text-sm font-bold text-foreground">Suggested Play: The Glow-Up Giveaway</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    They give your clients a free blowout; you give their VIPs a $50 credit.
                  </p>
                </div>

                {/* CTA Button */}
                <Button variant="hero" className="w-full group">
                  Review & Send Invite
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -z-10 -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary/10 blur-sm" />
          </div>

          {/* Right: Execution Timeline */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                The Execution Playbook
              </h3>
              <p className="text-muted-foreground">
                From match to booked appointment—completely hands-off.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />

              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex gap-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h4 className="text-lg font-display font-bold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" className="group">
            Book a call
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIDiscoveryEngine;
