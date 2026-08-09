import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary", // primary, secondary, text
  className = "",
  type = "button"
}) {
  const baseStyles = "inline-flex items-center justify-center font-sans text-xs uppercase tracking-widest transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-primary/30";
  
  const variants = {
    primary: "bg-primary text-ivory px-6 py-4 border border-primary hover:bg-transparent hover:text-primary",
    secondary: "bg-transparent text-primary px-6 py-4 border border-primary/20 hover:border-primary hover:bg-primary/5",
    text: "bg-transparent text-primary py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary after:scale-x-100 after:origin-right hover:after:scale-x-0 hover:after:origin-left after:transition-transform after:duration-300"
  };

  const styleClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styleClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styleClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styleClasses} onClick={onClick}>
      {children}
    </button>
  );
}
