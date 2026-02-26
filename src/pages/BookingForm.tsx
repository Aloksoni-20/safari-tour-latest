import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookingForm = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "", dob: "", nationality: "", passportNumber: "", passportExpiry: "",
    phone: "", email: "", address: "", adults: "1", childrenAge: "",
    roomPreference: "",
    emergencyName: "", emergencyRelationship: "", emergencyPhone: "",
    dietary: "", medical: "", mobilityAssistance: false, visaAssistance: false,
    confirmAccurate: false, agreeCancellation: false, agreeInsurance: false,
  });

  const update = (key: string, value: string | boolean) => setFormData(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/payment/${slug}`, { state: { booking: formData } });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Booking Form</h1>

          <form onSubmit={handleSubmit} className="mt-10 space-y-10">
            {/* Personal Information */}
            <section>
              <h2 className="mb-6 font-display text-xl font-semibold text-foreground">Personal Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Full Name (as per passport)</label>
                  <input required value={formData.fullName} onChange={e => update("fullName", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Date of Birth</label>
                  <input type="date" required value={formData.dob} onChange={e => update("dob", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Nationality</label>
                  <input required value={formData.nationality} onChange={e => update("nationality", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Passport Number</label>
                  <input required value={formData.passportNumber} onChange={e => update("passportNumber", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Passport Expiry Date</label>
                  <input type="date" required value={formData.passportExpiry} onChange={e => update("passportExpiry", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Phone Number (WhatsApp preferred)</label>
                  <input type="tel" required value={formData.phone} onChange={e => update("phone", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" required value={formData.email} onChange={e => update("email", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Residential Address</label>
                  <input required value={formData.address} onChange={e => update("address", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Number of Adults</label>
                  <input type="number" min="1" required value={formData.adults} onChange={e => update("adults", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Number of Children (Age)</label>
                  <input value={formData.childrenAge} onChange={e => update("childrenAge", e.target.value)} placeholder="e.g. 2 (ages 5, 8)" className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-2 block font-body text-sm font-medium text-foreground">Room Preference</label>
                <div className="flex flex-wrap gap-4">
                  {["Single", "Double", "Twin", "Family Room"].map(room => (
                    <label key={room} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <input type="radio" name="roomPreference" value={room} checked={formData.roomPreference === room} onChange={e => update("roomPreference", e.target.value)} className="accent-primary" />
                      {room}
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Emergency Contact */}
            <section>
              <h2 className="mb-6 font-display text-xl font-semibold text-foreground">Emergency Contact</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Full Name</label>
                  <input required value={formData.emergencyName} onChange={e => update("emergencyName", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Relationship</label>
                  <input required value={formData.emergencyRelationship} onChange={e => update("emergencyRelationship", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" required value={formData.emergencyPhone} onChange={e => update("emergencyPhone", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
            </section>

            {/* Health & Special Requirements */}
            <section>
              <h2 className="mb-6 font-display text-xl font-semibold text-foreground">Health & Special Requirements</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Dietary Requirements</label>
                  <input value={formData.dietary} onChange={e => update("dietary", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Medical Conditions</label>
                  <input value={formData.medical} onChange={e => update("medical", e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-6">
                <label className="flex items-center gap-2 font-body text-sm text-foreground">
                  <input type="checkbox" checked={formData.mobilityAssistance} onChange={e => update("mobilityAssistance", e.target.checked)} className="accent-primary" />
                  Mobility Assistance Required
                </label>
              </div>
            </section>

            {/* Visa Assistance */}
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Visa Assistance</h2>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 font-body text-sm text-foreground">
                  <input type="radio" name="visa" checked={formData.visaAssistance} onChange={() => update("visaAssistance", true)} className="accent-primary" /> Yes
                </label>
                <label className="flex items-center gap-2 font-body text-sm text-foreground">
                  <input type="radio" name="visa" checked={!formData.visaAssistance} onChange={() => update("visaAssistance", false)} className="accent-primary" /> No
                </label>
              </div>
            </section>

            {/* Terms */}
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold text-foreground">Terms & Conditions</h2>
              <div className="space-y-3">
                <label className="flex items-start gap-2 font-body text-sm text-foreground">
                  <input type="checkbox" required checked={formData.confirmAccurate} onChange={e => update("confirmAccurate", e.target.checked)} className="mt-1 accent-primary" />
                  I confirm that all information provided is accurate.
                </label>
                <label className="flex items-start gap-2 font-body text-sm text-foreground">
                  <input type="checkbox" required checked={formData.agreeCancellation} onChange={e => update("agreeCancellation", e.target.checked)} className="mt-1 accent-primary" />
                  I agree to the cancellation and refund policy.
                </label>
                <label className="flex items-start gap-2 font-body text-sm text-foreground">
                  <input type="checkbox" required checked={formData.agreeInsurance} onChange={e => update("agreeInsurance", e.target.checked)} className="mt-1 accent-primary" />
                  I understand that travel insurance is recommended.
                </label>
              </div>
            </section>

            <button type="submit" className="w-full rounded-md bg-safari-gradient py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
              Proceed to Payment
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookingForm;
