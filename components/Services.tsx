import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  ShoppingCart,
  Rocket,
  Megaphone,
  ChevronDown
} from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-16 h-16" />,
      title: 'Pengembangan Web Berbasis AI',
      description: 'Pembuatan website modern dengan teknologi AI untuk percepatan development hingga 3x lipat. Dari landing page hingga platform e-commerce yang lengkap.',
      techStack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
      pricing: 'Harga Custom',
      process: [
        'Konsultasi kebutuhan dan goals',
        'Wireframe & mockup design',
        'AI-assisted development',
        'Testing & quality assurance',
        'Deployment & training',
      ],
      deliverables: [
        'Source code lengkap',
        'Dokumentasi teknis',
        'Hosting setup (Vercel/Netlify)',
        'Basic SEO optimization',
        '30 hari support gratis',
      ],
    },
    {
      icon: <ShoppingCart className="w-16 h-16" />,
      title: 'Solusi E-commerce',
      description: 'Platform e-commerce lengkap dengan integrasi pembayaran, manajemen inventory, dan optimasi SEO untuk memaksimalkan penjualan online Anda.',
      techStack: ['Next.js', 'Payment Gateway', 'Meta Pixel'],
      pricing: 'Harga Custom',
      process: [
        'Analisis produk & target market',
        'Design UI/UX e-commerce',
        'Integrasi payment gateway',
        'Setup inventory management',
        'Marketing pixel integration',
      ],
      deliverables: [
        'Platform e-commerce lengkap',
        'Admin dashboard',
        'Payment gateway aktif',
        'Meta Pixel tracking',
        'Training penggunaan sistem',
      ],
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: 'Pembuatan Landing Page',
      description: 'Landing page yang fokus pada konversi dengan desain modern dan loading cepat. Sempurna untuk kampanye marketing, peluncuran produk, atau profil perusahaan.',
      techStack: ['Next.js', 'Tailwind CSS', 'Analytics'],
      pricing: 'Harga Custom',
      process: [
        'Briefing tujuan kampanye',
        'Copywriting & design',
        'Development & optimization',
        'Analytics setup',
        'A/B testing preparation',
      ],
      deliverables: [
        'Landing page responsif',
        'Google Analytics setup',
        'Form submission handling',
        'Performance optimization',
        'Conversion tracking',
      ],
    },
    {
      icon: <Megaphone className="w-16 h-16" />,
      title: 'Konsultasi Digital Marketing',
      description: 'Strategi Facebook Ads dan digital marketing untuk meningkatkan jangkauan dan konversi. Pendekatan berbasis data dengan pengukuran ROI yang jelas.',
      techStack: ['Meta Ads Manager', 'Analytics', 'Meta Pixel'],
      pricing: 'Harga Custom',
      process: [
        'Audit marketing saat ini',
        'Strategi & planning kampanye',
        'Setup & optimization ads',
        'Monitoring & reporting',
        'Iterasi berdasarkan data',
      ],
      deliverables: [
        'Strategi marketing lengkap',
        'Campaign setup & management',
        'Weekly performance reports',
        'Audience insights',
        'Rekomendasi optimization',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan untuk sebuah proyek?',
      answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Landing page sederhana bisa selesai dalam 5-7 hari, sementara e-commerce platform membutuhkan 10-14 hari. Saya selalu memberikan timeline yang realistis di awal proyek.',
    },
    {
      question: 'Apakah saya mendapat source code setelah proyek selesai?',
      answer: 'Ya, Anda akan mendapatkan full source code dan dokumentasi lengkap. Anda memiliki 100% ownership atas code yang dibuat untuk proyek Anda.',
    },
    {
      question: 'Bagaimana sistem pembayaran yang diterapkan?',
      answer: 'Sistem pembayaran fleksibel: 50% di awal sebagai down payment, 50% setelah proyek selesai dan Anda puas dengan hasilnya. Untuk proyek besar, bisa dicicil per milestone.',
    },
    {
      question: 'Apakah ada support setelah website launch?',
      answer: 'Ya, setiap proyek mendapat 30 hari support gratis untuk bug fixes dan minor adjustments. Setelah itu, tersedia paket maintenance bulanan jika diperlukan.',
    },
    {
      question: 'Apakah bisa request revisi?',
      answer: 'Tentu! Setiap tahap development ada review dan feedback session. Revisi minor unlimited selama development phase. Revisi major akan didiskusikan terlebih dahulu.',
    },
    {
      question: 'Teknologi apa yang digunakan?',
      answer: 'Saya menggunakan tech stack modern seperti Next.js, React, TypeScript, dan Tailwind CSS. Semua dipilih berdasarkan best practices dan kebutuhan proyek Anda untuk performa optimal.',
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

      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* Services Grid */}
        <div>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Layanan yang Ditawarkan
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Solusi digital komprehensif yang didukung teknologi AI
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-10 border border-white/20 shadow-md hover:shadow-2xl hover:border-electric-300/50 transition-all duration-400"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-electric-300 mb-6"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white/70 mb-3">Teknologi:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-white/10 text-electric-300 rounded-lg text-xs font-medium cursor-default border border-white/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white/70 mb-3">Proses:</p>
                  <ul className="space-y-2">
                    {service.process.map((step, i) => (
                      <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                        <span className="text-electric-300 font-bold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white/70 mb-3">Yang Anda Dapatkan:</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                        <span className="text-electric-300">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <p className="text-sm text-white/60 mb-5">
                  Mulai dari: <span className="font-semibold text-white/80">{service.pricing}</span>
                </p>

                {/* CTA */}
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ x: 5 }}
                  className="text-electric-300 font-semibold flex items-center gap-2 transition-all duration-300 group"
                >
                  <span>Konsultasi Gratis</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-lg py-16 px-8 rounded-3xl shadow-xl border border-white/20">
          <ScrollReveal className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-white/70">
              Jawaban untuk pertanyaan umum seputar layanan dan proses kerja
            </p>
          </ScrollReveal>

          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="border border-white/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 lg:p-6 bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-electric-300 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-white/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA Section */}
        <ScrollReveal variant="scale-up" className="bg-gradient-to-br from-electric-500 to-navy-900 py-16 px-8 rounded-3xl text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan Anda dan temukan solusi terbaik untuk bisnis Anda
          </p>
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-navy-900 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Hubungi Saya Sekarang
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
