import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
  isVideo?: boolean;
}

const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  rating = 5,
  isVideo = false,
}: TestimonialCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 lg:p-8 glow-effect transition-all duration-300 hover:border-primary/30 group flex flex-col h-full">
      {isVideo ? (
        <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="text-center z-10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
              <svg
                className="w-8 h-8 text-primary ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm">Watch Video Testimonial</p>
          </div>
        </div>
      ) : (
        <>
          <Quote className="w-10 h-10 text-primary/30 mb-4" />
          <p className="text-foreground/90 text-lg leading-relaxed mb-6 flex-1">{content}</p>
        </>
      )}

      <div className="flex items-center gap-4 mt-auto">
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
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-primary fill-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
