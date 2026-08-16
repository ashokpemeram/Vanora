import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

function buildSitemap(urls, siteUrl) {
  const today = new Date().toISOString().slice(0, 10);
  const rows = urls
    .map((route) => {
      const loc = `${siteUrl}${route === "/" ? "/" : route}`;
      const priority = route === "/" ? "1.0" : route.startsWith("/projects") ? "0.7" : "0.8";
      const changefreq = route === "/" ? "weekly" : "monthly";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${rows}
</urlset>
`;
}

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { renderPage } = await server.ssrLoadModule("/src/prerender.jsx");
  const { getAllRoutes } = await server.ssrLoadModule("/src/seo/pages.js");
  const { buildHead } = await server.ssrLoadModule("/src/seo/buildHead.js");
  const { siteConfig } = await server.ssrLoadModule("/src/data/siteData.js");

  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
  const routes = [...getAllRoutes(), "/404"];
  const sitemapRoutes = [];

  for (const route of routes) {
    const { html, seo } = renderPage(route);
    const headInner = buildHead(route, seo);

    const finalHtml = template
      .replace(/<head>[\s\S]*?<\/head>/, `<head>\n    ${headInner}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outPath =
      route === "/"
        ? path.join(distDir, "index.html")
        : route === "/404"
          ? path.join(distDir, "404.html")
          : path.join(distDir, route, "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, finalHtml, "utf8");

    if (route !== "/404") sitemapRoutes.push(route);
    console.log(`Prerendered: ${route} -> ${path.relative(root, outPath)}`);
  }

  const sitemap = buildSitemap(sitemapRoutes, siteConfig.siteUrl);
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
  console.log(`Generated: sitemap.xml (${sitemapRoutes.length} URLs)`);
} finally {
  await server.close();
}
