import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Search, Rocket, BarChart, Repeat, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Connect Your Tools",
    description: "Link your Instagram Business and booking system in under 5 minutes. No technical skills needed.",
    features: ["Instagram Integration", "Calendar Sync", "One-click setup"],
  },
  {
    number: "02",
    icon: Search,
    title: "AI Finds Your Open Slots",
    description: "Our AI scans your calendar to identify exactly when you have appointment openings.",
    features: ["Smart slot detection", "Pattern analysis", "Priority scheduling"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Auto-Launch Collabs",
    description: "Instantly match with 10+ ideal local partners and deploy your first automated 'Service Swap.'",
    features: ["Partner matching", "Automated outreach", "Campaign launch"],
  },
  {
    number: "04",
    icon: BarChart,
    title: "Track Real Results",
    description: "Watch bookings roll in while monitoring which partners and campaigns drive the highest ROI.",
    features: ["Live analytics", "Revenue tracking", "Performance insights"],
  },
  {
    number: "05",
    icon: Repeat,
    title: "Scale on Autopilot",
    description: "The system repeats and optimizes your top-performing collaborations automatically each month.",
    features: ["Auto-optimization", "Partner rotation", "Continuous growth"],
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Setup to <span className="text-gradient">Filled Calendar</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Five simple steps to transform your local partnerships into consistent bookings—all automated.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 timeline-connector rounded-full" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`flex items-start gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number circle */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="h-8 w-8 md:h-12 md:w-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="rounded-2xl bg-card p-6 lg:p-8 card-elevated">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {step.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                            <CheckCircle className="h-3 w-3" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button variant="hero" size="lg" className="group">
            Book a call
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
