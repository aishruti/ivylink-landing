import { Check } from "lucide-react";

const criteria = [
  "Single-location med spa owners",
  "Already spending on social or lead tools but seeing slow growth",
  "Tired of posting for likes that don't convert",
  "Want consistent bookings without more manual outreach",
  "Ready to collaborate locally with automated campaigns",
];

const WhoItsFor = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Is This For You?
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            This platform is built specifically for med spa owners who are ready to grow smarter, not harder.
          </p>

          <div className="rounded-2xl bg-card p-8 card-elevated">
            <ul className="space-y-4">
              {criteria.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;