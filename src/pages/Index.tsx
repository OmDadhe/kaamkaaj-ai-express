import { useState } from "react";
import { Hero } from "@/components/Hero";
import { PackagesGrid } from "@/components/PackagesGrid";
import { PackageModal } from "@/components/PackageModal";
import { PaymentPage } from "@/components/PaymentPage";
import { ConfirmationSection } from "@/components/ConfirmationSection";
import { Footer } from "@/components/Footer";
import { Package } from "@/data/packages";

type AppState = 'home' | 'payment' | 'confirmation';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    setFormData({});
  };

  const handleProceedToPayment = (pkg: Package, data: Record<string, string>) => {
    setSelectedPackage(pkg);
    setFormData(data);
    setIsModalOpen(false);
    setCurrentState('payment');
  };

  const handlePaymentSuccess = () => {
    setCurrentState('confirmation');
  };

  const handleBackToHome = () => {
    setCurrentState('home');
    setSelectedPackage(null);
    setFormData({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentState === 'payment' && selectedPackage) {
    return (
      <div className="font-inter">
        <PaymentPage
          package={selectedPackage}
          formData={formData}
          onPaymentSuccess={handlePaymentSuccess}
          onBackToHome={handleBackToHome}
        />
      </div>
    );
  }

  if (currentState === 'confirmation') {
    return (
      <div className="font-inter">
        <ConfirmationSection onBackToHome={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="font-inter">
      <Hero onViewPackages={handleViewPackages} />
      <PackagesGrid onOrderNow={handleOrderNow} />
      <Footer />
      
      <PackageModal
        package={selectedPackage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onProceedToPayment={handleProceedToPayment}
      />
    </div>
  );
};

export default Index;
