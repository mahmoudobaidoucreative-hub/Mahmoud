import VideoCard from "@/components/VideoCard";
import CTAButton from "@/components/CTAButton";
import { Zap } from "lucide-react";

const shortFormVideos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/S2DThKsqzdo",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/nOpmqUsgq6c",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/-y3Wl3qCDFI",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/nPZZY7JUZuU",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/0gTjE6qWt9Y",
  },
  
];

const ShortFormSection = () => {
  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gradient-glow)] pointer-events-none opacity-50" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Short-Form Content
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Short-Form Videos That{" "}
            <span className="text-gradient-accent">Stop the Scroll</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-energy edits optimized for TikTok, Instagram Reels, and YouTube Shorts
            that capture attention in the first second.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {shortFormVideos.map((video) => (
            <VideoCard
              key={video.id}
              videoUrl={video.videoUrl}
              orientation="vertical"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton size="lg">
            Create Viral Short-Form Content
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ShortFormSection;