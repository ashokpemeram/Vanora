import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqData } from "../data/siteData";
import Button from "../components/Button";

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-primary/10 py-6 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-serif text-lg md:text-xl text-primary group-hover:text-secondary transition-colors font-medium">
          {question}
        </span>
        <div className="ml-4 bg-primary/5 p-2 text-secondary flex-shrink-0">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 font-sans text-sm text-charcoal/70 leading-relaxed font-light max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Common Inquiries
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight font-light">
            Frequently Asked <span className="italic font-normal">Questions</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-xl mx-auto leading-relaxed font-light">
            Find answers regarding our design stages, plant sourcing policies, custom branding corporate gifts, and servicing details.
          </p>
        </div>
      </section>

      {/* 2. Accordion Container */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="border border-primary/10 bg-ivory p-6 md:p-12 shadow-sm">
          <div className="divide-y divide-primary/10">
            {faqData.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onClick={() => handleToggle(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Closing CTA */}
      <section className="py-16 text-center max-w-xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif text-primary font-light">
          Have a different question?
        </h2>
        <p className="font-sans text-xs text-charcoal/60 leading-relaxed font-light">
          Our design concierge team is ready to walk you through our billing, site timelines, or bulk logistics details.
        </p>
        <div className="pt-2">
          <Button to="/contact" variant="primary">
            Ask Our Concierge
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
