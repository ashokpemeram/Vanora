import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-40 pb-32 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-xl mx-auto px-6 text-center space-y-8">
        <span className="font-serif text-8xl md:text-9xl italic text-primary/15 block leading-none">
          404
        </span>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif text-primary font-light">
            This Page Hasn&apos;t Been Planted Yet
          </h1>
          <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-light max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
            Explore our luxury landscaping, plant styling, and corporate gifting
            services in Hyderabad instead.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary" className="rounded-[10px]">
            Back to Home
          </Button>
          <Button to="/contact" variant="secondary" className="rounded-[10px]">
            Contact Vanora
          </Button>
        </div>
        <div className="pt-4">
          <Link
            to="/services"
            className="font-sans text-[10px] uppercase tracking-widest text-sage hover:text-primary transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
