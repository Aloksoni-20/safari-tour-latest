import { Link } from "react-router-dom";
import southAfricaImage from "@/assets/south-africa-safari.jpg";
import lesothoImage from "@/assets/lesotho-mountains.jpg";

const countries = [
  { name: "South Africa", slug: "south-africa", image: southAfricaImage, available: true, tagline: "Big 5 Safari & Culture" },
  { name: "Lesotho", slug: "lesotho", image: lesothoImage, available: true, tagline: "Mountain & Cultural Journey" },
  { name: "Mozambique", slug: "mozambique", image: null, available: false, tagline: "Coming Soon" },
  { name: "Botswana", slug: "botswana", image: null, available: false, tagline: "Coming Soon" },
  { name: "Namibia", slug: "namibia", image: null, available: false, tagline: "Coming Soon" },
  { name: "Zimbabwe", slug: "zimbabwe", image: null, available: false, tagline: "Coming Soon" },
];

const OurPackages = () => {
  return (
    <section id="our-packages" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-4xl font-bold text-foreground md:text-5xl">
          Our Packages
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-muted-foreground">
          Choose your destination and start your dream journey
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <div key={country.name} className="group relative overflow-hidden rounded-lg">
              {country.available ? (
                <Link to={`/packages/${country.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <img
                      src={country.image!}
                      alt={country.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-safari-overlay flex flex-col items-center justify-center">
                      <h3 className="font-display text-3xl font-bold text-safari-cream">{country.name}</h3>
                      <p className="mt-2 font-body text-safari-cream/70">{country.tagline}</p>
                      <span className="mt-4 rounded-md bg-safari-gradient px-6 py-2 font-body text-sm font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                        View Packages
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative flex h-64 items-center justify-center rounded-lg bg-muted">
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-bold text-foreground">{country.name}</h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground">Package not available for now</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPackages;
