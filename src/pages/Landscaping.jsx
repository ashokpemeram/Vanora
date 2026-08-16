import { motion } from "motion/react";
import Button from "../components/Button";

export default function Landscaping() {
  const features = [
    {
      title: "Landscape Architecture",
      description: "Concept sketches, CAD spatial layouts, grading layout, drainage planning, and detailed construction documentation to ensure architectural harmony."
    },
    {
      title: "Softscape & Plant Selection",
      description: "Sourcing mature specimen trees, choosing heat-tolerant local shrubs, ground covers, and turf grasses tailored specifically to Hyderabad's soil biochemistry."
    },
    {
      title: "Hardscape Styling & Features",
      description: "Integration of local gray granites, natural slate stone paving, ambient warm landscape lighting patterns, minimal wooden pergolas, and serene water features."
    },
    {
      title: "Irrigation & Drainage Engineering",
      description: "Eco-friendly automatic drip irrigation grids, moisture sensors, and surface grading that captures rainfall and feeds it directly back to critical plant zones."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 min-h-screen"
    >
      {/* 1. Header Hero */}
      <section className="relative h-[60vh] bg-botanical flex items-center justify-center text-ivory overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Landscaping Landscape"
            className="w-full h-full object-cover opacity-40 filter contrast-[105%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical via-botanical/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          {/* <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
            Service 01
          </span> */}
          <h1 className="text-4xl md:text-6xl font-serif text-ivory font-light leading-tight">
            Luxury Landscaping
          </h1>
          <p className="font-sans text-sm md:text-base text-ivory/70 max-w-xl mx-auto leading-relaxed font-light">
            We design, build, and maintain elegant outdoor environments that elevate architecture and celebrate spatial lifestyle.
          </p>
        </div>
      </section>

      {/* 2. Philosophy Row */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              Outdoor Spaces Crafted to Stand the Test of Time.
            </h2>
            <div className="space-y-4 font-sans text-sm text-charcoal/70 leading-relaxed font-light">
              <p>
                A luxury garden should not compete with your house; it should frame it. Our landscape design philosophy focuses on clean geometries, strong sightlines, and layered textures. We approach landscaping from a design-first framework, working alongside architects and property developers.
              </p>
              <p>
                From selecting a single ancient Plumeria to act as a courtyard centerpiece, to leveling lawn fields in Kokapet villas or installing structured stone walkways in Banjara Hills, we execute with absolute craftsmanship.
              </p>
            </div>
            <div className="pt-4">
              <Button to="/contact" variant="primary" className="rounded-[10px]">
                Discuss Your Landscape Project
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-lg rounded-[10px]">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa8c1a68feb?q=80&w=800&auto=format&fit=crop"
                alt="Minimalist landscape design details"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Landscape Capabilities */}
      <section className="py-24 bg-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              Our Landscape Architectural Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-ivory border border-primary/5 p-8 space-y-4 shadow-sm rounded-[10px]">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-xl italic text-sage">0{idx + 1}</span>
                  <h3 className="text-lg font-serif text-primary font-semibold">{feat.title}</h3>
                </div>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
          Let's Plan Your Outdoor Sanctuary
        </h2>
        <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-xl mx-auto font-light">
          We begin with an in-depth site analysis to inspect lighting, soil makeup, and architectural lines. Contact us today to schedule a landscape walk-through.
        </p>
        <div className="flex justify-center gap-4">
          <Button to="/contact" variant="primary" className="rounded-[10px]">
            Request Site Consultation
          </Button>
          <Button to="/projects" variant="secondary" className="rounded-[10px]">
            View Selected Works
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
