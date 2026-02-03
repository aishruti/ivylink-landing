import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect & Analyze",
    description: "In 7 minutes, connect your IG and calendar; AI identifies your empty slots.",
  },
  {
    number: "02",
    title: "Launch Your First Play",
    description: "We run your first \"Service Swap\" with 10 nearby businesses automatically.",
  },
  {
    number: "03",
    title: "Track & Grow",
    description: "See bookings rise and scale best collabs for ongoing results.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Three simple steps to transform local partnerships into bookings.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border lg:left-1/2 lg:-ml-px lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative lg:flex lg:items-center lg:gap-8 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step number */}
                  <div className={`flex items-center lg:w-1/2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                        {step.number}
                      </div>
                      <div className="lg:hidden">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content for desktop */}
                  <div className={`hidden lg:block lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:text-right lg:order-1'}`}>
                    <div className="rounded-2xl bg-card p-6 card-elevated">
                      <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:h-32" />
                </div>
              ))}
            </div>
          </div>
        </div>

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

export default HowItWorks;