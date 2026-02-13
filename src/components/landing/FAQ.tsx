import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="section-container relative">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-block mb-4 text-sm font-semibold text-primary uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Everything you need to know about getting started with IvyLink.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-display font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
