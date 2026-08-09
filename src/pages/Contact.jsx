import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "../data/siteData";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Landscaping",
    location: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Vanora — Luxury Botanical Design Hyderabad";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Start a conversation with Vanora. Request a landscape design consultation or indoor plant styling walk-through in Jubilee Hills, Banjara Hills, Gachibowli, or Kokapet."
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation Enquiry Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 min-h-screen"
    >
      {/* 1. Header */}
      {/* <section className="bg-primary/5 py-20 px-6 md:px-12 text-center fine-border-b border-primary/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
            Start a Conversation
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight font-light">
            Book a Design <span className="italic font-normal">Consultation</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed font-light">
            We collaborate with homeowners, commercial tenants, developers, and architects across Hyderabad to design exceptional botanical layouts.
          </p>
        </div>
      </section> */}

      {/* 2. Contact Details & Form */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary font-light">Vanora Concierge</h2>
              <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-light">
                Whether you have structured CAD architectural blueprints, a blank terrace slab, or require executive gifts for your leadership panel, our design team is ready to assist.
              </p>
            </div>

            {/* Direct contact points */}
            <div className="space-y-6 font-sans">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/5 p-3 text-secondary border border-primary/5 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-charcoal/40 text-[9px] uppercase tracking-widest block font-semibold">Call Us</span>
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-sm text-charcoal hover:text-primary font-medium transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/5 p-3 text-secondary border border-primary/5 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-charcoal/40 text-[9px] uppercase tracking-widest block font-semibold">Email Us</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-charcoal hover:text-primary font-medium transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/5 p-3 text-secondary border border-primary/5 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-charcoal/40 text-[9px] uppercase tracking-widest block font-semibold">Studio Address</span>
                  <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA card */}
            <div className="border border-primary/10 p-6 bg-primary/5 space-y-4">
              <h4 className="font-serif text-lg text-primary">Need an immediate answer?</h4>
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                Connect directly with our botanical styling consultant on WhatsApp to send images of your space.
              </p>
              <Button
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                variant="primary"
                className="w-full text-center text-[10px]"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="border border-primary/10 bg-ivory p-8 md:p-12 shadow-sm space-y-8">
              <h3 className="font-serif text-2xl text-primary font-light">Consultation Enquiry</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/10 p-8 text-center space-y-4"
                >
                  <h4 className="font-serif text-xl text-primary">Enquiry Submitted Successfully</h4>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-sm mx-auto">
                    Thank you. A Vanora representative will review your space requirements and coordinate a consultation appointment shortly.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary" className="!py-2 !px-4 text-[10px]">
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                      placeholder="E.g., Vikram Reddy"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                        placeholder="E.g., vikram@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                        placeholder="E.g., +91 98765 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">What are you looking for?</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                      >
                        <option value="Landscaping">Luxury Landscaping</option>
                        <option value="House Planting">House Planting / Styling</option>
                        <option value="Corporate Gifting">Corporate Gifting</option>
                        <option value="Consultation">General Consultation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Project Location (In Hyderabad)</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                        placeholder="E.g., Kokapet / Jubilee Hills"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Describe Your Spatial Vision</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans resize-none"
                      placeholder="Outline details such as patio dimensions, indoor window layouts, daylight levels, or specific design concerns..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary text-ivory px-8 py-4 border border-primary text-xs uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 font-sans"
                    >
                      <Send className="h-3 w-3" /> Start a Conversation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed */}
      <section className="bg-primary/5 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">Find Us</span>
            <h3 className="font-serif text-2xl text-primary font-light">Vanora Gardens</h3>
            <p className="font-sans text-xs text-charcoal/60">Manikonda, Hyderabad, Telangana, India</p>
          </div>

          {/* Map iframe */}
          <div className="w-full border border-primary/10 shadow-sm overflow-hidden" style={{ height: "420px" }}>
            <iframe
              title="Vanora Gardens Location"
              src="https://maps.google.com/maps?q=17.4990168,78.4018135&hl=en&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Open in Google Maps CTA */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/Je1a5S3aruk65jyQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-secondary hover:text-primary border border-secondary/30 hover:border-primary px-6 py-3 transition-all duration-300"
            >
              <MapPin className="h-3.5 w-3.5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
