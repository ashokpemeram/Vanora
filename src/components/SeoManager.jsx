import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoForPath, getCanonicalUrl } from "../seo/pages";
import { siteConfig } from "../data/siteData";

function getOrCreateMeta(attr, name) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr, name, content) {
  getOrCreateMeta(attr, name).setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

// Keeps title, description, canonical and social meta in sync on every
// client-side route change. The static head per page is emitted at build time
// by the prerender script.
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname) || siteConfig.seo;
    const canonical = getCanonicalUrl(pathname);

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    if (seo.keywords) setMeta("name", "keywords", seo.keywords);
    setCanonical(canonical);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", seo.type || "website");
    setMeta("property", "og:image", seo.ogImage);
    setMeta("property", "og:image:alt", seo.ogImageAlt || seo.title);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", seo.ogImage);
  }, [pathname]);

  return null;
}
