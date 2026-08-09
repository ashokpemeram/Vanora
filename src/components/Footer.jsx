import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-botanical text-ivory/80 pt-20 pb-8 px-6 md:px-12 fine-border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
        {/* Brand Summary */}
        <div className="space-y-6">
          <Link to="/" className="font-serif text-3xl tracking-widest text-ivory block">
            VANORA
          </Link>
          <p className="text-sm font-sans text-ivory/60 leading-relaxed max-w-sm">
            Creating refined spaces and meaningful experiences through nature. We design and curate high-end landscaping, indoor styling, and botanical gifting.
          </p>
          <div className="pt-2 text-xs uppercase tracking-widest text-sage">
            Hyderabad, India
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest text-ivory font-bold">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-ivory/60 font-sans">
            <li>
              <Link to="/" className="hover:text-ivory transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ivory transition-colors">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ivory transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-ivory transition-colors">Projects</Link>
            </li>
            <li>
              <Link to="/corporate-gifting" className="hover:text-ivory transition-colors">Corporate Gifting</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest text-ivory font-bold">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-ivory/60 font-sans">
            <li>
              <Link to="/services/landscaping" className="hover:text-ivory transition-colors">Luxury Landscaping</Link>
            </li>
            <li>
              <Link to="/services/house-planting" className="hover:text-ivory transition-colors">Indoor plant styling</Link>
            </li>
            <li>
              <Link to="/services/house-planting" className="hover:text-ivory transition-colors">Balcony & Terrace gardens</Link>
            </li>
            <li>
              <Link to="/corporate-gifting" className="hover:text-ivory transition-colors">Premium Corporate Gifting</Link>
            </li>
          </ul>
        </div>

        {/* Contact/Connect Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest text-ivory font-bold">
            Concierge
          </h4>
          <ul className="space-y-2 text-sm text-ivory/60 font-sans">
            <li>
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-ivory transition-colors">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ivory transition-colors">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors text-sage font-medium"
              >
                Direct WhatsApp Enquiries
              </a>
            </li>
          </ul>
          <div className="pt-4 flex space-x-4">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-ivory/60 hover:text-ivory transition-colors"
            >
              Instagram
            </a>
            <span className="text-ivory/20">/</span>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-ivory/60 hover:text-ivory transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/40 font-sans space-y-4 md:space-y-0">
        <div>
          &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <Link to="/contact" className="hover:text-ivory/60 transition-colors">Request Consultation</Link>
          <span>•</span>
          <span className="text-ivory/30">Designed for Premium Botanical Aesthetics</span>
        </div>
      </div>
    </footer>
  );
}
