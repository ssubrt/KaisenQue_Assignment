import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the upfront costs?",
    answer: "There are no upfront costs. We work on a contingency fee basis, meaning you only pay if we win your case."
  },
  {
    question: "Who will be working on my case?",
    answer: "Your case will be handled by experienced attorneys who specialize in your specific type of claim, supported by a dedicated legal team."
  },
  {
    question: "Will my information be safe?",
    answer: "Yes, all communications are protected by attorney-client privilege. We use industry-standard security measures to protect your personal information."
  },
  {
    question: "How long will it take to resolve?",
    answer: "Case timelines vary depending on complexity. Most cases are resolved within 8-30 months, though some may take longer if they go to trial."
  },
  {
    question: "What cases do you handle?",
    answer: "We handle mass tort, class action, and personal injury cases including toxic exposure, defective medical devices, pharmaceutical injuries, and more."
  },
];

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-10">
          Questions? Contact Us
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-primary-foreground/20 rounded-lg overflow-hidden bg-transparent"
            >
            <AccordionTrigger hideChevron className="px-6 py-5 text-primary-foreground hover:no-underline text-left font-medium [&[data-state=open]>svg]:rotate-45">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-accent transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-primary-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
