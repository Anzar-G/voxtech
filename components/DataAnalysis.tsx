import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, BarChart3, Target, Lightbulb, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const DataAnalysis: React.FC = () => {
    const campaignAnalysis = [
        {
            name: 'Traffic Tsabit',
            status: 'success',
            metrics: {
                ctr: '2.37%',
                cpc: 'Rp 165',
                clicks: 566,
                lpViews: 340
            },
            analysis: 'CTR tinggi (2.37%) dan CPC rendah (Rp 165) menunjukkan bahwa audience targeting dan creative (video pendek) sangat efektif.',
            conclusion: 'Benchmark untuk kampanye lain',
            icon: <CheckCircle className="w-6 h-6" />,
            color: 'green'
        },
        {
            name: '11/11-KM/Leads/Tsabit',
            status: 'warning',
            metrics: {
                ctr: '4.62%',
                costPerResult: 'Rp 94.372',
                clicks: 124,
                leads: 1
            },
            analysis: 'CTR sangat tinggi (4.62%) tapi Cost per Result sangat mahal (Rp 94.372). Ini menunjukkan click banyak, tapi conversion (lead) sangat sedikit.',
            conclusion: 'Landing page atau lead form perlu dioptimasi',
            icon: <AlertCircle className="w-6 h-6" />,
            color: 'yellow'
        },
        {
            name: 'High CPC Campaigns',
            status: 'error',
            metrics: {
                avgCpc: '> Rp 700',
                performance: 'Below Average'
            },
            analysis: 'Kampanye dengan CPC tinggi menunjukkan bahwa audience atau creative kurang relevan.',
            conclusion: 'Perlu adjustment targeting/creative',
            icon: <TrendingDown className="w-6 h-6" />,
            color: 'red'
        }
    ];

    const keyLearnings = [
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Audience Targeting adalah Kunci',
            description: 'Semakin spesifik dan relevan targeting, semakin tinggi engagement dan conversion rate.',
            color: 'blue'
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Creative & Copy Harus Relevan',
            description: 'Creative yang menarik dan copy yang jelas sangat mempengaruhi CTR dan CPC. Video pendek terbukti paling efektif.',
            color: 'purple'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Analisis Data Harus Berkala',
            description: 'Regular monitoring memungkinkan optimasi real-time dan mencegah pemborosan budget.',
            color: 'green'
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: 'Landing Page Perlu Optimasi',
            description: 'High CTR tapi low conversion menunjukkan landing page belum optimal. Perlu A/B testing dan improvement.',
            color: 'orange'
        }
    ];

    const optimizationActions = [
        { action: 'Menghentikan kampanye performa buruk', status: 'done' },
        { action: 'Alokasi budget lebih ke "Traffic Tsabit"', status: 'done' },
        { action: 'Rencana optimasi landing page Feyd Store', status: 'in-progress' },
        { action: 'Merancang creative & copy baru berdasarkan insight', status: 'in-progress' }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; border: string }> = {
            green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/50' },
            yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/50' },
            red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50' },
            blue: { bg: 'bg-cyan-400/20', text: 'text-cyan-300', border: 'border-cyan-400/50' },
            purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/50' },
            orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/50' }
        };
        return colors[color] || colors.blue;
    };

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
                            <BarChart3 className="text-electric-300 w-12 h-12" />
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Analisis & Pembelajaran dari Data
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">
                        Mengambil insight berharga dari data kampanye untuk pengambilan keputusan yang lebih baik
                    </p>
                </ScrollReveal>

                {/* Campaign Analysis */}
                <ScrollReveal variant="fade-up" delay={0.1} className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Analisis Kampanye</h3>
                    <StaggerContainer className="space-y-6">
                        {campaignAnalysis.map((campaign, index) => {
                            const colorClasses = getColorClasses(campaign.color);
                            return (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -30 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border-l-4 ${colorClasses.border} border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center ${colorClasses.text} flex-shrink-0`}>
                                            {campaign.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-2">{campaign.name}</h4>
                                            <div className="flex flex-wrap gap-3 mb-3">
                                                {Object.entries(campaign.metrics).map(([key, value], i) => (
                                                    <div key={i} className="bg-white/10 rounded-lg px-3 py-1">
                                                        <span className="text-xs text-white/60 uppercase">{key}: </span>
                                                        <span className="text-sm font-semibold text-white">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/80 mb-3 leading-relaxed">{campaign.analysis}</p>
                                    <div className={`inline-flex items-center gap-2 ${colorClasses.bg} ${colorClasses.text} px-4 py-2 rounded-lg text-sm font-semibold`}>
                                        <Lightbulb className="w-4 h-4" />
                                        <span>{campaign.conclusion}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </StaggerContainer>
                </ScrollReveal>

                {/* Key Learnings */}
                <ScrollReveal variant="fade-up" delay={0.2} className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Pembelajaran Utama</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {keyLearnings.map((learning, index) => {
                            const colorClasses = getColorClasses(learning.color);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-electric-500/50 transition-all duration-300 shadow-xl"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center ${colorClasses.text} flex-shrink-0`}>
                                            {learning.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">{learning.title}</h4>
                                            <p className="text-sm text-white/80 leading-relaxed">{learning.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* Optimization Actions */}
                <ScrollReveal variant="fade-up" delay={0.3}>
                    <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Tindakan Optimalisasi</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {optimizationActions.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'done' ? 'bg-green-500' : 'bg-yellow-500'
                                        }`}>
                                        {item.status === 'done' ? (
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        ) : (
                                            <Clock className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                    <p className="text-sm text-white font-medium">{item.action}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default DataAnalysis;
