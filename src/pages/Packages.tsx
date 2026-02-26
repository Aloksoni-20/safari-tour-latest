import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurPackages from "@/components/OurPackages";

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <OurPackages />
      </main>
      <Footer />
    </>
  );
};

export default PackagesPage;
