import { Phone } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[20px] fixed bottom-8 right-8 z-40 flex items-center gap-3 bg-primary text-ivory px-4 py-3 shadow-xl hover:bg-secondary border border-primary/20 transition-all duration-300 group hover:scale-[1.03]"
      style={{ borderRadius: "2px" }}
      aria-label="Contact Vanora on WhatsApp"
    >
      {/* Sleek inline SVG for WhatsApp or neat outline icon */}
      <svg
        className="h-4 w-4 fill-current text-ivory transition-transform duration-500 group-hover:rotate-[360deg]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.308 0 11.777 0c3.136.001 6.086 1.22 8.3 3.434 2.214 2.215 3.431 5.167 3.43 8.302-.005 6.525-5.25 11.77-11.72 11.77-2.002-.001-3.97-.512-5.713-1.488L0 24zm6.59-4.859c1.72.101 3.391.56 4.958.56 5.4 0 9.79-4.386 9.794-9.774a9.664 9.664 0 0 0-2.859-6.918 9.68 9.68 0 0 0-6.93-2.858c-5.4 0-9.79 4.386-9.794 9.774-.002 2.008.528 3.97 1.528 5.679l-1.002 3.657 3.753-.984zm11.385-6.84c-.266-.134-1.577-.777-1.821-.865-.243-.09-.42-.134-.596.134-.176.268-.682.865-.836 1.042-.154.179-.309.201-.575.067-.266-.134-1.126-.414-2.145-1.321-.792-.705-1.327-1.577-1.482-1.846-.155-.267-.016-.411.117-.544.12-.12.266-.31.399-.465.133-.156.177-.267.266-.445.089-.178.044-.334-.022-.468-.066-.134-.596-1.432-.816-1.968-.215-.518-.432-.446-.596-.453-.154-.007-.33-.008-.507-.008-.177 0-.465.067-.708.333-.243.267-.929.908-.929 2.212 0 1.305.95 2.56 1.083 2.738.133.178 1.87 2.852 4.53 3.998.633.272 1.127.435 1.513.557.636.202 1.215.174 1.673.106.51-.077 1.577-.644 1.8-.1.222-.544.222-1.01.155-1.1-.066-.09-.244-.134-.51-.268z" />
      </svg>
      <span className="font-sans text-[10px] uppercase tracking-widest font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap">
        Enquire Now
      </span>
    </a>
  );
}
