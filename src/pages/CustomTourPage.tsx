import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const CustomTourPage = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", destination: "", travelDates: "",
    travelers: "2", budget: "", interests: "", specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your custom tour request has been submitted! We'll contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", destination: "", travelDates: "", travelers: "2", budget: "", interests: "", specialRequests: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-2xl px-6">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Custom Tour Builder</h1>
          <p className="mt-4 font-body text-muted-foreground">
            Design your dream Southern African journey. Tell us what you want and we'll craft the perfect itinerary.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block font-body text-sm font-medium text-foreground">Full Name</label>
                <input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block font-body text-sm font-medium text-foreground">Email</label>
                <input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block font-body text-sm font-medium text-foreground">Phone</label>
                <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block font-body text-sm font-medium text-foreground">Preferred Destination</label>
                <input value={form.destination} onChange={e => setForm(p => ({ ...p, destination: e.target.value }))} placeholder="e.g. South Africa, Lesotho" className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block font-body text-sm font-medium text-foreground">Travel Dates</label>
                <input value={form.travelDates} onChange={e => setForm(p => ({ ...p, travelDates: e.target.value }))} placeholder="e.g. June 2026" className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block font-body text-sm font-medium text-foreground">Number of Travelers</label>
                <input type="number" min="1" value={form.travelers} onChange={e => setForm(p => ({ ...p, travelers: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Budget Range</label>
              <input value={form.budget} onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} placeholder="e.g. US$ 3,000 - 5,000" className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Interests & Activities</label>
              <textarea rows={3} value={form.interests} onChange={e => setForm(p => ({ ...p, interests: e.target.value }))} placeholder="e.g. Safari, cultural experiences, hiking, spa..." className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Special Requests</label>
              <textarea rows={3} value={form.specialRequests} onChange={e => setForm(p => ({ ...p, specialRequests: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="w-full rounded-md bg-safari-gradient py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
              Submit Custom Tour Request
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CustomTourPage;
