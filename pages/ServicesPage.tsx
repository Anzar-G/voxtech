import React, { useEffect } from 'react';
import Services from '../components/Services';
import PageWrapper from '../components/animations/PageWrapper';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageWrapper>
            <Services />
        </PageWrapper>
    );
};

export default ServicesPage;
