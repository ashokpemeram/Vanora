import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Hydrate the prerendered static HTML when present, otherwise render normally
// (e.g. during `vite dev`).
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
