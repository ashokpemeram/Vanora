import { motion } from "motion/react";
import Button from "../components/Button";

export default function HousePlanting() {
  const stylingSteps = [
    {
      title: "Lighting & Spatial Audit",
      description: "We analyze room layout, measuring light levels (in lux) and ambient humidity to choose species that will truly thrive in each unique corner."
    },
    {
      title: "Planter & Vessel Selection",
      description: "We source custom-glazed hand-thrown ceramics, matte-textured GRC planters, and solid brass containers that complement your interior design theme."
    },
    {
      title: "Specimen Sourcing",
      description: "We hand-select mature, acclimatized statement plants (like Fiddle Leaf Figs, Bird of Paradise, and rare Philodendrons) with exceptional structure and leaf health."
    },
    {
      title: "Placement & Hand-off Care",
      description: "We arrange the plants with artistic styling, optimize soil moisture, and supply you with a simple, tailored digital care card to keep your plants lush."
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
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1600&auto=format&fit=crop"
            alt="Premium Indoor Plant Styling"
            className="w-full h-full object-cover opacity-45 filter contrast-[102%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical via-botanical/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          {/* <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
            Service 02
          </span> */}
          <h1 className="text-4xl md:text-6xl font-serif text-ivory font-light leading-tight">
            House Planting & Styling
          </h1>
          <p className="font-sans text-sm md:text-base text-ivory/70 max-w-xl mx-auto leading-relaxed font-light">
            Bringing organic warmth, air-purifying properties, and curated plant design into contemporary living spaces.
          </p>
        </div>
      </section>

      {/* 2. Intro narrative */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-lg rounded-[10px]">
              <img
                src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:316,cw:2387,ch:2387,q:80,w:2387/NbGNwrzLDYgMAy4LmeeJVj.jpg"
                alt="Aesthetic plant styling room corner"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              Living Sculptures for High-End Interiors.
            </h2>
            <div className="space-y-4 font-sans text-sm text-charcoal/70 leading-relaxed font-light">
              <p>
                House plants should be treated like structural furniture or fine art. A generic nursery plant in a cheap plastic container degrades the energy of a room. Vanora sources premium specimens and custom containers that reinforce the elegance of your space.
              </p>
              <p>
                Whether styling a double-height living room with a statement tree in Jubilee Hills, installing green vertical walls, or layering a sunlit balcony with wind-tolerant shrubs in Gachibowli, we bring refined green composition into your day-to-day living.
              </p>
            </div>
            <div className="pt-4">
              <Button to="/contact" variant="primary" className="rounded-[10px]">
                Curate Your Living Space
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Methodology */}
      <section className="py-24 bg-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
              How We Curate Your Interiors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stylingSteps.map((step, idx) => (
              <div key={idx} className="bg-ivory border border-primary/5 p-8 space-y-4 shadow-sm flex flex-col justify-between rounded-[10px]">
                <span className="font-serif text-3xl italic text-sage">0{idx + 1}</span>
                <div className="space-y-2">
                  <h3 className="text-lg font-serif text-primary">{step.title}</h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pre-CTA details */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
          Elevate Your Architectural Details
        </h2>
        <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-xl mx-auto font-light">
          We collaborate closely with interior architects and decorators in Hyderabad. We offer scheduled styling consults to review room concepts and select optimal plants.
        </p>
        <div className="flex justify-center gap-4">
          <Button to="/contact" variant="primary" className="rounded-[10px]">
            Request Styling Consult
          </Button>
          {/* <Button
            href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hello Vanora, I'd like to book an indoor plant styling consult.")}`}
            variant="secondary"
          >
            Chat with Designer
          </Button> */}
        </div>
      </section>
    </motion.div>
  );
}
