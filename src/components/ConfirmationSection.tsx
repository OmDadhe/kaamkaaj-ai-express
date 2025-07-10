import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Clock, Home, ShoppingCart, AlertCircle } from "lucide-react";

interface ConfirmationSectionProps {
  onBackToHome: () => void;
}

export const ConfirmationSection = ({ onBackToHome }: ConfirmationSectionProps) => {
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    const details = localStorage.getItem('paymentSuccess');
    if (details) {
      setPaymentDetails(JSON.parse(details));
      localStorage.removeItem('paymentSuccess');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-elevated">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-accent bg-clip-text text-transparent">
              Order Successful! 🎉
            </CardTitle>
            <CardDescription className="text-lg">
              Your order has been confirmed and is being processed.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Mock Mode Notice */}
            {paymentDetails?.mockMode && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">Development Mode</h4>
                  </div>
                  <p className="text-sm text-blue-700">
                    This was a mock payment for testing purposes. All features including AI content generation and email delivery are working exactly as they would in production.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Order Details */}
            {paymentDetails && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Order ID:</span>
                    <span className="font-mono text-sm">{paymentDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment ID:</span>
                    <span className="font-mono text-sm">{paymentDetails.paymentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-bold text-accent">₹700</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-bold text-green-600">
                      {paymentDetails.mockMode ? "Mock Payment Success" : "Payment Success"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{new Date(paymentDetails.timestamp).toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Delivery Information */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Mail className="w-5 h-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-green-800">
                    📧 Your deliverable will be sent to your email within <strong>1 hour</strong>
                  </span>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    What happens next:
                  </p>
                  <ul className="text-sm text-green-700 mt-1 space-y-1">
                    <li>• Our AI is processing your request</li>
                    <li>• You'll receive an email confirmation shortly</li>
                    <li>• Your deliverable will be ready within 1 hour</li>
                    {paymentDetails?.mockMode && (
                      <li>• Check your console/email for test output</li>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={onBackToHome}
                className="bg-gradient-to-r from-accent to-green-500 hover:from-green-500 hover:to-accent"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <Button 
                variant="outline"
                onClick={onBackToHome}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Another Package
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
