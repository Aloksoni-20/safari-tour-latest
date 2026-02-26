import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-xl px-6">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Contact Form</h1>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Full Name</label>
              <input required value={form.fullName} onChange={e => setForm(p => ({ ...p, fullName: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Email Address</label>
              <input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Phone Number</label>
              <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1 block font-body text-sm font-medium text-foreground">Your Message</label>
              <textarea required rows={6} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="w-full rounded-md bg-safari-gradient py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
