import TestimonialCard, { TestimonialCardProps } from "@/components/TestimonialCard";
import CTAButton from "@/components/CTAButton";

const testimonials: TestimonialCardProps[] = [
  {
    name: "Flex God",
    role: "",
    subscribers: "50K Subscribers",
    content:
      "I partnered with Quan to elevate his channel across all fronts—from creative ideation to high-end video design and production. By implementing strategic visual storytelling, we successfully drove a massive surge in viewership and, more importantly, generated a significant increase in product sales. This transformation turned his content into a high-converting marketing asset that delivers measurable business growth.",
    avatar: "https://i.imgur.com/sc785za.jpeg",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/bt1K8k5WvFE", // ✅ NEW
    thumbnails: [
       { image: "https://i.imgur.com/3rYZont.png", url: "https://i.imgur.com/3rYZont.png",  },
  { image: "https://i.imgur.com/X9vX1Yg.png", url: "https://i.imgur.com/X9vX1Yg.png",  },
  { image: "https://imgur.com/zTlaQJ8.png", url: "https://imgur.com/zTlaQJ8.png",  },
  { image: "https://i.imgur.com/fY5poaZ.png", url: "https://i.imgur.com/fY5poaZ.png",  },

  // add more screenshots... 
]
  },
  {
    name: "Mike Chamberlin",
    role: "",
    subscribers: "85K Subscribers",
    content:
      "Mike came to us with no YouTube channel. We launched his first 4 videos and immediately hit 450K total views, including 280K views on his very first video, gaining 35K subscribers.",
    avatar: "https://i.imgur.com/jCmSCk2.jpeg",
    rating: 5,
  },
  {
    name: "Kamal Ben SALAH",
    role: "",
    subscribers: "Co-founder • Ted3im Agency",
    content:
      "Mahmoud helped me design videos for my company and handled the audio production. He played a key role in the success of this project and our company's growth. I highly recommend working with him.",
    avatar: "https://i.imgur.com/3634gpF.jpeg",
    rating: 5,
  },
  {
    name: "Abderrezak Torche",
    role: "",
    subscribers: "E-commerce Brand Owner of Izar",
    content:
      "Working with Mahmoud was the best investment for our brand. Our product videos now convert like crazy. He doesn't just edit – he understands marketing.",
    avatar: "https://i.imgur.com/FzeTecc.jpeg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-[hsl(0,0%,4%)] py-20">
      {/* Banner */}
      <div className="mx-auto mb-12 max-w-3xl text-center px-4">
        <div className="mb-4 inline-block rounded-full border border-[hsl(142,71%,45%,0.3)] bg-[hsl(142,71%,45%,0.08)] px-4 py-1.5 text-sm font-medium text-[hsl(142,71%,45%)]">
          Testimonials
        </div>
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Don't take our word for it
        </h2>
        <p className="text-lg text-gray-400">
          Here's what our clients say after working with us.
        </p>
      </div>

      {/* Masonry-style two-column grid */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="columns-1 gap-5 md:columns-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-5 break-inside-avoid">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <CTAButton>Be My Next Success Story</CTAButton>
      </div>
    </section>
  );
};

export default TestimonialsSection;
