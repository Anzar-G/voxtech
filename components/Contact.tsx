import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Clock, Calendar, MessageCircle, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.service && formData.message) {
      // Format WhatsApp message
      const whatsappMessage = `*${t('contact.whatsapp.header')}*%0A%0A` +
        `*${t('contact.whatsapp.nameLabel')}:* ${formData.name}%0A` +
        `*${t('contact.whatsapp.emailLabel')}:* ${formData.email}%0A` +
        `*${t('contact.whatsapp.serviceLabel')}:* ${formData.service || t('contact.whatsapp.notSpecified')}%0A%0A` +
        `*${t('contact.whatsapp.messageLabel')}:* %0A${formData.message}`;

      // WhatsApp number (without + and spaces)
      const whatsappNumber = '6282221025449';

      // Redirect to WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

      // Show success message
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);

      // Clear form
      setFormData({ name: '', email: '', service: '', message: '' });
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'muhammadniyar282@gmail.com',
      link: 'mailto:muhammadniyar282@gmail.com',
      description: t('contact.info.emailDesc'),
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muhammad-niyar',
      link: 'https://www.linkedin.com/in/muhammad-niyar-49272339a',
      description: t('contact.info.linkedinDesc'),
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/Anzar-G',
      link: 'https://github.com/Anzar-G',
      description: t('contact.info.githubDesc'),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+62 822-2102-5449',
      link: 'https://wa.me/6282221025449',
      description: t('contact.info.whatsappDesc'),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contact.info.location'),
      value: 'Perum Klipang Permai Blok H-349 5/23,Sendangmulyo, Tembalang, Semarang, Jawa Tengah',
      link: null,
      description: t('contact.info.locationDesc'),
    },
  ];

  const availability = [
    { day: t('contact.info.availability.weekdays'), hours: '09:00 - 21:00 WIB', status: 'available' },
    { day: t('contact.info.availability.weekend'), hours: '10:00 - 18:00 WIB', status: 'limited' },
  ];

  const communicationPreferences = [
    {
      method: t('contact.preferences.whatsapp.method'),
      icon: <MessageCircle className="w-5 h-5" />,
      speed: t('contact.preferences.whatsapp.speed'),
      bestFor: t('contact.preferences.whatsapp.bestFor'),
      responseTime: t('contact.preferences.whatsapp.responseTime'),
    },
    {
      method: t('contact.preferences.email.method'),
      icon: <Mail className="w-5 h-5" />,
      speed: t('contact.preferences.email.speed'),
      bestFor: t('contact.preferences.email.bestFor'),
      responseTime: t('contact.preferences.email.responseTime'),
    },
    {
      method: t('contact.preferences.linkedin.method'),
      icon: <Linkedin className="w-5 h-5" />,
      speed: t('contact.preferences.linkedin.speed'),
      bestFor: t('contact.preferences.linkedin.bestFor'),
      responseTime: t('contact.preferences.linkedin.responseTime'),
    },
  ];

  const workProcess = [
    {
      step: '1',
      title: t('contact.process.steps.consultation.title'),
      description: t('contact.process.steps.consultation.desc'),
      duration: '30-60 menit',
    },
    {
      step: '2',
      title: t('contact.process.steps.proposal.title'),
      description: t('contact.process.steps.proposal.desc'),
      duration: '1-2 hari',
    },
    {
      step: '3',
      title: t('contact.process.steps.kickoff.title'),
      description: t('contact.process.steps.kickoff.desc'),
      duration: '1 hari',
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-7 h-7" />, link: 'https://www.linkedin.com/in/muhammad-niyar-49272339a', label: 'LinkedIn' },
    { icon: <Github className="w-7 h-7" />, link: 'https://github.com/Anzar-G', label: 'GitHub' },
  ];

  return (
    <section className="relative pt-24 pb-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500 text-white">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t('contact.page.heading')}
          </h2>
          <p className="text-lg lg:text-xl text-blue-50 max-w-2xl mx-auto">
            {t('contact.page.subheading')}
          </p>
        </ScrollReveal>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="bg-electric-500/10 backdrop-blur-lg rounded-3xl p-10 border border-electric-500/20 shadow-2xl space-y-8">
              <h3 className="text-2xl font-bold mb-8">{t('contact.info.title')}</h3>

              {/* Contact Items */}
              <StaggerContainer className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link || '#'}
                    target={item.link ? '_blank' : undefined}
                    rel={item.link ? 'noopener noreferrer' : undefined}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 5 }}
                    className={`w-full flex items-start gap-4 p-3 lg:p-4 rounded-xl bg-electric-500/5 hover:bg-electric-500/10 transition-all duration-300 ${item.link ? 'cursor-pointer' : 'cursor-default'
                      }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-electric-500/15 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-blue-200 mb-1">{item.label}</p>
                      <p className="text-base font-medium break-all mb-1">{item.value}</p>
                      <p className="text-xs text-blue-300">{item.description}</p>
                    </div>
                  </motion.a>
                ))}
              </StaggerContainer>

              {/* Business Hours */}
              <div className="pt-8 border-t border-electric-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5" />
                  <h4 className="text-lg font-semibold">{t('contact.info.hoursTitle')}</h4>
                </div>
                <div className="space-y-3">
                  {availability.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-blue-100">{schedule.day}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{schedule.hours}</span>
                        <span className={`w-2 h-2 rounded-full ${schedule.status === 'available' ? 'bg-green-400' : 'bg-yellow-400'
                          }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-electric-500/20">
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 rounded-xl bg-electric-500/10 hover:bg-white hover:text-navy-900 flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal variant="fade-left" delay={0.4}>
            <div className="bg-electric-500/5 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-electric-500/20">
              <h3 className="text-2xl font-bold text-white mb-8">{t('contact.form.title')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-blue-50 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.form.placeholders.name')}
                    className="w-full px-3 py-2.5 lg:px-4 lg:py-3 bg-electric-500/5 border border-electric-500/20 rounded-lg text-base text-white focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 outline-none transition-all placeholder:text-blue-200/50"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-blue-50 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.form.placeholders.email')}
                    className="w-full px-3 py-2.5 lg:px-4 lg:py-3 bg-electric-500/5 border border-electric-500/20 rounded-lg text-base text-white focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 outline-none transition-all placeholder:text-blue-200/50"
                    required
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service-select" className="block text-sm font-semibold text-blue-50 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 lg:px-4 lg:py-3 bg-electric-500/5 border border-electric-500/10 rounded-lg text-base text-white focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 outline-none transition-all [&>option]:bg-navy-900"
                    required
                  >
                    <option value="">{t('contact.form.services.placeholder')}</option>
                    <option value="web-development">{t('contact.form.services.webDev')}</option>
                    <option value="e-commerce">{t('contact.form.services.ecommerce')}</option>
                    <option value="landing-page">{t('contact.form.services.landingPage')}</option>
                    <option value="digital-marketing">{t('contact.form.services.digitalMarketing')}</option>
                    <option value="other">{t('contact.form.services.other')}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-blue-50 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.placeholders.message')}
                    rows={5}
                    className="w-full px-3 py-2.5 lg:px-4 lg:py-3 bg-electric-500/5 border border-electric-500/10 rounded-lg text-base text-white focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 outline-none transition-all resize-vertical placeholder:text-blue-200/50"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-electric-500 hover:bg-electric-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('contact.form.submit')}
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="text-sm font-medium">{t('contact.form.success')}</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg"
                  >
                    <span className="text-xl">✗</span>
                    <p className="text-sm font-medium">{t('contact.form.error')}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Communication Preferences */}
        <ScrollReveal variant="fade-up" className="bg-electric-500/10 backdrop-blur-lg rounded-3xl p-10 border border-electric-500/20">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('contact.preferences.title')}</h3>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {communicationPreferences.map((pref, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-electric-500/5 rounded-xl p-6 hover:bg-electric-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/20 flex items-center justify-center text-electric-300">
                    {pref.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{pref.method}</h4>
                    <p className="text-xs text-blue-300">{pref.speed} Response</p>
                  </div>
                </div>
                <p className="text-sm text-blue-100 mb-3">{pref.bestFor}</p>
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-4 h-4 text-electric-300" />
                  <span className="text-blue-200">Response: {pref.responseTime}</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Work Process */}
        <ScrollReveal className="bg-electric-500/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-electric-500/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('contact.process.title')}</h3>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-500 to-navy-900 flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
                  <p className="text-sm text-blue-200 mb-3">{process.description}</p>
                  <div className="flex items-center gap-2 text-xs text-blue-300">
                    <Calendar className="w-4 h-4" />
                    <span>{process.duration}</span>
                  </div>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-electric-500/50 to-navy-900/50" />
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Quick CTA */}
        <ScrollReveal variant="scale-up" className="bg-gradient-to-r from-electric-500 to-navy-900 rounded-3xl p-10 text-center">
          <Zap className="w-16 h-16 mx-auto mb-4 text-white" />
          <h3 className="text-3xl font-bold mb-4">{t('contact.cta.title')}</h3>
          <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
            {t('contact.cta.desc')}
          </p>
          <motion.a
            href="https://wa.me/6282221025449"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-navy-900 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span>{t('contact.cta.button')}</span>
          </motion.a>
        </ScrollReveal>
      </div >
    </section >
  );
};

export default Contact;
