import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/animations/PageWrapper';
import PageSkeleton from '../components/loaders/PageSkeleton';
import MarketingStrategy from '../components/MarketingStrategy';
import CaseStudy from '../components/CaseStudy';
import DataAnalysis from '../components/DataAnalysis';
import SocialMediaAnalytics from '../components/SocialMediaAnalytics';
import WebsiteAnalytics from '../components/WebsiteAnalytics';
import Journey from '../components/Journey';
import AdsPerformance from '../components/AdsPerformance';
import SEO from '../components/SEO';

const JourneyPage: React.FC = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <SEO
                title={t('meta.journey.title')}
                description={t('meta.journey.description')}
            />
            <div>
                {/* Journey Timeline Section */}
                <Journey />


                {/* Marketing Strategy Section */}
                <MarketingStrategy />

                {/* Case Study Section */}
                <CaseStudy />

                {/* Performance Section (Ads Performance) */}
                <AdsPerformance />

                {/* Website Analytics Section */}
                <WebsiteAnalytics />

                {/* Data Analysis & Learnings Section */}
                <DataAnalysis />



                <SocialMediaAnalytics />
            </div>
        </PageWrapper>
    );
};

export default JourneyPage;
