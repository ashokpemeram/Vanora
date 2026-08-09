import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/siteData";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  useEffect(() => {
    document.title = "Our Selected Works | Vanora — Botanical Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse Vanora's selected landscaping, house planting, and corporate gifting projects in Hyderabad. Architectural plant styling for luxury homes."
      );
    }
  }, []);

  const categories = ["All", "Landscaping", "Plant Styling", "Gifting"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 min-h-screen"
    >
      {/* 1. Header */}
      <section className="bg-primary/5 py-20 px-6 md:px-12 text-center fine-border-b border-primary/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
            Selected Works
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight font-light">
            Botanical Portfolio
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed font-light">
            A curated showcase of high-end landscaping, indoor styling, and premium botanical gift commissions executed in Hyderabad.
          </p>
        </div>
      </section>

      {/* 2. Filters */}
      <section className="py-12 px-6 flex justify-center border-b border-primary/5">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-sans ${
                filter === cat
                  ? "bg-primary text-ivory border border-primary"
                  : "bg-transparent text-charcoal/60 border border-primary/5 hover:border-primary/20 hover:text-primary"
              }`}
              style={{ borderRadius: "2px" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Projects Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="group border border-primary/5 p-4 bg-ivory shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Image wrapper */}
                  <Link to={`/projects/${project.id}`} className="block overflow-hidden relative aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover light overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>

                  {/* Context Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-charcoal/40 font-semibold font-sans">
                      <span>{project.location}</span>
                      <span>{project.type}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-primary group-hover:text-secondary transition-colors">
                      <Link to={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>
                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/5 mt-6 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-sage">{project.category}</span>
                  <Link to={`/projects/${project.id}`} className="text-xs font-sans font-medium text-primary inline-flex items-center gap-1 hover:text-secondary">
                    Read Approach <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.div>
  );
}
