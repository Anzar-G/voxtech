import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import JourneyPage from './pages/JourneyPage';
import BusinessesPage from './pages/BusinessesPage';
import ContactPage from './pages/ContactPage';

// Scroll to top component with improved reliability
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });

    // Backup scroll after a short delay to handle race conditions
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

// Animated Routes wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* 
      // @ts-ignore - Routes takes key for AnimatePresence to work correctly */}
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

  return (
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
  );
};

export default App;
