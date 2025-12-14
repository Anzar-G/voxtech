import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';

// CRITICAL: Only import what's needed for initial render (Sidebar/Layout)
// Everything else is lazy loaded

// Lazy load EVERYTHING - even components in viewport
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const JourneyPage = lazy(() => import('./pages/JourneyPage'));
const BusinessesPage = lazy(() => import('./pages/BusinessesPage'));

// Minimal loading component - no heavy animations
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-white">
    <div className="w-8 h-8 border-2 border-electric-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Preload critical pages on user interaction or idle
const preloadPage = (importFunc: () => Promise<any>) => {
  importFunc();
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable scroll restoration at app level
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Preload HomePage chunks after initial render
    const timer = setTimeout(() => {
      preloadPage(() => import('./pages/HomePage'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Mobile Header Toggle */}
          <header className="fixed top-0 left-0 right-0 h-[60px] bg-navy-900/95 backdrop-blur z-40 flex items-center justify-between px-4 lg:hidden shadow-lg" role="banner">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={sidebarOpen}
              aria-controls="sidebar-navigation"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white/5 border border-white/20 flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                MN
              </div>
              <span className="text-white text-sm font-semibold">Muhammad Nizar</span>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="min-h-screen bg-white lg:ml-[60px]">
            {/* Removed AnimatePresence for performance */}
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/journey" element={<JourneyPage />} />
                <Route path="/businesses" element={<BusinessesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>

            <footer className="bg-navy-900 text-white py-6 text-center border-t border-white/10">
              <p className="text-sm opacity-60">© 2025 Muhammad Nizar Al-Faris | Vox Tech. Hak Cipta Dilindungi.</p>
            </footer>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
