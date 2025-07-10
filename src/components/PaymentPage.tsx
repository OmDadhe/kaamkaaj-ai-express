import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "@/data/packages";
import { CheckCircle, CreditCard, Smartphone } from "lucide-react";

interface PaymentPageProps {
  package: Package;
  formData: Record<string, string>;
  onPaymentSuccess: () => void;
  onBackToHome: () => void;
}

export const PaymentPage = ({ package: pkg, formData, onPaymentSuccess, onBackToHome }: PaymentPageProps) => {
  const handlePayNow = () => {
    // Simulate payment processing
    setTimeout(() => {
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Complete Your Payment</h1>
          <p className="text-xl text-muted-foreground">
            Secure payment gateway - Your order will be processed immediately
          </p>
        </div>

        {/* Order Summary */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Package:</span>
                <span className="text-primary font-semibold">{pkg.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Price:</span>
                <span className="text-2xl font-bold text-accent">{pkg.price}</span>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Your Requirements:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="flex gap-2">
                      <span className="font-medium min-w-0 flex-shrink-0">{key}:</span>
                      <span className="break-words">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Gateway */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Payment Gateway
            </CardTitle>
            <CardDescription>
              Choose your preferred payment method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* PhonePe Integration Placeholder */}
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">PhonePe Payment Integration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure payment processing via PhonePe gateway
                </p>
                <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
                  <strong>Integration Note:</strong> PhonePe SDK will be integrated here for live payments.
                  Currently showing demo flow.
                </div>
              </div>

              <Button 
                onClick={handlePayNow}
                className="w-full h-14 text-lg font-semibold"
                variant="default"
              >
                Pay Now - {pkg.price}
              </Button>

              <div className="text-center">
                <Button 
                  variant="ghost" 
                  onClick={onBackToHome}
                  className="text-muted-foreground"
                >
                  ← Back to Packages
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Badge */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Secure SSL Encrypted Payment</span>
          </div>
          <p>Your payment information is protected and encrypted</p>
        </div>
      </div>
    </div>
  );
};