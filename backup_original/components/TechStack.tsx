import React from 'react';
import { Code, Bot, Cloud, BarChart3, Palette, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TechStack: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    {
      icon: <Code className="w-12 h-12" />,
      title: t('techStackPage.categories.frontend'),
      tools: ['React.js', 'Next.js', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'JavaScript'],
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: t('techStackPage.categories.ai'),
      tools: ['Claude AI', 'Qwen Coder', 'Cascade Windsurf', 'Anti-Gravity', 'Stitch by Google', 'Google AI Studio', 'Magnus', 'Jules'],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: t('techStackPage.categories.infra'),
      tools: ['Vercel', 'GitHub Pages', 'Git/GitHub', 'CI/CD'],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: t('techStackPage.categories.marketing'),
      tools: ['Meta Ads Manager', 'Meta Pixel', 'Canva', 'Google Analytics', 'Facebook Business Suite'],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: t('techStackPage.categories.design'),
      tools: [
        'Figma',
        'Canva',
        t('techStackPage.tools.aiDesign'),
        'Photopea'
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: t('techStackPage.categories.data'),
      tools: [
        'Google Analytics',
        'Meta Pixel',
        t('techStackPage.tools.convTracking'),
        'A/B Testing tools'
      ],
    },
  ];

  return (
    <section id="tech-stack" className="relative py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('techStackPage.title')}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t('techStackPage.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-electric-300 mb-6">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/10 text-white/90 rounded-lg text-sm font-medium hover:bg-electric-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-default border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
