import { Button } from "@/components/ui/button";

interface HeroProps {
  onViewPackages: () => void;
}

export const Hero = ({ onViewPackages }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 text-center text-foreground">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/d9d6d9a1-db54-44f7-8a14-494ac0b82899.png" 
            alt="KaamKaaj AI Logo" 
            className="h-20 sm:h-28 md:h-32 lg:h-36 w-auto"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 font-inter px-4">
          KaamKaaj AI: <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">
            Instant AI Services
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
          Order. Pay. Get Your AI Deliverable in 1 Hour.
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="default" 
          size="xl" 
          onClick={onViewPackages}
          className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-elevated hover:shadow-elevated transform hover:scale-105 font-semibold"
        >
          View Packages
        </Button>
        
        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-muted-foreground px-4">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>1-Hour Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Professional Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};