import React from 'react';
import { Facebook, Palette, Target, FileText, Search, Rocket, BarChart3, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import { useTranslation } from 'react-i18next';

interface Platform {
    name: string;
    description: string;
    icon: React.ReactNode;
}

interface ProcessStep {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const MarketingStrategy: React.FC = () => {
    const { t } = useTranslation();

    const platformsRaw = t('marketingStrategy.platforms', { returnObjects: true }) as { name: string; description: string }[];
    const platforms: Platform[] = [
        { ...platformsRaw[0], icon: <Facebook className="w-8 h-8" /> },
        { ...platformsRaw[1], icon: <Palette className="w-8 h-8" /> },
        { ...platformsRaw[2], icon: <Target className="w-8 h-8" /> },
        { ...platformsRaw[3], icon: <FileText className="w-8 h-8" /> },
    ];

    const processRaw = t('marketingStrategy.process', { returnObjects: true }) as { title: string; description: string }[];
    const marketingProcess: ProcessStep[] = [
        { ...processRaw[0], icon: <Search className="w-6 h-6" /> },
        { ...processRaw[1], icon: <Palette className="w-6 h-6" /> },
        { ...processRaw[2], icon: <Rocket className="w-6 h-6" /> },
        { ...processRaw[3], icon: <BarChart3 className="w-6 h-6" /> },
        { ...processRaw[4], icon: <FileText className="w-6 h-6" /> }
    ];

    // Helper for deep dive pillars
    const deepDiveContentPillars = t('marketingStrategy.deepDive.content.pillarsList', { returnObjects: true }) as string[];

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

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                            <Lightbulb className="text-electric-300 w-12 h-12" />
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {t('marketingStrategy.title')}
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">
                        {t('marketingStrategy.subtitle')}
                    </p>
                </ScrollReveal>

                {/* Platform Showcase */}
                <ScrollReveal variant="fade-up" delay={0.1} className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('marketingStrategy.platformsTitle')}</h3>
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
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('marketingStrategy.processTitle')}</h3>
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
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('marketingStrategy.deepDiveTitle')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Market Research */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                    <Search className="text-cyan-300 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">{t('marketingStrategy.deepDive.research.title')}</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.research.purpose')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.research.purposeText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.research.app')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.research.appText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.research.result')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.research.resultText')}</p>
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
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                    <Palette className="text-violet-300 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">{t('marketingStrategy.deepDive.content.title')}</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.content.purpose')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.content.purposeText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.content.brandPos')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.content.brandPosText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.content.pillars')}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {deepDiveContentPillars.map((pillar, i) => (
                                            <span key={i} className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
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
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                    <Rocket className="text-emerald-300 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">{t('marketingStrategy.deepDive.execution.title')}</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.execution.purpose')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.execution.purposeText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.execution.app')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.execution.appText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.execution.tools')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.execution.toolsText')}</p>
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
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                                    <BarChart3 className="text-amber-300 w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-white">{t('marketingStrategy.deepDive.analysis.title')}</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.analysis.purpose')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.analysis.purposeText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.analysis.app')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.analysis.appText')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-electric-300 font-semibold mb-1">{t('marketingStrategy.deepDive.analysis.action')}</p>
                                    <p className="text-sm text-white/80">{t('marketingStrategy.deepDive.analysis.actionText')}</p>
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
