import TestimonialCard from "@/components/TestimonialCard";
import CTAButton from "@/components/CTAButton";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Kamal Ben SALAH",
    role: "Co founder • Ted3im Agency",
    content:
      "Mahmoud helped me design videos for my company and handled the audio production. He played a key role in the success of this project and our company’s growth. I highly recommend working with him.",
    rating: 5,    avatar: "https://i.imgur.com/3634gpF.jpeg",  },
  {
    id: 2,
    name: "Abderrezak Torche",
    role: "E-commerce Brand Owner of Izar",
    content:
      "Working with Mahmoud was the best investment for our brand. Our product videos now convert like crazy. He doesn't just edit – he understands marketing.",
    rating: 5,
    avatar: "https://i.imgur.com/FzeTecc.jpeg",
  },
  {
    id: 3,
    name: "Ahmad Mahmood",
    role: "YouTube Educator • 200K Subs",
    content:
      "7-Figure Entrepreneur in just 4-5 videos, we generated $250K+ in YouTube revenue for Ahmad, including his 2nd most popular video, which gained 950K views on the Andrew Tate interview and 540K views on the Tristan Tate interview, all delivered under tight deadlines. Complete podcast production that turns conversations into revenue-generating content.",
    avatar: "https://yt3.googleusercontent.com/9rd7yt7PiI6wYkWaLMl9GFcA664Yj3woEH5AlSEolwU8vdI_VC8iDCOKPzkBnJScWRLDxzRJZw=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
  },
  {
    id: 4,
    name: "Mike Chamberlin",
    role: "YouTube Educator • 200K Subs",
    content:
      "7-Figure E-commerce Entrepreneur Mike came to us with no YouTube channel. We launched his first 4 videos and immediately hit 450K total views, including 280K views on his very first video, gaining 35K subscribers and establishing his authority in the dropshipping space. Starting from complete scratch, we turned his channel into a YouTube success story, proving our system works even from zero",
    avatar: "https://yt3.googleusercontent.com/38hjjPnUYdwLfJqoa1U9JVMQszeNjPyo81bIfcQMUCcPuUzfyQBt82f0B1-Nbkmd_SfXtyAT=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gradient-glow)] pointer-events-none opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Don't Just Take{" "}
            <span className="text-gradient-accent">My Word for It</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's what creators and brands are saying about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton size="lg">Be My Next Success Story</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
