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
    <section id="education" className="py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & Credentials
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Education Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-3xl p-10 shadow-2xl h-full">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-16 h-16 text-electric-300" />
              </div>
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2 text-center text-white/70">Currently</p>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">SMA (High School)</h3>
              <p className="text-lg mb-2 text-center text-electric-300">Grade 10</p>
              <p className="text-base opacity-90 mb-4 text-center text-white/90">Focus: Technology & Entrepreneurship</p>
              <div className="flex items-center justify-center gap-2 mt-6 text-white/80">
                <span className="text-xl">📍</span>
                <p className="text-base">Semarang, Jawa Tengah</p>
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-white/60 mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-sm text-white/60 mb-4">Date: {cert.year}</p>
                  <button className="text-electric-300 font-semibold text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all hover:text-electric-200">
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Bootcamp & Training */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-electric-300" />
                <span>Bootcamp & Training</span>
              </h4>
              <div className="space-y-4">
                {bootcamps.map((bootcamp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-electric-300 text-xl font-bold mt-1">✓</span>
                    <p className="text-base text-white/90 leading-relaxed">{bootcamp}</p>
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
