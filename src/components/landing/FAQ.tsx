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
    answer: "Referral programs reward your existing customers for sending friends. IvyLink builds partnerships with other local businesses, so their entire customer base actively gets pointed toward yours. No customer-side effort required, and the volume is dramatically higher.",
  },
  {
    question: "Do I need to spend money on ads?",
    answer: "No. IvyLink is built specifically for wellness businesses that want growth without a paid ads budget. The only thing you 'spend' is the discount on your partnership offer, and only when a partner's customer actually shows up and books.",
  },
  {
    question: "How much does it cost?",
    answer: "IvyLink is free to sign up and explore. You can match with partners and create your first play at no cost. Reach out if you'd like to discuss our plans for active partnerships.",
  },
  {
    question: "How does the QR code tracking work?",
    answer: "Every active partnership gets two unique QR codes, one for each business's offer. When a customer scans and books, the system records who referred them, what they booked, and what it was worth. You see full attribution in your dashboard, in real time.",
  },
  {
    question: "How does the partner matching work?",
    answer: "IvyLink scans your area for complementary businesses and ranks them by audience overlap, location, and partnership potential. You see every potential partner within a 5-mile radius, sorted by best match. We never share your client data with partners. Your information stays yours.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most businesses send their first partnership play within 10 minutes of signing up. Bookings typically follow in the first 1 to 3 weeks, depending on how quickly partners activate their offers.",
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
