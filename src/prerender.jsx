import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { AppShell } from "./App.jsx";
import { getSeoForPath } from "./seo/pages";

// Renders a route to static HTML markup for the prerender script.
export function renderPage(pathname) {
  const seo = getSeoForPath(pathname);
  const html = renderToString(
    <MemoryRouter initialEntries={[pathname]}>
      <AppShell />
    </MemoryRouter>
  );
  return { html, seo, pathname };
}
