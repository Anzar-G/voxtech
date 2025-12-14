import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';

// Critical pages - load immediately (above the fold)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Heavy pages - lazy load (below the fold, data-heavy)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const JourneyPage = lazy(() => import('./pages/JourneyPage'));
const BusinessesPage = lazy(() => import('./pages/BusinessesPage'));

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-electric-500 border-t-transparent"></div>
      <p className="text-navy-900/60 text-sm">Loading...</p>
    </div>
  </div>
);

// Animated Routes wrapper
function AnimatedRoutes() {
  const location = useLocation();

  // CRITICAL: Reset scroll SEBELUM animation selesai
  useEffect(() => {
    window.scrollTo(0, 0);

    // Backup scroll reset after animation frame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [location.pathname]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        // Pastikan scroll di top setelah exit animation
        window.scrollTo(0, 0);
      }}
    >
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/businesses" element={<BusinessesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable scroll restoration at app level
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
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

          {/* Main Content Area - Always has left margin on desktop for collapsed sidebar */}
          <main className="min-h-screen bg-white lg:ml-[60px]">
            <AnimatedRoutes />

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
