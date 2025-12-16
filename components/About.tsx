import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import {
  Code,
  BarChart,
  Zap,
  Target,
  CheckCircle,
  Users,
  MapPin,
  GraduationCap,
  Briefcase,
  Clock,
  Star
} from 'lucide-react';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';
import Certificates from './Certificates';
import Education from './Education';
import SkillsVisualization from './SkillsVisualization';


const About: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      name: t('about.skills.list.aiEngineering.name'),
      level: 95,
      category: t('about.skills.core'),
      items: t('about.skills.list.aiEngineering.items', { returnObjects: true }) as string[],
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: t('about.skills.list.techStack.name'),
      level: 90,
      category: t('about.skills.frontend'),
      items: t('about.skills.list.techStack.items', { returnObjects: true }) as string[],
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      name: t('about.skills.list.digitalMarketing.name'),
      level: 85,
      category: t('about.skills.growth'),
      items: t('about.skills.list.digitalMarketing.items', { returnObjects: true }) as string[],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: t('about.skills.list.productivity.name'),
      level: 98,
      category: t('about.skills.productivity'),
      items: t('about.skills.list.productivity.items', { returnObjects: true }) as string[],
    },
  ];

  const whyChooseMe = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('about.whyChoose.speed.title'),
      description: t('about.whyChoose.speed.desc'),
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('about.whyChoose.result.title'),
      description: t('about.whyChoose.result.desc'),
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t('about.whyChoose.quality.title'),
      description: t('about.whyChoose.quality.desc'),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('about.whyChoose.communication.title'),
      description: t('about.whyChoose.communication.desc'),
    },
  ];

  const workflowSteps = [
    {
      number: '01',
      title: t('about.workflow.step1.title'),
      description: t('about.workflow.step1.desc'),
      duration: t('about.workflow.step1.duration'),
    },
    {
      number: '02',
      title: t('about.workflow.step2.title'),
      description: t('about.workflow.step2.desc'),
      duration: t('about.workflow.step2.duration'),
    },
    {
      number: '03',
      title: t('about.workflow.step3.title'),
      description: t('about.workflow.step3.desc'),
      duration: t('about.workflow.step3.duration'),
    },
    {
      number: '04',
      title: t('about.workflow.step4.title'),
      description: t('about.workflow.step4.desc'),
      duration: t('about.workflow.step4.duration'),
    },
    {
      number: '05',
      title: t('about.workflow.step5.title'),
      description: t('about.workflow.step5.desc'),
      duration: t('about.workflow.step5.duration'),
    },
  ];

  const testimonials = [
    {
      name: '[Nama Client]',
      position: '[Posisi/Perusahaan]',
      rating: 5,
      text: t('about.testimonials.placeholder'),
      project: '[Nama Proyek]',
    },
    {
      name: '[Nama Client]',
      position: '[Posisi/Perusahaan]',
      rating: 5,
      text: t('about.testimonials.placeholder'),
      project: '[Nama Proyek]',
    },
    {
      name: '[Nama Client]',
      position: '[Posisi/Perusahaan]',
      rating: 5,
      text: t('about.testimonials.placeholder'),
      project: '[Nama Proyek]',
    },
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

      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* Main About Section */}
        <div>
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center lg:text-left">
              {t('about.title')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Left Column - 40% */}
            <ScrollReveal variant="fade-right" className="lg:col-span-2 space-y-6">
              {/* Mobile: Photo + Info Side by Side / Desktop: Standard */}
              <div className="grid grid-cols-[45%_1fr] lg:grid-cols-1 gap-4 mb-6 lg:mb-0 lg:space-y-6">
                {/* Profile Photo */}
                <div className="w-full lg:max-w-xs lg:mx-auto">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-electric-500 via-cyan-400 to-purple-500 p-1 shadow-2xl overflow-hidden backdrop-blur-sm">
                    <div className="w-full h-full rounded-[20px] overflow-hidden bg-navy-900/50">
                      <img
                        src="/profile-optimized.jpg"
                        alt="Muhammad Nizar Al-Faris"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />  </div>
                  </div>
                </div>

                {/* Info Card - Compact on Mobile */}
                <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-4 lg:p-8 text-white shadow-xl border border-electric-500/20 flex flex-col justify-center lg:block">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">{t('about.location.label')}</p>
                        <p className="text-xs lg:text-sm text-blue-50">{t('about.location.value')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">{t('about.education.label')}</p>
                        <p className="text-xs lg:text-sm text-blue-50">{t('about.education.value')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">{t('about.business.label')}</p>
                        <p className="text-xs lg:text-sm text-blue-50">{t('about.business.value')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 lg:mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm lg:text-base">{t('about.experience.label')}</p>
                        <p className="text-xs lg:text-sm text-blue-50">{t('about.experience.value')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-electric-500/20">
                  <p className="text-2xl lg:text-3xl font-bold text-electric-300">8+</p>
                  <p className="text-[10px] lg:text-xs text-blue-200 mt-1">{t('about.stats.aiMonths')}</p>
                </div>
                <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-electric-500/20">
                  <p className="text-2xl lg:text-3xl font-bold text-electric-300">5+</p>
                  <p className="text-[10px] lg:text-xs text-blue-200 mt-1">{t('about.stats.projects')}</p>
                </div>
                <div className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-electric-500/20">
                  <p className="text-2xl lg:text-3xl font-bold text-electric-300">2</p>
                  <p className="text-[10px] lg:text-xs text-blue-200 mt-1">{t('about.stats.businesses')}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - 60% */}
            <ScrollReveal variant="fade-left" delay={0.2} className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{t('about.bio.title')}</h3>
                <div className="space-y-4 text-blue-50 leading-relaxed">
                  <p className="text-lg">
                    <Trans i18nKey="about.bio.p1" components={{ 1: <strong className="text-electric-500 font-semibold" /> }} />
                  </p>
                  <p className="text-lg">
                    <Trans i18nKey="about.bio.p2" components={{ 1: <strong className="text-electric-500 font-semibold" /> }} />
                  </p>
                  <p className="text-lg">
                    {t('about.bio.p3')}
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { label: t('about.skills.core'), value: '8+', sub: t('about.stats.aiMonths') },
                  { label: t('about.stats.success'), value: '5+', sub: t('about.stats.projects') },
                  { label: t('about.stats.running'), value: '2', sub: t('about.stats.businesses') }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="text-xs uppercase tracking-wide text-blue-300 mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-electric-300 mb-1">{stat.value}</p>
                    <p className="text-sm text-blue-100">{stat.sub}</p>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Skills Highlight */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{t('about.skills.title')}</h3>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="bg-electric-500/10 backdrop-blur-sm rounded-xl p-3 lg:p-6 border-l-4 border-electric-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-electric-500/10"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="bg-electric-500/10 p-1.5 lg:p-2 rounded-lg">
                          {React.cloneElement(skill.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6 text-electric-300" })}
                        </div>
                        <span className="text-[10px] lg:text-xs font-mono text-electric-300 bg-electric-300/10 px-1.5 py-0.5 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <h4 className="text-sm lg:text-xl font-bold text-white mb-0.5 lg:mb-1 truncate">{skill.name}</h4>
                      <p className="text-xs lg:text-sm text-blue-200 line-clamp-2">{skill.category}</p>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>

              {/* Tech Stack & Education Combined */}
              <ScrollReveal variant="fade-up" delay={0.3} className="bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 rounded-2xl p-6 lg:p-8 shadow-md">
                <h3 className="text-xl font-bold text-white mb-6">{t('about.techAndEdu.title')}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 mb-3 uppercase">{t('about.techAndEdu.tools')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {(t('about.techAndEdu.toolsList', { returnObjects: true }) as string[]).map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-electric-500/10 text-blue-50 rounded-lg text-sm font-medium hover:bg-electric-500 hover:text-white transition-colors border border-electric-500/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 mb-3 uppercase">{t('about.education.certifications')}</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-blue-100">• Software Engineering - RevoU (2025)</li>
                      <li className="text-sm text-blue-100">• Digital Marketing - RevoU (2025)</li>
                      <li className="text-sm text-blue-100">• Krenovator Digital Tribe (2025)</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Skills Visualization Section */}
      <div className="my-16">
        <SkillsVisualization />
      </div>

      <div className="my-16">
        <Education />
      </div>

      {/* Why Choose Me Section */}
      <div className="bg-electric-500/10 backdrop-blur-lg py-16 px-8 rounded-3xl border border-electric-500/20 my-16">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            {t('about.whyChoose.title')}
          </h2>
          <p className="text-center text-white mb-12 max-w-2xl mx-auto">
            {t('about.whyChoose.subtitle')}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-electric-500/10 backdrop-blur-lg rounded-xl p-4 lg:p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-electric-500/10 hover:border-electric-500/30 flex flex-col h-full"
            >
              <div className="bg-gradient-to-br from-electric-500/20 to-navy-800/50 w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-3 lg:mb-4 text-electric-300 border border-electric-500/20 flex-shrink-0">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6" })}
              </div>
              <h4 className="text-sm lg:text-lg font-bold text-white mb-1 lg:mb-2 leading-tight">{item.title}</h4>
              <p className="text-xs lg:text-sm text-blue-200 leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* Workflow/Process Section */}
      <div className="my-16">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            {t('about.workflow.title')}
          </h2>
          <p className="text-center text-white mb-16 max-w-2xl mx-auto">
            {t('about.workflow.subtitle')}
          </p>
        </ScrollReveal>

        <StaggerContainer className="max-w-4xl mx-auto space-y-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                visible: { opacity: 1, x: 0 }
              }}
              className={`flex gap-4 lg:gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-electric-500/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-electric-500/10 hover:border-electric-500/20`}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-electric-500 to-navy-900 flex items-center justify-center text-white font-bold text-lg lg:text-xl border-2 border-electric-500/20 shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} mb-2`}>
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">{step.title}</h3>
                  <div className="flex items-center gap-2 text-xs lg:text-sm text-blue-300 mt-1">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
                <p className="text-sm lg:text-base text-blue-200 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* Certificates Section */}
      <div className="my-16">
        <Certificates />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-navy-900 to-electric-500 py-16 px-8 rounded-3xl my-16">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            {t('about.testimonials.title')}
          </h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
            {t('about.testimonials.subtitle')}
          </p>
        </ScrollReveal>

        {/* Desktop Grid */}
        <StaggerContainer className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-8 border border-electric-500/20 hover:bg-electric-500/15 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-blue-50 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-electric-500/20 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-blue-200 text-sm">{testimonial.position}</p>
                <p className="text-electric-300 text-sm mt-2">Proyek: {testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide px-4 -mx-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[85%] bg-electric-500/10 backdrop-blur-lg rounded-2xl p-6 border border-electric-500/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-50 italic mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-electric-500/20 pt-4">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-blue-200 text-xs">{testimonial.position}</p>
                  <p className="text-electric-300 text-xs mt-1">Proyek: {testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-electric-500/30" />
            ))}
          </div>
        </div>

        <ScrollReveal variant="fade-up" delay={0.3} className="text-center mt-12">
          <p className="text-blue-300 text-sm italic">
            {t('about.testimonials.placeholder')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
