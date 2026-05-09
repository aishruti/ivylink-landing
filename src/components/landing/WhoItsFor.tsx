import { Check } from "lucide-react";

const audiences = [
  "You're paying for ads but most clients come once and disappear",
  "The gym, salon, or spa next door has clients who'd love your services, but no easy way to reach them",
  "You've tried networking but it feels awkward and rarely converts",
  "Your calendar has empty slots while competitors seem fully booked",
  "You want partnerships that bring in real bookings, not just Instagram likes",
];

const WhoItsFor = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            Perfect For
          </span>
          <h2 className="mb-6 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Is This <span className="text-gradient">You?</span>
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            IvyLink is a small business marketing platform built for owners of med spas, salons, gyms, studios, and other local wellness businesses who want results without endless hustle.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-4">
            {audiences.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 card-elevated animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-primary">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
