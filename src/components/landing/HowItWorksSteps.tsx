import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";

import suggestedPlayImg from "@/assets/step2.png";
import partnerNetworkImg from "@/assets/Step3.png";

/*
 * How It Works. 5 concrete steps with real product screenshots.
 *
 * All screenshot containers use a fixed height with object-contain so images
 * display fully without any cropping, at a uniform size across all steps.
 */

type Step = {
  number: string;
  title: string;
  description: string;
  img: string;
  alt: string;
  accent: string;
  padding?: boolean;
};

const steps: Step[] = [
  {
    number: "01",
    title: "We pull your numbers",
    description:
      "We export your lapsed client list from your booking platform. You give us access once. We do everything else.",
    img: "/step1.png",
    alt: "IvyLink Discover Partners screen with AI match scores for nearby wellness businesses",
    accent: "from-primary to-pink-500",
  },
  {
    number: "02",
    title: "We size the gap",
    description:
      "We put a real dollar figure on what's sitting in your database — your actual numbers, not generic estimates.",
    img: suggestedPlayImg,
    alt: "IvyLink Suggested Play screen showing AI-generated mutual offers between two wellness businesses",
    accent: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "We run the recovery",
    description:
      "AI-powered outreach to every lapsed client. Every inbound DM and missed call answered instantly. Bookings appear in your calendar automatically.",
    img: partnerNetworkImg,
    alt: "IvyLink Partner Network dashboard showing scans, conversions, and revenue per partnership",
    accent: "from-purple-500 to-primary",
  },
];

const HowItWorksSteps = () => {
  return (
    <section id="how-it-works" className="py-10 lg:py-16 relative overflow-hidden bg-muted/30 w-full">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From lapsed client list to booked appointments in <span className="text-gradient">30 days</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We pull your data, size the gap, and run the recovery. You just see results appear.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, idx) => {
            const imageOnLeft = idx % 2 === 1;
            return (
              <div
                key={step.number}
                className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center h-full"
              >
                {/* Text content */}
                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <div className="inline-flex items-center gap-3 mb-5">
                    <span
                      className={`inline-flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-white font-bold text-3xl shadow-md`}
                    >
                      {step.number}
                    </span>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Step {idx + 1} of 3
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Screenshot - responsive sizing */}
                <div className={`${imageOnLeft ? "lg:order-1" : "lg:order-2"} max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-none h-full flex items-center`}>
                  <div className="relative">
                    {/* Gradient glow behind card */}
                    <div
                      className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${step.accent} blur-xl opacity-20`}
                    />
                    <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-white shadow-2xl">
                      {/* Natural dimensions - no fixed height, no cropping, no whitespace */}
                      <div className={step.padding ? "p-[5px]" : ""}>
                        <img
                          src={step.img}
                          alt={step.alt}
                          loading="lazy"
                          decoding="async"
                          className={`block w-full h-auto max-h-96 object-contain${step.padding ? " rounded-xl" : ""}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Below steps note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            You never log in. You never approve a message. You just see results.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Cta size="xl" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group">
            <span>Book Free Audit →</span>
            <ArrowRight className="hidden sm:inline h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Cta>
          <p className="mt-3 text-sm text-muted-foreground">
            Free to audit. No credit card. Results in 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
