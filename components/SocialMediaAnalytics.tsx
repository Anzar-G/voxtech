import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Music, TrendingUp, Heart, Eye, Zap, Image as ImageIcon, Video, Share2, Grid, Calculator, UserCheck, Search, Flame } from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import useCountUp from '../hooks/useCountUp';

// --- Interfaces ---
interface MetricCardProps {
    title: string;
    value: number | string;
    suffix?: string;
    change?: string;
    icon?: React.ReactNode;
    color: string;
    size?: 'standard' | 'large';
    delay?: number;
}

interface AnalyticsData {
    views: number;
    likes: number;
    comments: number;
    shares: number;
    engagementRate?: number;
    profileViews?: number;
    followers?: number;
    nonFollowers?: number;
    accountsReached?: number;
    fypPercentage?: number;
    searchPercentage?: number;
    topContent: {
        url: string;
        img: string;
        views: number;
        interactions: number;
    }[];
}

// --- Helper Components ---
const MetricCard: React.FC<MetricCardProps> = ({
    title,
    value,
    suffix = '',
    change,
    icon,
    color,
    size = 'standard',
    delay = 0
}) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Precise color mapping
    const colorStyles: { [key: string]: string } = {
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-400/40 hover:bg-purple-500/20",
        pink: "bg-pink-500/10 border-pink-500/20 text-pink-300 hover:border-pink-400/40 hover:bg-pink-500/20",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-400/40 hover:bg-blue-500/20",
        green: "bg-green-500/10 border-green-500/20 text-green-300 hover:border-green-400/40 hover:bg-green-500/20",
        yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:border-yellow-400/40 hover:bg-yellow-500/20",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/20",
        gray: "bg-gray-700/30 border-gray-600/30 text-gray-300 hover:border-gray-500/40 hover:bg-gray-700/40",
        red: "bg-red-500/10 border-red-500/20 text-red-300 hover:border-red-400/40 hover:bg-red-500/20",
        emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-500/20",
    };

    const styleClass = colorStyles[color] || colorStyles.gray;
    const isLarge = size === 'large';

    // Parse numeric value
    const numericValue = typeof value === 'number' ? value : parseFloat(value.toString().replace(/[^0-9.]/g, ''));
    const isNumber = !isNaN(numericValue);
    const hasDecimals = value.toString().includes('.');

    // ✅ FIXED: Unconditional hook call
    const countUpResult = useCountUp({
        end: isNumber ? numericValue : 0,
        duration: 2000,
        decimals: hasDecimals ? 1 : 0
    });

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    // ✅ Use the result conditionally AFTER hook call
    const displayValue = hasAnimated && isNumber ? countUpResult : (isNumber ? '0' : value);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.1 }}
            whileHover={{ y: -4 }}
            className={`rounded-2xl p-4 lg:p-5 border transition-all duration-300 ${styleClass} ${isLarge ? 'col-span-2' : ''} shadow-lg backdrop-blur-sm`}
        >
            <div className="flex items-center justify-between mb-3">
                <p className={`uppercase tracking-wide font-medium ${isLarge ? 'text-sm text-white/80' : 'text-[10px] text-white/60'}`}>
                    {title}
                </p>
                {change && (
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-green-400 text-xs font-bold">{change}</span>
                    </div>
                )}
            </div>
            <div className="flex items-center gap-3">
                {icon && (
                    <div className={`${isLarge ? 'p-2 rounded-lg bg-white/5' : ''} transition-transform group-hover:scale-110 duration-300`}>
                        {icon}
                    </div>
                )}
                <p className={`${isLarge ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'} font-bold text-white tracking-tight`}>
                    {displayValue}{suffix}
                </p>
            </div>
        </motion.div>
    );
};


const AnalyticsPanel: React.FC<{
    platform: 'instagram' | 'tiktok';
    data: AnalyticsData;
}> = ({ platform, data }) => {
    const isInsta = platform === 'instagram';
    const totalEngagement = (data.likes || 0) + (data.comments || 0) + (data.shares || 0);

    return (
        <div className="space-y-8 h-full flex flex-col">
            <ScrollReveal variant={isInsta ? "fade-right" : "fade-left"} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isInsta ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' : 'bg-black border border-white/10'}`}>
                        {isInsta ? <Instagram className="text-white w-7 h-7" /> : <Music className="text-white w-7 h-7" />}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white capitalize tracking-tight">{platform} Analytics</h3>
                        <p className="text-sm text-white/60 font-medium">Performance Overview</p>
                    </div>
                </div>

                {/* Asymmetric Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {isInsta ? (
                        <>
                            {/* Featured Metric */}
                            <MetricCard
                                title="Total Engagement"
                                value={totalEngagement > 1000 ? (totalEngagement / 1000) : totalEngagement}
                                suffix={totalEngagement > 1000 ? "K" : ""}
                                change="+12.5%"
                                color="purple"
                                size="large"
                                icon={<Heart className="w-6 h-6" />}
                                delay={0}
                            />
                            <MetricCard title="Followers" value={data.followers || 0} change="+23" color="pink" icon={<UserCheck className="w-4 h-4" />} delay={1} />
                            <MetricCard title="Reach" value={data.accountsReached || 0} change="+8%" color="yellow" icon={<Grid className="w-4 h-4" />} delay={2} />
                        </>
                    ) : (
                        <>
                            {/* Featured Metric */}
                            <MetricCard
                                title="Total Views"
                                value={data.views}
                                change="+25.2%"
                                color="cyan"
                                size="large"
                                icon={<Eye className="w-6 h-6" />}
                                delay={0}
                            />
                            <MetricCard title="Likes" value={data.likes} change="+18%" color="red" icon={<Heart className="w-4 h-4" />} delay={1} />
                            <MetricCard title="Profile" value={data.profileViews || 0} change="+32%" color="emerald" icon={<TrendingUp className="w-4 h-4" />} delay={2} />
                        </>
                    )}
                </div>

                {/* Engagement / Traffic Source */}
                <div className="mb-8">
                    {isInsta ? (
                        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                            <h5 className="text-sm font-bold text-white/90 mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-yellow-400" />
                                Engagement Breakdown
                            </h5>
                            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
                                {[
                                    { label: 'Likes', count: data.likes, icon: <Heart className="w-5 h-5 text-red-400" /> },
                                    { label: 'Comments', count: data.comments, icon: <Calculator className="w-5 h-5 text-blue-400" /> },
                                    { label: 'Shares', count: data.shares, icon: <Share2 className="w-5 h-5 text-green-400" /> }
                                ].map((stat, i) => (
                                    <div key={i} className="flex-1 min-w-[80px] text-center bg-white/5 rounded-xl py-3 px-2 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-center mb-1">{stat.icon}</div>
                                        <p className="text-lg font-bold text-white">{stat.count}</p>
                                        <p className="text-[10px] text-white/50 uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-sm font-bold text-white/90 mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-cyan-400" />
                                Traffic Sources
                            </h4>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-white/70 flex items-center gap-1.5"><Flame className="w-3 h-3 text-cyan-400" />For You Page</span>
                                        <span className="font-bold text-white">{data.fypPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${data.fypPercentage}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-white/70 flex items-center gap-1.5"><Search className="w-3 h-3 text-purple-400" />Search</span>
                                        <span className="font-bold text-white">{data.searchPercentage}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${data.searchPercentage}%` }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Popular Content - Horizontal Scroll on Mobile */}
                <div className="mt-auto relative group/content">
                    <h4 className="text-sm font-bold text-white/80 mb-4 uppercase tracking-wider flex items-center justify-between">
                        Top Content
                        <span className="text-[10px] text-white/40 lg:hidden">Swipe to see more →</span>
                    </h4>

                    <div className="relative">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 scrollbar-hide -mx-2 px-2 lg:mx-0 lg:px-0">
                            {data.topContent.map((post, idx) => (
                                <ContentThumbnail key={idx} post={post} idx={idx} />
                            ))}
                        </div>
                        {/* Fade Indicator - Mobile Only */}
                        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-navy-900 via-navy-900/50 to-transparent pointer-events-none lg:hidden opacity-80" />
                    </div>
                </div>

            </ScrollReveal>
        </div>
    );
};

// Subcomponent for handling image states
const ContentThumbnail: React.FC<{ post: { url: string; img: string; views: number }; idx: number }> = ({ post, idx }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[180px] lg:w-auto snap-center group relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-900 border border-white/10 hover:border-white/30 transition-all"
        >
            {!imageError ? (
                <img
                    src={post.img}
                    alt={`Top ${idx}`}
                    loading="lazy"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white/40 p-4 text-center">
                    <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                    <span className="text-[10px] leading-tight">Image Unavailable</span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                        <Eye className="w-3.5 h-3.5 text-white/70" />
                        {post.views > 1000 ? `${(post.views / 1000).toFixed(1)}k` : post.views}
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                        <Share2 className="w-3 h-3 text-white" />
                    </div>
                </div>
            </div>
        </a>
    );
};

// --- Main Component ---
const SocialMediaAnalytics: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok'>('instagram');

    const instagramData: AnalyticsData = {
        views: 3418,
        likes: 21,
        comments: 7,
        shares: 2,
        followers: 23,
        nonFollowers: 9,
        accountsReached: 308,
        topContent: [
            { url: 'https://www.instagram.com/p/DQ-qCniD6Cn/', img: '/placeholder-image/Instagram/Top1.png', views: 93, interactions: 4 },
            { url: 'https://www.instagram.com/p/DRLpeWTCP9U/', img: '/placeholder-image/Instagram/Top2.png', views: 78, interactions: 3 },
            { url: 'https://www.instagram.com/p/DRI6OdPDyDB/', img: '/placeholder-image/Instagram/Top3.png', views: 86, interactions: 5 }
        ]
    };

    const tiktokData: AnalyticsData = {
        views: 10500,
        likes: 410,
        comments: 16,
        shares: 13,
        engagementRate: 4.1,
        profileViews: 29,
        fypPercentage: 75.4,
        searchPercentage: 22.3,
        topContent: [
            { url: 'https://www.tiktok.com/@studifiqh.id/photo/7572406798485916936', img: '/placeholder-image/Tiktok/Top1.png', views: 1890, interactions: 42 },
            { url: 'https://www.tiktok.com/@studifiqh.id/photo/7570100135565348103', img: '/placeholder-image/Tiktok/Top2.png', views: 758, interactions: 41 },
            { url: 'https://www.tiktok.com/@studifiqh.id/photo/7572018045439331592', img: '/placeholder-image/Tiktok/Top3.png', views: 834, interactions: 50 }
        ]
    };

    return (
        <section className="relative py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
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
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <ScrollReveal variant="fade-up" className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                            <TrendingUp className="text-electric-300 w-8 h-8" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Performa Social Media</h2>
                    </div>
                </ScrollReveal>

                {/* Mobile Tabs */}
                <div className="lg:hidden flex border-b border-white/10 mb-8 sticky top-20 z-20 bg-navy-900/80 backdrop-blur-md">
                    <button
                        className={`flex-1 py-3 text-center font-medium text-sm transition-all relative ${activeTab === 'instagram' ? 'text-electric-300' : 'text-white/60'}`}
                        onClick={() => setActiveTab('instagram')}
                    >
                        Instagram
                        {activeTab === 'instagram' && <motion.div layoutId="socialTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-500" />}
                    </button>
                    <button
                        className={`flex-1 py-3 text-center font-medium text-sm transition-all relative ${activeTab === 'tiktok' ? 'text-electric-300' : 'text-white/60'}`}
                        onClick={() => setActiveTab('tiktok')}
                    >
                        TikTok
                        {activeTab === 'tiktok' && <motion.div layoutId="socialTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-500" />}
                    </button>
                </div>

                {/* Content Area */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className={`${activeTab === 'instagram' ? 'block' : 'hidden'} lg:block`}>
                        <AnalyticsPanel platform="instagram" data={instagramData} />
                    </div>

                    <div className={`${activeTab === 'tiktok' ? 'block' : 'hidden'} lg:block mt-8 lg:mt-0`}>
                        <AnalyticsPanel platform="tiktok" data={tiktokData} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialMediaAnalytics;
