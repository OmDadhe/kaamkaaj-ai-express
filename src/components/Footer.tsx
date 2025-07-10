import { Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 md:py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo and Contact */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/d9d6d9a1-db54-44f7-8a14-494ac0b82899.png" 
                alt="KaamKaaj AI Logo" 
                className="h-14 md:h-16 lg:h-18 w-auto mx-auto md:mx-0"
              />
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">getnimly@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2025 KaamKaaj AI. All rights reserved. | Instant AI Services Platform
          </p>
        </div>
      </div>
    </footer>
  );
};