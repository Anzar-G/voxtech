import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Instagram, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';


const Businesses: React.FC = () => {
  const { t } = useTranslation();

  const businesses = [
    {
      name: t('businesses.items.feyd.name'),
      url: 'feyd-store.vercel.app',
      logo: '/ipm-640w.webp',
      category: t('businesses.items.feyd.category'),
      description: t('businesses.items.feyd.description'),
      products: t('businesses.items.feyd.products', { returnObjects: true }) as string[],
      platforms: t('businesses.items.feyd.platforms', { returnObjects: true }) as string[],
      payment: t('businesses.items.feyd.payment', { returnObjects: true }) as string[],
      links: {
        website: 'https://feyd-store.vercel.app',
        instagram: 'https://instagram.com/islamicproductmarket',
      },
    },
    {
      name: t('businesses.items.frontworks.name'),
      url: 'frontworks.vercel.app',
      logo: '/favicon.svg',
      category: t('businesses.items.frontworks.category'),
      description: t('businesses.items.frontworks.description'),
      services: t('businesses.items.frontworks.services', { returnObjects: true }) as string[],
      specialization: t('businesses.items.frontworks.specialization', { returnObjects: true }) as string[],
      stats: t('businesses.items.frontworks.stats', { returnObjects: true }) as string[],
      links: {
        website: 'https://frontworks.vercel.app',
        linkedin: 'https://www.linkedin.com/in/muhammad-niyar-49272339a',
      },
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('businesses.title')}
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            {t('businesses.subtitle')}
          </p>
        </ScrollReveal>

        {/* Businesses Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-electric-500/10 backdrop-blur-lg rounded-3xl p-6 lg:p-10 border-2 border-electric-500/20 shadow-xl hover:shadow-2xl hover:border-electric-300/50 transition-all duration-400"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-white/90 border-2 border-electric-500/30 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-md overflow-hidden">
                {business.logo.includes('/') || business.logo.includes('.') ? (
                  <img
                    src={business.logo}
                    alt={`${business.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span>{business.logo}</span>
                )}
              </div>

              {/* Name & URL */}
              <h3 className="text-3xl font-bold text-white mb-2">
                {business.name}
              </h3>
              <p className="text-sm text-electric-300 font-medium mb-4">
                {business.url}
              </p>

              {/* Category Badge */}
              <span className="inline-block px-4 py-2 bg-electric-500/20 text-electric-300 rounded-full text-sm font-semibold mb-6 border border-electric-300/30">
                {business.category}
              </span>

              {/* Description */}
              <p className="text-base text-blue-50 leading-relaxed mb-6">
                {business.description}
              </p>

              {/* Products/Services */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-white mb-3">
                  {business.products ? t('businesses.labels.products') : t('businesses.labels.services')}
                </p>
                <ul className="space-y-2">
                  {(business.products || business.services)?.map((item, i) => (
                    <li key={i} className="text-sm text-blue-50 flex items-start gap-2">
                      <span className="text-electric-300 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platforms or Specialization */}
              {business.platforms && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('businesses.labels.platforms')}</p>
                  <div className="flex flex-wrap gap-2">
                    {business.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-electric-500/10 text-blue-50 rounded-lg text-xs font-medium border border-electric-500/10"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {business.specialization && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('businesses.labels.specialization')}</p>
                  <div className="flex flex-wrap gap-2">
                    {business.specialization.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-electric-500/10 text-blue-50 rounded-lg text-xs font-medium border border-electric-500/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Methods or Stats */}
              {business.payment && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('businesses.labels.payment')}</p>
                  <div className="flex flex-wrap gap-2">
                    {business.payment.map((method, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-electric-500/10 text-blue-50 rounded-lg text-xs font-medium border border-electric-500/10"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {business.stats && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('businesses.labels.portfolio')}</p>
                  <div className="space-y-2">
                    {business.stats.map((stat, i) => (
                      <p key={i} className="text-sm text-blue-50">• {stat}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={business.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 hover:bg-electric-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  <Globe size={18} />
                  <span>{business.products ? t('businesses.labels.visitStore') : t('businesses.labels.viewPortfolio')}</span>
                </motion.a>
                <motion.a
                  href={business.links.instagram || business.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-6 py-3 bg-electric-500/10 border border-electric-500/30 hover:bg-electric-300/30 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  {business.links.instagram ? <Instagram size={18} /> : <ExternalLink size={18} />}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Businesses;
