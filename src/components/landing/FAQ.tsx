import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does setup take?",
    answer: "About 7 minutes. Once your Instagram and booking tool are connected, automation runs itself.",
  },
  {
    question: "Will automation sound impersonal to partners?",
    answer: "No. Campaigns use proven local-friendly offers that feel genuine and drive response.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes—our system connects through official APIs trusted by top social platforms.",
  },
  {
    question: "How soon will I see bookings?",
    answer: "Most med spas see new appointments within the 21-day launch window.",
  },
  {
    question: "What if I don't reach 8 bookings?",
    answer: "We'll continue working at no cost until you do—our results guarantee covers you.",
  },
  {
    question: "Can it work for smaller or newer spas?",
    answer: "Absolutely. It's built for single-location spas that don't have time for manual networking.",
  },
  {
    question: "What support is available?",
    answer: "You'll have direct chat access plus templates for every collaboration play.",
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
