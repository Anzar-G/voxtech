import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import PageSkeleton from '../components/loaders/PageSkeleton';
import PageWrapper from '../components/animations/PageWrapper';

const ContactPage: React.FC = () => {
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
                title={t('meta.contact.title')}
                description={t('meta.contact.description')}
            />
            <Contact />
        </PageWrapper>
    );
};

export default ContactPage;
