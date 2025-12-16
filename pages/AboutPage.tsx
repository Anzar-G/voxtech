import React, { useEffect } from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { t } = useTranslation();

    return (
        <PageWrapper>
            <SEO
                title={t('meta.about.title')}
                description={t('meta.about.description')}
            />
            <About />
        </PageWrapper>
    );
};

export default AboutPage;
