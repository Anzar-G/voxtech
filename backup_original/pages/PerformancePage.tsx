import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AdsPerformance from '../components/AdsPerformance';
import SEO from '../components/SEO';
import PageSkeleton from '../components/loaders/PageSkeleton';
import PageWrapper from '../components/animations/PageWrapper';

const PerformancePage: React.FC = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <SEO
                title={t('meta.performance.title')}
                description={t('meta.performance.description')}
            />
            <AdsPerformance />
        </PageWrapper>
    );
};

export default PerformancePage;
