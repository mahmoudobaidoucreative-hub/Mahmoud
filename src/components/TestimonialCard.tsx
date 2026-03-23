import { Star, X } from "lucide-react";
import { useState } from "react";

interface Screenshot {
  image: string;
  url: string;
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
  subscribers?: string;
  thumbnails?: Screenshot[];
  videoUrl?: string;
}

const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  rating = 5,
  subscribers,
  thumbnails,
  videoUrl, // ✅ FIXED
}: TestimonialCardProps) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<Screenshot | null>(null);

  return (
    <>
      <div className="glass-card rounded-2xl p-6 lg:p-8 glow-effect transition-all duration-300 hover:border-primary/30 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center gap-4 mb-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            {subscribers && (
              <p className="text-muted-foreground text-sm">{subscribers}</p>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Role */}
        {role && (
          <p className="text-gray-300 font-medium mb-2">
            {role}
          </p>
        )}

        {/* Content */}
        <p className="text-foreground/80 leading-relaxed mb-4 flex-1">
          {content}
        </p>

        {/* Video */}
        {videoUrl && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src={videoUrl}
                title="Testimonial Video"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Screenshots */}
        {thumbnails && thumbnails.length > 0 && (
          <div className="flex flex-col gap-4 mt-4">
            {thumbnails.map((shot, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedScreenshot(shot)}
                className="w-full rounded overflow-hidden focus:outline-none"
              >
                <img
                  src={shot.image}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 z-50"
              onClick={() => setSelectedScreenshot(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedScreenshot.image}
              alt="Screenshot Large"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;