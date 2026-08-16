import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Tag } from "lucide-react";
import { projectsData } from "../data/siteData";
import Button from "../components/Button";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center space-y-6">
        <h1 className="text-3xl font-serif text-primary">Project Not Found</h1>
        <p className="font-sans text-sm text-charcoal/60">
          The selected work could not be discovered.
        </p>
        <Link to="/projects" className="text-sm font-sans text-primary hover:underline">
          Return to Selected Works
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 min-h-screen pb-16"
    >
      {/* Back to Projects */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal/60 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Selected Works
        </Link>
      </div>

      {/* 1. Project Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-primary/10">
        <div className="lg:col-span-8">
          <div className="aspect-[16/10] overflow-hidden border border-primary/10 p-3 bg-ivory shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <span className="font-sans text-[10px] uppercase tracking-widest text-sage font-bold bg-primary/5 px-3 py-1.5 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight font-light">
              {project.title}
            </h1>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-primary/5 font-sans text-xs">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sage" />
              <div>
                <span className="text-charcoal/40 uppercase tracking-widest block text-[9px] font-semibold">Location</span>
                <span className="text-charcoal/80 font-medium">{project.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tag className="h-4 w-4 text-sage" />
              <div>
                <span className="text-charcoal/40 uppercase tracking-widest block text-[9px] font-semibold">Type</span>
                <span className="text-charcoal/80 font-medium">{project.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Case Study */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-primary/10">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-primary font-light">
            Project Overview & Scope
          </h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
            {project.overview}
          </p>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-primary font-light">
            The Design Approach
          </h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
            {project.approach}
          </p>
        </div>
      </section>

      {/* 3. Plant Palette */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-primary/10">
        <div className="lg:col-span-4 space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
            Botanical Blueprint
          </span>
          <h2 className="text-3xl font-serif text-primary font-light">
            Curated Plant Selection
          </h2>
          <p className="font-sans text-xs text-charcoal/60 leading-relaxed font-light">
            Each plant was curated specifically to stand the weather profile, architectural shadow mapping, and maintenance budget of this commission.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-primary/10 border-t border-b border-primary/10">
            {project.plants ? project.plants.map((plant, idx) => (
              <div key={idx} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <span className="sm:col-span-5 font-serif text-base text-primary italic">
                  {plant.name}
                </span>
                <span className="sm:col-span-7 font-sans text-xs text-charcoal/70 font-light">
                  {plant.role}
                </span>
              </div>
            )) : (
              <div className="py-4 text-xs font-sans text-charcoal/50 italic">Botanical detail log forthcoming.</div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-primary text-center font-light">
            Design details in Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((imgUrl, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden border border-primary/5 p-2 bg-ivory shadow-sm">
                <img
                  src={imgUrl}
                  alt={`${project.title} detail ${i + 1}`}
                  className="w-full h-full object-cover filter contrast-[101%]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Closing Consultation CTA */}
      <section className="max-w-3xl mx-auto text-center px-6 pt-12 space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif text-primary font-light">
          Inspired by this project?
        </h2>
        <p className="font-sans text-xs text-charcoal/60 leading-relaxed font-light">
          Let’s discuss how to bring a similar degree of botanical styling and detailed layout coordination to your residential or corporate environment.
        </p>
        <div className="pt-2">
          <Button to="/contact" variant="primary">
            Request Site Consultation
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
