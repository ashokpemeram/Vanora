import { siteConfig, servicesData, projectsData, testimonialsData, faqData } from "../data/siteData";

const { siteUrl, brandName, business, contact, serviceAreas } = siteConfig;
const organizationId = `${siteUrl}/#organization`;
const localBusinessId = `${siteUrl}/#localbusiness`;
const websiteId = `${siteUrl}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: brandName,
    alternateName: business.alternateName,
    url: siteUrl,
    logo: `${siteUrl}${business.logo}`,
    sameAs: [contact.instagram, contact.linkedin],
  };
}

function reviewsSchema() {
  const reviews = testimonialsData.map((t, i) => ({
    "@type": "Review",
    "@id": `${localBusinessId}/#review-${i + 1}`,
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  }));

  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: reviews.length,
    },
    review: reviews,
  };
}

function openingHoursSpecification() {
  const dayMap = {
    "Mo-Sa": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "Su": ["Sunday"],
  };
  return business.openingHours.map((slot) => {
    const [days, hours] = slot.split(" ");
    const [opens, closes] = hours.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[days],
      opens,
      closes,
    };
  });
}

export function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": localBusinessId,
    name: business.name,
    alternateName: business.alternateName,
    description: business.description,
    url: siteUrl,
    image: siteConfig.seo.ogImage,
    logo: `${siteUrl}${business.logo}`,
    telephone: contact.phone,
    email: contact.email,
    priceRange: business.priceRange,
    currenciesAccepted: business.currencyAccepted,
    paymentAccepted: business.paymentAccepted,
    hasMap: contact.googleMapsUrl,
    sameAs: [contact.instagram, contact.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: "S Nilayam, Sri Ram Nagar Colony, Plot No. 897, Manikonda",
      addressLocality: contact.addressLocality,
      addressRegion: contact.addressRegion,
      postalCode: contact.postalCode,
      addressCountry: contact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: ["Hyderabad", "Telangana", ...serviceAreas],
    parentOrganization: { "@id": organizationId },
    makesOffer: servicesData.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@id": `${siteUrl}${s.path}#service` },
    })),
    ...reviewsSchema(),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: brandName,
    inLanguage: "en-IN",
    publisher: { "@id": organizationId },
  };
}

// Site-level schema graph (injected on every page head)
export function siteSchema() {
  return [organizationSchema(), websiteSchema(), localBusinessSchema()];
}

export function serviceSchema(service) {
  return {
    "@type": "Service",
    "@id": `${siteUrl}${service.path}#service`,
    name: service.title,
    serviceType: service.headline,
    description: service.description,
    provider: { "@id": localBusinessId },
    areaServed: ["Hyderabad", ...serviceAreas],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Services in Hyderabad`,
      itemListElement: service.subservices.map((sub, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: sub },
      })),
    },
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const itemList = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
  ];

  let acc = "";
  parts.forEach((part, idx) => {
    acc += `/${part}`;
    const label = part
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    itemList.push({
      "@type": "ListItem",
      position: idx + 2,
      name: label,
      item: `${siteUrl}${acc}`,
    });
  });

  return {
    "@type": "BreadcrumbList",
    itemListElement: itemList,
  };
}

export function projectSchema(project) {
  return {
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: project.image,
    datePublished: "2024-01-01",
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    inLanguage: "en-IN",
    about: {
      "@type": "Place",
      name: project.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
  };
}

// Page-specific schema for a given pathname (used during prerender)
export function getPageSchema(pathname) {
  const schemas = [];

  const breadcrumb = breadcrumbSchema(pathname);
  if (breadcrumb) schemas.push(breadcrumb);

  if (pathname === "/faq") schemas.push(faqSchema());
  if (pathname === "/services") schemas.push(...servicesData.map(serviceSchema));
  if (pathname === "/services/landscaping") schemas.push(serviceSchema(servicesData[0]));
  if (pathname === "/services/house-planting") schemas.push(serviceSchema(servicesData[1]));
  if (pathname === "/corporate-gifting") schemas.push(serviceSchema(servicesData[2]));

  const projectMatch = pathname.match(/^\/projects\/([^/]+)/);
  if (projectMatch) {
    const project = projectsData.find((p) => p.id === projectMatch[1]);
    if (project) schemas.push(projectSchema(project));
  }

  return schemas;
}
