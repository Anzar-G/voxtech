import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  BarChart,
  Zap,
  Target,
  CheckCircle,
  Users,
  MapPin,
  GraduationCap,
  Briefcase,
  Clock,
  Star
} from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import Certificates from './Certificates';
import Education from './Education';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      name: 'AI Engineering',
      level: 95,
      category: 'Core Skill',
      items: ['No-Code/Low-Code', 'AI-Assisted Coding', 'Rapid Prototyping'],
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: 'Tech Stack',
      level: 90,
      category: 'Frontend & Deployment',
      items: ['Next.js, React, TS', 'Tailwind CSS', 'Vercel'],
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      name: 'Digital Marketing',
      level: 85,
      category: 'Growth & Strategy',
      items: ['FB Ads', 'Content Strategy', 'SEO & Analytics'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: 'Penguasaan Tools',
      level: 98,
      category: 'Productivity',
      items: ['8+ AI Tools', 'Claude & Qwen', 'Multi-AI Workflow'],
    },
  ];

  const whyChooseMe = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Pengembangan 3x Lebih Cepat',
      description: 'Menggunakan AI-assisted development untuk mempercepat proses tanpa mengorbankan kualitas',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Fokus pada Hasil',
      description: 'Setiap proyek dirancang dengan tujuan bisnis yang jelas dan metrics yang terukur',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Kualitas Terjamin',
      description: 'Code yang clean, responsive design, dan performa optimal (90+ Lighthouse score)',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Komunikasi Transparan',
      description: 'Update progress berkala dan kolaborasi yang erat dengan client',
    },
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Konsultasi & Discovery',
      description: 'Memahami kebutuhan bisnis, target audience, dan goals yang ingin dicapai',
      duration: '1-2 hari',
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'Membuat wireframe, mockup, dan tech stack planning yang sesuai dengan kebutuhan',
      duration: '2-3 hari',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Coding dengan AI-assisted development, regular updates, dan iterasi berdasarkan feedback',
      duration: '5-14 hari',
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Testing menyeluruh untuk memastikan semua fitur berfungsi dengan baik',
      duration: '1-2 hari',
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'Deploy ke production dan support untuk memastikan website berjalan lancar',
      duration: 'Ongoing',
    },
  ];

  const testimonials = [
    {
      name: '[Nama Client]',
      position: '[Posisi/Perusahaan]',
      rating: 5,
      text: 'Placeholder untuk testimonial client. Hasil kerja sangat memuaskan, komunikasi lancar, dan delivery tepat waktu.',
      project: '[Nama Proyek]',
    },
    {
      name: '[Nama Client]',
      position: '[Posisi/Perusahaan]',
      rating: 5,
      text: 'Placeholder untuk testimonial client. Website yang dihasilkan sangat profesional dan sesuai dengan ekspektasi.',
      project: '[Nama Proyek]',
    },
    {
      name: '[Nama Client]',
      position: '[Posisi/Perusahaan]',
      rating: 5,
      text: 'Placeholder untuk testimonial client. Proses pengerjaan cepat dan hasilnya melampaui harapan.',
      project: '[Nama Proyek]',
    },
  ];

  return (
    <section className="relative min-h-screen py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

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
        {/* Main About Section */}
        <div>
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center lg:text-left">
              Tentang Saya
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Left Column - 40% */}
            {/* Left Column - 40% */}
            <ScrollReveal variant="fade-right" className="lg:col-span-2 space-y-6">
              {/* Mobile: Photo + Info Side by Side / Desktop: Standard */}
              <div className="grid grid-cols-[45%_1fr] lg:grid-cols-1 gap-4 mb-6 lg:mb-0 lg:space-y-6">
                {/* Profile Photo */}
                <div className="w-full lg:max-w-xs lg:mx-auto">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 shadow-lg overflow-hidden backdrop-blur-sm">
                    <img
                      src="/profile.jpg"
                      alt="Muhammad Nizar Al-Faris"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/1e293b/white?text=MN';
                      }}
                    />
                  </div>
                </div>

                {/* Info Card - Compact on Mobile */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-8 text-white shadow-xl border border-white/20 flex flex-col justify-center lg:block">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">Lokasi</p>
                        <p className="text-xs lg:text-sm text-white/90">Semarang, Jateng</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">Pendidikan</p>
                        <p className="text-xs lg:text-sm text-white/90">SMA Kelas 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">Bisnis</p>
                        <p className="text-xs lg:text-sm text-white/90">2 Berjalan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">Exp. AI</p>
                        <p className="text-xs lg:text-sm text-white/90">8 Bulan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-white/20">
                  <p className="text-2xl lg:text-3xl font-bold text-electric-300">8+</p>
                  <p className="text-[10px] lg:text-xs text-white/70 mt-1">Bulan AI</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-white/20">
                  <p className="text-2xl lg:text-3xl font-bold text-electric-300">5+</p>
                  <p className="text-[10px] lg:text-xs text-white/70 mt-1">Proyek</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-white/20">
                  <p className="text-2xl lg:text-3xl font-bold text-electric-300">2</p>
                  <p className="text-[10px] lg:text-xs text-white/70 mt-1">Bisnis</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - 60% */}
            <ScrollReveal variant="fade-left" delay={0.2} className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Siapa Saya?</h3>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p className="text-lg">
                    Saya Muhammad Nizar Al-Faris, seorang <strong className="text-electric-500 font-semibold">AI Engineer dan Spesialis Digital Marketing</strong> berusia 16 tahun yang passionate dalam menghadirkan solusi digital inovatif. Dengan pengalaman 8 bulan di bidang pengembangan web berbasis AI, saya membantu bisnis mengubah ide menjadi website profesional yang fungsional dan menarik.
                  </p>
                  <p className="text-lg">
                    Yang membedakan saya adalah pendekatan <strong className="text-electric-500 font-semibold">AI-first development</strong> menggunakan berbagai intelligent agents (Claude AI, Qwen Coder, Cascade Windsurf, dan tools modern lainnya) untuk mempercepat proses development hingga <strong className="text-electric-500 font-semibold">3x lebih cepat</strong> tanpa mengorbankan kualitas.</p>
                  <p className="text-lg">
                    "Lebih baik mempekerjakan AI daripada dipekerjakan oleh AI" - moto ini mencerminkan semangat saya untuk menguasai teknologi. Saat ini, saya juga mendalami digital entrepreneurship, menguasai Facebook Ads dan strategi digital marketing untuk pertumbuhan bisnis.</p>
                </div>
              </div>

              {/* Stats Cards */}
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { label: 'AI Engineering', value: '8+', sub: 'Bulan Pengalaman' },
                  { label: 'Berhasil', value: '5+', sub: 'Proyek Selesai' },
                  { label: 'Berjalan', value: '2', sub: 'Bisnis Aktif' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/60 mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-electric-300 mb-1">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.sub}</p>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Skills Highlight */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Keahlian Utama</h3>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-6 border-l-4 border-electric-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="bg-white/10 p-1.5 lg:p-2 rounded-lg">
                          {/* Icon styling handled by Lucide defaults, usually 24px which is fine, but maybe scale down slightly if needed */}
                          {React.cloneElement(skill.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6 text-electric-300" })}
                        </div>
                        <span className="text-[10px] lg:text-xs font-mono text-electric-300 bg-electric-300/10 px-1.5 py-0.5 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <h4 className="text-sm lg:text-xl font-bold text-white mb-0.5 lg:mb-1 truncate">{skill.name}</h4>
                      <p className="text-xs lg:text-sm text-white/70 line-clamp-2">{skill.category}</p>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>

              {/* Tech Stack & Education Combined */}
              <ScrollReveal variant="fade-up" delay={0.3} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 shadow-md">
                <h3 className="text-xl font-bold text-white mb-6">Teknologi & Pendidikan</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white/70 mb-3 uppercase">Tools Utama</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Claude AI', 'Vercel', 'Meta Ads Manager', 'Google Analytics'].map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/10 text-white/90 rounded-lg text-sm font-medium hover:bg-electric-500 hover:text-white transition-colors border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white/70 mb-3 uppercase">Sertifikasi</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-white/80">• Software Engineering - RevoU (2025)</li>
                      <li className="text-sm text-white/80">• Digital Marketing - RevoU (2025)</li>
                      <li className="text-sm text-white/80">• Krenovator Digital Tribe (2025)</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>

        <Education />

        {/* Why Choose Me Section */}
        <div className="bg-white/10 backdrop-blur-lg py-16 px-8 rounded-3xl border border-white/20">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
              Mengapa Memilih Saya?
            </h2>
            <p className="text-center text-white mb-12 max-w-2xl mx-auto">
              Kombinasi unik antara keahlian teknis AI development dan pemahaman mendalam tentang digital marketing
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 lg:p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-electric-500/10 hover:border-electric-500/30 flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-electric-500/20 to-navy-800/50 w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-3 lg:mb-4 text-electric-300 border border-electric-500/20 flex-shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6" })}
                </div>
                <h4 className="text-sm lg:text-lg font-bold text-white mb-1 lg:mb-2 leading-tight">{item.title}</h4>
                <p className="text-xs lg:text-sm text-white/70 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Workflow/Process Section */}
        <div>
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
              Proses Kerja Saya
            </h2>
            <p className="text-center text-white mb-16 max-w-2xl mx-auto">
              Metodologi yang terstruktur untuk memastikan hasil terbaik di setiap proyek
            </p>
          </ScrollReveal>

          <StaggerContainer className="max-w-4xl mx-auto space-y-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className={`flex gap-4 lg:gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-electric-500 to-navy-900 flex items-center justify-center text-white font-bold text-lg lg:text-xl border-2 border-white/20 shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} mb-2`}>
                    <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">{step.title}</h3>
                    <div className="flex items-center gap-2 text-xs lg:text-sm text-white/60 mt-1">
                      <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Certificates Section */}
        <Certificates />

        {/* Testimonials Section */}
        <div className="bg-gradient-to-br from-navy-900 to-electric-500 py-16 px-8 rounded-3xl">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
              Apa Kata Mereka?
            </h2>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Feedback dari client yang puas dengan hasil kerja saya
            </p>
          </ScrollReveal>

          {/* Desktop Grid */}
          <StaggerContainer className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.position}</p>
                  <p className="text-electric-300 text-sm mt-2">Proyek: {testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide px-4 -mx-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[85%] bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-white/70 text-xs">{testimonial.position}</p>
                    <p className="text-electric-300 text-xs mt-1">Proyek: {testimonial.project}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />
              ))}
            </div>
          </div>

          <ScrollReveal variant="fade-up" delay={0.3} className="text-center mt-12">
            <p className="text-white/60 text-sm italic">
              * Testimonial di atas adalah placeholder. Data asli akan diisi setelah mendapat feedback dari client.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
