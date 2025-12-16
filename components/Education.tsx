import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      name: 'Software Engineering - Week 1',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Software Enginering 1-optimized.jpg'
    },
    {
      name: 'Software Engineering - Week 2',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Software Enginering 2-optimized.jpg'
    },
    {
      name: 'Digital Marketing - Week 1',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Digital Marketing 1-optimized.jpg'
    },
    {
      name: 'Digital Marketing - Week 2',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Digital Marketing 2-optimized.jpg'
    },
  ];

  const bootcamps = t('educationPage.bootcamps.items', { returnObjects: true }) as string[];

  return (
    <section id="education" className="px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('educationPage.title')}
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            {t('educationPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Education Card */}
          <div className="lg:col-span-1">
            <div className="bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 text-white rounded-3xl p-6 lg:p-10 shadow-2xl h-full">
              {/* Logo + Header: Horizontal on Mobile, Vertical on Desktop */}
              <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 mb-6 lg:mb-6">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-electric-300 shadow-lg bg-white flex items-center justify-center p-2 relative z-10 flex-shrink-0">
                  <img
                    src="/logo-aba-optimized.png"
                    alt="Pondok Abdurrahman Bin Auf"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 lg:text-center lg:mt-6">
                  <p className="hidden lg:block text-sm uppercase tracking-wide opacity-80 mb-2 text-blue-200">{t('educationPage.school.currently')}</p>
                  <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-4 text-white leading-tight">{t('educationPage.school.name')}</h3>
                  <p className="text-sm lg:text-lg text-electric-300 font-semibold">{t('educationPage.school.grade')}</p>
                </div>
              </div>

              <div className="block lg:hidden mb-4">
                <p className="text-xs uppercase tracking-wide opacity-80 text-blue-200">{t('educationPage.school.currentlyStudying')}</p>
              </div>

              <p className="text-sm lg:text-base opacity-90 mb-4 lg:mb-4 lg:text-center text-blue-50 leading-relaxed">{t('educationPage.school.focus')}</p>

              <div className="flex items-start lg:justify-center gap-2 mt-4 lg:mt-6 mb-6 lg:mb-8 text-blue-100 lg:text-center">
                <span className="text-lg lg:text-xl mt-0.5">📍</span>
                <p className="text-xs lg:text-sm leading-relaxed max-w-[250px] lg:mx-auto">{t('educationPage.school.address')}</p>
              </div>

              {/* Pondok Image Placeholder */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-electric-300/30 shadow-lg bg-navy-800 flex items-center justify-center relative group">
                <img
                  src="/pondok-640w.webp"
                  alt="Pondok Abdurrahman Bin Auf"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-8">{t('educationPage.certificates.title')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-6 mb-12">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-4 lg:p-8 border border-electric-500/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="text-4xl lg:text-6xl mb-3 lg:mb-4">{cert.icon}</div>
                  <h4 className="text-xs lg:text-lg font-bold text-white mb-1 lg:mb-2 leading-tight line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-[10px] lg:text-sm text-blue-300 mb-0.5 lg:mb-1">{cert.issuer}</p>
                  <p className="text-[10px] lg:text-sm text-blue-300 mb-3 lg:mb-4">{cert.year}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-300 font-semibold text-xs lg:text-sm flex items-center justify-center gap-1.5 lg:gap-2 mx-auto hover:gap-3 transition-all hover:text-electric-200"
                  >
                    <span>{t('educationPage.certificates.view')}</span>
                    <ExternalLink size={12} className="lg:w-3.5 lg:h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Bootcamp & Training */}
            <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-8 border border-electric-500/20">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-electric-300" />
                <span>{t('educationPage.bootcamps.title')}</span>
              </h4>
              <div className="space-y-4">
                {bootcamps.map((bootcamp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-electric-300 text-xl font-bold mt-1">✓</span>
                    <p className="text-base text-blue-50 leading-relaxed">{bootcamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
