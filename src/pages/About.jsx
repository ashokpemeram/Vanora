import { useEffect } from "react";
import { motion } from "motion/react";
import { siteConfig } from "../data/siteData";
import Button from "../components/Button";

const fader = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function About() {
  useEffect(() => {
    document.title = "About Us | Vanora — Luxury Botanical Design Studio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Vanora's design philosophy, botanical craftsmanship, and dedicated landscaping and indoor styling team in Hyderabad, India."
      );
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 min-h-screen"
    >
      {/* 1. Header Hero */}
      {/* <section className="bg-primary/5 py-20 px-6 md:px-12 text-center relative overflow-hidden fine-border-b border-primary/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
            Our Story & Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight font-light">
            Crafting Living <span className="italic font-normal">Masterpieces.</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed font-light">
            Vanora was born from a desire to combine luxury architectural aesthetics with scientific horticultural craftsmanship.
          </p>
        </div>
      </section> */}

      {/* 2. Narrative Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              We shape environments that elevate quality of life.
            </h2>
            <div className="space-y-6 font-sans text-sm text-charcoal/70 leading-relaxed font-light">
              <p>
                In the rapid growth of Hyderabad, homes and workplaces are often built with stunning glass and steel, yet disconnected from the grounding beauty of the natural world. Vanora acts as the design-led bridge between modern structure and living ecology.
              </p>
              <p>
                We do not categorize ourselves as a gardening shop or nursery. We are a high-end botanical design studio. Every specimen tree, every piece of gravel, and every bespoke ceramic planter is curated with strict attention to spatial balance, lighting conditions, and texture matching.
              </p>
              <p>
                From private estate landscapes in Jubilee Hills and terrace hideaways in Kokapet to biophilic corporate structures in Hitech City, we serve clients who appreciate elegance, quality, and professional communication.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 ">
            <div className="aspect-[4/3] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-lg rounded-[10px]">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
                alt="Architectural garden design"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 bg-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              Architectural & Botanical Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory border border-primary/5 p-8 space-y-4 shadow-sm rounded-[10px]">
              <span className="font-serif text-3xl italic text-sage">01</span>
              <h3 className="text-xl font-serif text-primary">Aesthetic Balance</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                We believe in spatial restraint. We do not overcrowd layouts. Every plant is placed with breathing room to showcase its architectural silhouette and capture light.
              </p>
            </div>

            <div className="bg-ivory border border-primary/5 p-8 space-y-4 shadow-sm rounded-[10px]">
              <span className="font-serif text-3xl italic text-sage">02</span>
              <h3 className="text-xl font-serif text-primary">Horticultural Science</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                Beauty must endure. We analyze soil profiles, daylight patterns, wind speeds, and drainage parameters before introducing plants, guaranteeing healthy botanical growth.
              </p>
            </div>

            <div className="bg-ivory border border-primary/5 p-8 space-y-4 shadow-sm rounded-[10px]">
              <span className="font-serif text-3xl italic text-sage">03</span>
              <h3 className="text-xl font-serif text-primary">Precision Curation</h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                From handpicking specimen palms to customizing organic soil mixes and specifying premium matte-finished planters, we source the highest grade elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Call */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
          Experience the Vanora Difference
        </h2>
        <p className="font-sans text-sm text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-light">
          Whether you are an architect, homeowner, interior designer, or developer in Hyderabad, we invite you to design spaces that celebrate the natural world.
        </p>
        <div className="pt-4">
          <Button to="/contact" variant="primary" className="rounded-[10px]">
            Book a Design Consultation
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
