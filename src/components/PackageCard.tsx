import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "@/data/packages";

interface PackageCardProps {
  package: Package;
  onOrderNow: (pkg: Package) => void;
}

export const PackageCard = ({ package: pkg, onOrderNow }: PackageCardProps) => {
  return (
    <Card className="group h-full flex flex-col transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] border border-border shadow-card bg-card/50 backdrop-blur-sm overflow-hidden relative">
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="text-center pb-6 pt-8 relative z-10">
        {/* Icon container with enhanced styling */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 flex items-center justify-center shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
          <img 
            src={pkg.icon} 
            alt={`${pkg.name} icon`}
            className="w-12 h-12 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Service name */}
        <CardTitle className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {pkg.name}
        </CardTitle>
        
        {/* Price with enhanced styling */}
        <div className="relative">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            {pkg.price}
          </div>
          <div className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">
            1-Hour Delivery
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow px-6 relative z-10">
        <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm">
          {pkg.description}
        </CardDescription>
        
        {/* Professional feature indicators */}
        <div className="mt-4 flex justify-center">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span>Professional</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 relative z-10">
        <Button 
          variant="default" 
          className="w-full font-semibold py-3 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-[1.02]" 
          onClick={() => onOrderNow(pkg)}
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};