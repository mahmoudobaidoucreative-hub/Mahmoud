import CTAButton from "@/components/CTAButton";
import { Check, X, Award } from "lucide-react";

const mahmoudBenefits = [
  "Content strategy, not just editing",
  "Fast delivery",
  "High-retention hooks & pacing",
  "Platform-specific optimization",
  "Modern trends & effects",
  "Direct communication",
  "Flexible revisions",
];

const othersIssues = [
  "Generic cookie-cutter edits",
  "Slow delivery (5-7+ days)",
  "No understanding of hooks",
  "One-size-fits-all approach",
  "Outdated editing style",
  "Unclear communication",
  "No flexibility with revisions"
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--gradient-glow)] pointer-events-none opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="text-gradient-accent">Me</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the difference between working with a strategic content partner
            versus a typical freelancer.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto mb-12">
          {/* Mahmoud Card */}
          <div className="glass-card rounded-2xl p-8 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Mahmoud Obaidou
                </h3>
                <p className="text-primary text-sm font-medium">Strategic Partner</p>
              </div>
            </div>
            <ul className="space-y-4">
              {mahmoudBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Card */}
          <div className="glass-card rounded-2xl p-8 opacity-70">
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-bold text-xl">?</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-muted-foreground">
                  Other Freelancers
                </h3>
                <p className="text-muted-foreground/70 text-sm">Generic Service</p>
              </div>
            </div>
            <ul className="space-y-4">
              {othersIssues.map((issue, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive/60" />
                  </div>
                  <span className="text-muted-foreground">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton size="lg">Work With a Professional Editor</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
