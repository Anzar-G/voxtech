import React from 'react';
import { Store, Target, TrendingUp, CheckCircle, Lightbulb, MousePointer, Eye, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import { useTranslation } from 'react-i18next';

const CaseStudy: React.FC = () => {
    const { t } = useTranslation();

    const strategyItems = t('caseStudy.strategy.items', { returnObjects: true }) as string[];
    const learningsItems = t('caseStudy.learnings.items', { returnObjects: true }) as string[];

    const feydStoreCaseStudy = {
        challenge: t('caseStudy.challenge.description'),
        strategy: strategyItems,
        execution: {
            campaignName: "Traffic Tsabit",
            objective: t('caseStudy.execution.objectiveVal'),
            creative: t('caseStudy.execution.creativeVal'),
            copy: t('caseStudy.execution.copyVal'),
            targeting: t('caseStudy.execution.targetingVal')
        },
        results: {
            linkClicks: 566,
            landingPageViews: 340,
            ctr: "2.37%",
            cpc: "Rp 165",
            lpConversion: "60.07%",
            costPerResult: "Rp 276"
        },
        learnings: learningsItems
    };

    const keyMetrics = [
        { icon: <MousePointer className="w-6 h-6" />, value: '566', label: t('caseStudy.results.metrics.clicks'), highlight: true },
        { icon: <Eye className="w-6 h-6" />, value: '340', label: t('caseStudy.results.metrics.views'), highlight: true },
        { icon: <TrendingUp className="w-6 h-6" />, value: '2.37%', label: t('caseStudy.results.metrics.ctr'), highlight: true },
        { icon: <DollarSign className="w-6 h-6" />, value: 'Rp 165', label: t('caseStudy.results.metrics.cpc'), highlight: true },
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
                {/* Header */}
                <ScrollReveal className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-electric-500/10 rounded-2xl backdrop-blur-sm border border-electric-500/20">
                            <Store className="text-electric-300 w-12 h-12" />
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {t('caseStudy.title')}
                    </h2>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                        {t('caseStudy.subtitle')}
                    </p>
                </ScrollReveal>

                {/* Challenge & Strategy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Challenge */}
                    <ScrollReveal variant="fade-right">
                        <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-8 border border-electric-500/20 h-full shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20/50 flex items-center justify-center">
                                    <Target className="text-red-400 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('caseStudy.challenge.title')}</h3>
                            </div>
                            <p className="text-base text-blue-100 leading-relaxed">
                                {feydStoreCaseStudy.challenge}
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Strategy */}
                    <ScrollReveal variant="fade-left">
                        <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-8 border border-electric-500/20 h-full shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-cyan-400/20/50 flex items-center justify-center">
                                    <Lightbulb className="text-cyan-300 w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('caseStudy.strategy.title')}</h3>
                            </div>
                            <ul className="space-y-3">
                                {feydStoreCaseStudy.strategy.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-electric-300 mt-1">✓</span>
                                        <span className="text-base text-blue-100">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Execution - Campaign Details */}
                <ScrollReveal variant="fade-up" delay={0.2} className="mb-16">
                    <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl border border-electric-500/10">
                        <h3 className="text-3xl font-bold text-white mb-8 text-center">
                            {t('caseStudy.execution.title')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-6 border border-electric-500/20">
                                <p className="text-sm text-blue-200 mb-2">{t('caseStudy.execution.objective')}</p>
                                <p className="text-xl font-bold text-white">{feydStoreCaseStudy.execution.objective}</p>
                            </div>
                            <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-6 border border-electric-500/20">
                                <p className="text-sm text-blue-200 mb-2">{t('caseStudy.execution.creative')}</p>
                                <p className="text-xl font-bold text-white">{feydStoreCaseStudy.execution.creative}</p>
                            </div>
                            <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-6 border border-electric-500/20">
                                <p className="text-sm text-blue-200 mb-2">{t('caseStudy.execution.copy')}</p>
                                <p className="text-xl font-bold text-white">"{feydStoreCaseStudy.execution.copy}"</p>
                            </div>
                            <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-6 border border-electric-500/20 md:col-span-2 lg:col-span-3">
                                <p className="text-sm text-blue-200 mb-2">{t('caseStudy.execution.targeting')}</p>
                                <p className="text-xl font-bold text-white">{feydStoreCaseStudy.execution.targeting}</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Results - Key Metrics */}
                <ScrollReveal variant="fade-up" delay={0.3} className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('caseStudy.results.title')}</h3>
                    <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {keyMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="bg-electric-500/5 border border-electric-500/20 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-electric-500/30 transition-all duration-300"
                            >
                                <div className="flex justify-center text-electric-500 mb-3">
                                    {metric.icon}
                                </div>
                                <p className="text-3xl font-bold text-blue-50 mb-1">{metric.value}</p>
                                <p className="text-sm font-semibold text-blue-50">{metric.label}</p>
                            </motion.div>
                        ))}
                    </StaggerContainer>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-electric-500/10 backdrop-blur-lg rounded-xl p-6 border border-electric-500/20 text-center">
                            <p className="text-sm text-blue-200 mb-2">{t('caseStudy.results.lpConversion.label')}</p>
                            <p className="text-4xl font-bold text-green-400 mb-1">{feydStoreCaseStudy.results.lpConversion}</p>
                            <p className="text-sm text-blue-300">{t('caseStudy.results.lpConversion.desc')}</p>
                        </div>
                        <div className="bg-electric-500/10 backdrop-blur-lg rounded-xl p-6 border border-electric-500/20 text-center">
                            <p className="text-sm text-blue-200 mb-2">{t('caseStudy.results.costResult.label')}</p>
                            <p className="text-4xl font-bold text-electric-300 mb-1">{feydStoreCaseStudy.results.costPerResult}</p>
                            <p className="text-sm text-blue-300">{t('caseStudy.results.costResult.desc')}</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Learnings */}
                <ScrollReveal variant="fade-up" delay={0.4}>
                    <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-8 border-l-4 border-electric-500 shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="text-electric-300 w-8 h-8" />
                            <h3 className="text-2xl font-bold text-white">{t('caseStudy.learnings.title')}</h3>
                        </div>
                        <div className="space-y-4">
                            {feydStoreCaseStudy.learnings.map((learning, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-electric-300 text-xl font-bold mt-1">•</span>
                                    <p className="text-base text-blue-50 leading-relaxed">{learning}</p>
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
