import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { siteConfig, servicesData, whyChooseVanora, projectsData, processSteps, testimonialsData } from "../data/siteData";
import Button from "../components/Button";

// Framer motion variants for subtle, slow animations
const fader = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  // Dynamic SEO Setup
  useEffect(() => {
    document.title = siteConfig.seo.defaultTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.seo.defaultDescription);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-botanical text-ivory">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.15, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 0.45 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Architecture Landscape"
            className="w-full h-full object-cover object-center filter grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-botanical via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage block font-medium">
              Botanical Lifestyle Design Studio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory leading-[1.1] font-light">
              Where Nature Meets <br />
              <span className="italic font-normal">Refined Living.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-sans text-sm md:text-base text-ivory/70 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button to="/services" variant="primary" className="rounded-[10px]">
              Explore Our Services
            </Button>
            {/* <Button to="/contact" variant="secondary" className="border-ivory/20 text-ivory hover:bg-ivory/10 hover:border-ivory">
              Book a Consultation
            </Button> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/40">
          <span className="font-sans text-[9px] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fader}
            className="lg:col-span-7 space-y-8"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              The Vanora Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight font-light">
              Designed by Nature. <br />
              <span className="italic font-normal">Refined by Vanora.</span>
            </h2>
            <div className="space-y-6 font-sans text-sm md:text-base text-charcoal/70 leading-relaxed font-light">
              <p>
                We believe that a garden is not just an assembly of plants, but an extension of architectural space and individual spirit. At Vanora, we curate botanical experiences that thrive in harmony with the environment, elevated by a sophisticated aesthetic.
              </p>
              <p>
                Whether it is the expansive grounds of a luxury residence in Jubilee Hills, biophilic indoor styling for corporate headquarters in Hitech City, or handcrafted plant gifts for executive partnerships, our team delivers absolute craftsmanship, spatial alignment, and scientific care.
              </p>
            </div>
            <div className="pt-4">
              <Button to="/about" variant="text">
                Read Our Story
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[10px] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop"
                alt="Refined Interior Plant Styling"
                className="w-full h-full object-cover filter contrast-[105%] rounded-[10px]"
              />
            </div>
            {/* Subtle floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-ivory py-6 px-8 hidden sm:block shadow-xl">
              <div className="font-serif text-3xl font-light italic">Artisanal</div>
              <div className="font-sans text-[9px] uppercase tracking-widest text-sage mt-1">Botanical Curation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 md:py-32 bg-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
                Our Areas of Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight font-light">
                Botanical Craftsmanship
              </h2>
            </div>
            <Button to="/services" variant="secondary" className="border-primary/20 rounded-[10px]">
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fader}
                transition={{ delay: index * 0.15 }}
                className="bg-ivory rounded-[10px] border border-primary/5 p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-primary/5 pb-4">
                    <span className="font-sans text-[15px] uppercase tracking-widest text-charcoal/40 font-semibold">{service.title}</span>
                  </div>

                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full rounded-[10px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-primary">{service.headline}</h3>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <Button to={service.path} variant="text" className="group-hover:text-primary">
                    {service.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY VANORA */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              The Standard of Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight font-light">
              Why Discerning <br />Clients Choose Us
            </h2>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-light">
              We operate at the intersection of horticulture, spatial architecture, and luxury customer service. Every project receives an uncompromising dedication to aesthetic detailing.
            </p>
            <div className="hidden lg:block aspect-video overflow-hidden border border-primary/5">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800" 
                alt="Luxury botanical garden detail" 
                className="w-full h-full object-cover filter contrast-[98%] rounded-[10px]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="divide-y divide-primary/10">
              {whyChooseVanora.map((item, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0 flex gap-6 items-start">
                  <span className="font-serif text-lg italic text-sage pt-1">0{idx + 1}</span>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-primary">{item.title}</h4>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORKS (PORTFOLIO PREVIEW) */}
      {/* <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary font-light">
                Selected Works
              </h2>
            </div>
            <Button to="/projects" variant="secondary" className="border-primary/20">
              View Full Gallery
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fader}
                transition={{ delay: index * 0.15 }}
                className="group border border-primary/5 p-4 bg-ivory shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
              >
                <Link to={`/projects/${project.id}`} className="block overflow-hidden relative aspect-[4/3] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-charcoal/40 font-semibold font-sans">
                    <span>{project.location}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3 className="text-xl font-serif text-primary group-hover:text-secondary transition-colors">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="font-sans text-xs text-charcoal/60 leading-relaxed line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-primary/5 mt-6 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-sage">{project.category}</span>
                  <Link to={`/projects/${project.id}`} className="text-xs font-sans font-medium text-primary inline-flex items-center gap-1 hover:text-secondary">
                    Read Approach <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 6. PROCESS SECTION */}
      {/* <section className="py-24 md:py-32 bg-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              The Path to Perfection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight font-light">
              Our Design & Curation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-ivory border border-primary/5 p-8 relative flex flex-col justify-between shadow-sm">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-primary/20 z-10" />
                )}
                
                <div className="space-y-6">
                  <span className="font-serif text-4xl italic text-sage/40 block">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl text-primary">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. TESTIMONIALS */}
      {/* <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto fine-border-b border-primary/10">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Client Praises
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight font-light">
              Refined Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="border border-primary/10 p-8 flex flex-col justify-between bg-ivory shadow-sm relative after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] after:from-primary/5 after:to-transparent"
              >
                <div className="space-y-6">
                  <span className="font-serif text-6xl text-sage/20 block h-4">“</span>
                  <p className="font-serif text-base italic text-primary/90 leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-primary/5 space-y-1">
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.author}
                  </h4>
                  <p className="font-sans text-[10px] tracking-wide text-charcoal/50">
                    {item.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8. CALL TO ACTION */}
      <section className="py-24 md:py-32 px-6 text-center bg-botanical text-ivory relative overflow-hidden">
        {/* Subtle green pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#183a2a]/20 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-sage font-medium block">
            Begin Your Project
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-ivory font-light leading-tight">
            Let’s Create Something <br />
            <span className="italic font-normal">Remarkable.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-ivory/60 max-w-xl mx-auto leading-relaxed font-light">
            Whether you are transforming a residence, refreshing a workspace, or looking for a thoughtful corporate gift, let’s design something distinctly yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* <Button to="/contact" variant="primary" className="bg-ivory text-primary border-ivory hover:bg-transparent hover:text-ivory">
              Book a Consultation
            </Button> */}
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              variant="secondary"
              className="border-white text-white hover:bg-ivory/10 hover:border-ivory rounded-[10px]"
            >
              WhatsApp Us
            </Button> 
          </div>
        </div>
      </section>
    </div>
  );
}
