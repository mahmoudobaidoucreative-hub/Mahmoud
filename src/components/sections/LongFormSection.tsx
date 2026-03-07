import CTAButton from "@/components/CTAButton";
import { Film } from "lucide-react";

const longFormVideos = [
  {
    id: 1,
    youtubeUrl: "https://www.youtube.com/watch?v=Usr5uI1R8Ow",
  },
  {
    id: 2,
    youtubeUrl: "https://www.youtube.com/watch?v=9A5N1Kbg7Ec",
  },
  {
    id: 3,
    youtubeUrl: "https://www.youtube.com/watch?v=wPwXqzw4Fqg",
  },
  {
    id: 4,
    youtubeUrl: "https://www.youtube.com/watch?v=Iv10AtlFkz8&list=PLrW__BhLdg3e1B2ZjVZgMEuokCygLWhzU&index=5",
  },
];

// Convert YouTube URL → embed URL
const getEmbedUrl = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

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
            <span className="text-sm font-medium text-primary">
              Long-Form Content
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Long-Form Videos That{" "}
            <span className="text-gradient-accent">
              Keep Viewers Watching
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compelling YouTube videos, podcasts, and documentaries with storytelling
            that maintains viewer retention from start to finish.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {longFormVideos.map((video) => (
            <div
              key={video.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
            >
              {/* YouTube Embed */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(video.youtubeUrl)}
                  title={`Video ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton size="lg">
            Upgrade Your Long-Form Content
          </CTAButton>
        </div>

      </div>
    </section>
  );
};

export default LongFormSection;