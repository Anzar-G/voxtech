import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageSkeleton from '../components/loaders/PageSkeleton';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force scroll to top on mount
        window.scrollTo(0, 0);

        // Simulate loading
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

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
