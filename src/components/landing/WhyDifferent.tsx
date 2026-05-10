import { Clock, Target, Eye } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Not Another Ad Platform",
    description: "Other tools help you find leads. We help you find partners who send you clients month after month.",
  },
  {
    icon: Eye,
    title: "Local Collab Discovery",
    description: "No one else is doing this. We map complementary businesses in your area and handle the outreach.",
  },
  {
    icon: Clock,
    title: "500+ on the Waitlist",
    description: "Med spa owners are already lining up. Join the waitlist to get early access when we launch.",
  },
];

const WhyDifferent = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-muted/30">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
            Why IvyLink
          </span>
          <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why This Is <span className="text-gradient">Different</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground leading-relaxed">
            Stop trading time for growth. Start automating results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="text-center bg-card border border-border/50 rounded-2xl p-8 animate-fade-up shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
