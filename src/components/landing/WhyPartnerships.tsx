import { ArrowRight, Megaphone, Users, Clock, X, Check } from "lucide-react";
import { Cta } from "@/components/ui/cta";

/*
 * Comparison section - "Smarter than ads. Stronger than referrals."
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
    vs: "You operate it",
    badLabel: "Software Tools",
    badStat: "Yes",
    badText:
      "You set up campaigns, approve messages, manage workflows, and track results. Takes time and expertise.",
    goodStat: "Never",
    goodText:
      "We handle everything automatically. You just review weekly results.",
  },
  {
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    vs: "Results in 30 days",
    badLabel: "Agencies",
    badStat: "Unlikely",
    badText:
      "Agencies require onboarding, strategy work, and time to launch campaigns.",
    goodStat: "Yes ✓",
    goodText:
      "We launch within days. Most clients see first bookings in 7–10 days.",
  },
  {
    icon: Clock,
    gradient: "from-primary to-pink-500",
    vs: "Performance-based pricing",
    badLabel: "Traditional Tools",
    badStat: "No",
    badText:
      "You pay monthly fees whether campaigns work or not.",
    goodStat: "Yes ✓",
    goodText:
      "First 30 days are performance-only. We take 20–25% of revenue we recover. No results, you owe nothing.",
  },
];

const WhyPartnerships = () => {
  return (
    <section id="why" className="py-10 lg:py-16 relative overflow-hidden w-full">
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
            Other options <span className="text-gradient">vs IvyLink.</span>
          </h2>
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
                  className={`h-18 w-18 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 shadow-md`}
                >
                  <c.icon className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{c.vs}</h3>
              </div>

              {/* Two-column compare */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                {/* Old way */}
                <div className="p-6 bg-red-50/40">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-18 w-18 items-center justify-center rounded-full bg-red-100 border border-red-200 shrink-0">
                      <X className="h-9 w-9 text-red-500" strokeWidth={2.5} />
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
                    <span className="flex h-18 w-18 items-center justify-center rounded-full bg-primary/15 border border-primary/30 shrink-0">
                      <Check className="h-9 w-9 text-primary" strokeWidth={2.5} />
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
            <div className="rounded-2xl bg-card px-8 py-6">
              <p className="text-lg font-display font-bold text-foreground mb-1 text-center">
                We recover revenue you've already earned — without you touching any software. Results in 30 days or you pay nothing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerships;
