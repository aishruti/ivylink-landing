import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Search, Rocket, BarChart, Repeat, CheckCircle } from "lucide-react";
import { PopupModal } from "react-calendly";
import { useCalendly, CALENDLY_URL } from "@/hooks/use-calendly";

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
  const { isOpen, openCalendly, closeCalendly } = useCalendly("how_it_works");
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

        {/* Horizontal Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 timeline-connector rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-fade-up flex flex-col items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-6">
                  <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-base shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className="rounded-2xl bg-card p-5 card-elevated text-center h-full flex flex-col">
                  <div className="flex justify-center mb-3">
                    <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {step.features.map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" className="group" onClick={openCalendly}>
            Book a call
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <PopupModal
            url={CALENDLY_URL}
            onModalClose={closeCalendly}
            open={isOpen}
            rootElement={document.getElementById("root") as HTMLElement}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
