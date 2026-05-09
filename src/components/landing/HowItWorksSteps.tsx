import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";

import discoverWebp from "@/assets/screenshot-discover.webp";
import discoverPng from "@/assets/screenshot-discover.png";
import suggestedPlayWebp from "@/assets/screenshot-suggested-play.webp";
import suggestedPlayPng from "@/assets/screenshot-suggested-play.png";
import networkRequestsWebp from "@/assets/screenshot-network-requests.webp";
import networkRequestsPng from "@/assets/screenshot-network-requests.png";
import qrBundleWebp from "@/assets/screenshot-qr-bundle.webp";
import qrBundlePng from "@/assets/screenshot-qr-bundle.png";
import partnerNetworkWebp from "@/assets/screenshot-partner-network.webp";
import partnerNetworkPng from "@/assets/screenshot-partner-network.png";

/*
 * How It Works. 5 concrete steps with real product screenshots.
 *
 * Each step is shown with the actual screen the user will see. Real screenshots
 * are a basic trust signal; placeholder UI tells visitors "this product might
 * not be real."
 *
 * Order:
 *   1. Discover. AI-matched partners near you.
 *   2. Suggested Play. AI generates the joint promotion.
 *   3. Network Requests. Partner accepts, modifies, or counters.
 *   4. QR Bundle. Active partnership with QR codes for both sides.
 *   5. Partner Network. Track redemptions and revenue per partner.
 */

type Step = {
  number: string;
  title: string;
  description: string;
  imgWebp: string;
  imgPng: string;
  alt: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discover complementary businesses near you",
    description: "Sign up and instantly see every potential partner within a 5-mile radius: gyms, salons, med spas, studios, and more. IvyLink ranks them by how well their customer base matches yours.",
    imgWebp: discoverWebp,
    imgPng: discoverPng,
    alt: "IvyLink Discover Partners screen with AI match scores for nearby wellness businesses",
  },
  {
    number: "02",
    title: "Send a partnership play with one click",
    description: "IvyLink's AI generates the offer, the discount structure, and the messaging. Pick the play you like, edit if you want, and send it to a partner. No cold outreach, no awkward DMs.",
    imgWebp: suggestedPlayWebp,
    imgPng: suggestedPlayPng,
    alt: "IvyLink Suggested Play screen showing AI-generated mutual offers between two wellness businesses",
  },
  {
    number: "03",
    title: "They accept, modify, or counter",
    description: "Your partner sees a clean proposal in their Network Requests inbox: who you are, what you're offering, and what they get in return. They can accept it, tweak the offer, or send their own version back. You both stay in control.",
    imgWebp: networkRequestsWebp,
    imgPng: networkRequestsPng,
    alt: "IvyLink Network Requests screen showing an incoming partnership invite with both sides' offers and accept and decline buttons",
  },
  {
    number: "04",
    title: "Partnership goes live with QR codes for both sides",
    description: "The moment both businesses agree, IvyLink generates two unique QR codes: one for your offer, one for theirs. Print them, share them, post them. Each scan ties straight back to the partnership it came from.",
    imgWebp: qrBundleWebp,
    imgPng: qrBundlePng,
    alt: "IvyLink active partnership with two QR codes, one for each business and their respective offers",
  },
  {
    number: "05",
    title: "Track every redemption, booking, and dollar",
    description: "Customers scan the QR code at the partner location to redeem their offer. You see scans, conversions, and revenue update in real time, for every active partnership, all in one dashboard.",
    imgWebp: partnerNetworkWebp,
    imgPng: partnerNetworkPng,
    alt: "IvyLink Partner Network dashboard showing scans, conversions, and revenue per partnership",
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
          <p className="text-lg text-muted-foreground">
            No cold outreach. No spreadsheets. No marketing budget required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, idx) => {
            const imageOnLeft = idx % 2 === 1; // alternate sides for rhythm
            return (
              <div
                key={step.number}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
              >
                {/* Text content */}
                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-white font-bold">
                      {step.number}
                    </span>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Step {idx + 1}
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl sm:text-3xl font-display font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Screenshot */}
                <div className={imageOnLeft ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative">
                    <div className="absolute -inset-1 gradient-primary rounded-2xl blur-md opacity-15" />
                    <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-white shadow-xl">
                      <picture>
                        <source srcSet={step.imgWebp} type="image/webp" />
                        <img
                          src={step.imgPng}
                          alt={step.alt}
                          width="1200"
                          height="800"
                          loading="lazy"
                          decoding="async"
                          className="block w-full h-auto"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
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
