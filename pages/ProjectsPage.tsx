import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import PageWrapper from '../components/animations/PageWrapper';

const ProjectsPage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageWrapper>
            <SEO
                title={t('meta.projects.title')}
                description={t('meta.projects.description')}
            />
            <Projects />
        </PageWrapper>
    );
};

export default ProjectsPage;
