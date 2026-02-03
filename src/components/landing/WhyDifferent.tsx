import { Bot, Target, Eye } from "lucide-react";

const differentiators = [
  {
    icon: Bot,
    title: "Autopilot Networking",
    description: "No more manual networking or pitch DMs—everything runs on autopilot.",
  },
  {
    icon: Target,
    title: "Proven Playbooks",
    description: "Built on tested \"partner plays\" proven to fill spa calendars, not just generate likes.",
  },
  {
    icon: Eye,
    title: "Full Revenue Visibility",
    description: "Track which collab delivers direct revenue and repeat the winners.",
  },
];

const WhyDifferent = () => {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Why This Is Different
          </h2>
          <p className="mb-12 text-lg text-background/70">
            Stop chasing vanity metrics. Start filling your calendar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-background">
                {item.title}
              </h3>
              <p className="text-background/70">
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