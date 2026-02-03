import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Setup takes about 7 minutes. Connect Instagram and your booking link, and the system handles the rest.",
  },
  {
    question: "Do I need technical skills?",
    answer: "No. Every step is guided, and the automation manages outreach and posting for you.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Your accounts are connected via official API integrations used by top social tools.",
  },
  {
    question: "When should I expect results?",
    answer: "Most see first bookings within the 21-day launch window.",
  },
  {
    question: "What if I don't hit 8 bookings?",
    answer: "You're covered by our performance guarantee—we continue working free until you do.",
  },
  {
    question: "Who supports me if I get stuck?",
    answer: "Dedicated chat support and templates are available for every stage of your collab campaigns.",
  },
  {
    question: "Will this work if I'm a smaller spa?",
    answer: "Yes. The engine is optimized for single-location spas with limited marketing time.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Everything you need to know about getting started.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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