import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";

/*
 * Interactive revenue calculator. Three sliders let users estimate
 * their recoverable revenue based on lapsed clients, LTV, and win-back rate.
 *
 * Formula: recoverable = lapsed × (winbackRate / 100) × ltv
 */

const RevenueCalculator = () => {
  const [lapsed, setLapsed] = useState(300);
  const [ltv, setLtv] = useState(480);
  const [winbackRate, setWinbackRate] = useState(11);

  const recoverable = lapsed * (winbackRate / 100) * ltv;
  const fee = recoverable * 0.2;
  const net = recoverable * 0.8;

  return (
    <section className="py-10 lg:py-16 relative overflow-hidden w-full">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="section-container relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Run your <span className="text-gradient">free revenue audit</span> — takes 30 seconds.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Drag the sliders to your real numbers. See exactly what IvyLink would recover.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-muted/50 border border-border/50 p-8 lg:p-10 shadow-lg">
            {/* Slider 1: Lapsed Clients */}
            <div className="space-y-4 mb-8 pb-8 border-b border-border/30">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  Lapsed clients in your database
                </label>
                <span className="text-base font-display font-bold text-primary">
                  {lapsed} clients
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="10"
                value={lapsed}
                onChange={(e) => setLapsed(Number(e.target.value))}
                aria-label="Number of lapsed clients in database"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: "hsl(var(--primary))",
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>50</span>
                <span>800</span>
              </div>
            </div>

            {/* Slider 2: Average LTV */}
            <div className="space-y-4 mb-8 pb-8 border-b border-border/30">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  Average client annual value
                </label>
                <span className="text-base font-display font-bold text-primary">
                  ${ltv}/year
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="1200"
                step="50"
                value={ltv}
                onChange={(e) => setLtv(Number(e.target.value))}
                aria-label="Average client annual value in dollars"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: "hsl(var(--primary))",
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$200</span>
                <span>$1,200</span>
              </div>
            </div>

            {/* Slider 3: Win-back Rate */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  Win-back rate (conservative estimate)
                </label>
                <span className="text-base font-display font-bold text-primary">
                  {winbackRate}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={winbackRate}
                onChange={(e) => setWinbackRate(Number(e.target.value))}
                aria-label="Win-back rate as percentage"
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: "hsl(var(--primary))",
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5%</span>
                <span>25%</span>
              </div>
            </div>

            {/* Results display */}
            <div className="rounded-xl bg-card p-6 border border-border/50 mb-6">
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground font-medium">Recoverable revenue:</span>
                  <span className="text-3xl sm:text-4xl font-display font-bold text-primary">
                    ${recoverable.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex items-baseline justify-between pt-3 border-t border-border/30">
                  <span className="text-sm text-muted-foreground">IvyLink fee (20%):</span>
                  <span className="text-base font-display font-bold text-muted-foreground">
                    ${fee.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-foreground font-medium">You keep (80%):</span>
                  <span className="text-base font-display font-bold text-foreground">
                    ${net.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer explanation */}
            <p className="text-sm text-muted-foreground italic text-center mb-6">
              IvyLink closes this gap on performance — you pay 20% of what we recover, nothing if we don't.
            </p>

            {/* CTA */}
            <Cta size="lg" href="https://app.ivylink.ai" target="_blank" rel="noopener noreferrer" className="group w-full justify-center">
              <span>Get my 30-day recovery plan →</span>
              <ArrowRight className="hidden sm:inline h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
