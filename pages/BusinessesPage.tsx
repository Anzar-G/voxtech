import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Businesses from '../components/Businesses';
import SEO from '../components/SEO';
import PageWrapper from '../components/animations/PageWrapper';

const BusinessesPage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageWrapper>
            <SEO
                title={t('meta.businesses.title')}
                description={t('meta.businesses.description')}
            />
            <Businesses />
        </PageWrapper>
    );
};

export default BusinessesPage;
