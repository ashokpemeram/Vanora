import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";
import SeoManager from "./components/SeoManager";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Landscaping from "./pages/Landscaping";
import HousePlanting from "./pages/HousePlanting";
import CorporateGifting from "./pages/CorporateGifting";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// Shell shared between the client router and the prerender (SSR) entry.
// Do not place router hooks outside of a Router context.
export function AppShell() {
  return (
    <>
      <SeoManager />
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-ivory text-charcoal selection:bg-primary/10 selection:text-primary">
        {/* Premium Sticky Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/landscaping" element={<Landscaping />} />
            <Route path="/services/house-planting" element={<HousePlanting />} />
            <Route path="/corporate-gifting" element={<CorporateGifting />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/404" element={<NotFound />} />
            {/* Fallback to a real 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Sticky floating contact badge */}
        <WhatsAppFloat />

        {/* Global Footer layout */}
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
