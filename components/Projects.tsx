import React, { useState } from 'react';
import { ExternalLink, FileText, TrendingUp, Zap, Target, CheckCircle, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import PerformanceRoadmap from './PerformanceRoadmap';

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
      image: '/website/feyd-store.png',
      caseStudy: {
        challenge: 'Menentukan dan mengintegrasikan berbagai fitur penting dalam satu platform e-commerce yang kompleks. Memperkenalkan Al-Qur\'an Kharisma ke pasar yang lebih luas secara online dan bersaing dengan produk sejenis.',
        solution: 'Menggunakan kombinasi Cascade Windsurf, Claude, dan Qwen untuk memungkinkan kustomisasi dan efisiensi dalam pengembangan. Fokus pada keunggulan produk (tajwid warna, terjemahan) dan penggunaan Facebook Ads (Traffic Tsabit) untuk mendatangkan traffic berkualitas.',
        results: [
          '566 Link Clicks dari kampanye Traffic Tsabit',
          'CTR 2.37% (di atas rata-rata industri)',
          'CPC Rp 165 (sangat efisien)',
          'LP Conversion Rate 60.07%',
        ],
        metrics: {
          performance: '32 Performance (v1.0)',
          accessibility: '91 Accessibility',
          seo: '100 SEO Score',
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
      image: '/website/frontworks.png',
      caseStudy: {
        challenge: 'Merancang UI/UX dan tata letak yang tidak hanya menarik, tetapi juga fungsional dan mudah dinavigasi.',
        solution: 'Memanfaatkan Cascade Windsurf dan Claude untuk mengeksplorasi pendekatan desain, serta melakukan riset menyeluruh terhadap website profesional lainnya. AI digunakan sebagai alat bantu powerful namun tetap mengutamakan sentuhan kreatif humanis.',
        results: [
          'Portfolio modern dan profesional',
          'Performa 95+ di semua metrics Lighthouse',
          'Showcase keahlian AI-First Development',
          'Professional presentation untuk client pitching',
        ],
        metrics: {
          performance: '39 Performance (v1.0)',
          accessibility: '87 Accessibility',
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
      image: '/website/program-tilawah.png',
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
          performance: '37 Performance (v1.0)',
          accessibility: '87 Accessibility',
          seo: '100 SEO Score',
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
      image: '/website/dapurkamila.png',
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
          performance: '69 Performance (v1.0)',
          accessibility: '89 Accessibility',
          bestPractices: '92 Best Practices',
        },
      },
    },
    {
      id: 5,
      title: 'Khoiru Ummah - Website Institusi Pendidikan',
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
      image: '/website/khoiruummah.png',
      caseStudy: {
        challenge: 'Menyeimbangkan pendekatan desain yang islami dengan nuansa internasional dan universal.',
        solution: 'Mengambil inspirasi dari website institusi pendidikan ternama (UI, Oxford, Edinburgh) dan menggabungkan elemen desain dari berbagai referensi untuk menciptakan identitas digital yang kuat, inklusif, namun tetap islami.',
        results: [
          'Desain website yang profesional & modern',
          'Identitas visual islami yang kuat namun universal',
          'Struktur informasi yang jelas dan rapi',
          'Mudah dikelola dan dikembangkan',
        ],
        metrics: {
          performance: '57 Performance (v1.0)',
          accessibility: '84 Accessibility',
          seo: '91 SEO Score',
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

  return (
    <section className="relative min-h-screen pt-24 pb-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

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

      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Showcase karya terbaru dan proyek yang berhasil diselesaikan dengan hasil terukur
          </p>
        </ScrollReveal>

        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-4 px-4 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full transition-all text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25' : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <StaggerContainer key={activeFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {filteredProjects.map((project) => (
            <React.Fragment key={project.id}>
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 border border-white/20 hover:border-electric-300/50"
              >
                <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1e293b/white?text=Project'; }} />
                  {project.featured && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      className="absolute top-4 right-4 bg-electric-500 text-white px-3 py-1 rounded-lg text-xs font-semibold z-20 shadow-lg">
                      UNGGULAN
                    </motion.div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * i }}
                        whileHover={{ rotate: 360 }} className="w-8 h-8 rounded-lg bg-bg-light-blue flex items-center justify-center text-electric-500 text-xs font-bold">
                        {tech.charAt(0)}
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-electric-500/20 text-electric-300 rounded-lg text-xs font-semibold mb-4 border border-electric-300/30">
                    {project.category}
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed mb-5 line-clamp-3">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-white/70 mb-2">Hasil Utama:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + 0.1 * i }}
                          className="text-xs text-white/80 flex items-start gap-2">
                          <span className="text-electric-300 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-electric-500 hover:bg-electric-600 text-white rounded-lg text-sm font-semibold transition-all duration-300">
                      <ExternalLink size={16} />
                      <span>Lihat Website</span>
                    </motion.a>
                    <motion.button onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}
                      className={`px-4 py-2.5 border rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${selectedProject === project.id ? 'bg-electric-500 border-electric-500 text-white' : 'bg-white/10 border-white/30 hover:bg-white/20 text-electric-300'}`}>
                      <FileText size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {selectedProject === project.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border-2 border-white/20">
                  <div className="space-y-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/70">Case Study Detail</p>
                      </div>
                      <button onClick={() => setSelectedProject(null)} className="text-white/60 hover:text-white text-2xl font-bold">×</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                            <Target className="w-5 h-5 text-electric-300" />
                          </div>
                          <h4 className="text-lg font-bold text-white">Challenge</h4>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed">{project.caseStudy.challenge}</p>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-blue-500" />
                          </div>
                          <h4 className="text-lg font-bold text-white">Solution</h4>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed">{project.caseStudy.solution}</p>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <Rocket className="w-5 h-5 text-cyan-300" />
                          </div>
                          <h4 className="text-lg font-bold text-white">Results</h4>
                        </div>
                        <ul className="space-y-2">
                          {project.caseStudy.results.map((result, i) => (
                            <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

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
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </StaggerContainer>

        <div className="bg-gradient-to-br from-navy-900 to-electric-500 rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">Portfolio Statistics</h3>
          <p className="text-sm text-white/60 text-center mb-8 max-w-2xl mx-auto">
            🚀 All projects are in continuous development with ongoing performance optimization
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">5+</p>
              <p className="text-white/80">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">93</p>
              <p className="text-white/80">Avg Best Practices</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">98</p>
              <p className="text-white/80">Avg SEO Score</p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-xs text-white/70 text-center">
              <span className="font-semibold text-electric-300">Note:</span> Performance scores reflect v1.0 baseline. Active optimization in progress targeting 90+ across all metrics through image optimization, code splitting, and bundle size reduction.
            </p>
          </div>
        </div>

        {/* Performance Roadmap Section */}
        <PerformanceRoadmap />
      </div>
    </section>
  );
};

export default Projects;
