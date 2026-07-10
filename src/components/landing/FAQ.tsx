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
    question: "How does IvyLink get access to my client list?",
    answer: "We connect to your booking platform (Mindbody, Vagaro, Jane App, or Boulevard) with read-only access. You authorize it once — we never modify your data, only read it.",
  },
  {
    question: "Do I have to do anything once we start?",
    answer: "Nothing. We handle all outreach, all replies, all follow-up, and all booking coordination. You review a weekly summary email. That's it.",
  },
  {
    question: "How does pricing work?",
    answer: "The first 30 days are performance-only — we take 20–25% of revenue we actually recover. If we don't bring clients back, you owe nothing. After proof of results we move to a monthly retainer.",
  },
  {
    question: "Which booking platforms do you work with?",
    answer: "Mindbody, Vagaro, Jane App, and Boulevard. If you use a different platform, reach out — we're adding new integrations regularly.",
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see the first booked appointments within 7–10 days of launch. Full 30-day campaign results are reviewed together at the end of month one.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-10 lg:py-16 relative overflow-hidden w-full">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
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
