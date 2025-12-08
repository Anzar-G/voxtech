import React, { useState } from 'react';
import { ExternalLink, FileText, TrendingUp, Zap, Target, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Feyd Store - Platform E-commerce Islami',
      category: 'E-commerce',
      description: 'Platform e-commerce untuk penjualan Al-Qur\'an Kharisma dengan tajwid berwarna & terjemahan. Dibangun dengan Next.js + pengembangan berbasis AI.',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Meta Pixel'],
      features: [
        'E-commerce fungsional dengan UI/UX modern',
        'Sistem pembayaran terintegrasi (BSI, E-wallet)',
        'Menjalankan Facebook Ads (budget 32k/hari)',
        'Responsif mobile & SEO optimized',
      ],
      liveUrl: 'https://feyd-store.vercel.app',
      featured: true,
      thumbnail: 'bg-gradient-to-br from-green-500 to-emerald-700',
      caseStudy: {
        challenge: 'Membangun platform e-commerce yang mudah digunakan untuk target audience muslim dengan integrasi pembayaran lokal dan tracking Facebook Ads yang akurat.',
        solution: 'Menggunakan Next.js untuk performa optimal, implementasi Meta Pixel untuk tracking konversi, dan integrasi multiple payment gateways (BSI, Dana, Ovo, Gopay).',
        results: [
          '823 klik dari Facebook Ads dalam 24 hari',
          'CTR 2.37% (di atas rata-rata industri)',
          'CPC Rp 165 (50% lebih murah dari benchmark)',
          '340 landing page views dari kampanye pertama',
        ],
        metrics: {
          performance: '90+ Lighthouse Score',
          loadTime: '< 2 detik',
          conversion: '62.90% LC to LP',
        },
      },
    },
    {
      id: 2,
      title: 'Frontworks - Portfolio AI Frontend Engineer',
      category: 'Personal',
      description: 'Website portfolio profesional yang menampilkan keahlian sebagai AI Frontend Engineer dengan desain modern & elemen interaktif.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      features: [
        'Sistem desain yang dihasilkan AI',
        'Animasi halus & micro-interactions',
        'Showcase proyek dengan case studies',
        'Performa optimal (90+ Lighthouse score)',
      ],
      liveUrl: 'https://frontworks.vercel.app',
      featured: true,
      thumbnail: 'bg-gradient-to-br from-blue-500 to-indigo-700',
      caseStudy: {
        challenge: 'Membuat portfolio yang stand out dari kompetitor dengan menampilkan keahlian AI-assisted development secara visual dan interaktif.',
        solution: 'Design system yang clean dengan fokus pada typography dan spacing, implementasi micro-animations untuk engagement, dan showcase proyek dengan detail teknis.',
        results: [
          'Portfolio yang fully responsive',
          'Performa 90+ di semua metrics Lighthouse',
          'Loading time < 1.5 detik',
          'Professional presentation untuk client pitching',
        ],
        metrics: {
          performance: '95 Lighthouse Score',
          accessibility: '100 Accessibility Score',
          seo: '100 SEO Score',
        },
      },
    },
    {
      id: 3,
      title: 'Program Tilawah 40 Hari - Landing Page Edukasi',
      category: 'Landing Page',
      description: 'Landing page untuk program edukasi tilawah dengan copywriting yang dioptimalkan AI untuk konversi.',
      techStack: ['Next.js', 'React', 'CSS'],
      features: [
        'Desain landing page yang engaging',
        'Arsitektur informasi program yang jelas',
        'Meningkatkan tingkat pendaftaran',
        'Waktu loading cepat (<2s)',
      ],
      liveUrl: 'https://program-tilawah-40-hari.vercel.app',
      featured: false,
      thumbnail: 'bg-gradient-to-br from-purple-500 to-pink-600',
      caseStudy: {
        challenge: 'Membuat landing page yang efektif untuk program edukasi dengan target audience yang spesifik (muslim yang ingin belajar tilawah).',
        solution: 'Copywriting yang persuasif dengan struktur AIDA, visual hierarchy yang jelas, dan CTA yang prominent di multiple sections.',
        results: [
          'Landing page yang conversion-focused',
          'Clear value proposition',
          'Mobile-first responsive design',
          'Fast loading untuk user experience optimal',
        ],
        metrics: {
          performance: '92 Lighthouse Score',
          loadTime: '< 2 detik',
          mobileOptimized: 'Yes',
        },
      },
    },
    {
      id: 4,
      title: 'Dapur Ummu Kamila - Website Bakery Rumahan',
      category: 'Web Development',
      description: 'Website showcase untuk usaha bakery rumahan dengan katalog produk & sistem pemesanan.',
      techStack: ['Next.js', 'Styled Components'],
      features: [
        'Showcase produk yang menarik',
        'Optimasi gambar',
        'Integrasi kontak (WhatsApp)',
        'Desain mobile-first',
      ],
      liveUrl: 'https://dapurkamila.vercel.app',
      featured: false,
      thumbnail: 'bg-gradient-to-br from-orange-500 to-red-600',
      caseStudy: {
        challenge: 'Membuat website showcase untuk UMKM bakery dengan budget terbatas namun tetap profesional dan fungsional.',
        solution: 'Fokus pada visual produk dengan image optimization, integrasi WhatsApp untuk kemudahan pemesanan, dan design yang warm & inviting.',
        results: [
          'Website profesional untuk UMKM',
          'WhatsApp integration untuk pemesanan',
          'Image optimization untuk loading cepat',
          'Responsive di semua devices',
        ],
        metrics: {
          performance: '88 Lighthouse Score',
          imageOptimization: 'WebP format',
          responsive: 'Mobile-first',
        },
      },
    },
    {
      id: 5,
      title: 'Schola Internationalis - Website Institusi Pendidikan',
      category: 'Web Development',
      description: 'Website profil sekolah dengan fokus informasi keunggulan pendidikan & fasilitas.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Desain institusional profesional',
        'Layout responsif',
        'Struktur SEO-friendly',
        'Cepat & ringan',
      ],
      liveUrl: 'https://anzar-g.github.io/khoiruummah/',
      featured: false,
      thumbnail: 'bg-gradient-to-br from-teal-500 to-cyan-700',
      caseStudy: {
        challenge: 'Membuat website institusi pendidikan yang trustworthy dan informatif dengan tech stack sederhana.',
        solution: 'Clean HTML/CSS/JS implementation dengan fokus pada content hierarchy, professional color scheme, dan SEO-friendly structure.',
        results: [
          'Website institusional yang profesional',
          'SEO-friendly structure',
          'Fast loading dengan vanilla tech',
          'Easy to maintain',
        ],
        metrics: {
          performance: '95 Lighthouse Score',
          techStack: 'Vanilla (No framework)',
          seo: 'Optimized',
        },
      },
    },
  ];

  const filters = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Landing Page', label: 'Landing Pages' },
    { id: 'Personal', label: 'Proyek Personal' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

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

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Showcase karya terbaru dan proyek yang berhasil diselesaikan dengan hasil terukur
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-4 px-4 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-6 py-2.5 rounded-full transition-all text-sm whitespace-nowrap
                  ${activeFilter === filter.id
                    ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm'
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        {/* Projects Grid */}
        <StaggerContainer
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-white/20 hover:border-electric-300/50"
            >
              {/* Thumbnail Placeholder */}
              <div className={`relative h-48 ${project.thumbnail} flex items-center justify-center overflow-hidden`}>
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-4 right-4 bg-electric-500 text-white px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    UNGGULAN
                  </motion.div>
                )}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-6xl font-bold opacity-30"
                >
                  {project.title.charAt(0)}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ rotate: 360 }}
                      className="w-8 h-8 rounded-lg bg-bg-light-blue flex items-center justify-center text-electric-500 text-xs font-bold"
                    >
                      {tech.charAt(0)}
                    </motion.div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-electric-500/20 text-electric-300 rounded-lg text-xs font-semibold mb-4 border border-electric-300/30">
                  {project.category}
                </span>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-white/70 mb-2">Hasil Utama:</p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + 0.1 * i }}
                        className="text-xs text-white/80 flex items-start gap-2"
                      >
                        <span className="text-electric-300 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-electric-500 hover:bg-electric-600 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Lihat Website</span>
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`px-4 py-2.5 border rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${selectedProject === project.id
                      ? 'bg-electric-500 border-electric-500 text-white'
                      : 'bg-white/10 border-white/30 hover:bg-white/20 text-electric-300'
                      }`}
                  >
                    <FileText size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Case Study Detail Section */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border-2 border-white/20"
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70">Case Study Detail</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/60 hover:text-white text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Challenge */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                          <Target className="w-5 h-5 text-red-600" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Challenge</h4>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {project.caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-navy-900">Solution</h4>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                        <h4 className="text-lg font-bold text-navy-900">Results</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.caseStudy.results.map((result, i) => (
                          <li key={i} className="text-sm text-navy-900/70 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-electric-500 to-navy-900 rounded-xl p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(project.caseStudy.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <p className="text-sm text-white/70 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-2xl font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Stats Overview */}
        <div className="bg-gradient-to-br from-navy-900 to-electric-500 rounded-3xl p-10 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Portfolio Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl font-bold mb-2">5+</p>
              <p className="text-white/80">Proyek Selesai</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">90+</p>
              <p className="text-white/80">Avg Lighthouse Score</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">3x</p>
              <p className="text-white/80">Faster Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
