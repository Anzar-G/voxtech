import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const certificates = [
    {
      name: 'Software Engineering - Week 1',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Software Enginering 1.jpg'
    },
    {
      name: 'Software Engineering - Week 2',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Software Enginering 2.jpg'
    },
    {
      name: 'Digital Marketing - Week 1',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Digital Marketing 1.jpg'
    },
    {
      name: 'Digital Marketing - Week 2',
      issuer: 'RevoU',
      year: '2025',
      icon: '📜',
      link: '/sertifikat/Sertifikat RevoU Digital Marketing 2.jpg'
    },
  ];

  const bootcamps = [
    'RevoU - Full-Stack Development & Digital Marketing',
    'Krenovator Digital Tribe - Entrepreneurship Program',
  ];

  return (
    <section id="education" className="px-6 lg:px-20">
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
                {/* Pondok Logo Placeholder - Circular for Logo */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-electric-300 shadow-lg bg-white flex items-center justify-center p-2 relative z-10">
                  <img
                    src="/logo-aba.png"
                    alt="Pondok Abdurrahman Bin Auf"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm uppercase tracking-wide opacity-80 mb-2 text-center text-white/70">Currently</p>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Pondok Abdurrahman Bin Auf Cirebon</h3>
              <p className="text-lg mb-2 text-center text-electric-300">SMA Kelas 10 (2025)</p>
              <p className="text-base opacity-90 mb-4 text-center text-white/90">Fokus: Pendidikan Umum, Agama, & Digitalpreneur/Digital Marketing</p>
              <div className="flex items-start justify-center gap-2 mt-6 mb-8 text-white/80 text-center">
                <span className="text-xl mt-1">📍</span>
                <p className="text-sm leading-relaxed max-w-[250px] mx-auto">Jl. Mulya 2, RT.005/RW.006, Karyamulya, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131</p>
              </div>

              {/* Pondok Image Placeholder - Rectangular with rounded corners */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-electric-300/30 shadow-lg bg-navy-800 flex items-center justify-center relative group">
                <img
                  src="/pondok.jpg"
                  alt="Pondok Abdurrahman Bin Auf"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
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
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-300 font-semibold text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all hover:text-electric-200"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </a>
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
