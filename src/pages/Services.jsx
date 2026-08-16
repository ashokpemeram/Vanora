import { motion } from "motion/react";
import { servicesData, siteConfig } from "../data/siteData";
import Button from "../components/Button";

export default function Services() {
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
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight font-light">
            Refining Spaces through <span className="italic font-normal">Botanical Design.</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed font-light">
            We provide specialized design, sourcing, and installation services across landscaping, interior plant styling, and corporate gifting.
          </p>
        </div>
      </section> */}

      {/* 2. Services List - Alternating layout */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center`}
            >
              {/* Image Grid Column */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="aspect-[16/11] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-md rounded-[10px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02] rounded-[10px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Grid Column */}
              <div
                className={`lg:col-span-6 space-y-8 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {/* <span className="font-serif text-xl italic text-sage">
                      {service.num}
                    </span> */}
                    {/* <div className="h-[1px] w-8 bg-sage/40" /> */}
                    <span className="font-sans text-[13px] uppercase tracking-widest text-charcoal/40 font-semibold">
                      {service.title}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary font-light">
                    {service.headline}
                  </h2>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Subservice List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.subservices.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-sage rounded-full flex-shrink-0" />
                      <span className="font-sans text-xs text-charcoal/80 font-light">
                        {sub}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 ">
                  <Button to={service.path} variant="primary" className="rounded-[10px]">
                    {service.cta}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Pre-CTA */}
      <section className="bg-botanical text-white py-24 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white">
            Need a custom layout for a specific project?
          </h2>
          <p className="font-sans text-sm text-ivory/60 leading-relaxed font-light">
            We collaborate regularly with residential clients, corporate procurement partners, and interior design practices across Hyderabad to realize customized installations.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button to="/contact" variant="primary" className="bg-ivory text-primary border-ivory hover:bg-transparent hover:text-ivory">
              Request a Site Visit
            </Button> */}
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hello Vanora, I would like to schedule a service consultation.")}`}
              variant="secondary"
              className="border-white text-white hover:bg-ivory/10 hover:border-ivory rounded-[10px]"
            >
              Discuss on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
