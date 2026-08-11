import { siteConfig } from "../data/siteData";
import { getCanonicalUrl } from "./pages";
import { siteSchema, getPageSchema } from "./jsonLd";

const { brandName, business } = siteConfig;

const FONT_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap";

function meta(name, content) {
  return `<meta name="${name}" content="${content}"/>`;
}

function og(property, content) {
  return `<meta property="${property}" content="${content}"/>`;
}

function jsonLdScripts(pathname) {
  const schemas = [...siteSchema(), ...getPageSchema(pathname)];
  return schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");
}

// Builds the complete <head> inner markup for a given route. Used by the
// prerender script to emit fully static, SEO-ready HTML per page.
export function buildHead(pathname, seo) {
  const canonical = getCanonicalUrl(pathname);
  const robots = seo.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const heroPreload =
    pathname === "/" ? `<link rel="preload" as="image" href="${seo.ogImage}" fetchpriority="high"/>` : "";

  const lines = [
    `<meta charset="UTF-8"/>`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`,
    `<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>`,
    meta("theme-color", "#183A2A"),
    meta("robots", robots),
    meta("googlebot", robots),
    meta("format-detection", "telephone=yes"),
    `<title>${seo.title}</title>`,
    meta("description", seo.description),
    seo.keywords ? meta("keywords", seo.keywords) : "",
    meta("author", `${brandName} | ${business.alternateName}`),
    meta("geo.region", "IN-TG"),
    meta("geo.placename", "Hyderabad, Telangana"),
    meta("geo.position", `${business.geo.latitude};${business.geo.longitude}`),
    meta("ICBM", `${business.geo.latitude}, ${business.geo.longitude}`),
    `<link rel="canonical" href="${canonical}"/>`,
    og("og:site_name", brandName),
    og("og:type", seo.type || "website"),
    og("og:locale", "en_IN"),
    og("og:title", seo.title),
    og("og:description", seo.description),
    og("og:url", canonical),
    og("og:image", seo.ogImage),
    og("og:image:alt", seo.ogImageAlt || seo.title),
    og("og:image:width", "1200"),
    og("og:image:height", "630"),
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:title" content="${seo.title}"/>`,
    `<meta name="twitter:description" content="${seo.description}"/>`,
    `<meta name="twitter:image" content="${seo.ogImage}"/>`,
    heroPreload,
    `<link rel="preconnect" href="https://fonts.googleapis.com"/>`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>`,
    `<link href="${FONT_STYLESHEET}" rel="stylesheet"/>`,
    `<link rel="preconnect" href="https://images.unsplash.com"/>`,
    jsonLdScripts(pathname),
  ];

  return lines.filter(Boolean).join("\n    ");
}
