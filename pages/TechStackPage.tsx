import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TechStack from '../components/TechStack';
import SEO from '../components/SEO';
import PageWrapper from '../components/animations/PageWrapper';

const TechStackPage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageWrapper>
            <SEO
                title={t('meta.techStack.title')}
                description={t('meta.techStack.description')}
            />
            <TechStack />
        </PageWrapper>
    );
};

export default TechStackPage;
