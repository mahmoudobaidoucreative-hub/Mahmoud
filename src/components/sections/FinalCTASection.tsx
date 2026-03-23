import CTAButton from "@/components/CTAButton";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-card/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[var(--gradient-glow)] pointer-events-none opacity-40" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Need More{" "}
            <span className="text-gradient-accent">Clarity</span>?
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss your project and see how I can help take your content
            to the next level. No pressure, just a friendly conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton size="lg" className="group">
              Let's Contact
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon="play"
              onClick={() => {
                const el = document.getElementById("portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Portfolio
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;