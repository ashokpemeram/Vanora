// Centralized data and configurations for the Vanora luxury brand website.
// Modify these objects to easily update content across the website.

export const siteConfig = {
  brandName: "Vanora",
  tagline: "Where Nature Meets Refined Living.",
  description: "Thoughtfully designed landscapes, curated planting, and sophisticated gifting experiences for homes, businesses, and exceptional occasions in Hyderabad.",
  
  // Live production URL - used for canonical tags, sitemap, Open Graph, and schema markup
  siteUrl: "https://vanoragardens.com",

  // Business identity / NAP (Name, Address, Phone) - kept consistent across schema, footer, and contact
  business: {
    name: "Vanora",
    legalName: "Vanora Gardens",
    alternateName: "Vanora Landscaping & Plant Styling",
    description: "Luxury landscaping, house planting, and premium botanical corporate gifting studio in Hyderabad, India.",
    logo: "/favicon.svg",
    priceRange: "₹₹₹₹",
    currencyAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    geo: {
      latitude: 17.4990168,
      longitude: 78.4018135
    },
    openingHours: [
      "Mo-Sa 09:00-19:00",
      "Su 10:00-14:00"
    ]
  },
  
  // Contact details - NAP used across the site and structured data
  contact: {
    phone: "+91 91774 95073",
    phoneRaw: "+919177495073",
    email: "vanoragarden@gmail.com",
    whatsapp: "+91 91774 95073",
    whatsappRaw: "+919177495073",
    instagram: "https://www.instagram.com/vanora.garden",
    linkedin: "https://linkedin.com/company/vanora-botanical",
    address: "Vanora gardens, S NILAYAM, Sri ram nagar colony, Jahnavi intermediate collage, plot no: 897, opposite street GATTU, Hyderabad, Manikonda, Telangana 500089",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500089",
    addressCountry: "IN",
    googleMapsUrl: "https://maps.app.goo.gl/Je1a5S3aruk65jyQ6",
    whatsappMessage: "Hello Vanora, I would like to know more about your premium services."
  },

  // Neighbourhoods served for local SEO targeting
  serviceAreas: [
    "Jubilee Hills",
    "Banjara Hills",
    "Gachibowli",
    "Kokapet",
    "Hitech City",
    "Madhapur",
    "Kondapur",
    "Manikonda",
    "Financial District",
    "Nanakramguda"
  ],
  
  // SEO Meta defaults
  seo: {
    defaultTitle: "Luxury Landscaping & Plant Styling in Hyderabad | Vanora",
    defaultDescription: "Vanora creates refined landscapes, curated house planting, and premium corporate gifting experiences in Hyderabad. Discover thoughtful botanical design for exceptional spaces.",
    defaultKeywords: "Luxury landscaping services in Hyderabad, Landscaping company in Hyderabad, Premium landscaping Hyderabad, Landscape design Hyderabad, Garden design Hyderabad, House plant services Hyderabad, Indoor plants Hyderabad, Corporate gifting Hyderabad, Premium corporate gifts Hyderabad, Plant gifting Hyderabad, Luxury garden design Hyderabad",
    ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Luxury landscaping by Vanora in Hyderabad"
  }
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Corporate Gifting", path: "/corporate-gifting" },
  { name: "Contact", path: "/contact" }
];

export const servicesData = [
  {
    id: "landscaping",
    num: "01",
    title: "Landscaping",
    headline: "Landscapes That Belong.",
    description: "Design and create sophisticated outdoor environments that complement architecture, lifestyle, and surroundings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", // Luxury villa pool/landscape
    subservices: [
      "Landscape Architecture & Design",
      "Garden Concept Planning",
      "Curated Plant & Material Selection",
      "Softscape & Hardscape Styling",
      "Water Feature Integration",
      "Bespoke Outdoor Lighting Layouts",
      "Sustainable Irrigation Systems",
      "Long-term Maintenance Planning"
    ],
    cta: "Explore Landscaping",
    path: "/services/landscaping"
  },
  {
    id: "house-planting",
    num: "02",
    title: "House Planting",
    headline: "Bring Nature Home.",
    description: "Curate indoor and outdoor plant environments that bring character, freshness, and natural elegance into contemporary homes.",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop", // Elegant interior plant styling
    subservices: [
      "Indoor Plant Styling & Curation",
      "Bespoke Balcony & Terrace Gardens",
      "Statement Specimen Plant Sourcing",
      "Decorative Planter & Vessel Selection",
      "Spatial & Light Assessment Layouts",
      "Vertical Green Walls",
      "Seasonal Plant Refreshes",
      "Plant Care Guidance & Support"
    ],
    cta: "Explore House Planting",
    path: "/services/house-planting"
  },
  {
    id: "corporate-gifting",
    num: "03",
    title: "Corporate Gifting",
    headline: "Gifts That Grow Beyond the Moment.",
    description: "Create sophisticated botanical gifting experiences for corporate relationships, celebrations, milestones, events, and special occasions.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop", // Luxury plant arrangement gift
    subservices: [
      "Premium Living Plant Gifts",
      "Bespoke Executive Gift Curation",
      "Artisanal Ceramic & Wooden Planters",
      "Custom Brand Engraving & Packaging",
      "Client & Business Partner Milestones",
      "Employee Wellness & Celebration Gifts",
      "Luxury Hospitality & Event Styling",
      "Seamless Bulk Delivery in Hyderabad"
    ],
    cta: "Explore Corporate Gifting",
    path: "/corporate-gifting"
  }
];

export const whyChooseVanora = [
  {
    title: "Thoughtful Design",
    description: "Every space, choice, and gift is curated with strict artistic intention. We respect spatial architecture and design in harmony with it."
  },
  {
    title: "Curated Selection",
    description: "Plants, soils, and architectural elements are meticulously selected for quality, health, unique character, and longevity."
  },
  {
    title: "Personalized Experience",
    description: "We tailormake layouts and selections to your specific environment, matching your aesthetic guidelines, daylight exposure, and lifestyle."
  },
  {
    title: "Premium Execution",
    description: "From soil chemistry and drainage architecture to physical plant positioning, every micro-detail receives precision craftsmanship."
  },
  {
    title: "Professional Service",
    description: "Transparent billing, reliable timelines, regular project check-ins, and a highly refined, premium client relationship experience."
  }
];

export const projectsData = [
  {
    id: "jubilee-hills-residence",
    title: "The Courtyard Residence",
    location: "Jubilee Hills, Hyderabad",
    category: "Landscaping",
    type: "Luxury Residence",
    image: "https://images.unsplash.com/photo-1558904541-efa8c1a68feb?q=80&w=1000&auto=format&fit=crop", // Modern architect villa garden
    description: "A minimalist outdoor sanctuary designed to dialogue with the home's contemporary concrete and wood architecture.",
    overview: "Commissioned by a prominent family in Jubilee Hills, this courtyard landscape was envisioned as a tranquil oasis that integrates seamlessly with the villa's high-ceiling glass facades. The project demanded structural greenery that thrives in Hyderabad's semi-arid climate while creating a lush, cool microclimate.",
    approach: "We introduced a composition of native specimen trees, architectural boulders, and a serene water channel. By combining soft white river stones with structured layers of broad-leafed plants, we balanced geometric masonry with organic movement.",
    plants: [
      { name: "Plumeria Alba (Temple Tree)", role: "Sculptural centerpiece with seasonal white blooms" },
      { name: "Ficus Lyrata (Fiddle Leaf Fig)", role: "Large structural foliage along the glass corridor" },
      { name: "Nephrolepis Exaltata (Boston Fern)", role: "Soft texture undergrowth layering the shaded borders" },
      { name: "Pennisetum Setaceum (Fountain Grass)", role: "Delicate grass elements capturing light and breeze" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800"
    ]
  },
  {
    id: "gachibowli-penthouse",
    title: "Sky Sanctuary Terrace",
    location: "Gachibowli, Hyderabad",
    category: "Plant Styling",
    type: "Terrace Garden",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop", // Luxury penthouse/terrace room
    description: "An elevated terrace garden blending statement architectural planters with wind-resistant botanical layouts.",
    overview: "Perched on the 24th floor in Gachibowli, this penthouse terrace required styling that could withstand heavy winds and direct sunlight while delivering a private, luxurious outdoor escape. The owners desired an outdoor living area for hosting private gatherings.",
    approach: "We used premium custom glass-reinforced concrete (GRC) containers in earth tones to house hardy yet highly aesthetic plants. Drip lines were subtly integrated, and ambient warm lighting was installed to transform the garden into an enchanting lounge after sunset.",
    plants: [
      { name: "Ravenala Madagascariensis (Traveler's Palm)", role: "Bold architectural backdrop offering wind resistance" },
      { name: "Sansevieria Trifasciata (Snake Plant)", role: "Low maintenance, highly structured vertical dividers" },
      { name: "Olea Europaea (Olive Tree)", role: "Muted green textures complementing the stone pavement" },
      { name: "Bougainvillea Spectabilis", role: "Vibrant accents of color climbing the custom wooden trellises" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800"
    ]
  },
  {
    id: "hitech-corp-headquarters",
    title: "Biophilic Office Pavilion",
    location: "Hitech City, Hyderabad",
    category: "Plant Styling",
    type: "Corporate Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", // Luxury office interior
    description: "A comprehensive biophilic installation optimizing air quality, acoustic dampening, and employee focus.",
    overview: "For a leading technology firm in Hitech City, we designed an extensive biophilic ecosystem across four floors of executive suites and breakout pavilions. The goal was to combat screen fatigue and elevate client-hosting lobbies.",
    approach: "Using state-of-the-art self-watering systems, we built sweeping moss walls and positioned heavy statement planters in key visual intersections. Air-purifying species were specifically chosen to continuously condition indoor environments.",
    plants: [
      { name: "Dracaena Reflexa (Song of India)", role: "Visual highlights in collaborative focus areas" },
      { name: "Spathiphyllum (Peace Lily)", role: "Lush, dark green floor foliage that actively filters indoor air" },
      { name: "Philodendron Xanadu", role: "Dramatic split-leaf textures in custom wooden planters" },
      { name: "Chamaedorea Elegans (Parlour Palm)", role: "Feathery partitions offering acoustic softening" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800",
      "https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?q=80&w=800"
    ]
  },
  {
    id: "kokapet-villa-gardens",
    title: "Bespoke Villa Grounds",
    location: "Kokapet, Hyderabad",
    category: "Landscaping",
    type: "Luxury Residence",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop", // Luxury house pool edge
    description: "A private estate landscape incorporating mature trees, curated lawns, and custom granite hardscaping.",
    overview: "This sprawling estate in Kokapet requested a grand botanical landscape that respects the surrounding rolling hills. The owners required separate zones for quiet contemplation, formal entertaining, and organic herb cultivation.",
    approach: "We carved organic walkways out of local grey granite, flanking them with layered shrubbery and shade trees. An elegant koi pond with natural stone steps was introduced as the central focal point of the estate.",
    plants: [
      { name: "Phoenix Dactylifera (Date Palm)", role: "Towering structural elements framing the main entryway" },
      { name: "Zoysia Japonica (Premium Lawn Grass)", role: "Velvety, fine-textured lawn carpeting the social lawns" },
      { name: "Murraya Paniculata (Orange Jasmine)", role: "Fragrant perimeter hedges providing soft privacy screens" },
      { name: "Jasminum Sambac (Mogra)", role: "Intense local fragrance near outdoor lounge pavilions" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558904541-efa8c1a68feb?q=80&w=800",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800"
    ]
  },
  {
    id: "gifting-showcase-festival",
    title: "The Heritage Gifting Curations",
    location: "Banjara Hills, Hyderabad",
    category: "Gifting",
    type: "Premium Corporate Gifting",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1000&auto=format&fit=crop", // Botanical premium gifting
    description: "Bespoke botanical gifts featuring custom hand-thrown ceramics, brass details, and curated mini-bonsais.",
    overview: "An exclusive commission for a real-estate conglomerate's executive Diwali gifting cycle. They demanded gifts that would be kept on workdesks permanently rather than discarded, conveying premium craftsmanship and longevity.",
    approach: "We designed a collection of rare, slow-growing bonsai specimens and elegant succulent collections housed in handcrafted matte-glazed ceramic vessels. Each arrangement included local brass watering mist pins and a custom calligraphed maintenance scroll.",
    plants: [
      { name: "Ficus Microcarpa (Ginseng Bonsai)", role: "Charming mini-tree symbolizing longevity and resilience" },
      { name: "Crassula Ovata (Jade Plant)", role: "Structured succulent leaf clusters carrying wishes of prosperity" },
      { name: "Haworthia Fasciata (Zebra Plant)", role: "Geometric container accents requiring minimal attention" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800"
    ]
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Discover",
    description: "We begin with a detailed consultation at your site or workspace in Hyderabad, understanding your spatial constraints, natural lighting profiles, architectural design language, and personal lifestyle or branding goals."
  },
  {
    num: "02",
    title: "Curate",
    description: "Our design team creates a tailored concept moodboard, structural sketches, material schemes, and a meticulously researched plant list optimized for micro-climate performance and aesthetic synergy."
  },
  {
    num: "03",
    title: "Create",
    description: "With absolute attention to craftsmanship, our master gardeners and landscape technicians execute the installation. We manage all details: soil enrichment, drainage engineering, layout, and placement."
  },
  {
    num: "04",
    title: "Refine",
    description: "We complete the final details, clean the space thoroughly, set up automatic irrigation runs if applicable, and hand over a customized, easy-to-follow care plan. We check back to guarantee healthy growth."
  }
];

export const testimonialsData = [
  {
    quote: "Vanora transformed our courtyard into a living art gallery. Their team deeply understood how to complement our concrete villa with striking architectural plants. Absolutely professional and highly recommended.",
    author: "Aditya Reddy",
    designation: "Villa Owner, Jubilee Hills"
  },
  {
    quote: "For our office building in Hitech City, biophilic design was crucial. Vanora did not just supply plants; they engineered a spectacular indoor ecosystem that has dramatically improved our office atmosphere.",
    author: "Srinivas Rao",
    designation: "VP Operations, TechCorp"
  },
  {
    quote: "Our premium clients expect the absolute best, and Vanora's custom ceramic planter collections and rare bonsai arrangements exceeded all gifting standards. They represent real botanical craftsmanship.",
    author: "Meera Krishnan",
    designation: "Managing Director, Studio MK Architects"
  }
];

export const faqData = [
  {
    question: "Do you design landscaping for residential villas outside Hyderabad?",
    answer: "Currently, our primary design and execution team operates inside Hyderabad, serving locations such as Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, Financial District, and nearby residential zones. For highly specialized commissions, we consult on landscape architecture design documents pan-India."
  },
  {
    question: "How do you select plants for indoor plant styling?",
    answer: "Every space receives a formal lighting assessment. We measure natural light levels (lux) and spatial air conditions before selecting species. We source only high-grade, acclimated specimen plants that are robust enough to flourish indoors with standard care."
  },
  {
    question: "Can we customize corporate botanical gifts with our corporate branding?",
    answer: "Yes, we curate bespoke packaging, artisanal ceramic colors, and wooden gift boxes which can be laser-engraved or subtly hot-stamped with your company logo. We require a minimum order lead time of 2-4 weeks for custom-branded orders."
  },
  {
    question: "Do you offer post-installation garden maintenance?",
    answer: "Yes. Every landscape design project includes a detailed maintenance handoff plan. Additionally, we offer custom-tailored seasonal maintenance schedules for premium gardens, balcony estates, and corporate office parks to keep them looking pristine."
  },
  {
    question: "How does the design consultation process work?",
    answer: "It begins by booking a consultation via our website form, email, or WhatsApp. We hold an initial site walk-through, analyze lighting, soil, and drainage, and discuss style parameters. Following this, we submit an editorial landscape design proposal."
  }
];
