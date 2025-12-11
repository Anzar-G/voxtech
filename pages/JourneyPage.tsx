import React, { useState, useEffect } from 'react';
import { BookOpen, Rocket, TrendingUp, Award, Target, MousePointer, Eye, DollarSign, CheckCircle, Heart, Palette, BarChart3, Zap, Instagram, Music, Package, MessageSquare, Gift, Calendar, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';
import PageSkeleton from '../components/loaders/PageSkeleton';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import MarketingStrategy from '../components/MarketingStrategy';
import CaseStudy from '../components/CaseStudy';
import DataAnalysis from '../components/DataAnalysis';
import SocialMediaAnalytics from '../components/SocialMediaAnalytics';
import Journey from '../components/Journey';

const JourneyPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showFullGoals, setShowFullGoals] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    if (isLoading) return <PageSkeleton />;

    const metrics = [
        { icon: <MousePointer />, value: '895', label: 'Total Klik Link' },
        { icon: <Eye />, value: '63.580', label: 'Video Views' },
        { icon: <TrendingUp />, value: '4.62%', label: 'CTR Tertinggi' },
        { icon: <DollarSign />, value: 'Rp 165', label: 'CPC Terendah' },
        { icon: <CheckCircle />, value: '62.90%', label: 'Konversi LP Terbaik' },
    ];

    const campaigns = [
        {
            name: 'Awareness Ads',
            status: 'Tidak Aktif',
            linkClicks: 72,
            ctr: '0.14%',
            cpc: 'Rp 377',
            impressions: '49.847',
            results: '49.026 Reach',
            highlight: 'impressions',
        },
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





    return (
        <PageWrapper>
            <div className="pt-20 lg:pt-0">
                {/* Journey Timeline Section */}
                <Journey />


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
                                    <p className="text-lg font-semibold text-white">Nov 10 - Dec 10, 2025</p>
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">Total Pengeluaran Iklan</p>
                                    <p className="text-lg font-semibold text-white">Rp 325.789</p>
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

                        {/* Campaign Table (Desktop) & Carousel (Mobile) */}
                        <ScrollReveal variant="fade-up" delay={0.2} className="mb-16">
                            {/* Header */}
                            <div className="bg-electric-500 text-white px-6 py-4 rounded-t-2xl lg:rounded-t-2xl">
                                <h3 className="text-xl font-bold">Rincian Kampanye</h3>
                            </div>

                            {/* Desktop Table - Hidden on Mobile */}
                            <div className="hidden lg:block bg-white rounded-b-2xl overflow-hidden shadow-xl border border-gray-200 border-t-0">
                                <div className="overflow-x-auto">
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
                                                <tr key={index} className="hover:bg-purple-50 transition-colors">
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
                                                    <td className={`px-6 py-4 text-sm ${campaign.highlight === 'impressions' ? 'text-green-600 font-semibold' : 'text-navy-900'}`}>
                                                        {campaign.impressions}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-navy-900">{campaign.results}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Mobile Carousel - Visible on Mobile */}
                            <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-4 scrollbar-hide -mx-6 px-6 bg-white/5 backdrop-blur-sm rounded-b-2xl">
                                {campaigns.map((campaign, index) => (
                                    <div key={index} className="snap-center flex-shrink-0 w-[85%] bg-white rounded-xl shadow-md p-5 border border-purple-100">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-bold text-navy-900 text-base">{campaign.name}</h4>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] uppercase font-bold tracking-wider">{campaign.status}</span>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-500">Impressions</span>
                                                <span className={`font-semibold ${campaign.highlight === 'impressions' ? 'text-green-600' : 'text-gray-800'}`}>{campaign.impressions}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-500">Clicks (CTR)</span>
                                                <div className="text-right">
                                                    <span className="font-semibold text-gray-800 block">{campaign.linkClicks}</span>
                                                    <span className={`text-xs ${campaign.highlight === 'ctr' ? 'text-green-600 font-bold' : 'text-gray-500'}`}>{campaign.ctr}</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-500">CPC</span>
                                                <span className={`font-semibold ${campaign.highlight === 'best' ? 'text-green-600' : 'text-gray-800'}`}>{campaign.cpc}</span>
                                            </div>
                                            <div className="flex justify-between pt-1">
                                                <span className="text-gray-500 font-medium">Result</span>
                                                <span className="font-bold text-electric-600">{campaign.results}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Key Insights - Enhanced */}
                        <ScrollReveal variant="fade-up" delay={0.3}>
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">Marketing Insights & Learnings</h3>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6">
                                {marketingInsights.map((insight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                                    >
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4 mb-3 lg:mb-4 text-center lg:text-left">
                                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-electric-500/20 flex items-center justify-center text-electric-300 flex-shrink-0">
                                                {React.cloneElement(insight.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6" })}
                                            </div>
                                            <div>
                                                <p className="text-[10px] lg:text-xs text-electric-300 font-semibold uppercase tracking-wide mb-0.5 lg:mb-1">
                                                    {insight.category}
                                                </p>
                                                <h4 className="text-sm lg:text-lg font-bold text-white leading-tight">
                                                    {insight.headline}
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="text-xs lg:text-sm text-white/80 leading-relaxed text-center lg:text-left">
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



                <SocialMediaAnalytics />
            </div>
        </PageWrapper>
    );
};

export default JourneyPage;
