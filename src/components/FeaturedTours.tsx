import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import southAfricaImage from "@/assets/south-africa-safari.jpg";
import lesothoImage from "@/assets/lesotho-mountains.jpg";
import featuredImage from "@/assets/featured-safari.jpg";

const tours = [
  {
    title: "South Africa — 7-Day Ultimate Safari & Culture",
    region: "Kruger & Sabi Sands",
    price: "US$ 5,500",
    image: southAfricaImage,
    slug: "south-africa",
  },
  {
    title: "Lesotho — 7-Day Mountain & Cultural Journey",
    region: "Maloti-Drakensberg",
    price: "US$ 2,000",
    image: lesothoImage,
    slug: "lesotho",
  },
  {
    title: "Sunset Safari Game Drive Experience",
    region: "Various Locations",
    price: "From US$ 2,000",
    image: featuredImage,
    slug: "south-africa",
  },
];

const FeaturedTours = () => {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl">
          Featured Tour
        </h2>
         <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-muted-foreground">
          Handpicked experiences for the ultimate Southern African adventure
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tours.map((tour) => (
            <Link
              key={tour.title}
              to={`/packages/${tour.slug}`}
              className="group overflow-hidden rounded-lg bg-card shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-safari-dark/0 transition-all group-hover:bg-safari-dark/40">
                  <span className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-body text-sm font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <Eye size={18} />
                    View More
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{tour.title}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{tour.region}</p>
                <p className="mt-3 font-display text-xl font-bold text-primary">{tour.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
