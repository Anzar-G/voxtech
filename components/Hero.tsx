import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  type Stat = {
    label: string;
    num: string;
    sub: string;
  };

  const stats = t('hero.stats', { returnObjects: true }) as Stat[];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 px-6 pt-20 pb-12 lg:pt-0 overflow-hidden">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute rounded-full bg-electric-300/30"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['100vh', '-10vh'],
              opacity: [0, 1, 1, 0],
              scale: [1, 1.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Diagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-diagonal-electric">
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tighter"
        >
          {t('hero.greeting')} <br className="sm:hidden" /> {t('hero.title')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-electric-300 font-semibold mb-6"
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-blue-100 font-normal mb-4 max-w-3xl mx-auto"
        >
          {t('hero.intro')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg text-blue-50/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-10 sm:py-4 bg-electric-500 text-white rounded-lg font-bold text-sm sm:text-base shadow-lg hover:bg-electric-600 transition-all duration-300 w-full sm:w-auto"
          >
            {t('hero.cta.primary')}
          </motion.button>
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-electric-500/50 hover:bg-electric-500/10 text-white rounded-lg font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
          >
            {t('hero.cta.secondary')}
          </motion.button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 sm:p-8 rounded-2xl bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 hover:bg-electric-500/20 hover:border-electric-500/50 transition-all duration-400 shadow-xl"
            >
              <p className="text-electric-200 text-sm font-medium uppercase tracking-wide mb-2">{stat.label}</p>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + i * 0.1, type: 'spring' }}
                className="text-white text-3xl sm:text-5xl font-bold leading-none mb-2"
              >
                {stat.num}
              </motion.p>
              <p className="text-blue-100/90 text-base">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70"
      >
        <ArrowDown size={28} />
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
