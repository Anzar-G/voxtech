import React from 'react';
import { BookOpen, Rocket, TrendingUp, Award, Target, MousePointer, Eye, DollarSign, CheckCircle, Heart, Palette, BarChart3, Zap, Instagram, Music, Package, MessageSquare, Gift, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import MarketingStrategy from '../components/MarketingStrategy';
import CaseStudy from '../components/CaseStudy';
import DataAnalysis from '../components/DataAnalysis';

const JourneyPage: React.FC = () => {
    const events = [
        {
            date: 'Agustus 2025',
            icon: <BookOpen className="w-6 h-6" />,
            title: 'Memulai Pembelajaran Digital Entrepreneurship',
            description: 'Bergabung dengan bootcamp RevoU & Krenovator Digital Tribe untuk mempelajari software engineering dan digital marketing',
            achievements: [
                'Menyelesaikan fundamental full-stack development',
                'Menguasai React, Next.js, dan teknologi web modern',
                'Mulai mempelajari Facebook Ads & strategi digital marketing',
            ],
        },
        {
            date: 'Oktober 2025',
            icon: <Rocket className="w-6 h-6" />,
            title: 'Meluncurkan Bisnis Pertama',
            description: 'Feyd Store - Platform e-commerce untuk produk islami',
            achievements: [
                'Membangun platform e-commerce yang fungsional',
                'Mengimplementasikan integrasi pembayaran',
                'Mengelola inventory & pesanan',
            ],
        },
        {
            date: 'Oktober 2025',
            icon: <Rocket className="w-6 h-6" />,
            title: 'Meluncurkan Bisnis Kedua',
            description: 'Frontworks - Layanan web development berbasis AI',
            achievements: [
                'Membuat website portfolio profesional',
                'Menetapkan penawaran layanan',
                'Memulai akuisisi klien',
            ],
        },
        {
            date: 'November 2025',
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Memulai Perjalanan Facebook Ads',
            description: 'Menjalankan kampanye dengan budget 32k/hari',
            achievements: [
                'Mengelola iklan multi-produk (Al-Quran, Novel)',
                'Testing berbagai segmen audience',
                'Optimasi untuk konversi',
            ],
        },
        {
            date: 'Desember 2025',
            icon: <Award className="w-6 h-6" />,
            title: 'Mencapai Sertifikasi & Milestone',
            description: 'Sertifikasi profesional dan pengiriman proyek',
            achievements: [
                '2x Sertifikat Software Engineering (RevoU)',
                '2x Sertifikat Digital Marketing (RevoU)',
                '5+ Proyek Berhasil Diselesaikan',
                '823 klik, CTR 2.37% pada iklan',
            ],
        },
    ];

    const metrics = [
        { icon: <MousePointer />, value: '823', label: 'Total Klik Link' },
        { icon: <Eye />, value: '26,653', label: 'Video Views' },
        { icon: <TrendingUp />, value: '4.62%', label: 'CTR Tertinggi' },
        { icon: <DollarSign />, value: 'Rp 165', label: 'CPC Terendah' },
        { icon: <CheckCircle />, value: '62.90%', label: 'Konversi LP Terbaik' },
    ];

    const campaigns = [
        {
            name: 'Traffic Tsabit',
            status: 'Tidak Aktif',
            linkClicks: 566,
            ctr: '2.37%',
            cpc: 'Rp 165',
            impressions: '23,872',
            results: '340 LPV',
            highlight: 'best',
        },
        {
            name: '11/11-KM/Leads/Tsabit',
            status: 'Tidak Aktif',
            linkClicks: 124,
            ctr: '4.62%',
            cpc: 'Rp 761',
            impressions: '2,686',
            results: '1 Lead',
            highlight: 'ctr',
        },
        {
            name: '11/11-TB/Leads',
            status: 'Tidak Aktif',
            linkClicks: 114,
            ctr: '2.68%',
            cpc: 'Rp 725',
            impressions: '4,252',
            results: '2 Leads',
            highlight: null,
        },
    ];

    const insights = [
        'Berhasil mengoptimalkan CPC hingga Rp 165 (50% lebih murah dari rata-rata industri)',
        'Mencapai CTR 4.62% (3x lebih tinggi dari benchmark Facebook Ads 1.5%)',
        'Landing page conversion rate mencapai 62.90%',
        'Mengelola 4 kampanye simultan dengan total budget Rp 298K',
    ];

    const marketingInsights = [
        {
            icon: <Target className="w-6 h-6" />,
            category: "Audience Targeting",
            headline: "Targeting yang Tepat adalah Kunci",
            description: "Audience targeting yang spesifik adalah kunci utama keberhasilan kampanye Facebook Ads. Semakin relevan audience, semakin tinggi engagement."
        },
        {
            icon: <Palette className="w-6 h-6" />,
            category: "Creative & Copy",
            headline: "Creative Menentukan Performa",
            description: "Creative dan copywriting yang relevan dan menarik sangat mempengaruhi CTR dan CPC. Video pendek terbukti paling efektif."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            category: "Data Analysis",
            headline: "Analisis Real-Time untuk Optimasi",
            description: "Analisis data secara berkala memungkinkan optimasi kampanye secara real-time, menghemat budget dan meningkatkan ROI."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            category: "Traffic Quality",
            headline: "Kualitas Traffic Lebih Penting",
            description: "Link Click to LP Rate penting untuk diukur selain jumlah traffic. Traffic berkualitas tinggi menghasilkan konversi lebih baik."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            category: "Conversion Strategy",
            headline: "Facebook Ads untuk Awareness",
            description: "Facebook Ads adalah alat yang ampuh untuk awareness dan traffic, tetapi perlu strategi lanjutan (landing page optimization, retargeting) untuk konversi maksimal."
        }
    ];

    const socialMediaStrategy = {
        platforms: [
            { name: "Instagram", handle: "@studifiqh.id", icon: <Instagram className="w-5 h-5" /> },
            { name: "TikTok", handle: "@studifiqh.id", icon: <Music className="w-5 h-5" /> }
        ],
        contentTypes: [
            "Gambar produk Al-Qur'an dengan highlight fitur",
            "Quotes islami dengan desain menarik",
            "Tips belajar Al-Qur'an dan hafalan",
            "Highlight fitur produk (tajwid warna, terjemahan)"
        ],
        hashtags: ["#AlQuranKharisma", "#BelajarAlQuran", "#NovelIslami", "#HafalQuran", "#ProdukIslami"],
        ecommerceIntegration: "Media sosial digunakan untuk membangun awareness dan mengarahkan traffic ke website Feyd Store melalui link di bio dan story."
    };

    const socialMediaMetrics = {
        instagram: {
            period30: {
                interactions: 32,
                followers: 23,
                nonFollowers: 9,
                likes: 21,
                comments: 7,
                shares: 2
            },
            period90: {
                views: 3418,
                followerViews: 1353,
                nonFollowerViews: 2065,
                accountsReached: 308
            }
        },
        tiktok: {
            views: '10K+',
            profileViews: 29,
            likes: 410,
            comments: 16,
            shares: 13,
            fypPercentage: 75.4,
            searchPercentage: 22.3,
            engagementRate: 4.1
        }
    };

    return (
        <PageWrapper>
            <div className="pt-20 lg:pt-0">
                {/* Journey Timeline Section */}
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

                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Perjalanan Digital Entrepreneurship
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Dari pembelajaran hingga membangun bisnis digital yang sukses
                        </p>
                    </ScrollReveal>

                    {/* Timeline */}
                    <div className="relative">
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-500 to-electric-500/20 hidden md:block" />

                        <StaggerContainer className="space-y-12">
                            {events.map((event, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-electric-500 border-4 border-white shadow-lg z-10" />

                                    <div className="lg:w-1/2">
                                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20">
                                            <div className="inline-block px-5 py-2 bg-electric-500 text-white rounded-full text-sm font-semibold mb-4">
                                                {event.date}
                                            </div>

                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-electric-300 flex-shrink-0">
                                                    {event.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm text-white/80">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-xs font-semibold text-white/70 mb-2">Pencapaian:</p>
                                                <ul className="space-y-2">
                                                    {event.achievements.map((achievement, i) => (
                                                        <li key={i} className="text-sm text-white/90 flex items-start gap-2">
                                                            <span className="text-electric-300 mt-0.5">•</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:block lg:w-1/2" />
                                </motion.div>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Current Focus */}
                    <ScrollReveal variant="scale-up" className="mt-16 bg-gradient-to-br from-electric-500 to-navy-900 rounded-2xl p-10 text-white text-center shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Target className="w-12 h-12" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Fokus Saat Ini</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {[
                                'Mengembangkan Feyd Store e-commerce',
                                'Menumbuhkan basis klien Frontworks',
                                'Menguasai optimasi Facebook Ads',
                                'Eksplorasi tools AI development baru',
                            ].map((goal, i) => (
                                <div key={i} className="flex items-center gap-2 text-left">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-base">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </section>


                {/* Marketing Strategy Section */}
                <MarketingStrategy />

                {/* Case Study Section */}
                <CaseStudy />

                {/* Performance Section */}
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
                        <ScrollReveal className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Hasil Marketing Terukur
                            </h2>
                            <p className="text-lg text-white/80 max-w-3xl mx-auto">
                                Mengelola kampanye Facebook Ads dengan pendekatan berbasis data untuk mengoptimalkan ROI dan conversion rate
                            </p>
                        </ScrollReveal>

                        {/* Campaign Period */}
                        <ScrollReveal variant="fade-up" delay={0.1} className="bg-white/10 border border-white/20 rounded-2xl p-8 mb-16 shadow-md">
                            <div className="flex flex-wrap items-center justify-between gap-6">
                                <div>
                                    <p className="text-sm text-white/70">Periode Kampanye</p>
                                    <p className="text-lg font-semibold text-white">Nov 10 - Dec 4, 2025</p>
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">Total Pengeluaran Iklan</p>
                                    <p className="text-lg font-semibold text-white">Rp 298.643</p>
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">Strategi Budget</p>
                                    <p className="text-lg font-semibold text-white">Rp 32.000/hari per kampanye</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Key Metrics */}
                        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-electric-500/30 transition-all duration-300"
                                >
                                    <div className="flex justify-center text-electric-500 mb-3">
                                        {React.cloneElement(metric.icon, { size: 24 })}
                                    </div>
                                    <p className="text-2xl lg:text-3xl font-bold text-navy-900 mb-1">{metric.value}</p>
                                    <p className="text-xs lg:text-sm font-semibold text-navy-900">{metric.label}</p>
                                </motion.div>
                            ))}
                        </StaggerContainer>

                        {/* Campaign Table */}
                        <ScrollReveal variant="fade-up" delay={0.2} className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16 border border-gray-200">
                            <div className="bg-electric-500 text-white px-6 py-4">
                                <h3 className="text-xl font-bold">Rincian Kampanye</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="min-w-[800px]">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">Kampanye</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">Status</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">Klik</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">CTR</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">CPC</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">Impressions</th>
                                                <th className="px-6 py-4 text-left text-xs font-semibold text-navy-900 uppercase">Hasil</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {campaigns.map((campaign, index) => (
                                                <tr key={index} className="hover:bg-bg-light-blue transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{campaign.name}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">
                                                            {campaign.status}
                                                        </span>
                                                    </td>
                                                    <td className={`px-6 py-4 text-sm font-semibold ${campaign.highlight === 'best' ? 'text-green-600' : 'text-navy-900'}`}>
                                                        {campaign.linkClicks}
                                                    </td>
                                                    <td className={`px-6 py-4 text-sm ${campaign.highlight === 'ctr' ? 'text-green-600 font-semibold' : 'text-navy-900'}`}>
                                                        {campaign.ctr}
                                                    </td>
                                                    <td className={`px-6 py-4 text-sm ${campaign.highlight === 'best' ? 'text-green-600 font-semibold' : 'text-navy-900'}`}>
                                                        {campaign.cpc}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-navy-900">{campaign.impressions}</td>
                                                    <td className="px-6 py-4 text-sm text-navy-900">{campaign.results}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Key Insights - Enhanced */}
                        <ScrollReveal variant="fade-up" delay={0.3}>
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">Marketing Insights & Learnings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {marketingInsights.map((insight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center text-electric-300 flex-shrink-0">
                                                {insight.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs text-electric-300 font-semibold uppercase tracking-wide mb-1">
                                                    {insight.category}
                                                </p>
                                                <h4 className="text-lg font-bold text-white mb-2">
                                                    {insight.headline}
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="text-sm text-white/80 leading-relaxed">
                                            {insight.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Data Analysis & Learnings Section */}
                <DataAnalysis />

                <section className="relative py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
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
                        {/* Performa Social Media */}
                        <ScrollReveal variant="fade-up" className="mb-12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                    <TrendingUp className="text-electric-300 w-8 h-8" />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white">Performa Social Media</h2>
                            </div>
                        </ScrollReveal>

                        {/* Social Media Strategy Overview */}
                        <ScrollReveal variant="fade-up" delay={0.1} className="mb-12">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Strategi Pertumbuhan Media Sosial</h3>

                                {/* Platforms */}
                                <div className="mb-6">
                                    <p className="text-sm text-white/70 uppercase tracking-wide mb-3">Platform</p>
                                    <div className="flex flex-wrap gap-3">
                                        {socialMediaStrategy.platforms.map((platform, index) => (
                                            <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 border border-white/20">
                                                <span className="text-electric-300">{platform.icon}</span>
                                                <span className="text-white font-semibold">{platform.name}</span>
                                                <span className="text-white/60 text-sm">{platform.handle}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Types */}
                                <div className="mb-6">
                                    <p className="text-sm text-white/70 uppercase tracking-wide mb-3">Jenis Konten</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {socialMediaStrategy.contentTypes.map((type, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <span className="text-electric-300 mt-1">•</span>
                                                <span className="text-white/90 text-sm">{type}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Pillars */}
                                <div className="mb-6">
                                    <p className="text-sm text-white/70 uppercase tracking-wide mb-3">Content Pillars untuk Feyd Store</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {[
                                            { name: 'Produk', desc: 'Tampilan & fitur', icon: <Package className="w-6 h-6" />, color: 'blue' },
                                            { name: 'Edukasi', desc: 'Tips & manfaat', icon: <BookOpen className="w-6 h-6" />, color: 'green' },
                                            { name: 'Testimoni', desc: 'Cerita pengguna', icon: <MessageSquare className="w-6 h-6" />, color: 'purple' },
                                            { name: 'Promosi', desc: 'Diskon & promo', icon: <Gift className="w-6 h-6" />, color: 'orange' }
                                        ].map((pillar, index) => {
                                            const colorClasses = {
                                                blue: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
                                                green: 'bg-green-500/20 text-green-400 border-green-500/30',
                                                purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
                                                orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                                            }[pillar.color];

                                            return (
                                                <div key={index} className="bg-white/10 rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300">
                                                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${colorClasses} flex items-center justify-center`}>
                                                        {pillar.icon}
                                                    </div>
                                                    <p className="text-sm font-bold text-white mb-1">{pillar.name}</p>
                                                    <p className="text-xs text-white/60">{pillar.desc}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Marketing Calendar */}
                                <div className="mb-6">
                                    <p className="text-sm text-white/70 uppercase tracking-wide mb-3">Kalender Pemasaran</p>
                                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                                        <p className="text-sm text-white/80 mb-2">
                                            <span className="font-semibold text-electric-300">Perencanaan Terjadwal:</span> Meskipun masih dalam tahap awal, merencanakan postingan dan kampanye iklan secara terjadwal membantu menjaga konsistensi dan menghemat waktu produksi.
                                        </p>
                                        <p className="text-sm text-white/70">
                                            <span className="font-semibold">Dampak:</span> Membantu menjaga brand awareness, meningkatkan engagement, dan menjaga keseimbangan antara konten edukatif dan promosi.
                                        </p>
                                    </div>
                                </div>

                                {/* Hashtags */}
                                <div className="mb-6">
                                    <p className="text-sm text-white/70 uppercase tracking-wide mb-3">Hashtag Strategy</p>
                                    <div className="flex flex-wrap gap-2">
                                        {socialMediaStrategy.hashtags.map((tag, index) => (
                                            <span key={index} className="bg-electric-500/20 text-electric-300 px-3 py-1 rounded-full text-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* E-commerce Integration */}
                                <div className="bg-gradient-to-r from-electric-500/20 to-transparent rounded-xl p-4 border-l-4 border-electric-500">
                                    <p className="text-sm text-white/70 uppercase tracking-wide mb-2">Integrasi E-commerce</p>
                                    <p className="text-white/90 leading-relaxed">{socialMediaStrategy.ecommerceIntegration}</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Instagram Analytics */}
                            <div className="space-y-8">
                                <ScrollReveal variant="fade-right" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center shadow-lg">
                                            <span className="text-white text-2xl font-bold">IG</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Instagram Analytics</h3>
                                            <p className="text-sm text-white/60">18 Okt - 16 Nov 2024</p>
                                        </div>
                                    </div>

                                    {/* Key Metrics Dashboard */}
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Engage</p>
                                                <span className="text-green-400 text-xs font-semibold">+12%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.instagram.period30.interactions}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Followers</p>
                                                <span className="text-green-400 text-xs font-semibold">+{socialMediaMetrics.instagram.period30.followers}</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.instagram.period30.followers}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Reach</p>
                                                <span className="text-green-400 text-xs font-semibold">+8%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.instagram.period90.accountsReached}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Views</p>
                                                <span className="text-green-400 text-xs font-semibold">+15%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{(socialMediaMetrics.instagram.period90.views / 1000).toFixed(1)}K</p>
                                        </div>
                                    </div>

                                    {/* Engagement Breakdown */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                            <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                                Audience Breakdown
                                            </h5>
                                            <div className="space-y-3">
                                                <div>
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-sm text-white/70">Followers</span>
                                                        <span className="text-sm font-semibold text-white">{socialMediaMetrics.instagram.period30.followers} ({((socialMediaMetrics.instagram.period30.followers / socialMediaMetrics.instagram.period30.interactions) * 100).toFixed(0)}%)</span>
                                                    </div>
                                                    <div className="w-full bg-white/10 rounded-full h-2">
                                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${(socialMediaMetrics.instagram.period30.followers / socialMediaMetrics.instagram.period30.interactions) * 100}%` }}></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-sm text-white/70">Non-Followers</span>
                                                        <span className="text-sm font-semibold text-white">{socialMediaMetrics.instagram.period30.nonFollowers} ({((socialMediaMetrics.instagram.period30.nonFollowers / socialMediaMetrics.instagram.period30.interactions) * 100).toFixed(0)}%)</span>
                                                    </div>
                                                    <div className="w-full bg-white/10 rounded-full h-2">
                                                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: `${(socialMediaMetrics.instagram.period30.nonFollowers / socialMediaMetrics.instagram.period30.interactions) * 100}%` }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                                            <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                                                Engagement Stats
                                            </h5>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="text-center">
                                                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-red-500/20 flex items-center justify-center">
                                                        <Heart className="w-6 h-6 text-red-400" />
                                                    </div>
                                                    <p className="text-xl font-bold text-white">{socialMediaMetrics.instagram.period30.likes}</p>
                                                    <p className="text-xs text-white/60">Likes</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                        <span className="text-blue-400 text-lg">💬</span>
                                                    </div>
                                                    <p className="text-xl font-bold text-white">{socialMediaMetrics.instagram.period30.comments}</p>
                                                    <p className="text-xs text-white/60">Comments</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-500/20 flex items-center justify-center">
                                                        <span className="text-green-400 text-lg">📤</span>
                                                    </div>
                                                    <p className="text-xl font-bold text-white">{socialMediaMetrics.instagram.period30.shares}</p>
                                                    <p className="text-xs text-white/60">Shares</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Top Performing Content */}
                                    <div className="mt-8">
                                        <h4 className="text-lg font-bold text-white mb-4">Konten Paling Populer</h4>
                                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                                            {[
                                                { url: 'https://www.instagram.com/p/DQ-qCniD6Cn/', img: '/placeholder-image/Instagram/Top1.png', views: 93, interactions: 4 },
                                                { url: 'https://www.instagram.com/p/DRLpeWTCP9U/', img: '/placeholder-image/Instagram/Top2.png', views: 78, interactions: 3 },
                                                { url: 'https://www.instagram.com/p/DRI6OdPDyDB/', img: '/placeholder-image/Instagram/Top3.png', views: 86, interactions: 5 }
                                            ].map((post, index) => (
                                                <a
                                                    key={index}
                                                    href={post.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative aspect-square rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                                >
                                                    <img
                                                        src={post.img}
                                                        alt={`Instagram Post ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Metrics Overlay - Always Visible */}
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                        <div className="flex items-center justify-between text-white text-sm">
                                                            <div className="flex items-center gap-1">
                                                                <Eye size={16} className="text-white" />
                                                                <span className="font-semibold">{post.views}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Heart size={16} className="text-white" />
                                                                <span className="font-semibold">{post.interactions}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Hover Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                                <span className="text-white text-xl">📸</span>
                                                            </div>
                                                            <p className="text-sm font-semibold text-white">Lihat Post</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* TikTok Analytics */}
                            <div className="space-y-8">
                                <ScrollReveal variant="fade-left" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg">
                                            <span className="text-white text-2xl font-bold">TT</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">TikTok Analytics</h3>
                                            <p className="text-sm text-white/60">18 Okt - 16 Nov 2024</p>
                                        </div>
                                    </div>

                                    {/* Key Metrics Dashboard */}
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                        <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-4 border border-gray-600/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Views</p>
                                                <span className="text-green-400 text-xs font-semibold">+25%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.tiktok.views}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl p-4 border border-red-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Likes</p>
                                                <span className="text-green-400 text-xs font-semibold">+18%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.tiktok.likes}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Engage</p>
                                                <span className="text-green-400 text-xs font-semibold">{socialMediaMetrics.tiktok.engagementRate}%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.tiktok.comments + socialMediaMetrics.tiktok.shares}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-xs text-white/70 uppercase tracking-wide">Profile</p>
                                                <span className="text-green-400 text-xs font-semibold">+32%</span>
                                            </div>
                                            <p className="text-3xl font-bold text-white mb-1">{socialMediaMetrics.tiktok.profileViews}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Traffic Source */}
                                        <div className="bg-white/5 rounded-xl p-6 shadow-sm border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-4">Traffic Source</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/70">For You Page</span>
                                                    <span className="font-bold text-white">{socialMediaMetrics.tiktok.fypPercentage}%</span>
                                                </div>
                                                <div className="w-full bg-white/10 rounded-full h-2">
                                                    <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{ width: `${socialMediaMetrics.tiktok.fypPercentage}%` }}></div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/70">Search</span>
                                                    <span className="font-bold text-white">{socialMediaMetrics.tiktok.searchPercentage}%</span>
                                                </div>
                                                <div className="w-full bg-white/10 rounded-full h-2">
                                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: `${socialMediaMetrics.tiktok.searchPercentage}%` }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Performance Insights */}
                                        <div className="bg-white/5 rounded-xl p-6 shadow-sm border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-4">Performance Insights</h4>
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-400 text-xl">✓</span>
                                                    <div>
                                                        <p className="font-semibold text-white">Engagement Rate: {socialMediaMetrics.tiktok.engagementRate}%</p>
                                                        <p className="text-sm text-white/60">Di atas rata-rata industri</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-400 text-xl">✓</span>
                                                    <div>
                                                        <p className="font-semibold text-white">Viral Potential: High</p>
                                                        <p className="text-sm text-white/60">75.4% dari FYP menunjukkan algoritma kuat</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-400 text-xl">✓</span>
                                                    <div>
                                                        <p className="font-semibold text-white">Strong Organic Reach</p>
                                                        <p className="text-sm text-white/60">Discovery melalui algoritma organik</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Top Performing Content */}
                                    <div className="mt-8">
                                        <h4 className="text-lg font-bold text-white mb-4">Konten Paling Populer</h4>
                                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                                            {[
                                                { url: 'https://www.tiktok.com/@studifiqh.id/photo/7572406798485916936', img: '/placeholder-image/Tiktok/Top1.png', views: 1890, interactions: 42 },
                                                { url: 'https://www.tiktok.com/@studifiqh.id/photo/7570100135565348103', img: '/placeholder-image/Tiktok/Top2.png', views: 758, interactions: 41 },
                                                { url: 'https://www.tiktok.com/@studifiqh.id/photo/7572018045439331592', img: '/placeholder-image/Tiktok/Top3.png', views: 834, interactions: 50 }
                                            ].map((video, index) => (
                                                <a
                                                    key={index}
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative aspect-square rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                                >
                                                    <img
                                                        src={video.img}
                                                        alt={`TikTok Video ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Metrics Overlay - Always Visible */}
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                        <div className="flex items-center justify-between text-white text-sm">
                                                            <div className="flex items-center gap-1">
                                                                <Eye size={16} className="text-white" />
                                                                <span className="font-semibold">{video.views.toLocaleString()}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Heart size={16} className="text-white" />
                                                                <span className="font-semibold">{video.interactions}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Hover Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                                <span className="text-white text-xl">🎵</span>
                                                            </div>
                                                            <p className="text-sm font-semibold text-white">Lihat Post</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default JourneyPage;
