import React, { useState, useEffect } from 'react';
import Services from '../components/Services';
import PageSkeleton from '../components/loaders/PageSkeleton';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';

const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
};

const ServicesPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
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
