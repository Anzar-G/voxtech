import React, { useState, useEffect } from 'react';
import Services from '../components/Services';
import PageSkeleton from '../components/loaders/PageSkeleton';
import PageWrapper from '../components/animations/PageWrapper';

const ServicesPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <Services />
        </PageWrapper>
    );
};

export default ServicesPage;
