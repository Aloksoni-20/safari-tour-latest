import exploreImage from "@/assets/explore-southern-africa.jpg";

const ExploreSouthernAfrica = () => {
  const handleBookNow = () => {
    document.getElementById("our-packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="explore-southern-africa" className="relative overflow-hidden py-24 ">
      <img
        src={exploreImage}
        alt="Southern Africa landscape with wildlife"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-safari-overlay" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold text-safari-cream md:text-5xl">
            Explore Southern Africa
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-safari-cream/80">
            From the iconic Big 5 safari in South Africa's Kruger National Park to the dramatic mountain passes of Lesotho, Southern Africa offers a world of breathtaking landscapes, rich cultures, and unforgettable wildlife encounters.
          </p>
          <button
            onClick={handleBookNow}
            className="mt-8 rounded-md bg-safari-gradient px-10 py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSouthernAfrica;
