import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem
      value={value}
      className="glass-card rounded-xl px-6 mb-4 border-border/50 data-[state=open]:border-primary/30 transition-colors"
    >
      <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-primary transition-colors hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
