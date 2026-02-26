import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { CreditCard, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prices: Record<string, number> = {
  "south-africa": 5500,
  lesotho: 2000,
};

const PaymentPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const totalPrice = slug ? prices[slug] || 0 : 0;
  const [paymentOption, setPaymentOption] = useState<"full" | "deposit" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const depositAmount = Math.round(totalPrice * 0.3);
  const amountToPay = paymentOption === "deposit" ? depositAmount : totalPrice;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center pt-20">
          <div className="mx-auto max-w-md rounded-lg bg-card p-10 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Check size={32} className="text-secondary-foreground" />
            </div>
            <h1 className="mt-6 font-display text-2xl font-bold text-foreground">Payment Confirmed!</h1>
            <p className="mt-4 font-body text-muted-foreground">
              Your {paymentOption === "deposit" ? "30% deposit" : "full payment"} of <strong>US$ {amountToPay.toLocaleString()}</strong> has been processed.
            </p>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              A receipt has been sent to your email and a copy to info@maphuphotour.com.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-xl px-6">
          <h1 className="font-display text-3xl font-bold text-foreground">Payment</h1>
          <p className="mt-2 font-body text-muted-foreground">Total package price: <strong className="text-primary">US$ {totalPrice.toLocaleString()}</strong></p>

          <form onSubmit={handlePay} className="mt-10 space-y-8">
            {/* Option Selection */}
            <div>
              <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Choose Payment Option</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentOption("full")}
                  className={`rounded-lg border-2 p-6 text-left transition-all ${paymentOption === "full" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">Pay Now</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">Full payment</p>
                  <p className="mt-3 font-display text-2xl font-bold text-primary">US$ {totalPrice.toLocaleString()}</p>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentOption("deposit")}
                  className={`rounded-lg border-2 p-6 text-left transition-all ${paymentOption === "deposit" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">Pay Later</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">30% deposit to secure your place</p>
                  <p className="mt-3 font-display text-2xl font-bold text-primary">US$ {depositAmount.toLocaleString()}</p>
                </button>
              </div>
              {paymentOption === "deposit" && (
                <p className="mt-4 rounded-md bg-muted p-4 font-body text-sm text-foreground">
                  ✅ Make 30% deposit to secure your place. The remaining balance is due before your trip.
                </p>
              )}
            </div>

            {/* Payment Method */}
            {paymentOption && (
              <div>
                <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Payment Method</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { id: "visa", label: "Visa", icon: "💳" },
                    { id: "mastercard", label: "MasterCard", icon: "💳" },
                    { id: "paypal", label: "PayPal", icon: "🅿️" },
                  ].map(method => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex items-center gap-3 rounded-lg border-2 p-4 transition-all ${paymentMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    >
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-body font-medium text-foreground">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Card Details (simplified) */}
            {paymentMethod && (
              <div className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  <CreditCard className="mr-2 inline" size={20} />
                  Card Details
                </h2>
                <input placeholder="Card Number" required className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM/YY" required className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input placeholder="CVV" required className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <input placeholder="Cardholder Name" required className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            )}

            {paymentMethod && (
              <button type="submit" className="w-full rounded-md bg-safari-gradient py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Pay US$ {amountToPay.toLocaleString()}
              </button>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentPage;
