import VideoCard from "@/components/VideoCard";
import CTAButton from "@/components/CTAButton";
import { Zap } from "lucide-react";

const shortFormVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=700&fit=crop",
    title: "Product Launch Reel",
    category: "TikTok",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=700&fit=crop",
    title: "Lifestyle Content",
    category: "Reels",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=700&fit=crop",
    title: "Brand Story Short",
    category: "Shorts",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=700&fit=crop",
    title: "Tutorial Clip",
    category: "TikTok",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=700&fit=crop",
    title: "Behind the Scenes",
    category: "Reels",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=400&h=700&fit=crop",
    title: "Viral Hook Edit",
    category: "Shorts",
  },
];

const ShortFormSection = () => {
  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gradient-glow)] pointer-events-none opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Short-Form Content</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {shortFormVideos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              category={video.category}
              orientation="vertical"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton size="lg">Create Viral Short-Form Content</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ShortFormSection;
