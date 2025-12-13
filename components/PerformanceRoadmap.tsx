import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Rocket, Sparkles, CheckCircle } from 'lucide-react';

interface Milestone {
    phase: string;
    version: string;
    date: string;
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    status: 'completed' | 'current' | 'planned' | 'target';
    actions: string[];
}

const PerformanceRoadmap: React.FC = () => {
    // 📝 EDIT DATA INI SESUAI ROADMAP ANDA
    const roadmap: Milestone[] = [
        {
            phase: 'Current',
            version: 'v1.0',
            date: 'Dec 2025',
            performance: 47,
            accessibility: 88,
            bestPractices: 93,
            seo: 98,
            status: 'completed',
            actions: [
                'Baseline measurement completed',
                'Identified optimization targets',
                'Strong SEO & Best Practices foundation'
            ]
        },
        {
            phase: 'Q1 2026',
            version: 'v1.5',
            date: 'Jan-Mar 2026',
            performance: 70,
            accessibility: 92,
            bestPractices: 95,
            seo: 100,
            status: 'current',
            actions: [
                'Image optimization (WebP, lazy load)',
                'Code splitting & tree shaking',
                'Remove unused dependencies',
                'Improve accessibility labels'
            ]
        },
        {
            phase: 'Q2 2026',
            version: 'v2.0',
            date: 'Apr-Jun 2026',
            performance: 90,
            accessibility: 96,
            bestPractices: 98,
            seo: 100,
            status: 'planned',
            actions: [
                'CDN implementation',
                'Advanced caching strategies',
                'Server-side rendering (SSR)',
                'Schema markup optimization'
            ]
        },
        {
            phase: 'Target',
            version: 'v2.5+',
            date: 'Q3 2026',
            performance: 95,
            accessibility: 100,
            bestPractices: 100,
            seo: 100,
            status: 'target',
            actions: [
                'All Lighthouse metrics > 95',
                'Perfect accessibility score',
                'Industry-leading performance',
                'Top search engine rankings'
            ]
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'from-electric-500/20 to-navy-800/50 border-electric-500/30';
            case 'current': return 'from-electric-500 to-cyan-500 shadow-[0_0_30px_rgba(56,189,248,0.3)] border-cyan-400';
            case 'planned': return 'from-white/5 to-white/5 border-white/10';
            case 'target': return 'from-navy-800 to-navy-900 border-electric-500/20 dashed';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed': return <CheckCircle className="w-5 h-5 text-electric-300" />;
            case 'current': return <TrendingUp className="w-5 h-5 text-white" />;
            case 'planned': return <Target className="w-5 h-5 text-white/50" />;
            case 'target': return <Rocket className="w-5 h-5 text-electric-500" />;
            default: return null;
        }
    };

    const getScoreColor = (score: number) => {
        // Monochrome scale: Brighter = Better
        if (score >= 90) return 'text-cyan-300 drop-shadow-[0_0_5px_rgba(103,232,249,0.5)]';
        if (score >= 70) return 'text-electric-300';
        return 'text-white/60';
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
                    🎯 Performance Optimization Roadmap
                </h2>
                <p className="text-white/70 text-center mb-4 max-w-2xl mx-auto">
                    Continuous improvement journey targeting 95+ across all Lighthouse metrics
                </p>
                <p className="text-sm text-electric-300 text-center mb-12">
                    🚀 All projects are in active development with ongoing performance optimization
                </p>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block">
                    {/* Timeline Line */}
                    <div className="relative mb-16">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2" />
                        <div className="relative flex justify-between">
                            {roadmap.map((milestone, index) => (
                                <div key={milestone.phase} className="flex-1 relative">
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
                                key={milestone.phase}
                                className={`bg-gradient-to-br ${getStatusColor(milestone.status)}/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{milestone.phase}</h3>
                                        <p className="text-sm text-white/60">{milestone.date}</p>
                                    </div>
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getStatusColor(milestone.status)}`}>
                                        {getStatusIcon(milestone.status)}
                                    </div>
                                </div>

                                {/* Version Badge */}
                                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white mb-4">
                                    {milestone.version}
                                </div>

                                {/* Metrics */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/70">Performance</span>
                                        <span className={`font-bold ${getScoreColor(milestone.performance)}`}>
                                            {milestone.performance}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/70">Accessibility</span>
                                        <span className={`font-bold ${getScoreColor(milestone.accessibility)}`}>
                                            {milestone.accessibility}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/70">Best Practices</span>
                                        <span className={`font-bold ${getScoreColor(milestone.bestPractices)}`}>
                                            {milestone.bestPractices}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/70">SEO</span>
                                        <span className={`font-bold ${getScoreColor(milestone.seo)}`}>
                                            {milestone.seo}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div>
                                    <p className="text-xs font-semibold text-white/80 mb-2">Action Items:</p>
                                    <ul className="space-y-1">
                                        {milestone.actions.map((action, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-white/70">
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
                            key={milestone.phase}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* Timeline Line */}
                            {index < roadmap.length - 1 && (
                                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-white/20" />
                            )}

                            <div className="flex gap-4">
                                {/* Timeline Dot */}
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${getStatusColor(milestone.status)} flex-shrink-0 border-4 border-navy-900 relative z-10`} />

                                {/* Card */}
                                <div className={`flex-1 bg-gradient-to-br ${getStatusColor(milestone.status)}/10 backdrop-blur-sm rounded-xl p-4 border border-white/20`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{milestone.phase}</h3>
                                            <p className="text-xs text-white/60">{milestone.date} • {milestone.version}</p>
                                        </div>
                                        <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getStatusColor(milestone.status)}`}>
                                            {getStatusIcon(milestone.status)}
                                        </div>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-2 mb-3">
                                        <div className="text-center p-2 bg-white/5 rounded-lg">
                                            <p className="text-xs text-white/60">Perf</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.performance)}`}>
                                                {milestone.performance}
                                            </p>
                                        </div>
                                        <div className="text-center p-2 bg-white/5 rounded-lg">
                                            <p className="text-xs text-white/60">A11y</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.accessibility)}`}>
                                                {milestone.accessibility}
                                            </p>
                                        </div>
                                        <div className="text-center p-2 bg-white/5 rounded-lg">
                                            <p className="text-xs text-white/60">BP</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.bestPractices)}`}>
                                                {milestone.bestPractices}
                                            </p>
                                        </div>
                                        <div className="text-center p-2 bg-white/5 rounded-lg">
                                            <p className="text-xs text-white/60">SEO</p>
                                            <p className={`text-lg font-bold ${getScoreColor(milestone.seo)}`}>
                                                {milestone.seo}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <ul className="space-y-1">
                                        {milestone.actions.map((action, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-white/70">
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
                <div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                    <p className="text-sm text-white/70">
                        <span className="font-semibold text-electric-300">Note:</span> Performance scores reflect v1.0 baseline.
                        Active optimization in progress targeting 90+ across all metrics through image optimization, code splitting, and bundle size reduction.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default PerformanceRoadmap;
