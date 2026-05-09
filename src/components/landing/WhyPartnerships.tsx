import { ArrowRight, Megaphone, Users, Clock } from "lucide-react";
import { Cta } from "@/components/ui/cta";

/*
 * Comparison section. Replaces the previous generic features list. Buyers
 * don't compare features; they compare IvyLink to the alternatives they're
 * already using or considering. Position against the three real substitutes:
 * paid local advertising, referral management systems, and manual outreach.
 */

type Comparison = {
  icon: typeof Megaphone;
  vs: string;
  badColor: string;
  badPoint: { label: string; text: string };
  goodPoint: { label: string; text: string };
};

const comparisons: Comparison[] = [
  {
    icon: Megaphone,
    vs: "vs. Local Advertising",
    badColor: "from-orange-400 to-pink-500",
    badPoint: {
      label: "Yelp, Nextdoor, Meta Ads",
      text: "Salon advertising and medspa advertising compete for the same expensive keywords. Most local business advertising charges per click whether anyone books or not, and the people you reach are strangers who may never come back.",
    },
    goodPoint: {
      label: "IvyLink",
      text: "Connects you with neighbors who already have your future customers walking through their doors. Pay only when a real booking happens.",
    },
  },
  {
    icon: Users,
    vs: "vs. Referral Programs",
    badColor: "from-purple-500 to-pink-500",
    badPoint: {
      label: "Referral management systems",
      text: "A typical referral management system relies on customers remembering to share a link. Most never do, and the ones who do bring one friend, one time.",
    },
    goodPoint: {
      label: "IvyLink",
      text: "Builds partnerships with other local businesses, so their entire customer base actively gets pointed toward yours, week after week.",
    },
  },
  {
    icon: Clock,
    vs: "vs. Doing It Yourself",
    badColor: "from-primary to-pink-500",
    badPoint: {
      label: "Manual outreach",
      text: "Takes 10+ hours a week to find partners, draft offers, message owners, and track redemptions. Most owners give up by week two.",
    },
    goodPoint: {
      label: "IvyLink",
      text: "Finds the partners, drafts the offer, generates the QR codes, and tracks every booking automatically. Set it up once, watch it run.",
    },
  },
];

const WhyPartnerships = () => {
  return (
    <section id="features" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            Why It Works
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Smarter than ads. Stronger than <span className="text-gradient">referrals</span>.
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">
            Every other channel has tradeoffs. Partnerships have leverage.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card border border-border/50 shadow-lg overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 px-6 py-4 border-b border-border/40 bg-muted/40">
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-r ${c.badColor} flex items-center justify-center shrink-0`}>
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">{c.vs}</h3>
              </div>

              {/* Two-column compare */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {c.badPoint.label}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">{c.badPoint.text}</p>
                </div>
                <div className="p-6 bg-primary/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {c.goodPoint.label}
                  </p>
                  <p className="text-base text-foreground leading-relaxed font-medium">{c.goodPoint.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Cta size="lg" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group">
            Get Started Free
            <ArrowRight className="hidden sm:inline h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Cta>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerships;
