import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const certificates = [
    {
      name: 'Software Engineering - Week 1',
      issuer: 'RevoU',
      year: '2024',
      icon: '📜',
    },
    {
      name: 'Software Engineering - Week 2',
      issuer: 'RevoU',
      year: '2024',
      icon: '📜',
    },
    {
      name: 'Digital Marketing - Week 1',
      issuer: 'RevoU',
      year: '2024',
      icon: '📜',
    },
    {
      name: 'Digital Marketing - Week 2',
      issuer: 'RevoU',
      year: '2024',
      icon: '📜',
    },
  ];

  const bootcamps = [
    'RevoU - Full-Stack Development & Digital Marketing',
    'Krenovator Digital Tribe - Entrepreneurship Program',
  ];

  return (
    <section id="education" className="py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-b from-white to-bg-light-blue">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Education & Credentials
          </h2>
          <p className="text-lg text-navy-900/70 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Education Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-electric-500 to-navy-900 text-white rounded-3xl p-10 shadow-2xl">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-16 h-16" />
              </div>
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2 text-center">Currently</p>
              <h3 className="text-2xl font-bold mb-4 text-center">SMA (High School)</h3>
              <p className="text-lg mb-2 text-center">Grade 10</p>
              <p className="text-base opacity-90 mb-4 text-center">Focus: Technology & Entrepreneurship</p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="text-xl">📍</span>
                <p className="text-base">Semarang, Jawa Tengah</p>
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-navy-900 mb-8">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-electric-500/30 transition-all duration-300 text-center"
                >
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-bold text-navy-900 mb-2 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-navy-900/60 mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-sm text-navy-900/60 mb-4">Date: {cert.year}</p>
                  <button className="text-electric-500 font-semibold text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Bootcamp & Training */}
            <div className="bg-bg-light-blue rounded-2xl p-8 border-l-4 border-electric-500">
              <h4 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-electric-500" />
                <span>Bootcamp & Training</span>
              </h4>
              <div className="space-y-4">
                {bootcamps.map((bootcamp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-electric-500 text-xl font-bold mt-1">✓</span>
                    <p className="text-base text-navy-900 leading-relaxed">{bootcamp}</p>
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
