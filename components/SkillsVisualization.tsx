import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart, Zap, Palette } from 'lucide-react';

interface Skill {
    name: string;
    level: number;
    category: string;
    icon: React.ReactNode;
}

const SkillsVisualization: React.FC = () => {
    // 📝 EDIT DATA INI SESUAI SKILLS ANDA
    const skillsData: Skill[] = [
        {
            name: 'React & Next.js',
            level: 85,
            category: 'Frontend Development',
            icon: <Code className="w-5 h-5" />
        },
        {
            name: 'TypeScript',
            level: 75,
            category: 'Frontend Development',
            icon: <Code className="w-5 h-5" />
        },
        {
            name: 'Tailwind CSS',
            level: 90,
            category: 'Frontend Development',
            icon: <Palette className="w-5 h-5" />
        },
        {
            name: 'Facebook Ads',
            level: 80,
            category: 'Digital Marketing',
            icon: <BarChart className="w-5 h-5" />
        },
        {
            name: 'SEO & Analytics',
            level: 70,
            category: 'Digital Marketing',
            icon: <BarChart className="w-5 h-5" />
        },
        {
            name: 'AI Tools (Claude, Windsurf)',
            level: 92,
            category: 'AI & Automation',
            icon: <Zap className="w-5 h-5" />
        },
        {
            name: 'Prompt Engineering',
            level: 88,
            category: 'AI & Automation',
            icon: <Zap className="w-5 h-5" />
        },
    ];

    // Group skills by category
    const groupedSkills = skillsData.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    const getColorByLevel = (level: number) => {
        // Unified Blue Gradient: Opacity/Intensity based on level rather than hue
        if (level >= 85) return 'from-electric-400 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]';
        if (level >= 70) return 'from-electric-600 to-electric-400';
        return 'from-navy-600 to-electric-700';
    };

    return (
        <div className="w-full max-w-6xl mx-auto py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 text-center">
                    Skills & Expertise
                </h2>
                <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
                    Tingkat keahlian berdasarkan pengalaman proyek dan jam terbang
                </p>

                <div className="space-y-12">
                    {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-semibold text-electric-300 mb-6 flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-300">
                                    {skills[0].icon}
                                </div>
                                {category}
                            </h3>

                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white font-medium">{skill.name}</span>
                                            <span className="text-electric-300 text-sm font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar Container */}
                                        <div className="h-4 bg-navy-900 rounded-full overflow-hidden border border-white/5">
                                            {/* Animated Progress Bar */}
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${getColorByLevel(skill.level)} rounded-full relative`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay: categoryIndex * 0.1 + index * 0.1,
                                                    ease: 'easeOut'
                                                }}
                                            >
                                                {/* Shine effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                            </motion.div>
                                        </div>

                                        {/* Hover tooltip */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                                            <p className="text-xs text-white/50">
                                                {skill.level >= 85 && 'Expert Level'}
                                                {skill.level >= 70 && skill.level < 85 && 'Advanced Level'}
                                                {skill.level < 70 && 'Intermediate Level'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Simplified Legend */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm border-t border-white/5 pt-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-2 rounded-full bg-gradient-to-r from-electric-400 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                        <span className="text-white/70">Expert (85%+)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-2 rounded-full bg-gradient-to-r from-electric-600 to-electric-400" />
                        <span className="text-white/70">Advanced (70-84%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-2 rounded-full bg-gradient-to-r from-navy-600 to-electric-700" />
                        <span className="text-white/70">Intermediate (&lt;70%)</span>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
        </div>
    );
};

export default SkillsVisualization;
