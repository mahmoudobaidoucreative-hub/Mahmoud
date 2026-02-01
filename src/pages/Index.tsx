import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ShortFormSection from "@/components/sections/ShortFormSection";
import LongFormSection from "@/components/sections/LongFormSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ShortFormSection />
        <LongFormSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
