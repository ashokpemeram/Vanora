import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../data/siteData";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md py-4 shadow-sm border-b border-primary/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl tracking-widest hover:opacity-85 transition-all duration-300 ${
            isHome && !scrolled ? "text-ivory" : "text-primary"
          }`}
        >
          VANORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-sans text-xs uppercase tracking-widest transition-all duration-300 relative py-1 ${
                  isHome && !scrolled
                    ? isActive ? "text-ivory font-semibold" : "text-ivory/80 hover:text-ivory"
                    : isActive ? "text-primary font-semibold" : "text-charcoal/70 hover:text-primary"
                } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-right hover:after:scale-x-100 hover:after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
                  isHome && !scrolled ? "after:bg-ivory" : "after:bg-primary"
                } ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" className="!py-3 !px-5 text-[10px] rounded-[10px]">
            WhatsApp Us
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden focus:outline-none transition-colors duration-300 ${
            isHome && !scrolled ? "text-ivory" : "text-primary"
          }`}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-ivory/98 backdrop-blur-lg transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-between px-8 py-12 border-t border-primary/5 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navigationLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={({ isActive }) =>
                `font-serif text-3xl tracking-wide transition-all duration-300 ${
                  isActive ? "text-primary translate-x-2" : "text-charcoal/60"
                } hover:text-primary hover:translate-x-2`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col space-y-6">
          <Button to="/contact" variant="primary" className="w-full text-center">
            Book a Consultation
          </Button>
          
          <div className="text-center font-sans text-[10px] tracking-widest text-charcoal/40 uppercase">
            Hyderabad, Telangana
          </div>
        </div>
      </div>
    </nav>
  );
}
