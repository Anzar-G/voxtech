import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import PageWrapper from '../components/animations/PageWrapper';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
