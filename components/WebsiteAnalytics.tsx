import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket,
    Zap,
    Clock,
    MapPin,
    TrendingUp,
    Target,
    Award,
    Activity,
    Users,
    BarChart3,
    Globe,
    Link as LinkIcon,
    Share2,
    Image as ImageIcon,
    X,
    ChevronLeft,
    ChevronRight,
    Eye
} from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import useCountUp from '../hooks/useCountUp';
import { useTranslation } from 'react-i18next';

// --- Interfaces ---
interface HeroMetric {
    icon: React.ElementType;
    label: string;
    value: string;
    sublabel: string;
    color: string;
    featured?: boolean;
}

interface VelocityMetric {
    label: string;
    value: number;
    suffix: string;
    trend: string;
    icon: React.ElementType;
}

interface TrafficSource {
    name: string;
    percentage: number;
    color: string;
    icon: React.ElementType;
    context: string;
}

interface LaunchInsight {
    icon: React.ElementType;
    category: string;
    headline: string;
    description: string;
    color: string;
}

interface AnalyticsImage {
    src: string;
    alt: string;
    label: string;
}

// --- Helper Components ---
const MetricCard: React.FC<{ metric: HeroMetric; index: number }> = ({ metric, index }) => {
    const Icon = metric.icon;
    const colorMap: { [key: string]: string } = {
        electric: "from-electric-500 to-electric-500",
        purple: "from-purple-500 to-purple-400",
        yellow: "from-yellow-500 to-yellow-400",
        green: "from-green-500 to-green-400",
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
            }}
            transition={{ delay: index * 0.1 }}
            className={`bg-electric-500/5 backdrop-blur-lg rounded-2xl ${metric.featured ? 'p-6 lg:p-8 col-span-2' : 'p-5 lg:p-6'} border ${metric.featured ? `border-${metric.color}-500/40 shadow-[0_0_30px_rgba(59,130,246,0.2)]` : `border-${metric.color}-500/20`} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-${metric.color}-500/10 group`}
        >
            <div className="flex items-center justify-between mb-3">
                <div className={`${metric.featured ? 'w-14 h-14' : 'w-10 h-10 lg:w-12 lg:h-12'} rounded-lg bg-${metric.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${metric.featured ? 'w-7 h-7' : 'w-5 h-5 lg:w-6 lg:h-6'} text-${metric.color}-500`} />
                </div>
                <p className="text-xs lg:text-sm text-blue-300 uppercase tracking-wider font-medium">
                    {metric.label}
                </p>
            </div>
            <p className={`${metric.featured ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'} font-bold text-white mb-1`}>
                {metric.value}
            </p>
            <p className="text-[10px] lg:text-xs text-blue-100/50 italic">
                {metric.sublabel}
            </p>
        </motion.div>
    );
};

const VelocityCard: React.FC<{ metric: VelocityMetric; index: number }> = ({ metric, index }) => {
    const Icon = metric.icon;
    const displayValue = useCountUp({
        end: metric.value,
        duration: 2000,
        decimals: metric.value % 1 !== 0 ? 1 : 0
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
        >
            <div className="flex items-center justify-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-electric-300" />
            </div>
            <p className="text-3xl font-bold text-white mb-1">
                {displayValue}{metric.suffix}
            </p>
            <p className="text-xs text-blue-300 uppercase tracking-wide mb-2">
                {metric.label}
            </p>
            <p className="text-xs text-green-400 flex items-center justify-center gap-1">
                {metric.trend}
            </p>
        </motion.div>
    );
};

const ProgressBar: React.FC<{ source: TrafficSource; index: number }> = ({ source, index }) => {
    const Icon = source.icon;
    const colorMap: { [key: string]: string } = {
        blue: "from-blue-500 to-blue-400",
        purple: "from-purple-500 to-purple-400",
        pink: "from-pink-500 to-pink-400",
    };

    return (
        <div className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-blue-200" />
                    <span className="text-sm text-blue-100">{source.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{source.percentage}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-electric-500/10 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${source.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${colorMap[source.color]}`}
                />
            </div>
            <p className="text-xs text-blue-100/50 italic mt-1 pl-2">
                {source.context}
            </p>
        </div>
    );
};

const ImagePlaceholder: React.FC<{ image: AnalyticsImage; index: number; onClick: () => void }> = ({ image, index, onClick }) => {
    const { t } = useTranslation();
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={!imageError ? onClick : undefined}
            className={`relative group aspect-video rounded-xl overflow-hidden border border-electric-500/20 shadow-lg hover:shadow-2xl transition-all duration-300 ${!imageError ? 'cursor-pointer hover:scale-[1.02]' : ''
                }`}
        >
            {!imageError ? (
                <>
                    {/* Skeleton Loader */}
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                        </div>
                    )}
                    <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        onError={() => setImageError(true)}
                        onLoad={() => setImageLoaded(true)}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-electric-500/5 text-blue-200/40 p-4 text-center">
                    <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                    <span className="text-xs leading-tight">{t('websiteAnalytics.views.title')}</span>
                    <span className="text-[10px] mt-1 text-blue-200/30">{t('websiteAnalytics.views.comingSoon')}</span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-white font-medium">{image.label}</p>
            </div>
            {/* Click Indicator */}
            {!imageError && (
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-white" />
                </div>
            )}
        </motion.div>
    );
};

// --- Main Component ---
const WebsiteAnalytics: React.FC = () => {
    const { t } = useTranslation();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // --- Data ---
    const heroMetrics: HeroMetric[] = [
        {
            icon: Rocket,
            label: t('websiteAnalytics.metrics.activeUsers.label'),
            value: "25+",
            sublabel: t('websiteAnalytics.metrics.activeUsers.sub'),
            color: "electric",
            featured: true,
        },
        {
            icon: Zap,
            label: t('websiteAnalytics.metrics.interactions.label'),
            value: "170+",
            sublabel: t('websiteAnalytics.metrics.interactions.sub'),
            color: "purple",
        },
        {
            icon: Clock,
            label: t('websiteAnalytics.metrics.avgSession.label'),
            value: "8s",
            sublabel: t('websiteAnalytics.metrics.avgSession.sub'),
            color: "yellow",
        },
        {
            icon: MapPin,
            label: t('websiteAnalytics.metrics.cities.label'),
            value: "7+",
            sublabel: t('websiteAnalytics.metrics.cities.sub'),
            color: "green",
        }
    ];

    const velocityMetrics: VelocityMetric[] = [
        { label: t('websiteAnalytics.velocity.usersDay'), value: 8.3, suffix: "", trend: "+15%", icon: Users },
        { label: t('websiteAnalytics.velocity.eventsDay'), value: 56, suffix: "", trend: "Steady", icon: Activity },
        { label: t('websiteAnalytics.velocity.engagementRate'), value: 6.8, suffix: "x", trend: "2x Avg", icon: TrendingUp }
    ];

    const trafficSources: TrafficSource[] = [
        {
            name: t('websiteAnalytics.traffic.direct.name'),
            percentage: 80,
            color: "blue",
            icon: LinkIcon,
            context: t('websiteAnalytics.traffic.direct.context')
        },
        {
            name: t('websiteAnalytics.traffic.paid.name'),
            percentage: 12,
            color: "purple",
            icon: BarChart3,
            context: t('websiteAnalytics.traffic.paid.context')
        },
        {
            name: t('websiteAnalytics.traffic.social.name'),
            percentage: 8,
            color: "pink",
            icon: Share2,
            context: t('websiteAnalytics.traffic.social.context')
        }
    ];

    const cities = {
        primary: ["Jakarta", "Surabaya", "Brebes"],
        expanding: ["Cirebon", "Jambi", "Kupang", "Manado"]
    };

    const analyticsImages: AnalyticsImage[] = [
        {
            src: "/analytics/Pages_and_screens_Page_path_and_screen_class (1)_page-0001-1024w.webp",
            alt: "Pages and screens analytics",
            label: t('websiteAnalytics.views.items.pages'),
        },
        {
            src: "/analytics/Events_Event_name_page-0001-1024w.webp",
            alt: "Event tracking analytics",
            label: t('websiteAnalytics.views.items.events'),
        },
        {
            src: "/analytics/User_attributes_overview_page-0001-1024w.webp",
            alt: "User demographics",
            label: t('websiteAnalytics.views.items.users'),
        },
        {
            src: "/analytics/View_user_engagement_&_retention_overview_page-0001-1024w.webp",
            alt: "User engagement and retention",
            label: t('websiteAnalytics.views.items.engagement'),
        }
    ];

    const launchInsightsRaw = t('websiteAnalytics.insights.items', { returnObjects: true }) as any[];
    const launchInsights: LaunchInsight[] = [
        { icon: Target, color: "electric" },
        { icon: Zap, color: "purple" },
        { icon: TrendingUp, color: "yellow" },
        { icon: MapPin, color: "green" },
        { icon: Clock, color: "blue" },
        { icon: Award, color: "pink" }
    ].map((item, index) => ({
        ...item,
        category: launchInsightsRaw[index]?.category || '',
        headline: launchInsightsRaw[index]?.headline || '',
        description: launchInsightsRaw[index]?.description || ''
    }));

    // Keyboard navigation for modal
    useEffect(() => {
        if (selectedImageIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImageIndex(null);
            } else if (e.key === 'ArrowLeft') {
                setSelectedImageIndex((prev) =>
                    prev === null ? null : prev === 0 ? analyticsImages.length - 1 : prev - 1
                );
            } else if (e.key === 'ArrowRight') {
                setSelectedImageIndex((prev) =>
                    prev === null ? null : (prev + 1) % analyticsImages.length
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    const handlePrevImage = () => {
        setSelectedImageIndex((prev) =>
            prev === null ? null : prev === 0 ? analyticsImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prev) =>
            prev === null ? null : (prev + 1) % analyticsImages.length
        );
    };

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
                        className="particle absolute rounded-full bg-electric-300/30"
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
            <div className="absolute inset-0 opacity-5 bg-diagonal-electric">
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Title */}
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {t('websiteAnalytics.title')}
                    </h2>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                        {t('websiteAnalytics.subtitle')}
                    </p>
                </ScrollReveal>

                {/* Launch Context Banner */}
                <ScrollReveal variant="fade-up" delay={0.1}>
                    <div className="bg-electric-500/10 backdrop-blur-md border-2 border-electric-500/40 rounded-2xl p-6 lg:p-8 shadow-lg mb-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
                            {/* Icon - Desktop Only */}
                            <div className="hidden lg:flex w-14 h-14 rounded-xl bg-electric-500/20 items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                <Rocket className="w-7 h-7 text-electric-300" />
                            </div>

                            {/* Text Section */}
                            <div className="flex-1 text-center">
                                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 lg:gap-0">
                                    <Rocket className="w-6 h-6 lg:hidden text-electric-300" />
                                    {t('websiteAnalytics.launchContext.title')}
                                </h3>
                                <p className="text-sm lg:text-base text-blue-200">
                                    {t('websiteAnalytics.launchContext.date')}
                                </p>
                            </div>

                            {/* Live Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/20 border border-electric-500/40">
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-electric-500"
                                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-electric-300 text-xs font-bold uppercase tracking-wide">{t('websiteAnalytics.launchContext.live')}</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Hero Metrics Grid */}
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
                    {heroMetrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} index={index} />
                    ))}
                </StaggerContainer>

                {/* Velocity Insights */}
                <ScrollReveal variant="fade-up" delay={0.2}>
                    <div className="bg-electric-500/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-electric-500/10 mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Zap className="w-5 h-5 text-electric-300" />
                            <h3 className="text-sm lg:text-base font-bold text-blue-50 uppercase tracking-wide">
                                {t('websiteAnalytics.velocity.title')}
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {velocityMetrics.map((metric, index) => (
                                <VelocityCard key={index} metric={metric} index={index} />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Traffic Sources & Geographic Reach - Side by Side on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                    {/* Traffic Sources */}
                    <ScrollReveal variant="fade-up" delay={0.3}>
                        <div className="bg-electric-500/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-electric-500/10 h-full">
                            <div className="flex items-center gap-2 mb-6">
                                <BarChart3 className="w-5 h-5 text-electric-300" />
                                <h3 className="text-sm lg:text-base font-bold text-blue-50 uppercase tracking-wide">
                                    {t('websiteAnalytics.traffic.title')}
                                </h3>
                            </div>
                            <div>
                                {trafficSources.map((source, index) => (
                                    <ProgressBar key={index} source={source} index={index} />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Geographic Reach */}
                    <ScrollReveal variant="fade-up" delay={0.4}>
                        <div className="bg-electric-500/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-electric-500/10 h-full">
                            <div className="flex items-center gap-2 mb-6">
                                <Globe className="w-5 h-5 text-electric-300" />
                                <h3 className="text-sm lg:text-base font-bold text-blue-50 uppercase tracking-wide">
                                    {t('websiteAnalytics.geo.title')}
                                </h3>
                            </div>

                            {/* Mobile: Vertical List */}
                            <div className="lg:hidden space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-blue-300 uppercase mb-3">{t('websiteAnalytics.geo.primary')}</p>
                                    {cities.primary.map((city, idx) => (
                                        <div key={idx} className="flex items-center gap-2 mb-2">
                                            <MapPin className="w-4 h-4 text-green-400" />
                                            <span className="text-sm text-blue-100">{city}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-electric-500/10 pt-4">
                                    <p className="text-xs font-bold text-blue-300 uppercase mb-3">{t('websiteAnalytics.geo.expanding')}</p>
                                    {cities.expanding.map((city, idx) => (
                                        <div key={idx} className="flex items-center gap-2 mb-2">
                                            <MapPin className="w-4 h-4 text-green-400" />
                                            <span className="text-sm text-blue-100">{city}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop: Pill Badges */}
                            <div className="hidden lg:block">
                                <div className="flex flex-wrap gap-2">
                                    {[...cities.primary, ...cities.expanding].map((city, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/10 hover:bg-electric-300/30 transition-colors flex items-center gap-2"
                                        >
                                            <MapPin className="w-3 h-3 text-green-400" />
                                            <span className="text-sm text-blue-100">{city}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Analytics Screenshots */}
                <ScrollReveal variant="fade-up" delay={0.5}>
                    <div className="mb-12">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <BarChart3 className="w-6 h-6 text-electric-300" />
                            {t('websiteAnalytics.views.title')}
                        </h3>

                        {/* Mobile: Horizontal Scroll */}
                        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide -mx-6 px-6">
                            {analyticsImages.map((image, idx) => (
                                <div key={idx} className="snap-center flex-shrink-0 w-[85%]">
                                    <ImagePlaceholder
                                        image={image}
                                        index={idx}
                                        onClick={() => setSelectedImageIndex(idx)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Grid */}
                        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
                            {analyticsImages.map((image, idx) => (
                                <ImagePlaceholder
                                    key={idx}
                                    image={image}
                                    index={idx}
                                    onClick={() => setSelectedImageIndex(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="fade-up" delay={0.6}>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('websiteAnalytics.insights.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {launchInsights.map((insight, index) => {
                            const Icon = insight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-electric-500/10 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-electric-500/20 hover:bg-electric-500/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-electric-500/20 flex items-center justify-center text-electric-300 flex-shrink-0">
                                            <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] lg:text-xs text-electric-300 font-semibold uppercase tracking-wide mb-1">
                                                {insight.category}
                                            </p>
                                            <h4 className="text-sm lg:text-lg font-bold text-white leading-tight">
                                                {insight.headline}
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="text-xs lg:text-sm text-blue-100 leading-relaxed">
                                        {insight.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-4 right-4 z-50 bg-electric-500/10 hover:bg-electric-300/30 backdrop-blur-sm rounded-full p-3 transition-colors group"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage();
                            }}
                            className="absolute left-4 z-50 bg-electric-500/10 hover:bg-electric-300/30 backdrop-blur-sm rounded-full p-3 transition-colors hidden md:block"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage();
                            }}
                            className="absolute right-4 z-50 bg-electric-500/10 hover:bg-electric-300/30 backdrop-blur-sm rounded-full p-3 transition-colors hidden md:block"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-navy-900">
                                <img
                                    src={analyticsImages[selectedImageIndex].src}
                                    alt={analyticsImages[selectedImageIndex].alt}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                            </div>

                            {/* Image Info */}
                            <div className="mt-4 text-center">
                                <p className="text-white text-lg font-semibold mb-1">
                                    {analyticsImages[selectedImageIndex].label}
                                </p>
                                <p className="text-blue-300 text-sm">
                                    {selectedImageIndex + 1} / {analyticsImages.length}
                                </p>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="flex md:hidden justify-center gap-4 mt-4">
                                <button
                                    onClick={handlePrevImage}
                                    className="bg-electric-500/10 hover:bg-electric-300/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="bg-electric-500/10 hover:bg-electric-300/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WebsiteAnalytics;
