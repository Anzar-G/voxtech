import React, { useState } from 'react';
import { X, Linkedin, Github, Download, Home, User, Briefcase, FolderOpen, TrendingUp, Building2, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('navigation.home'), icon: Home },
    { path: '/about', label: t('navigation.about'), icon: User },
    { path: '/journey', label: t('navigation.journey'), icon: TrendingUp },
    { path: '/projects', label: t('navigation.projects'), icon: FolderOpen },
    { path: '/services', label: t('navigation.services'), icon: Briefcase },
    { path: '/businesses', label: t('navigation.businesses'), icon: Building2 },
    { path: '/contact', label: t('navigation.contact'), icon: Mail },
  ];

  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar - Hover Expand */}
      <motion.aside
        className="hidden lg:flex fixed left-0 top-0 h-screen bg-navy-900 shadow-2xl z-50 flex-col border-r border-white/10"
        initial={{ width: '60px' }}
        animate={{ width: desktopOpen ? '280px' : '60px' }}
        onMouseEnter={() => setDesktopOpen(true)}
        onMouseLeave={() => setDesktopOpen(false)}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center flex-shrink-0 p-1.5">
            <img src="/favicon.svg" alt="MN" className="w-full h-full object-contain" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: desktopOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap"
          >
            <h2 className="text-white text-sm font-bold">Muhammad Nizar</h2>
            <p className="text-white/70 text-xs">{t('sidebar.roleShort')}</p>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto no-scrollbar" role="menu" aria-label="Main menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${isActive
                  ? 'bg-electric-500/15 text-electric-500 border-l-4 border-electric-500'
                  : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                  }`}
                role="menuitem"
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={20} className="flex-shrink-0" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: desktopOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Language Switcher - Only visible when open */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: desktopOpen ? 1 : 0,
            height: desktopOpen ? 'auto' : 0
          }}
          className="px-4 pb-2"
        >
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
        </motion.div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/muhammad-niyar-49272339a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-electric-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <motion.a
              href="https://github.com/Anzar-G"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-electric-500 transition-colors"
              title="GitHub"
              initial={{ opacity: 0 }}
              animate={{ opacity: desktopOpen ? 1 : 0 }}
            >
              <Github size={20} />
            </motion.a>
          </div>
          <motion.button
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: desktopOpen ? 1 : 0,
              height: desktopOpen ? 'auto' : 0,
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-electric-500 hover:bg-electric-600 text-white rounded-lg text-xs font-semibold transition-colors overflow-hidden"
          >
            <Download size={14} />
            <span>{t('about.downloadCV')}</span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar Content */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute left-0 top-0 h-full w-[70%] max-w-[280px] bg-navy-900 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center flex-shrink-0 p-2.5">
                  <img src="/favicon.svg" alt="MN" className="w-full h-full object-contain" />
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-white/70 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight">Muhammad Nizar</h2>
              <p className="text-white/70 text-sm mt-1">{t('sidebar.role')}</p>

              {/* Mobile Language Switcher in Header */}
              <div className="mt-4 flex justify-start">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-200 ${isActive
                      ? 'bg-electric-500/15 text-electric-500 border-l-4 border-electric-500 font-semibold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                      }`}
                  >
                    <Icon size={20} />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Social Links & Download CV */}
            <div className="p-5 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-niyar-49272339a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-electric-500 hover:scale-110 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/Anzar-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-electric-500 hover:scale-110 transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-electric-500 hover:bg-electric-600 text-white rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Download size={16} />
                <span>{t('about.downloadCV')}</span>
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
