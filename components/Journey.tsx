import React from 'react';
import { BookOpen, Rocket, TrendingUp, Award, Target } from 'lucide-react';

const Journey: React.FC = () => {
  const events = [
    {
      date: 'Agustus 2024',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Started Digital Entrepreneurship Learning',
      description: 'Joined RevoU & Krenovator Digital Tribe bootcamp untuk mempelajari software engineering dan digital marketing',
      achievements: [
        'Completed full-stack development fundamentals',
        'Mastered React, Next.js, and modern web technologies',
        'Started learning Facebook Ads & digital marketing strategies',
      ],
    },
    {
      date: 'Oktober 2024',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Launched First Business',
      description: 'Feyd Store - Platform e-commerce untuk produk islami',
      achievements: [
        'Built fully functional e-commerce platform',
        'Implemented payment integration',
        'Started managing inventory & orders',
      ],
    },
    {
      date: 'Oktober 2024',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Launched Second Business',
      description: 'Frontworks - AI-powered web development services',
      achievements: [
        'Created professional portfolio website',
        'Established service offerings',
        'Started client acquisition',
      ],
    },
    {
      date: 'November 2024',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Started Facebook Ads Journey',
      description: 'Running campaigns with 32k/day budget',
      achievements: [
        'Managing multiple product ads (Quran, Novels)',
        'Testing different audience segments',
        'Optimizing for conversions',
      ],
    },
    {
      date: 'Desember 2024',
      icon: <Award className="w-6 h-6" />,
      title: 'Achieved Certifications & Milestones',
      description: 'Professional certifications and project deliveries',
      achievements: [
        '2x Software Engineering Certificates (RevoU)',
        '2x Digital Marketing Certificates (RevoU)',
        '5+ Successful Projects Delivered',
        '823 clicks, CTR 2.37% on ads',
      ],
    },
  ];

  return (
    <section id="journey" className="py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-b from-white to-bg-light-blue">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Digital Entrepreneurship Journey
          </h2>
          <p className="text-lg text-navy-900/70 max-w-2xl mx-auto">
            My path from learning to building successful digital businesses
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-500 to-electric-500/20 hidden md:block" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-electric-500 border-4 border-white shadow-lg z-10" />

                {/* Content Card */}
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                    {/* Date Badge */}
                    <div className="inline-block px-5 py-2 bg-electric-500 text-white rounded-full text-sm font-semibold mb-4">
                      {event.date}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-bg-light-blue flex items-center justify-center text-electric-500 flex-shrink-0">
                        {event.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-navy-900/70">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-navy-900/60 mb-2">Achievements:</p>
                      <ul className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-navy-900/70 flex items-start gap-2">
                            <span className="text-electric-500 mt-0.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Card */}
        <div className="mt-16 bg-gradient-to-br from-electric-500 to-navy-900 rounded-2xl p-10 text-white text-center shadow-2xl">
          <div className="flex justify-center mb-4">
            <Target className="w-12 h-12" />
          </div>
          <h3 className="text-3xl font-bold mb-6">Current Focus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              'Scaling Feyd Store e-commerce',
              'Growing Frontworks client base',
              'Mastering Facebook Ads optimization',
              'Exploring new AI development tools',
            ].map((goal, i) => (
              <div key={i} className="flex items-center gap-2 text-left">
                <span className="text-2xl">✓</span>
                <span className="text-base">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
