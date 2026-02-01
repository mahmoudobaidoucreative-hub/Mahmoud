import { Accordion } from "@/components/ui/accordion";
import FAQItem from "@/components/FAQItem";
import CTAButton from "@/components/CTAButton";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What platforms do you edit for?",
    answer:
      "I specialize in all major platforms including YouTube (long-form and Shorts), TikTok, Instagram Reels, Facebook, and LinkedIn. Each edit is optimized for the specific platform's algorithm and audience behavior to maximize reach and engagement.",
  },
 
  {
    question: "Can you match my existing style?",
    answer:
      "Absolutely! I always start with a style consultation to understand your brand, preferences, and vision. Whether you want something similar to your existing content or a complete refresh, I'll ensure the edits align perfectly with your brand identity.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply click any 'Chat on WhatsApp' button to message me directly. We'll discuss your project, timeline, and budget. After agreeing on terms, you send your footage, and I'll get to work creating content that performs.",
  },

];

const FAQSection = () => {
  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--gradient-glow)] pointer-events-none opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? I've got answers. Here's everything you need to know.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                value={`faq-${index}`}
              />
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <CTAButton size="lg">Chat on WhatsApp</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
