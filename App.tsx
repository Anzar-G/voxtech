import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import GlobalLoader from './components/loaders/GlobalLoader';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import JourneyPage from './pages/JourneyPage';
import BusinessesPage from './pages/BusinessesPage';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <GlobalLoader />
        <div className="relative">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Mobile Header Toggle */}
          <header className="fixed top-0 left-0 right-0 h-[60px] bg-navy-900/95 backdrop-blur z-40 flex items-center justify-between px-4 lg:hidden shadow-lg" role="banner">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open navigation menu"
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-expanded={sidebarOpen ? 'true' : 'false'}
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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route path="/businesses" element={<BusinessesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

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
