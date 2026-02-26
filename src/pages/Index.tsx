import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExploreSouthernAfrica from "@/components/ExploreSouthernAfrica";
import FeaturedTours from "@/components/FeaturedTours";
import OurPackages from "@/components/OurPackages";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <WhyChoose/>
      <FeaturedTours />
       <ExploreSouthernAfrica />
      <OurPackages />
     
      <Footer />
    </>
  );
};

export default Index;
