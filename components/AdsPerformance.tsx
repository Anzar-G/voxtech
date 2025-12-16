import React from 'react';
import { MousePointer, Eye, Target, Repeat, TrendingUp, DollarSign, BarChart, Check, CheckCircle, CalendarDays, Package, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AdsPerformance: React.FC = () => {
  const { t } = useTranslation();

  const metrics = [
    { icon: <MousePointer />, value: '909', label: t('adsPerformance.metrics.clicks.label'), sub: t('adsPerformance.metrics.clicks.sub') },
    { icon: <Eye />, value: '65,257', label: t('adsPerformance.metrics.views.label'), sub: t('adsPerformance.metrics.views.sub') },
    { icon: <Target />, value: '83,641', label: t('adsPerformance.metrics.impressions.label'), sub: t('adsPerformance.metrics.impressions.sub') },
    { icon: <Repeat />, value: '1.09x', label: t('adsPerformance.metrics.frequency.label'), sub: t('adsPerformance.metrics.frequency.sub') },
    { icon: <TrendingUp />, value: '4.62%', label: t('adsPerformance.metrics.ctr.label'), sub: t('adsPerformance.metrics.ctr.sub') },
    { icon: <DollarSign />, value: 'Rp 165', label: t('adsPerformance.metrics.cpc.label'), sub: t('adsPerformance.metrics.cpc.sub') },
    { icon: <CheckCircle />, value: '62.90%', label: t('adsPerformance.metrics.lcToLp.label'), sub: t('adsPerformance.metrics.lcToLp.sub') },
    { icon: <TrendingUp />, value: '3.23%', label: t('adsPerformance.metrics.leadRate.label'), sub: t('adsPerformance.metrics.leadRate.sub') },
  ];

  const campaigns = [
    {
      name: 'Traffic Tsabit ⭐',
      status: 'Inactive',
      linkClicks: 578,
      ctr: '2.40%',
      cpc: 'Rp 165',
      impressions: '24,077',
      results: '346 LPV',
      highlight: 'best',
    },
    {
      name: '11/11-KM/Leads/Tsabit',
      status: 'Inactive',
      linkClicks: 124,
      ctr: '4.62%',
      cpc: 'Rp 761',
      impressions: '2,686',
      results: '1 Lead',
      highlight: 'ctr',
    },
    {
      name: '11/11-TB/Leads',
      status: 'Inactive',
      linkClicks: 114,
      ctr: '2.68%',
      cpc: 'Rp 725',
      impressions: '4,252',
      results: '2 Leads',
      highlight: null,
    },
    {
      name: '10/11-QP1/Leads',
      status: 'Inactive',
      linkClicks: 19,
      ctr: '1.13%',
      cpc: 'Rp 1,459',
      impressions: '1,686',
      results: '0',
      highlight: 'worst',
    },
    {
      name: 'awareness #1',
      status: 'Inactive',
      linkClicks: 74,
      ctr: '0.15%',
      cpc: 'Rp 373',
      impressions: '50,940',
      results: '50,642 Reach',
      highlight: null,
    },
  ];

  const insights = t('adsPerformance.insights.items', { returnObjects: true }) as string[];

  const products = t('adsPerformance.products.items', { returnObjects: true }) as string[];

  return (
    <section id="ads-performance" className="relative py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-500">
      {/* Smooth Gradient Transition - Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-900 to-transparent z-0"></div>

      {/* Smooth Gradient Transition - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('adsPerformance.title')}
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            {t('adsPerformance.subtitle')}
          </p>
        </div>

        {/* Campaign Period Card */}
        <div className="bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 rounded-2xl p-8 mb-16 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-sm text-blue-300">{t('adsPerformance.period.label')}</p>
                <p className="text-lg font-semibold text-white">{t('adsPerformance.period.value')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-sm text-blue-300">{t('adsPerformance.spend.label')}</p>
                <p className="text-lg font-semibold text-white">{t('adsPerformance.spend.value')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="w-6 h-6 text-electric-300" />
              <div>
                <p className="text-sm text-blue-300">{t('adsPerformance.budget.label')}</p>
                <p className="text-lg font-semibold text-white">{t('adsPerformance.budget.value')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center text-electric-300 mb-4">
                {React.cloneElement(metric.icon, { size: 32 })}
              </div>
              <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-sm font-semibold text-white mb-1">{metric.label}</p>
              <p className="text-sm text-blue-300">{metric.sub}</p>
            </div>
          ))}
        </div>

        {/* Campaign Breakdown Table */}
        <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl mb-16 border border-electric-500/20">
          <div className="bg-electric-500/20 text-white px-6 py-4 border-b border-electric-500/10">
            <h3 className="text-xl font-bold">{t('adsPerformance.table.title')}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-electric-500/5 border-b border-electric-500/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.campaign')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.status')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.clicks')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.ctr')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.cpc')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.impressions')}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">{t('adsPerformance.table.headers.results')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {campaigns.map((campaign, index) => (
                  <tr key={index} className="hover:bg-electric-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-white">{campaign.name}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-electric-500/10 text-blue-100 rounded-full text-sm font-medium">
                        {campaign.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm font-semibold ${campaign.highlight === 'best' ? 'text-green-400' : 'text-white'}`}>
                      {campaign.linkClicks}
                    </td>
                    <td className={`px-6 py-4 text-sm ${campaign.highlight === 'ctr' ? 'text-green-400 font-semibold' : 'text-white'}`}>
                      {campaign.ctr}
                    </td>
                    <td className={`px-6 py-4 text-sm ${campaign.highlight === 'best' ? 'text-green-400 font-semibold' : campaign.highlight === 'worst' ? 'text-red-400 font-semibold' : 'text-white'}`}>
                      {campaign.cpc}
                    </td>
                    <td className="px-6 py-4 text-sm text-white">{campaign.impressions}</td>
                    <td className="px-6 py-4 text-sm text-white">{campaign.results}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-electric-500/10 backdrop-blur-lg rounded-2xl p-8 border border-electric-500/20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">{t('adsPerformance.insights.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-300 mt-1" />
                <p className="text-base text-blue-50 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Advertised */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">{t('adsPerformance.products.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-electric-500/10 backdrop-blur-lg border border-electric-500/20 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all"
              >
                <BookOpen className="w-6 h-6 text-electric-300 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-blue-50">
                    {product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsPerformance;
