import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";

import discoverImg from "@/assets/discovery_feed.png";
import suggestedPlayImg from "@/assets/propose_play.png";
import networkRequestsImg from "@/assets/accept_play.png";
import qrBundleImg from "@/assets/qr_code.png";
import partnerNetworkImg from "@/assets/revenue_dash.png";

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
    title: "Discover complementary businesses near you",
    description:
      "Sign up and instantly see every potential partner within a 5-mile radius: gyms, salons, med spas, studios, and more. IvyLink ranks them by how well their customer base matches yours.",
    img: discoverImg,
    alt: "IvyLink Discover Partners screen with AI match scores for nearby wellness businesses",
    accent: "from-primary to-pink-500",
    padding: true,
  },
  {
    number: "02",
    title: "Send a partnership play with one click",
    description:
      "IvyLink's AI generates the offer, the discount structure, and the messaging. Pick the play you like, edit if you want, and send it to a partner. No cold outreach, no awkward DMs.",
    img: suggestedPlayImg,
    alt: "IvyLink Suggested Play screen showing AI-generated mutual offers between two wellness businesses",
    accent: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "They accept, modify, or counter",
    description:
      "Your partner sees a clean proposal in their Network Requests inbox: who you are, what you're offering, and what they get in return. They can accept, tweak the offer, or send their own version back.",
    img: networkRequestsImg,
    alt: "IvyLink Network Requests screen showing an incoming partnership invite with accept and decline buttons",
    accent: "from-pink-500 to-orange-400",
  },
  {
    number: "04",
    title: "Partnership goes live with QR codes for both sides",
    description:
      "The moment both businesses agree, IvyLink generates two unique QR codes — one for your offer, one for theirs. Print them, share them, post them. Each scan ties straight back to the partnership it came from.",
    img: qrBundleImg,
    alt: "IvyLink active partnership with two QR codes, one for each business and their respective offers",
    accent: "from-orange-400 to-primary",
  },
  {
    number: "05",
    title: "Track every redemption, booking, and dollar",
    description:
      "Customers scan the QR code at the partner location to redeem their offer. You see scans, conversions, and revenue update in real time — for every active partnership, all in one dashboard.",
    img: partnerNetworkImg,
    alt: "IvyLink Partner Network dashboard showing scans, conversions, and revenue per partnership",
    accent: "from-purple-500 to-primary",
  },
];

const HowItWorksSteps = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From sign-up to first booking in <span className="text-gradient">5 steps</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No cold outreach. No spreadsheets. No marketing budget required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, idx) => {
            const imageOnLeft = idx % 2 === 1;
            return (
              <div
                key={step.number}
                className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center"
              >
                {/* Text content */}
                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <div className="inline-flex items-center gap-3 mb-5">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-white font-bold text-lg shadow-md`}
                    >
                      {step.number}
                    </span>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Step {idx + 1} of 5
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Screenshot — fixed height, object-contain shows full image without cropping */}
                <div className={imageOnLeft ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative">
                    {/* Gradient glow behind card */}
                    <div
                      className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${step.accent} blur-xl opacity-20`}
                    />
                    <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-white shadow-2xl">
                      {/* Natural dimensions — no fixed height, no cropping, no whitespace */}
                      <div className={step.padding ? "p-[5px]" : ""}>
                        <img
                          src={step.img}
                          alt={step.alt}
                          loading="lazy"
                          decoding="async"
                          className={`block w-full h-auto${step.padding ? " rounded-xl" : ""}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Cta size="xl" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group">
            <span>Get Started Free</span>
            <ArrowRight className="hidden sm:inline h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Cta>
          <p className="mt-3 text-sm text-muted-foreground">
            Free to sign up. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
