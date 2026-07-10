import { Check } from "lucide-react";

const audiences = [
  "You're paying for ads but most clients come once and disappear",
  "The gym, salon, or spa next door has clients who'd love your services, but no easy way to reach them",
  "You have lapsed clients, missed calls, or unanswered DMs sitting in your system",
  "Your calendar has empty slots while competitors seem fully booked",
  "You want more bookings from the customers you already have, without adding more manual work.",
];

const WhoItsFor = () => {
  return (
    <section className="py-10 lg:py-16 relative overflow-hidden w-full">
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
          <p className="mb-12 text-lg text-muted-foreground leading-relaxed">
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
                <p className="text-base text-foreground leading-relaxed">
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
