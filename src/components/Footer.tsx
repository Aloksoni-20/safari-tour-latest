import { Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToPackages = () => {
    if (window.location.pathname === "/") {
      document.getElementById("our-packages")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#our-packages";
    }
  };

  return (
    <footer className="bg-safari-dark py-16 text-safari-cream/80">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary">Maphupho Dream Journeys</h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-safari-cream/60">
              Experience the beauty of Southern Africa with our curated safari tours, cultural journeys, and bespoke travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-safari-cream">Quick Links</h4>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li>
                <button onClick={handleScrollToPackages} className="transition-colors hover:text-primary">
                  Our Packages
                </button>
              </li>
              <li><Link to="/custom-tour" className="transition-colors hover:text-primary">Custom Tour Builder</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-safari-cream">Contact Us</h4>
            <ul className="mt-4 space-y-4 font-body text-sm">
              <li>
                <a href="mailto:info@maphuphotour.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                  <Mail size={18} className="text-primary" />
                  info@maphuphotour.com
                </a>
              </li>
              <li>
                <a href="tel:+27791955980" className="flex items-center gap-3 transition-colors hover:text-primary">
                  <Phone size={18} className="text-primary" />
                  +27 79 195 5980
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27791955980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <MessageCircle size={18} className="text-primary" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-safari-cream/10 pt-8 text-center font-body text-xs text-safari-cream/40">
          © {new Date().getFullYear()} Maphupho Dream Journeys. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
