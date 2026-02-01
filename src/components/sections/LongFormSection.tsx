import VideoCard from "@/components/VideoCard";
import CTAButton from "@/components/CTAButton";
import { Film } from "lucide-react";

const longFormVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
    title: "Documentary Style Brand Film",
    category: "YouTube",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&h=450&fit=crop",
    title: "Podcast Full Episode Edit",
    category: "Long-Form",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?w=800&h=450&fit=crop",
    title: "Course Module Production",
    category: "Educational",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=450&fit=crop",
    title: "Cinematic Travel Vlog",
    category: "YouTube",
  },
];

const LongFormSection = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-card/30">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--gradient-glow)] pointer-events-none opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Film className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Long-Form Content</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Long-Form Videos That{" "}
            <span className="text-gradient-accent">Keep Viewers Watching</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compelling YouTube videos, podcasts, and documentaries with storytelling
            that maintains viewer retention from start to finish.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {longFormVideos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              category={video.category}
              orientation="horizontal"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton size="lg">Upgrade Your Long-Form Content</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default LongFormSection;
