import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { siteConfig } from "../data/siteData";
import Button from "../components/Button";

export default function CorporateGifting() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "10-50",
    eventDate: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiryMessage = [
      "Hello Vanora, I would like to request a corporate gifting consultation.",
      "",
      "*Corporate Gifting Enquiry*",
      `*Name:* ${formData.name}`,
      `*Company:* ${formData.company}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Estimated quantity:* ${formData.quantity} gifts`,
      `*Required delivery date:* ${formData.eventDate || "Not specified"}`,
      `*Occasion / custom requests:* ${formData.message || "Not specified"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(enquiryMessage)}`;
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const giftTypes = [
    {
      title: "Executive Bonsai Collections",
      description: "Rare, slow-growing bonsai specimens in artisan ceramic bowls, representing stability and enduring relationships. Perfect for CXOs and business partners."
    },
    {
      title: "Handcrafted Succulent Curation",
      description: "Stylized arrangements of hardy, geometric succulents housed in bespoke raw concrete or premium walnut-wood vessels. Ideal for premium workspace desks."
    },
    {
      title: "Living Greeting Arrangements",
      description: "Lush botanical species (like Anthuriums, Aglaonemas, and Air Purifiers) custom packaged with your logo engraved subtly on copper or timber tags."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 min-h-screen"
    >
      {/* 1. Hero */}
      <section className="relative h-[60vh] bg-botanical flex items-center justify-center text-ivory overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1600&auto=format&fit=crop"
            alt="Premium Botanical Gifting Showcase"
            className="w-full h-full object-cover opacity-45 filter contrast-[105%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical via-botanical/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          {/* <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
            Service 03
          </span> */}
          <h1 className="text-4xl md:text-6xl font-serif text-ivory font-light leading-tight">
            Corporate Gifting
          </h1>
          <p className="font-sans text-sm md:text-base text-ivory/70 max-w-xl mx-auto leading-relaxed font-light">
            Crafting living gifts that grow. Create lasting impressions for executive partners, client milestones, and company milestones.
          </p>
        </div>
      </section>

      {/* 2. Brand Positioning Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Botanical Corporate Styling
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              Thoughtful Gifting for Meaningful Relationships.
            </h2>
            <div className="space-y-4 font-sans text-sm text-charcoal/70 leading-relaxed font-light">
              <p>
                In a world full of generic corporate giveaways that end up discarded, a curated living plant carries a profound statement. It is a gift of clean air, visual serenity, and organic development.
              </p>
              <p>
                At Vanora, we design premium gifting programs. We supply acclimatized plants in elegant pottery, matched with clean brand logos, hand-calligraphed care logs, and premium ribbon packaging. From small corporate leadership boxes to large-scale festive deliveries across Hyderabad, we execute with precision.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-sage rounded-full" />
                <span className="font-sans text-xs text-charcoal/80 font-medium">Bespoke Brand Engraving</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-sage rounded-full" />
                <span className="font-sans text-xs text-charcoal/80 font-medium">Premium Handcrafted Pottery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-sage rounded-full" />
                <span className="font-sans text-xs text-charcoal/80 font-medium">Bulk Delivery Logistics</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-lg rounded-[10px]">
              <img
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop"
                alt="Aesthetic botanical gift sets"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gift Collections */}
      <section className="py-24 bg-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              The Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              Premium Botanical Curation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftTypes.map((gift, idx) => (
              <div key={idx} className="bg-ivory border border-primary/5 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow rounded-[10px]">
                <div className="space-y-4">
                  <span className="font-serif text-xl italic text-sage">0{idx + 1}</span>
                  <h3 className="text-xl font-serif text-primary">{gift.title}</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                    {gift.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation Request Form */}
      <section className="py-24 max-w-4xl mx-auto px-6 " id="gifting-consultation">
        <div className="border border-primary/10 bg-ivory p-8 md:p-12 shadow-sm space-y-8 rounded-[10px]">
          <div className="text-center space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Concierge Gifting
            </span>
            <h2 className="text-3xl font-serif text-primary font-light">
              Request a Gifting Consultation
            </h2>
            <p className="font-sans text-xs text-charcoal/60 max-w-md mx-auto leading-relaxed">
              Fill in your details below. Our corporate concierge team will reach out with a curated catalog and customized estimates.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/5 border border-primary/10 p-8 text-center space-y-4"
            >
              <h3 className="font-serif text-2xl text-primary font-light">Enquiry Received</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-sm mx-auto">
                WhatsApp has opened with your enquiry details. Please tap Send there to complete your request.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="secondary" className="!py-2 !px-4 text-[10px]">
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                    placeholder="E.g., Ananth Rao"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                    placeholder="E.g., Studio Design Co."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                    placeholder="E.g., ananth@studiodesign.com"
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
                    placeholder="E.g., +91 99999 88888"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Estimated Quantity</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                  >
                    <option value="10-50">10 – 50 gifts</option>
                    <option value="50-200">50 – 200 gifts</option>
                    <option value="200-500">200 – 500 gifts</option>
                    <option value="500+">500+ gifts</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Required Delivery Date (Optional)</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-charcoal/60 font-semibold block">Describe Your Occasion or Custom Requests</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-primary/20 py-2 text-sm text-charcoal focus:outline-none focus:border-primary transition-colors font-sans resize-none"
                  placeholder="Provide context regarding design style, pot preferences, or event themes..."
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-ivory px-8 py-4 border border-primary text-xs uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 font-sans rounded-[10px]"
                >
                  <Send className="h-3 w-3" /> Submit Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </motion.div>
  );
}
