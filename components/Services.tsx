import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  ShoppingCart,
  Rocket,
  Megaphone,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showProcess, setShowProcess] = useState(false);
  const [showDeliverables, setShowDeliverables] = useState(false);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: t('servicesPage.items.webDev.title'),
      shortTitle: t('servicesPage.items.webDev.shortTitle'),
      description: t('servicesPage.items.webDev.description'),
      techStack: t('servicesPage.items.webDev.techStack', { returnObjects: true }) as string[],
      pricing: t('servicesPage.items.webDev.pricing'),
      process: t('servicesPage.items.webDev.process', { returnObjects: true }) as string[],
      deliverables: t('servicesPage.items.webDev.deliverables', { returnObjects: true }) as string[],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: t('servicesPage.items.ecommerce.title'),
      shortTitle: t('servicesPage.items.ecommerce.shortTitle'),
      description: t('servicesPage.items.ecommerce.description'),
      techStack: t('servicesPage.items.ecommerce.techStack', { returnObjects: true }) as string[],
      pricing: t('servicesPage.items.ecommerce.pricing'),
      process: t('servicesPage.items.ecommerce.process', { returnObjects: true }) as string[],
      deliverables: t('servicesPage.items.ecommerce.deliverables', { returnObjects: true }) as string[],
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: t('servicesPage.items.landingPage.title'),
      shortTitle: t('servicesPage.items.landingPage.shortTitle'),
      description: t('servicesPage.items.landingPage.description'),
      techStack: t('servicesPage.items.landingPage.techStack', { returnObjects: true }) as string[],
      pricing: t('servicesPage.items.landingPage.pricing'),
      process: t('servicesPage.items.landingPage.process', { returnObjects: true }) as string[],
      deliverables: t('servicesPage.items.landingPage.deliverables', { returnObjects: true }) as string[],
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: t('servicesPage.items.digitalMarketing.title'),
      shortTitle: t('servicesPage.items.digitalMarketing.shortTitle'),
      description: t('servicesPage.items.digitalMarketing.description'),
      techStack: t('servicesPage.items.digitalMarketing.techStack', { returnObjects: true }) as string[],
      pricing: t('servicesPage.items.digitalMarketing.pricing'),
      process: t('servicesPage.items.digitalMarketing.process', { returnObjects: true }) as string[],
      deliverables: t('servicesPage.items.digitalMarketing.deliverables', { returnObjects: true }) as string[],
    },
  ];

  type FAQItem = {
    question: string;
    answer: string;
  };

  const faqs = t('servicesPage.faq.items', { returnObjects: true }) as FAQItem[];

  const activeServiceData = services[activeService];

  return (
    <section className="relative min-h-screen pt-24 pb-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <ScrollReveal className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('servicesPage.title')}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('servicesPage.subtitle')}
          </p>
        </ScrollReveal>

        {/* Service Tabs */}
        <div className="relative">
          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveService(index);
                  setShowProcess(false);
                  setShowDeliverables(false);
                }}
                className={`snap-center flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeService === index
                  ? 'bg-electric-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {React.cloneElement(service.icon, { className: 'w-5 h-5' })}
                </div>
                <span className="font-semibold text-sm whitespace-nowrap">{service.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Desktop: Fixed Tabs */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveService(index)}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-2xl transition-all duration-300 ${activeService === index
                  ? 'bg-white/15 border-2 border-electric-500 shadow-xl'
                  : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                  }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${activeService === index ? 'bg-electric-500/20 text-electric-300' : 'bg-white/10 text-white/60'
                  }`}>
                  {service.icon}
                </div>
                <h3 className={`font-bold text-center ${activeService === index ? 'text-white' : 'text-white/70'
                  }`}>
                  {service.shortTitle}
                </h3>
                {activeService === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-electric-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
          >
            {/* Icon + Title + Description */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-electric-500/20 flex items-center justify-center text-electric-300"
              >
                {React.cloneElement(activeServiceData.icon, { className: 'w-12 h-12' })}
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {activeServiceData.title}
              </h3>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                {activeServiceData.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-white/70 mb-4 text-center">{t('servicesPage.labels.techStack')}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {activeServiceData.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="px-4 py-2 bg-white/10 text-electric-300 rounded-lg text-sm font-medium border border-white/10"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Process - Collapsible on Mobile */}
            <div className="mb-6">
              <button
                onClick={() => setShowProcess(!showProcess)}
                className="w-full lg:pointer-events-none flex items-center justify-between p-4 lg:p-0 bg-white/5 lg:bg-transparent rounded-xl lg:rounded-none mb-4"
              >
                <p className="text-sm font-semibold text-white/90">{t('servicesPage.labels.process')}</p>
                <ChevronDown className={`w-5 h-5 text-electric-300 lg:hidden transition-transform ${showProcess ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {(showProcess || window.innerWidth >= 1024) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {activeServiceData.process.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-500 text-white text-xs font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-sm text-white/80">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Deliverables - Collapsible on Mobile */}
            <div className="mb-8">
              <button
                onClick={() => setShowDeliverables(!showDeliverables)}
                className="w-full lg:pointer-events-none flex items-center justify-between p-4 lg:p-0 bg-white/5 lg:bg-transparent rounded-xl lg:rounded-none mb-4"
              >
                <p className="text-sm font-semibold text-white/90">{t('servicesPage.labels.deliverables')}</p>
                <ChevronDown className={`w-5 h-5 text-electric-300 lg:hidden transition-transform ${showDeliverables ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {(showDeliverables || window.innerWidth >= 1024) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeServiceData.deliverables.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                        >
                          <span className="text-electric-300 text-lg">✓</span>
                          <span className="text-sm text-white/80">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing + CTA */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-white/60 mb-6">
                {t('servicesPage.labels.startingFrom')} <span className="font-bold text-white text-xl">{activeServiceData.pricing}</span>
              </p>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-electric-500 hover:bg-electric-600 text-white rounded-xl font-bold shadow-xl transition-all"
              >
                <span>{t('servicesPage.labels.consultationButton')}</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-lg py-12 px-6 lg:px-12 rounded-3xl shadow-xl border border-white/20">
          <ScrollReveal className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('servicesPage.faq.title')}
            </h2>
            <p className="text-white/70">
              {t('servicesPage.faq.subtitle')}
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-white/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 lg:p-5 bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <span className="font-semibold text-white pr-4 text-sm lg:text-base">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-electric-300 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-white/80 leading-relaxed text-sm lg:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal variant="scale-up" className="bg-gradient-to-br from-electric-500 to-navy-900 py-12 lg:py-16 px-8 rounded-3xl text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('servicesPage.cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('servicesPage.cta.desc')}
          </p>
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-navy-900 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {t('servicesPage.cta.button')}
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
