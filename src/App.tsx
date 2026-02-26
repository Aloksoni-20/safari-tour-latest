import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PackagesPage from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import ContactPage from "./pages/ContactPage";
import CustomTourPage from "./pages/CustomTourPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:slug" element={<PackageDetail />} />
          <Route path="/booking/:slug" element={<BookingForm />} />
          <Route path="/payment/:slug" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/custom-tour" element={<CustomTourPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
