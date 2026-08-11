import { siteConfig, projectsData } from "../data/siteData";

const { siteUrl, seo: defaultSeo } = siteConfig;

// Per-route SEO metadata. Titles stay under ~60 chars, descriptions ~155 chars.
// `noindex` marks non-indexable pages (e.g. 404).
export const pageSeo = {
  "/": {
    title: "Luxury Landscaping & Plant Styling in Hyderabad | Vanora",
    description:
      "Vanora designs luxury landscapes, curated house planting, and premium corporate plant gifting in Hyderabad. Book a botanical design consultation in Jubilee Hills, Kokapet & Gachibowli.",
    keywords:
      "Luxury landscaping services in Hyderabad, Landscaping company in Hyderabad, Premium landscaping Hyderabad, Landscape design Hyderabad, Garden design Hyderabad, House plant services Hyderabad, Indoor plants Hyderabad, Corporate gifting Hyderabad, Luxury garden design Hyderabad, Vanora",
    ogImage: defaultSeo.ogImage,
    ogImageAlt: defaultSeo.ogImageAlt,
    type: "website",
  },
  "/about": {
    title: "About Vanora | Luxury Botanical Design Studio in Hyderabad",
    description:
      "Vanora is a high-end botanical design studio in Hyderabad, creating architectural landscapes, curated interiors, and premium plant styling for discerning clients.",
    keywords:
      "Vanora about, botanical design studio Hyderabad, landscape design company Hyderabad, luxury garden studio, plant styling studio Hyderabad",
    ogImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Vanora botanical design studio in Hyderabad",
    type: "website",
  },
  "/services": {
    title: "Landscaping, Plant Styling & Corporate Gifting | Vanora",
    description:
      "Explore Vanora's premium services in Hyderabad: luxury landscaping, indoor house planting & terrace styling, and bespoke botanical corporate gifting.",
    keywords:
      "Landscaping services Hyderabad, plant styling services, indoor plant services Hyderabad, corporate gifting services Hyderabad, garden services Hyderabad",
    ogImage: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Vanora botanical services in Hyderabad",
    type: "website",
  },
  "/services/landscaping": {
    title: "Luxury Landscaping Company in Hyderabad | Vanora",
    description:
      "Bespoke landscape architecture, garden design, and outdoor installation for luxury villas and residences across Hyderabad. Design-led landscaping by Vanora.",
    keywords:
      "Luxury landscaping Hyderabad, landscape architect Hyderabad, garden design company Hyderabad, villa landscaping, landscape installation Hyderabad, hardscape design Hyderabad",
    ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Luxury landscaping design in Hyderabad",
    type: "website",
  },
  "/services/house-planting": {
    title: "Indoor Plant Styling & Terrace Garden Design in Hyderabad | Vanora",
    description:
      "Curated indoor plants, balcony and terrace gardens, statement specimens, and artisan planters for contemporary homes in Hyderabad by Vanora.",
    keywords:
      "Indoor plant styling Hyderabad, house plants Hyderabad, terrace garden design, balcony garden Hyderabad, indoor plant service, vertical garden Hyderabad",
    ogImage: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Indoor plant styling by Vanora Hyderabad",
    type: "website",
  },
  "/corporate-gifting": {
    title: "Corporate Plant Gifting in Hyderabad | Premium Botanical Gifts",
    description:
      "Premium botanical corporate gifts in Hyderabad: handcrafted planters, bonsai collections, custom brand engraving, and bulk gifting delivery by Vanora.",
    keywords:
      "Corporate gifting Hyderabad, corporate plant gifts, premium corporate gifts Hyderabad, plant gift delivery Hyderabad, branded corporate gifting, diwali corporate gifts",
    ogImage: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Premium corporate plant gifting by Vanora",
    type: "website",
  },
  "/projects": {
    title: "Landscaping Projects & Portfolio in Hyderabad | Vanora",
    description:
      "A curated portfolio of luxury landscaping, indoor plant styling, terrace gardens, and premium botanical gifting projects across Hyderabad.",
    keywords:
      "Landscaping projects Hyderabad, garden design portfolio, villa landscaping projects, terrace garden projects, plant styling portfolio Hyderabad",
    ogImage: "https://images.unsplash.com/photo-1558904541-efa8c1a68feb?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Vanora landscaping projects in Hyderabad",
    type: "website",
  },
  "/contact": {
    title: "Contact Vanora | Landscape Design Consultation in Hyderabad",
    description:
      "Book a landscape design or plant styling consultation with Vanora in Hyderabad. Call +91 91774 95073, WhatsApp, or visit our Manikonda studio.",
    keywords:
      "Contact Vanora, landscape consultation Hyderabad, book garden design consultation, landscaping near me Hyderabad, plant styling contact",
    ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Contact Vanora for landscaping in Hyderabad",
    type: "website",
  },
  "/faq": {
    title: "FAQ | Landscaping & Plant Styling Hyderabad | Vanora",
    description:
      "Answers to common questions about Vanora's landscaping design cycles, indoor plant styling, corporate brand gifts, and garden maintenance in Hyderabad.",
    keywords:
      "Landscaping FAQ Hyderabad, plant styling FAQ, corporate gifting questions, garden maintenance Hyderabad, Vanora FAQ",
    ogImage: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
    ogImageAlt: "Vanora landscaping FAQ Hyderabad",
    type: "website",
  },
  "/404": {
    title: "Page Not Found | Vanora",
    description: "The page you were looking for could not be found. Explore Vanora's landscaping and plant styling services in Hyderabad.",
    keywords: "",
    ogImage: defaultSeo.ogImage,
    ogImageAlt: defaultSeo.ogImageAlt,
    type: "website",
    noindex: true,
  },
};

// Dynamic resolver for project detail pages (SEO built from project data)
export function getProjectSeo(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return null;
  return {
    title: `${project.title} | Landscaping Project in ${project.location}`,
    description: `${project.description} A ${project.type.toLowerCase()} ${project.category.toLowerCase()} commission in ${project.location}, Hyderabad by Vanora.`,
    keywords: `${project.location} landscaping, ${project.category.toLowerCase()} ${project.location}, luxury garden project Hyderabad, Vanora portfolio`,
    ogImage: project.image,
    ogImageAlt: `${project.title} in ${project.location}`,
    type: "article",
  };
}

// Resolve full SEO object for any pathname
export function getSeoForPath(pathname) {
  if (pageSeo[pathname]) return pageSeo[pathname];

  const projectMatch = pathname.match(/^\/projects\/([^/]+)/);
  if (projectMatch) {
    const projectSeo = getProjectSeo(projectMatch[1]);
    if (projectSeo) return projectSeo;
  }
  return null;
}

// Build absolute canonical URL for a path
export function getCanonicalUrl(pathname) {
  const clean = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return `${siteUrl}${clean === "/" ? "/" : clean}`;
}

// All indexable routes (used for sitemap generation and prerendering)
export function getAllRoutes() {
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/services/landscaping",
    "/services/house-planting",
    "/corporate-gifting",
    "/projects",
    "/contact",
    "/faq",
  ];
  const projectRoutes = projectsData.map((p) => `/projects/${p.id}`);
  return [...staticRoutes, ...projectRoutes];
}
