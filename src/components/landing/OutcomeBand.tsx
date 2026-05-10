import { CheckCircle, TrendingUp, Calendar } from "lucide-react";

/*
 * Outcome Band — "See the Result"
 *
 * No screenshot. Visual makes the guarantee tangible:
 *  • Two bold stat cards (5 bookings / 21 days) — no fabricated revenue figures
 *  • A 21-square day calendar with 5 highlighted booking days
 *  • A booking log showing each confirmed appointment (no dollar values)
 *  • A styled guarantee callout
 */

const TOTAL_DAYS = 21;
const BOOKED_DAYS = [4, 8, 12, 17, 21] as const;
const BOOKING_LABELS = [
  { day: 4,  label: "Lumina Med Spa client redeemed offer" },
  { day: 8,  label: "Sculpt Fitness Studio referral booked" },
  { day: 12, label: "The Glow Bar partnership conversion" },
  { day: 17, label: "Willen Wellness cross-promotion booking" },
  { day: 21, label: "NYC Thai Wellness collab appointment" },
];

const OutcomeBand = () => {
  const days = Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1);

  return (
    <section id="outcome" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="section-container relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            See the Results
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            5 guaranteed bookings in your first{" "}
            <span className="text-gradient">21 days</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most local advertising leaves you guessing. IvyLink doesn't. Every
            partnership generates unique QR codes. When a customer redeems an
            offer you see the booking, the partner who referred them, and the
            revenue in real time.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Top stat cards — 2 cards, no revenue */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-md p-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
              <div className="relative">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <p className="text-4xl font-display font-bold text-foreground mb-1">5</p>
                <p className="text-sm font-semibold text-muted-foreground">Guaranteed Bookings</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-md p-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <div className="relative">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <p className="text-4xl font-display font-bold text-foreground mb-1">21</p>
                <p className="text-sm font-semibold text-muted-foreground">Days to First Results</p>
              </div>
            </div>
          </div>

          {/* 21-day visual + booking log */}
          <div className="rounded-2xl bg-card border border-border/50 shadow-xl overflow-hidden">
            {/* Calendar header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/40">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-bold text-foreground">Your first 21 days with IvyLink</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-muted inline-block" />
                    Active day
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm gradient-primary inline-block" />
                    Booking received
                  </span>
                </div>
                <div className="flex flex-col items-end border-l border-border/50 pl-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider leading-none mb-0.5">Total revenue</span>
                  <span className="text-2xl font-display font-bold text-gradient leading-none">$2,200</span>
                </div>
              </div>
            </div>

            <div className="p-6 grid lg:grid-cols-2 gap-8">
              {/* Calendar grid */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Day-by-day view
                </p>
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day) => {
                    const isBooked = (BOOKED_DAYS as readonly number[]).includes(day);
                    const bookingIndex = BOOKED_DAYS.indexOf(day as typeof BOOKED_DAYS[number]);
                    return (
                      <div
                        key={day}
                        className={`
                          aspect-square rounded-xl flex flex-col items-center justify-center text-xs font-semibold transition-all
                          ${isBooked
                            ? "gradient-primary text-white shadow-lg scale-105"
                            : "bg-muted/60 text-muted-foreground"
                          }
                        `}
                      >
                        {isBooked && (
                          <span className="text-[10px] font-bold text-white/80 leading-none mb-0.5">
                            #{bookingIndex + 1}
                          </span>
                        )}
                        <span className={isBooked ? "text-white font-bold" : ""}>{day}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Summary */}
                <div className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-primary/8 border border-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm font-medium text-foreground">
                    5 bookings confirmed across{" "}
                    <span className="text-primary font-bold">3 partner businesses</span>
                  </p>
                </div>
              </div>

              {/* Booking log — no dollar values */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Booking log
                </p>
                <div className="space-y-2.5">
                  {BOOKING_LABELS.map((b, i) => (
                    <div
                      key={b.day}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/40"
                    >
                      <div className="h-8 w-8 rounded-lg gradient-primary text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-primary mb-0.5">Day {b.day}</p>
                        <p className="text-xs text-muted-foreground leading-snug">{b.label}</p>
                      </div>
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee callout */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-primary/8 border border-primary/25 shadow-sm">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm font-semibold text-foreground">
                Wellness businesses that activate their first IvyLink partnership{" "}
                <span className="text-primary">typically see bookings within their first 21 days.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeBand;
