import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/maphupho-logo.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Packages", href: "/packages" },
  { label: "Custom Tour", href: "/custom-tour" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleBookNow = () => {
    if (location.pathname === "/") {
      document.getElementById("our-packages")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#our-packages";
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 ">
        <Link to="/" className="font-display text-2xl font-bold text-primary flex items-center gap-2 ">
        <img src={logo} alt="Maphupho Tour" className="h-10 w-10 rounded-full object-cover" />
          Maphupho Tour
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleBookNow}
            className="rounded-md bg-safari-gradient px-6 py-2 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-safari-cream md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-safari-cream/10 bg-safari-dark/95 px-6 pb-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-body text-safari-cream/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleBookNow}
            className="mt-4 w-full rounded-md bg-safari-gradient py-3 font-body font-semibold text-primary-foreground"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
