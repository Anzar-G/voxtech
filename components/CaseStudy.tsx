import React from 'react';
import { Store, Target, TrendingUp, CheckCircle, Lightbulb, MousePointer, Eye, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const CaseStudy: React.FC = () => {
    const feydStoreCaseStudy = {
        challenge: "Memperkenalkan Al-Qur'an Kharisma ke pasar yang lebih luas secara online dan bersaing dengan produk sejenis untuk menarik minat pembaca novel islami.",
        strategy: [
            "Fokus pada keunggulan produk (tajwid warna, terjemahan, kisah inspiratif)",
            "Target audience spesifik yang tertarik dengan Al-Qur'an dan bacaan Islami",
            "Penggunaan Facebook Ads untuk mendatangkan traffic berkualitas ke landing page Feyd Store"
        ],
        execution: {
            campaignName: "Traffic Tsabit",
            objective: "Traffic",
            creative: "Video pendek menampilkan tampilan Novel Islami",
            copy: "Novel Islami yang mudah dibaca",
            targeting: "Interest: Novel Islami, Agama Islam"
        },
        results: {
            linkClicks: 566,
            landingPageViews: 340,
            ctr: "2.37%",
            cpc: "Rp 165",
            lpConversion: "60.07%",
            costPerResult: "Rp 276"
        },
        learnings: [
            "Berhasil: Audience targeting yang spesifik dan creative video pendek sangat efektif untuk niche ini",
            "Perlu Ditingkatkan: Konversi dari landing page ke pembelian masih menjadi fokus utama. Perlu optimasi lebih lanjut pada landing page dan strategi penjualan"
        ]
    };

    const keyMetrics = [
        { icon: <MousePointer className="w-6 h-6" />, value: '566', label: 'Link Clicks', highlight: true },
        { icon: <Eye className="w-6 h-6" />, value: '340', label: 'Landing Page Views', highlight: true },
        { icon: <TrendingUp className="w-6 h-6" />, value: '2.37%', label: 'CTR', highlight: true },
        { icon: <DollarSign className="w-6 h-6" />, value: 'Rp 165', label: 'CPC', highlight: true },
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
                            <Store className="text-electric-300 w-12 h-12" />
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Case Study: Feyd Store
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">
                        Contoh nyata penerapan digital marketing untuk bisnis e-commerce Al-Qur'an dan Novel
                    </p>
                </ScrollReveal>

                {/* Challenge & Strategy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Challenge */}
                    <ScrollReveal variant="fade-right">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                                    <Target className="text-red-400 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Tantangan</h3>
                            </div>
                            <p className="text-base text-white/80 leading-relaxed">
                                {feydStoreCaseStudy.challenge}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Strategy */}
                    <ScrollReveal variant="fade-left">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 h-full shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                                    <Lightbulb className="text-cyan-300 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Strategi</h3>
                            </div>
                            <ul className="space-y-3">
                                {feydStoreCaseStudy.strategy.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-electric-300 mt-1">✓</span>
                                        <span className="text-base text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Execution - Campaign Details */}
                <ScrollReveal variant="fade-up" delay={0.2} className="mb-16">
                    <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl border border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-8 text-center">
                            Eksekusi: Kampanye "{feydStoreCaseStudy.execution.campaignName}"
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <p className="text-sm text-white/70 mb-2">Objective</p>
                                <p className="text-xl font-bold text-white">{feydStoreCaseStudy.execution.objective}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <p className="text-sm text-white/70 mb-2">Creative</p>
                                <p className="text-xl font-bold text-white">{feydStoreCaseStudy.execution.creative}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <p className="text-sm text-white/70 mb-2">Copy</p>
                                <p className="text-xl font-bold text-white">"{feydStoreCaseStudy.execution.copy}"</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 md:col-span-2 lg:col-span-3">
                                <p className="text-sm text-white/70 mb-2">Targeting</p>
                                <p className="text-xl font-bold text-white">{feydStoreCaseStudy.execution.targeting}</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Results - Key Metrics */}
                <ScrollReveal variant="fade-up" delay={0.3} className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Hasil Kampanye</h3>
                    <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {keyMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-electric-500/30 transition-all duration-300"
                            >
                                <div className="flex justify-center text-electric-500 mb-3">
                                    {metric.icon}
                                </div>
                                <p className="text-3xl font-bold text-navy-900 mb-1">{metric.value}</p>
                                <p className="text-sm font-semibold text-navy-900">{metric.label}</p>
                            </motion.div>
                        ))}
                    </StaggerContainer>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                            <p className="text-sm text-white/70 mb-2">LP Conversion Rate</p>
                            <p className="text-4xl font-bold text-green-400 mb-1">{feydStoreCaseStudy.results.lpConversion}</p>
                            <p className="text-sm text-white/60">Traffic berkualitas tinggi</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                            <p className="text-sm text-white/70 mb-2">Cost Per Result</p>
                            <p className="text-4xl font-bold text-electric-300 mb-1">{feydStoreCaseStudy.results.costPerResult}</p>
                            <p className="text-sm text-white/60">Efisiensi biaya optimal</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Learnings */}
                <ScrollReveal variant="fade-up" delay={0.4}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-l-4 border-electric-500 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="text-electric-300 w-8 h-8" />
                            <h3 className="text-2xl font-bold text-white">Key Learnings</h3>
                        </div>
                        <div className="space-y-4">
                            {feydStoreCaseStudy.learnings.map((learning, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-electric-300 text-xl font-bold mt-1">•</span>
                                    <p className="text-base text-white/90 leading-relaxed">{learning}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CaseStudy;
