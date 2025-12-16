import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BookOpen, Rocket, TrendingUp, Award, Target, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Simple debounce utility
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const Journey: React.FC = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const events = [
    {
      date: t('journey.events.learning.date'),
      icon: <BookOpen className="w-5 h-5" />,
      title: t('journey.events.learning.title'),
      description: t('journey.events.learning.description'),
      achievements: t('journey.events.learning.achievements', { returnObjects: true }) as string[],
      type: 'learning'
    },
    {
      date: t('journey.events.business.date'),
      icon: <Rocket className="w-5 h-5" />,
      title: t('journey.events.business.title'),
      description: t('journey.events.business.description'),
      achievements: t('journey.events.business.achievements', { returnObjects: true }) as string[],
      type: 'business'
    },
    {
      date: t('journey.events.marketing.date'),
      icon: <TrendingUp className="w-5 h-5" />,
      title: t('journey.events.marketing.title'),
      description: t('journey.events.marketing.description'),
      achievements: t('journey.events.marketing.achievements', { returnObjects: true }) as string[],
      type: 'marketing'
    },
    {
      date: t('journey.events.expansion.date'),
      icon: <Award className="w-5 h-5" />,
      title: t('journey.events.expansion.title'),
      description: t('journey.events.expansion.description'),
      achievements: t('journey.events.expansion.achievements', { returnObjects: true }) as string[],
      type: 'achievement'
    },
  ];

  const goals = t('journey.goals.items', { returnObjects: true }) as string[];

  // Neon Cyber Theme: Distinct but Cohesive
  const eventColors: { [key: string]: string } = {
    learning: 'cyan',     // Growth / Tech -> Cyan/Teal
    business: 'violet',   // Premium / Enterprise -> Violet/Purple
    marketing: 'blue',    // Trust / Professional -> Blue/Indigo
    achievement: 'amber'  // Trophy / Gold -> Amber/Orange
  };

  const colorStyles: { [key: string]: string } = {
    cyan: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20 shadow-[0_0_15px_rgba(34,211,238,0.3)] border-cyan-400/50",
    violet: "bg-gradient-to-br from-violet-500/20 to-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.3)] border-violet-400/50",
    blue: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)] border-blue-400/50",
    amber: "bg-gradient-to-br from-amber-500/20 to-orange-500/20 shadow-[0_0_15px_rgba(251,191,36,0.3)] border-amber-400/50",
  };

  const textColorStyles: { [key: string]: string } = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    blue: "text-blue-300",
    amber: "text-amber-300",
  };

  const checkColorStyles: { [key: string]: string } = {
    cyan: "text-cyan-400",
    violet: "text-violet-400",
    blue: "text-blue-400",
    amber: "text-amber-400",
  };

  const glowStyles: { [key: string]: string } = {
    cyan: "shadow-[0_0_25px_rgba(6,182,212,0.4)] border-cyan-400/50",
    violet: "shadow-[0_0_25px_rgba(139,92,246,0.4)] border-violet-400/50",
    blue: "shadow-[0_0_25px_rgba(59,130,246,0.4)] border-blue-400/50",
    amber: "shadow-[0_0_25px_rgba(251,191,36,0.4)] border-amber-400/50",
  };

  const gradientStyles: { [key: string]: string } = {
    cyan: "from-cyan-500/20 to-cyan-600/5",
    violet: "from-violet-500/20 to-violet-600/5",
    blue: "from-blue-500/20 to-blue-600/5",
    amber: "from-amber-500/20 to-amber-600/5",
  };

  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const totalWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

        if (totalWidth > 0) {
          const progress = scrollLeft / totalWidth;
          const newIndex = Math.min(Math.max(Math.round(progress * (events.length - 1)), 0), events.length - 1);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        }
      }
    }, 50),
    [activeIndex, events.length]
  );

  // Programmatic scroll to index
  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 16; // 1rem gap
      const target = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({ left: target, behavior: 'smooth' });
      setActiveIndex(index);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex(Math.min(activeIndex + 1, events.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(Math.max(activeIndex - 1, 0));
      }
    };

    // Attach to window for global keyboard nav when this component is mounted
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, events.length, scrollToIndex]);

  return (
    <section id="journey" className="relative pt-24 pb-20 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              {t('journey.title')}
            </h2>
            <p className="text-base lg:text-lg text-blue-200 max-w-2xl mx-auto">
              {t('journey.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Mobile Horizontal Timeline (Carousel) */}
        <div className="lg:hidden relative">
          {/* Vertical Line Context - Thinner and Lower Opacity */}
          <div className="absolute left-6 top-6 bottom-12 w-0.5 bg-gradient-to-b from-white/10 to-transparent z-0" />

          <div
            ref={scrollContainerRef}
            onScroll={(e) => {
              e.persist(); // React pooling
              handleScroll();
            }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide touch-pan-x scroll-smooth"
          >
            {events.map((event, index) => {
              // Determine expanded/color state
              const color = eventColors[event.type] || 'blue';
              const isActive = index === activeIndex;

              return (
                <div key={index} className="snap-center flex-shrink-0 w-[85vw] max-w-[320px] relative pl-12 py-2">
                  {/* Timeline Connector Dot */}
                  <button
                    onClick={() => scrollToIndex(index)}
                    className={`absolute left-4 top-8 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-navy-900 z-10 
                            ${colorStyles[color]} 
                            ${isActive ? 'scale-125 ring-4 ring-white/10 shadow-[0_0_15px_currentColor]' : 'scale-100 opacity-70'} 
                            transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 focus:ring-electric-500`}
                    aria-label={`Go to event ${index + 1}`}
                  />

                  <div className={`
                        relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 h-full
                        ${isActive ? `${glowStyles[color]} bg-electric-500/10 backdrop-blur-md` : 'border-electric-500/5 bg-electric-500/5 opacity-80 scale-95'}
                    `}>
                    {/* Dynamic Gradient Background for Active Card */}
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradientStyles[color]} opacity-30 pointer-events-none`} />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-black/20 text-white backdrop-blur-sm border border-electric-500/10`}>
                          {event.date}
                        </span>
                        <div className={`p-2 rounded-lg bg-electric-500/10 text-white`}>
                          {event.icon}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-blue-200 mb-5 line-clamp-3">{event.description}</p>

                      {/* Collapsible Achievements */}
                      <CollapsibleAchievements achievements={event.achievements} color={color} checkColor={checkColorStyles[color]} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {events.map((event, i) => {
              const color = eventColors[event.type] || 'gray';
              return (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? `w-6 ${colorStyles[color]}` : 'w-1.5 bg-electric-500/10 hover:bg-electric-500/30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop Vertical Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 opacity-5 bg-diagonal-electric"></div>
          <div className="space-y-24">
            {events.map((event, index) => {
              const color = eventColors[event.type];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center gap-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  {/* Center Dot */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-navy-900 border-4 ${color.replace('bg-', 'border-')} border-${color}-500 z-10 shadow-[0_0_15px_currentColor] text-${color}-500`} />

                  {/* Content Side */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradientStyles[color]} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                      <div className="relative bg-electric-500/5 backdrop-blur-xl rounded-2xl p-8 border border-electric-500/10 hover:border-electric-500/20 transition-all duration-300">
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-12 h-12 rounded-xl bg-electric-500/5 flex items-center justify-center text-white`}>
                            {event.icon}
                          </div>
                          <div>
                            <span className={`block text-sm font-semibold ${textColorStyles[color]} mb-1 uppercase tracking-wider`}>{event.date}</span>
                            <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                          </div>
                        </div>
                        <p className="text-blue-200 mb-6">{event.description}</p>

                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                          {event.achievements.map((acc, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-electric-500/5 border border-electric-500/10 text-xs text-blue-100 flex items-center gap-1">
                              <span className={checkColorStyles[color]}>✓</span> {acc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Side */}
                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 to-purple-500/10 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-navy-900/40 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-electric-500/10 overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-electric-500/20 flex items-center justify-center border border-electric-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Target className="w-10 h-10 text-electric-300" />
              </div>
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t('journey.goals.title')}</h3>
                <p className="text-blue-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t('journey.goals.description')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {goals.map((goal, i) => (
                    <div key={i} className="flex items-center gap-3 bg-electric-500/5 rounded-lg p-3 hover:bg-electric-500/10 transition-colors border border-electric-500/5">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-sm font-medium text-blue-50">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for Collapsible Achievements
const CollapsibleAchievements: React.FC<{ achievements: string[], color: string, checkColor?: string }> = ({ achievements, color, checkColor }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedAchievements = isExpanded ? achievements : achievements.slice(0, 2);
  const hasMore = achievements.length > 2;
  // Fallback for check color if not provided
  const checkClass = checkColor || (color === 'yellow' ? 'text-yellow-400' : color === 'pink' ? 'text-pink-400' : color === 'purple' ? 'text-purple-400' : 'text-blue-400');

  return (
    <div className="bg-black/20 rounded-xl p-3 border border-electric-500/5">
      <div className="space-y-2 mb-2">
        <AnimatePresence>
          {displayedAchievements.map((acc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-start gap-2 text-xs text-blue-100"
            >
              <span className={`${checkClass} mt-0.5 font-bold`}>✓</span>
              <span>{acc}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <button
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          className="flex items-center gap-1 text-[10px] font-bold text-blue-300 hover:text-white uppercase tracking-wider transition-colors w-full pt-2 border-t border-electric-500/5"
        >
          {isExpanded ? (
            <>{t('journey.controls.showLess')} <ChevronDown className="w-3 h-3 rotate-180 transition-transform" /></>
          ) : (
            <>{t('journey.controls.showMore', { count: achievements.length - 2 })} <ChevronDown className="w-3 h-3 transition-transform" /></>
          )}
        </button>
      )}
    </div>
  );
};

export default Journey;
