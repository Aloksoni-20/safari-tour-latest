import { useParams, Link } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import southAfricaImage from "@/assets/south-africa-safari.jpg";
import lesothoImage from "@/assets/lesotho-mountains.jpg";

const packagesData: Record<string, {
  country: string;
  flag: string;
  title: string;
  subtitle: string;
  region: string;
  image: string;
  price: string;
  itinerary: { day: string; emoji: string; title: string; details: string[] }[];
  included: string[];
}> = {
  "south-africa": {
    country: "South Africa",
    flag: "🇿🇦",
    title: "7-Day Ultimate Safari & Culture",
    subtitle: "Kruger & Surrounding Reserves + Mpumalanga Cultural Route",
    region: "Kruger & Sabi Sands",
    image: southAfricaImage,
    price: "US$ 5,500",
    itinerary: [
      { day: "Day 1", emoji: "✈️", title: "Arrival & Transfer", details: ["Pickup at Kruger Mpumalanga International Airport (MQP)", "Private transfer to Arathusa Safari Lodge (Sabi Sands)", "Welcome dinner & briefing", "Included: Dinner + overnight"] },
      { day: "Day 2", emoji: "🐘", title: "Big 5 Game Drives", details: ["Early morning game drive in open 4×4 vehicle", "Breakfast at lodge", "Afternoon bush walk with field ranger", "Dinner under the stars"] },
      { day: "Day 3", emoji: "🦁", title: "Full Day Safari", details: ["Sunrise game drive + breakfast in the wild", "Visit to a wildlife rehab or conservation project", "Spa session & poolside sunset", "Optional night drive"] },
      { day: "Day 4", emoji: "🌄", title: "Panorama Route", details: ["Breakfast & check-out", "Full day private tour: Blyde River Canyon, Bourke's Luck Potholes, God's Window", "Lunch at scenic lookout", "Transfer to Luxury lodge near Kruger"] },
      { day: "Day 5", emoji: "🪶", title: "Cultural Heritage", details: ["Visit Shangana Cultural Village or Baphalaborwa Land Trust experience", "Craft markets & local lunch", "Bush sundowners"] },
      { day: "Day 6", emoji: "🐆", title: "Safari & Relaxation", details: ["Morning drive in big game territory", "Leisure afternoon: spa, poolside, private dining setup"] },
      { day: "Day 7", emoji: "💫", title: "Departure", details: ["Breakfast & transfer to airport"] },
    ],
    included: [
      "Airport pickup & private transfers",
      "Local transport in 4×4 vehicles",
      "Accommodation (luxury / premium lodges)",
      "Meals: breakfast + lunch + dinner (where indicated)",
      "Game drives & expert guides (English)",
      "Cultural & heritage excursions",
      "Optional extras like hot-air balloon rides, spa, private dinners",
    ],
  },
  lesotho: {
    country: "Lesotho",
    flag: "🇱🇸",
    title: "7-Day Mountain & Cultural Journey",
    subtitle: "Maloti-Drakensberg — Nature & Culture focused",
    region: "Maloti-Drakensberg",
    image: lesothoImage,
    price: "US$ 2,000",
    itinerary: [
      { day: "Day 1", emoji: "✈️", title: "Arrival in Maseru", details: ["Pickup & transfer to Thaba Bosiu Cultural Lodge", "Local dinner, Basotho music"] },
      { day: "Day 2", emoji: "🏞️", title: "Mountain Passes", details: ["Full day scenic 4×4 tour", "Picnic lunch"] },
      { day: "Day 3", emoji: "👣", title: "Village & Craft Tour", details: ["Visit traditional homesteads", "Blanket weaving workshop"] },
      { day: "Day 4", emoji: "🐏", title: "Pony Trekking", details: ["Guided pony trek into highlands", "Overnight mountain lodge"] },
      { day: "Day 5", emoji: "🏔️", title: "Hiking", details: ["Guided trail with mountain views", "Farewell Basotho feast"] },
      { day: "Day 6", emoji: "💆", title: "Spa & Relax", details: ["Massage & relaxation lodge day"] },
      { day: "Day 7", emoji: "🚗", title: "Departure", details: ["Transfer to airport"] },
    ],
    included: [
      "Airport pickup & private transfers",
      "Local transport in 4×4 vehicles",
      "Accommodation (luxury / premium lodges)",
      "Meals: breakfast + lunch + dinner (where indicated)",
      "Expert guides (English)",
      "Cultural & heritage excursions",
      "Optional extras like spa, private dinners",
    ],
  },
};

const PackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = slug ? packagesData[slug] : null;

  if (!pkg) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground">Package not available for now</h1>
            <Link to="/packages" className="mt-6 inline-block rounded-md bg-safari-gradient px-8 py-3 font-body font-semibold text-primary-foreground">
              Back to Packages
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="relative h-[50vh] overflow-hidden">
          <img src={pkg.image} alt={pkg.country} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-safari-overlay flex flex-col items-center justify-center">
            <span className="text-5xl">{pkg.flag}</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-safari-cream md:text-5xl">{pkg.country}</h1>
            <p className="mt-2 font-body text-lg text-safari-cream/80">{pkg.title}</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-16">
          <Link to="/packages" className="mb-8 inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft size={16} /> Back to Our Packages
          </Link>

          <p className="font-body text-muted-foreground">{pkg.subtitle}</p>

          {/* Itinerary */}
          <div className="mt-12 space-y-6">
            {pkg.itinerary.map((day) => (
              <div key={day.day} className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{day.emoji}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{day.day} — {day.title}</h3>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 pl-10">
                  {day.details.map((d, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground">• {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground">🧭 What's Included</h2>
            <ul className="mt-6 space-y-3">
              {pkg.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-foreground">
                  <Check size={18} className="mt-0.5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Price & CTA */}
          <div className="mt-16 rounded-lg bg-muted p-8 text-center">
            <p className="font-display text-4xl font-bold text-primary">{pkg.price}</p>
            <p className="mt-1 font-body text-sm text-muted-foreground">Tax included</p>
            <Link
              to={`/booking/${slug}`}
              className="mt-8 inline-block rounded-md bg-safari-gradient px-12 py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Book This Package
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PackageDetail;
