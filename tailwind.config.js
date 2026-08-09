/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#183A2A",      // Deep Forest Green
        botanical: "#0D1F16",    // Dark Botanical Green
        secondary: "#315C43",    // Rich Olive
        sage: "#7D927C",         // Soft Sage
        moss: "#65775A",         // Muted Moss
        ivory: "#F7F5EE",        // Warm Ivory
        beige: "#E7E0D2",        // Warm Beige
        charcoal: "#1F2421",     // Charcoal
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
}
