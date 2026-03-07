import TestimonialCard, { TestimonialCardProps } from "@/components/TestimonialCard";
import CTAButton from "@/components/CTAButton";

const testimonials: TestimonialCardProps[] = [
  {
    name: "Ahmad Mahmood",
    role: "YouTube Educator",
    subscribers: "200K Subscribers",
    content:
      "7-Figure Entrepreneur — In just 4-5 videos, we generated $250K+ in YouTube revenue for Ahmad, including his 2nd most popular video which gained 950K views on the Andrew Tate interview and 540K views on the Tristan Tate interview. All delivered under tight deadlines. Complete podcast production that turns conversations into revenue-generating content.",
    avatar: "https://yt3.googleusercontent.com/9rd7yt7PiI6wYkWaLMl9GFcA664Yj3woEH5AlSEolwU8vdI_VC8iDCOKPzkBnJScWRLDxzRJZw=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
    thumbnails: [
       { image: "https://i.imgur.com/awQb62H.png", url: "https://i.imgur.com/awQb62H.png",  },
  { image: "https://i.imgur.com/IQ9G2e2.png", url: "https://i.imgur.com/IQ9G2e2.png",  },
  { image: "https://imgur.com/zTlaQJ8.png", url: "https://imgur.com/zTlaQJ8.png",  },

  // add more screenshots... 
]
  },
  {
    name: "Mike Chamberlin",
    role: "E-commerce Educator",
    subscribers: "200K Subscribers",
    content:
      "Mike came to us with no YouTube channel. We launched his first 4 videos and immediately hit 450K total views, including 280K views on his very first video, gaining 35K subscribers.",
    avatar: "https://yt3.googleusercontent.com/38hjjPnUYdwLfJqoa1U9JVMQszeNjPyo81bIfcQMUCcPuUzfyQBt82f0B1-Nbkmd_SfXtyAT=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
  },
  {
    name: "Kamal Ben SALAH",
    role: "Co-founder • Ted3im Agency",
    content:
      "Mahmoud helped me design videos for my company and handled the audio production. He played a key role in the success of this project and our company's growth. I highly recommend working with him.",
    avatar: "https://i.imgur.com/3634gpF.jpeg",
    rating: 5,
  },
  {
    name: "Abderrezak Torche",
    role: "E-commerce Brand Owner of Izar",
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
