import { PackageCard } from "./PackageCard";
import { Package, packages } from "@/data/packages";

interface PackagesGridProps {
  onOrderNow: (pkg: Package) => void;
}

export const PackagesGrid = ({ onOrderNow }: PackagesGridProps) => {
  return (
    <section id="packages" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our AI Service Packages</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Choose from our curated collection of AI-powered services. Each delivered within 1 hour with professional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              package={pkg} 
              onOrderNow={onOrderNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};