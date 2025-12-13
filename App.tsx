import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import JourneyPage from './pages/JourneyPage';
import BusinessesPage from './pages/BusinessesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

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
      {/* @ts-expect-error - 'key' is required for AnimatePresence to trigger transitions, though not part of RoutesProps */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
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
          <header className="fixed top-0 left-0 right-0 h-[60px] bg-navy-900/95 backdrop-blur z-40 flex items-center justify-between px-4 lg:hidden shadow-lg">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white/5 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                MN
              </div>
              <span className="text-white text-sm font-semibold">Muhammad Nizar</span>
            </div>
          </header>

          {/* Main Content Area - Always has left margin on desktop for collapsed sidebar */}
          <main className="min-h-screen bg-white lg:ml-[60px]">
            <AnimatedRoutes />

            <footer className="bg-navy-900 text-white py-6 text-center border-t border-white/10">
              <p className="text-sm opacity-60">© 2025 Muhammad Nizar Al-Faris. Hak Cipta Dilindungi.</p>
            </footer>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
