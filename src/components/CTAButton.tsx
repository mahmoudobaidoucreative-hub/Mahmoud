import { cn } from "@/lib/utils";
import { MessageCircle, Play } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: "whatsapp" | "play" | "none";
}

const CTAButton = ({
  variant = "primary",
  size = "default",
  children,
  className,
  onClick,
  icon = "whatsapp",
}: CTAButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:scale-[1.02]",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-primary/50",
    outline:
      "border-2 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (icon === "whatsapp") {
      window.open("https://wa.me/+213794013520", "_blank");
    }
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={handleClick}
    >
      {icon === "whatsapp" && <MessageCircle className="w-5 h-5" />}
      {icon === "play" && <Play className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default CTAButton;
