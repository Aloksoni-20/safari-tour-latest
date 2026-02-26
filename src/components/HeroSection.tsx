import heroImage from "@/assets/hero-safari.jpg";

const HeroSection = () => {
  const handleBookNow = () => {
    document.getElementById("our-packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden min-h-[96vh]">
      <img
        src={heroImage}
        alt="African safari sunset with elephants and acacia trees"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-safari-overlay" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="animate-fade-in-up font-display text-5xl font-bold leading-tight text-safari-cream md:text-7xl">
          Discover Africa the <br />
          <span className="text-gradient-gold"> Authentic Way</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up font-body text-lg text-safari-cream/80 [animation-delay:0.2s] md:text-xl">
         Experience unforgettable safaris, cultural journeys, and tailor-made tours across Southern Africa with trusted local experts.
        </p>
        <p className="text opacity-60 mb-8 text-white mt-6">Safari • Cultural Tours • Luxury &amp; Budget Packages • Custom Experiences</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={handleBookNow}
            className="animate-fade-in-up rounded-md bg-safari-gradient px-10 py-4 font-body text-lg font-semibold text-primary-foreground transition-transform hover:scale-105 [animation-delay:0.4s]"
          >
            Book Now
          </button>
          <a
            href="#explore-southern-africa"
            className="animate-fade-in-up rounded-md border border-safari-cream/30 px-10 py-4 font-body text-lg font-medium text-safari-cream transition-colors hover:bg-safari-cream/10 [animation-delay:0.5s]"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
