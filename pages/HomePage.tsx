import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Force scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden">
            <SEO
                title={t('meta.home.title')}
                description={t('meta.home.description')}
            />
            <Hero />
        </div>
    );
};

export default HomePage;
