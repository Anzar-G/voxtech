import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Instagram, ExternalLink } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const Businesses: React.FC = () => {
  const businesses = [
    {
      name: 'Feyd Store',
      url: 'feyd-store.vercel.app',
      logo: '/public/ipm.png',
      category: 'E-commerce Produk Islami',
      description: 'Menyediakan Al-Qur\'an Kharisma dengan tajwid berwarna & terjemahan, serta novel-novel inspiratif islami.',
      products: [
        'Al-Qur\'an Kharisma',
        'Novel Melawan Kemustahilan',
        'Novel Titik Balik',
        'Novel Sebelum Aku Tiada',
      ],
      platforms: ['Website', 'Facebook', 'Instagram', 'WhatsApp'],
      payment: ['BSI', 'Dana', 'Ovo', 'Gopay'],
      links: {
        website: 'https://feyd-store.vercel.app',
        instagram: 'https://instagram.com/islamicproductmarket',
      },
    },
    {
      name: 'Frontworks',
      url: 'frontworks.vercel.app',
      logo: '/public/favicon.svg',
      category: 'Layanan Web Development Berbasis AI',
      description: 'Jasa pembuatan website profesional menggunakan pengembangan berbasis AI untuk delivery cepat dan kualitas tinggi.',
      services: [
        'Pembuatan Landing Page',
        'Solusi E-commerce',
        'Website Profil Perusahaan',
        'Optimasi Website',
      ],
      specialization: ['AI-First Development', 'Rapid Prototyping', 'Modern Tech Stack'],
      stats: ['5+ Proyek Selesai', '100% Kepuasan Klien'],
      links: {
        website: 'https://frontworks.vercel.app',
        linkedin: 'https://www.linkedin.com/in/muhammad-niyar-49272339a',
      },
    },
  ];

  return (
    <section className="relative min-h-screen py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute rounded-full bg-white/20"
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
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Bisnis Saya
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Bisnis digital aktif yang memberikan nilai kepada pelanggan
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
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-10 border-2 border-white/20 shadow-xl hover:shadow-2xl hover:border-electric-300/50 transition-all duration-400"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-white/90 border-2 border-white/30 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-md overflow-hidden">
                {business.logo.includes('/') || business.logo.includes('.') ? (
                  <img
                    src={business.logo}
                    alt={`${business.name} logo`}
                    className="w-full h-full object-contain"
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
              <p className="text-base text-white/90 leading-relaxed mb-6">
                {business.description}
              </p>

              {/* Products/Services */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-white mb-3">
                  {business.products ? 'Produk:' : 'Layanan:'}
                </p>
                <ul className="space-y-2">
                  {(business.products || business.services)?.map((item, i) => (
                    <li key={i} className="text-sm text-white/90 flex items-start gap-2">
                      <span className="text-electric-300 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platforms or Specialization */}
              {business.platforms && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Platform:</p>
                  <div className="flex flex-wrap gap-2">
                    {business.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 text-white/90 rounded-lg text-xs font-medium border border-white/10"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {business.specialization && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Spesialisasi:</p>
                  <div className="flex flex-wrap gap-2">
                    {business.specialization.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 text-white/90 rounded-lg text-xs font-medium border border-white/10"
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
                  <p className="text-sm font-semibold text-white mb-3">Pembayaran:</p>
                  <div className="flex flex-wrap gap-2">
                    {business.payment.map((method, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/10 text-white/90 rounded-lg text-xs font-medium border border-white/10"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {business.stats && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Portfolio:</p>
                  <div className="space-y-2">
                    {business.stats.map((stat, i) => (
                      <p key={i} className="text-sm text-white/90">• {stat}</p>
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
                  <span>{business.products ? 'Kunjungi Toko' : 'Lihat Portfolio'}</span>
                </motion.a>
                <motion.a
                  href={business.links.instagram || business.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
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
