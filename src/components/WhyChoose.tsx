import React from "react";
import {
  MapPin,
  Users,
  Shield,
  DollarSign,
  Truck,
  Headphones,
} from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: <MapPin size={28} />,
      title: "Local Experts",
      desc: "Local and experienced tour specialists",
    },
    {
      icon: <Users size={28} />,
      title: "Tailor-Made Packages",
      desc: "Tailor-made safari and travel packages",
    },
    {
      icon: <Shield size={28} />,
      title: "Ethical Tourism",
      desc: "Ethical and responsible tourism practices",
    },
    {
      icon: <DollarSign size={28} />,
      title: "Competitive Pricing",
      desc: "Competitive pricing with no hidden costs",
    },
    {
      icon: <Truck size={28} />,
      title: "Reliable Transport",
      desc: "Reliable transport and professional guides",
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Support",
      desc: "24/7 customer support before and during your trip",
    },
  ];

  return (
    <div>
      {/* ✅ Welcome Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold"> Welcome to Maphupho Tour</h2>
             <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            

            <p className="mt-4 text-muted-foreground">
              Maphupho Tour is a professional safari and tour agency dedicated
              to showcasing the true beauty of Africa. We design authentic,
              safe, and memorable travel experiences that connect you with
              Africa's wildlife, landscapes, and cultures.
            </p>

            <p className="mt-4 text-muted-foreground">
              Whether you are seeking thrilling safaris, luxury escapes,
              romantic getaways, or budget-friendly adventures, Maphupho Tour
              delivers experiences that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose Maphupho Tour</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border p-6 text-center hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
