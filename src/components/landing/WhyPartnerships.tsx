import { ArrowRight, Megaphone, Users, Clock, X, Check } from "lucide-react";
import { Cta } from "@/components/ui/cta";

/*
 * Comparison section — "Smarter than ads. Stronger than referrals."
 *
 * Visual redesign: each card now has a clear visual split with red-tinted
 * "old way" vs brand-tinted "IvyLink way", plus ✗/✓ markers and concrete
 * numbers to make the difference impossible to ignore.
 */

type Comparison = {
  icon: typeof Megaphone;
  gradient: string;
  vs: string;
  badLabel: string;
  badStat: string;
  badText: string;
  goodStat: string;
  goodText: string;
};

const comparisons: Comparison[] = [
  {
    icon: Megaphone,
    gradient: "from-orange-400 to-pink-500",
    vs: "vs. Local Advertising",
    badLabel: "Yelp / Meta Ads / Nextdoor",
    badStat: "$2–15 per click",
    badText:
      "Charges per click whether anyone books or not. You're paying to reach strangers who may never return.",
    goodStat: "$0 upfront cost",
    goodText:
      "Connects you with neighbors whose clients already match your ideal customer. Pay only when a real booking happens.",
  },
  {
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    vs: "vs. Referral Programs",
    badLabel: "Referral management apps",
    badStat: "<2% share rate",
    badText:
      "Relies on your customers remembering to share a link. Most never do — and the ones who do bring one friend, one time.",
    goodStat: "Entire client bases shared",
    goodText:
      "Builds partnerships with local businesses so their whole customer base actively gets pointed toward yours, week after week.",
  },
  {
    icon: Clock,
    gradient: "from-primary to-pink-500",
    vs: "vs. Doing It Yourself",
    badLabel: "Manual outreach",
    badStat: "10+ hrs/week",
    badText:
      "Finding partners, drafting offers, messaging owners, and tracking redemptions eats your schedule. Most owners quit by week two.",
    goodStat: "Set up once, runs forever",
    goodText:
      "Finds the partners, drafts the offer, generates QR codes, and tracks every booking automatically — completely hands-off.",
  },
];

const WhyPartnerships = () => {
  return (
    <section id="why" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="section-container relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            Why It Works
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Smarter than ads.{" "}
            <span className="text-gradient">Stronger than referrals.</span>
          </h2>
          <p className="mb-14 text-lg text-muted-foreground leading-relaxed">
            Every other channel has tradeoffs. Partnerships have leverage.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="mx-auto max-w-5xl space-y-6">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card border border-border/50 shadow-lg overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card header */}
              <div className="flex items-center gap-4 px-6 py-4 border-b border-border/40 bg-muted/40">
                <div
                  className={`h-11 w-11 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 shadow-md`}
                >
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{c.vs}</h3>
              </div>

              {/* Two-column compare */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                {/* Old way */}
                <div className="p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 border border-red-200 shrink-0">
                      <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-500/80">
                      {c.badLabel}
                    </p>
                  </div>
                  <p className="text-2xl font-display font-bold text-red-500/80 mb-2">{c.badStat}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.badText}</p>
                </div>

                {/* IvyLink way */}
                <div className="p-6 bg-primary/4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 border border-primary/30 shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      IvyLink
                    </p>
                  </div>
                  <p className="text-2xl font-display font-bold text-primary mb-2">{c.goodStat}</p>
                  <p className="text-sm text-foreground leading-relaxed font-medium">{c.goodText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom impact strip */}
        <div className="mx-auto max-w-5xl mt-8">
          <div className="rounded-2xl gradient-primary p-px shadow-lg">
            <div className="rounded-2xl bg-card px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-lg font-display font-bold text-foreground mb-1">
                  Ready to ditch the guesswork?
                </p>
                <p className="text-sm text-muted-foreground">
                  500+ wellness business owners are already on the waitlist.
                </p>
              </div>
              <Cta size="lg" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group shrink-0">
                Get Started Free
                <ArrowRight className="hidden sm:inline h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerships;
