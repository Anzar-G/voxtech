import React from 'react';
import { Facebook, Palette, Target, FileText, Search, Rocket, BarChart3, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const MarketingStrategy: React.FC = () => {
    const platforms = [
        { name: 'Facebook Ads', icon: <Facebook className="w-8 h-8" />, description: 'Platform utama untuk iklan digital' },
        { name: 'Canva', icon: <Palette className="w-8 h-8" />, description: 'Desain konten visual' },
        { name: 'Meta Pixel', icon: <Target className="w-8 h-8" />, description: 'Analisis konversi' },
        { name: 'Landing Page', icon: <FileText className="w-8 h-8" />, description: 'Next.js/Vercel' },
    ];

    const marketingProcess = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Research & Targeting",
            description: "Menentukan audience berdasarkan interest (Al-Qur'an, Agama Islam, Pendidikan Anak) dan perilaku pengunjung menggunakan Meta Pixel untuk memahami customer journey."
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Creative & Copy",
            description: "Membuat video pendek yang menarik perhatian dengan copywriting yang fokus pada keunggulan produk (tajwid warna, terjemahan) dan solusi (belajar Al-Qur'an jadi mudah)."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Setup & Launch",
            description: "Menentukan objective (Traffic ke landing page, Leads), mengatur budget harian Rp 32.000 untuk testing berbagai audience dan creative."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Monitoring & Optimization",
            description: "Menganalisis metrik utama: CTR (kualitas creative), CPC (efisiensi biaya), Link Click to LP Rate (kualitas traffic). Menghentikan kampanye buruk, alokasi ke yang terbaik."
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Reporting",
            description: "Menyajikan data hasil kampanye dari Ads Manager dalam bentuk tabel, grafik, dan ringkasan insight untuk pengambilan keputusan."
        }
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
                {/* Header */}
                <ScrollReveal className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                            <Lightbulb className="text-electric-300 w-12 h-12" />
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Strategi & Proses Digital Marketing
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">
                        Menerapkan pendekatan data-driven dalam pemasaran digital, fokus pada audience targeting yang tepat, creative yang menarik, dan analisis berkelanjutan untuk optimasi kampanye
                    </p>
                </ScrollReveal>

                {/* Platform Showcase */}
                <ScrollReveal variant="fade-up" delay={0.1} className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Platform & Tools Utama</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl text-center"
                            >
                                <div className="flex justify-center text-electric-300 mb-4">
                                    {platform.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{platform.name}</h4>
                                <p className="text-sm text-white/70">{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* 5-Step Process */}
                <ScrollReveal variant="fade-up" delay={0.2}>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Proses Kerja 5 Langkah</h3>
                    <StaggerContainer className="space-y-6">
                        {marketingProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="relative"
                            >
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl">
                                    <div className="flex items-start gap-6">
                                        {/* Step Number */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-xl bg-electric-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-electric-300">
                                                    {step.icon}
                                                </div>
                                                <h4 className="text-xl font-bold text-white">{step.title}</h4>
                                            </div>
                                            <p className="text-base text-white/80 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector Line (except for last item) */}
                                {index < marketingProcess.length - 1 && (
                                    <div className="hidden lg:block absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-electric-500 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </ScrollReveal>

                {/* Detailed Sub-Sections */}
                <ScrollReveal variant="fade-up" delay={0.3} className="mt-20">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Deep Dive: Strategi Pemasaran Terstruktur</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Market Research */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                                    <Search className="text-cyan-300 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Riset Pasar</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Tujuan</p>
                                    <p className="text-sm text-white/80">Memahami target audience, pain points, dan kompetitor</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Aplikasi di Feyd Store</p>
                                    <p className="text-sm text-white/80">Menganalisis audience yang tertarik dengan Al-Qur'an Kharisma dan novel islami melalui Meta Pixel dan Facebook Audience Insights</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Hasil</p>
                                    <p className="text-sm text-white/80">Interest targeting spesifik: Agama Islam, Al-Qur'an, Pendidikan Anak</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Planning */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <Palette className="text-purple-400 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Perencanaan & Strategi Konten</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Tujuan</p>
                                    <p className="text-sm text-white/80">Menentukan brand positioning dan content pillars</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Brand Positioning</p>
                                    <p className="text-sm text-white/80">Al-Qur'an Kharisma dengan tajwid berwarna dan terjemahan</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Content Pillars</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['Produk', 'Edukasi', 'Testimoni', 'Promosi'].map((pillar, i) => (
                                            <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                                                {pillar}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Production & Execution */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <Rocket className="text-green-400 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Produksi & Eksekusi</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Tujuan</p>
                                    <p className="text-sm text-white/80">Membuat dan menjalankan kampanye yang efektif</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Aplikasi</p>
                                    <p className="text-sm text-white/80">Membuat iklan video pendek yang menonjolkan keunggulan Al-Qur'an Kharisma dengan copy yang menekankan kemudahan belajar</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Tools</p>
                                    <p className="text-sm text-white/80">Canva (desain), Facebook Ads Manager (eksekusi)</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Analysis & Evaluation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                    <BarChart3 className="text-orange-400 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">Analisis & Evaluasi</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Tujuan</p>
                                    <p className="text-sm text-white/80">Mengukur performa dan menemukan area untuk perbaikan</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Aplikasi</p>
                                    <p className="text-sm text-white/80">Menganalisis metrik seperti CTR, CPC, Link Click to LP Rate, Cost per Result dari kampanye Facebook Ads</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">Aksi</p>
                                    <p className="text-sm text-white/80">Menghentikan kampanye performa buruk, alokasi budget ke kampanye terbaik seperti "Traffic Tsabit"</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default MarketingStrategy;
