import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahmoud-obaidou", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-gradient-accent mb-2">
              Mahmoud Obaidou
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium Video Editor for Creators & Brands
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            {/* TikTok and Twitter removed */}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
