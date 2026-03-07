import { Quote, Star, X } from "lucide-react";
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
}

const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  rating = 5,
  subscribers,
  thumbnails,
}: TestimonialCardProps) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<Screenshot | null>(null);

  return (
    <>
      <div className="glass-card rounded-2xl p-6 lg:p-8 glow-effect transition-all duration-300 hover:border-primary/30 flex flex-col h-full">
        {/* Quote + content */}
        <Quote className="w-10 h-10 text-primary/30 mb-4" />
        <p className="text-foreground/90 text-lg leading-relaxed mb-4 flex-1">{content}</p>

        {/* Subscribers */}
        {subscribers && <p className="text-green-400 text-sm mb-4">{subscribers}</p>}

        {/* Screenshots */}
        {thumbnails && thumbnails.length > 0 && (
          <div className="flex flex-col gap-4 mb-4">
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

        {/* Footer */}
        <div className="flex items-center gap-4 mt-auto">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">{name.charAt(0)}</span>
            </div>
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-muted-foreground text-sm">{role}</p>
          </div>
          <div className="flex gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
            ))}
          </div>
        </div>
      </div>

      {/* Full-page Lightbox */}
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