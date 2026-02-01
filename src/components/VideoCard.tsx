import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  category?: string;
  orientation?: "vertical" | "horizontal";
  videoUrl?: string;
}

const VideoCard = ({
  thumbnail,
  title,
  category,
  orientation = "vertical",
  videoUrl,
}: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Block scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const aspectRatio = orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";

  return (
    <>
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl cursor-pointer glass-card glow-effect transition-all duration-500",
          aspectRatio
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-90" : "opacity-60"
          )}
        />

        {/* Play Button */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-300",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[var(--shadow-cta)] animate-glow-pulse">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {category && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-md mb-2">
              {category}
            </span>
          )}
          <h3 className="text-foreground font-semibold line-clamp-2">{title}</h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={cn(
              "relative bg-card rounded-2xl overflow-hidden shadow-2xl",
              orientation === "vertical" ? "max-w-sm w-full" : "max-w-4xl w-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className={cn(aspectRatio, "bg-muted flex items-center justify-center")}>
              <div className="text-center p-8">
                <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Video Player Placeholder</p>
                <p className="text-sm text-muted-foreground/70 mt-2">{title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
