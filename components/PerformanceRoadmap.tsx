import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Rocket, Sparkles, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface MilestoneData {
    version: string;
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    status: 'completed' | 'current' | 'planned' | 'target';
}

interface MilestoneTranslation {
    phase: string;
    date: string;
    actions: string[];
}

interface Milestone extends MilestoneData, MilestoneTranslation { }

const PerformanceRoadmap: React.FC = () => {
    const { t } = useTranslation();

    const staticData: MilestoneData[] = [
        {
            version: 'v1.0',
            performance: 47,
            accessibility: 88,
            bestPractices: 93,
            seo: 98,
            status: 'completed',
        },
        {
            version: 'v1.5',
            performance: 70,
            accessibility: 92,
            bestPractices: 95,
            seo: 100,
            status: 'current',
        },
        {
            version: 'v2.0',
            performance: 90,
            accessibility: 96,
            bestPractices: 98,
            seo: 100,
            status: 'planned',
        },
        {
            version: 'v2.5+',
            performance: 95,
            accessibility: 100,
            bestPractices: 100,
            seo: 100,
            status: 'target',
        }
    ];

    const phases = t('performanceRoadmap.phases', { returnObjects: true }) as MilestoneTranslation[];

    const roadmap: Milestone[] = staticData.map((data, index) => ({
        ...data,
        ...phases[index]
    }));

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'from-electric-500/20 to-navy-800/50 border-electric-500/30';
            case 'current': return 'from-electric-500 to-cyan-500 shadow-[0_0_30px_rgba(56,189,248,0.3)] border-cyan-400';
            case 'planned': return 'from-white/5 to-white/5 border-electric-500/10';
            case 'target': return 'from-navy-800 to-navy-900 border-electric-500/20 dashed';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed': return <CheckCircle className="w-5 h-5 text-electric-300" />;
            case 'current': return <TrendingUp className="w-5 h-5 text-white" />;
            case 'planned': return <Target className="w-5 h-5 text-blue-100/50" />;
            case 'target': return <Rocket className="w-5 h-5 text-electric-500" />;
            default: return null;
        }
    };

    const getScoreColor = (score: number) => {
        // Monochrome scale: Brighter = Better
        if (score >= 90) return 'text-cyan-300 drop-shadow-[0_0_5px_rgba(103,232,249,0.5)]';
        if (score >= 70) return 'text-electric-300';
        return 'text-blue-300';
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-16 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">
                    🎯 {t('performanceRoadmap.title')}
                </h2>
                <p className="text-blue-200 text-center mb-4 max-w-2xl mx-auto">
                    {t('performanceRoadmap.subtitle')}
                </p>
                <p className="text-sm text-electric-300 text-center mb-12">
                    {t('performanceRoadmap.statusMessage')}
                </p>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block">
                    {/* Timeline Line */}
                    <div className="relative mb-16">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-electric-300/30 -translate-y-1/2" />
                        <div className="relative flex justify-between">
                            {roadmap.map((milestone, index) => (
                                <div key={index} className="flex-1 relative">
                                    {/* Timeline Dot */}
                                    <motion.div
                                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${getStatusColor(milestone.status)} mx-auto relative z-10 border-4 border-navy-900`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, duration: 0.3 }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Milestone Cards */}
                    <div className="grid grid-cols-4 gap-6">
                        {roadmap.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${getStatusColor(milestone.status)}/10 backdrop-blur-sm rounded-2xl p-6 border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300 hover:scale-105`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{milestone.phase}</h3>
                                        <p className="text-sm text-blue-300">{milestone.date}</p>
                                    </div>
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getStatusColor(milestone.status)}`}>
                                        {getStatusIcon(milestone.status)}
                                    </div>
                                </div>

                                {/* Version Badge */}
                                <div className="inline-block px-3 py-1 rounded-full bg-electric-500/10 text-xs font-semibold text-white mb-4">
                                    {milestone.version}
                                </div>

                                {/* Metrics */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-200">{t('performanceRoadmap.metrics.performance')}</span>
                                        <span className={`font-bold ${getScoreColor(milestone.performance)}`}>
                                            {milestone.performance}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-200">{t('performanceRoadmap.metrics.accessibility')}</span>
                                        <span className={`font-bold ${getScoreColor(milestone.accessibility)}`}>
                                            {milestone.accessibility}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-200">{t('performanceRoadmap.metrics.bestPractices')}</span>
                                        <span className={`font-bold ${getScoreColor(milestone.bestPractices)}`}>
                                            {milestone.bestPractices}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-200">{t('performanceRoadmap.metrics.seo')}</span>
                                        <span className={`font-bold ${getScoreColor(milestone.seo)}`}>
                                            {milestone.seo}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div>
                                    <p className="text-xs font-semibold text-blue-100 mb-2">{t('performanceRoadmap.actionItems')}</p>
                                    <ul className="space-y-1">
                                        {milestone.actions.map((action, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-blue-200">
                                                <span className="text-electric-300 mt-0.5">✓</span>
                                                <span>{action}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden space-y-8">
                    {roadmap.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* Timeline Line */}
                            {index < roadmap.length - 1 && (
                                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-electric-300/30" />
                            )}

                            <div className="flex gap-4">
                                {/* Timeline Dot */}
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${getStatusColor(milestone.status)} flex-shrink-0 border-4 border-navy-900 relative z-10`} />

                                {/* Card */}
                                <div className={`flex-1 bg-gradient-to-br ${getStatusColor(milestone.status)}/10 backdrop-blur-sm rounded-xl p-4 border border-electric-500/20`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{milestone.phase}</h3>
                                            <p className="text-xs text-blue-300">{milestone.date} • {milestone.version}</p>
                                        </div>
                                        <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getStatusColor(milestone.status)}`}>
                                            {getStatusIcon(milestone.status)}
                                        </div>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-2 mb-3">
                                        <div className="text-center p-2 bg-electric-500/5 rounded-lg">
                                            <p className="text-xs text-blue-300">{t('performanceRoadmap.metrics.perf')}</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.performance)}`}>
                                                {milestone.performance}
                                            </p>
                                        </div>
                                        <div className="text-center p-2 bg-electric-500/5 rounded-lg">
                                            <p className="text-xs text-blue-300">{t('performanceRoadmap.metrics.a11y')}</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.accessibility)}`}>
                                                {milestone.accessibility}
                                            </p>
                                        </div>
                                        <div className="text-center p-2 bg-electric-500/5 rounded-lg">
                                            <p className="text-xs text-blue-300">{t('performanceRoadmap.metrics.bp')}</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.bestPractices)}`}>
                                                {milestone.bestPractices}
                                            </p>
                                        </div>
                                        <div className="text-center p-2 bg-electric-500/5 rounded-lg">
                                            <p className="text-xs text-blue-300">{t('performanceRoadmap.metrics.seo')}</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.seo)}`}>
                                                {milestone.seo}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <ul className="space-y-1">
                                        {milestone.actions.map((action, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-blue-200">
                                                <span className="text-electric-300 mt-0.5">✓</span>
                                                <span>{action}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 p-4 bg-electric-500/5 rounded-xl border border-electric-500/10 text-center">
                    <p className="text-sm text-blue-200">
                        <span className="font-semibold text-electric-300">{t('performanceRoadmap.note.label')}</span> {t('performanceRoadmap.note.text')}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default PerformanceRoadmap;
