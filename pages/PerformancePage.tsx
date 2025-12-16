import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AdsPerformance from '../components/AdsPerformance';
import SEO from '../components/SEO';
import PageWrapper from '../components/animations/PageWrapper';

const PerformancePage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
