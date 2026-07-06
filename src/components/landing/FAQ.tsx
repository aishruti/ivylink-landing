import { ChevronDown } from "lucide-react";

/*
 * PERF: Native <details>/<summary>. Zero JS, zero hydration cost.
 *
 * FAQ rewritten to:
 * - drop med-spa-only language
 * - target long-tail SEO terms (referral programs, ad spend, partnerships)
 * - handle real objections (cost, results timeline, what kinds of businesses)
 */

const faqs = [
  {
    question: "Who is IvyLink for?",
    answer: "Owners of local wellness businesses, including med spas, salons, gyms, yoga studios, pilates studios, nail bars, wellness centers, massage practices, and aesthetic clinics. If your business has a local clientele and complementary partners nearby, IvyLink works for you.",
  },
  {
    question: "How is this different from a referral program?",
    answer: "Referral programs depend on customer-side effort. IvyLink focuses on revenue recovery and recurring bookings by turning missed leads, lapsed clients, and local partnerships into a more predictable growth engine.",
  },
  {
    question: "Do I need to spend money on ads?",
    answer: "No - IvyLink is built to generate bookings without relying on paid ads.",
  },
  {
    question: "How much does it cost?",
    answer: "Cost depends on your business, and we'll show you the numbers after the free audit.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "Usually just access to your booking data, lead sources, and basic business information for the audit.",
  },
  {
    question: "Is this a software tool or a done-for-you service?",
    answer: "It's positioned as a done-for-you recovery engine, not something the owner has to manage daily.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most businesses should start seeing activity quickly once the system is set up, with early wins coming from missed calls, DMs, and reactivation outreach. The exact timeline depends on your current lead flow and database size.",
  },
  {
    question: "What if the partner I want isn't on IvyLink yet?",
    answer: "You can still send them a partnership invitation through IvyLink. We handle the outreach, generate the play, and walk them through joining. No awkward cold DMs from you.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Everything you need to know about getting started with IvyLink.
            </p>
          </div>

          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-border/50 rounded-xl px-6 [&[open]]:bg-muted/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer text-left text-lg font-display font-semibold text-foreground hover:text-primary py-5 list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
