import { ChevronDown } from "lucide-react";

/*
 * PERF: Switched from Radix `Accordion` to native `<details>`/`<summary>`.
 * The browser handles the open/close state for free — zero JavaScript at
 * runtime, zero hydration cost. Drops `@radix-ui/react-accordion` (and its
 * `@radix-ui/react-collapsible` peer dep) from the bundle entirely (~7 KiB
 * compressed). The chevron rotation is a CSS `[open]` selector, no React
 * state or animation library needed.
 */

const faqs = [
  {
    question: "Who is IvyLink for?",
    answer: "Single-location med spas, injectors, and aesthetic practices who want consistent bookings from local partnerships without the awkward networking.",
  },
  {
    question: "How does the partner matching work?",
    answer: "We scan your area for complementary businesses (gyms, studios, salons) and identify the best collaboration fits based on audience overlap and partnership potential.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we connect through official APIs and never share your client data with partners. Your information stays yours.",
  },
  {
    question: "What does it cost to get started?",
    answer: "Book a call to learn about our pricing. We guarantee 5 new bookings in 21 days or we keep working for free until you do.",
  },
  {
    question: "How is this different from ads or a CRM?",
    answer: "Ads bring strangers who may never return. CRMs manage existing clients. IvyLink builds partnerships that send you warm referrals month after month.",
  },
  {
    question: "How soon will I see results?",
    answer: "Most med spas see new appointments within the first 21 days. Our system starts identifying partners immediately after setup.",
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
