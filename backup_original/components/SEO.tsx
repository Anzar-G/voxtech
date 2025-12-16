import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, name = 'Muhammad Nizar Al-Faris', type = 'website' }) => {
    const { t } = useTranslation();

    const siteTitle = t('meta.defaultTitle');
    const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || t('meta.defaultDescription');

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{metaTitle}</title>
            <meta name='description' content={metaDescription} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
        </Helmet>
    );
};

export default SEO;
