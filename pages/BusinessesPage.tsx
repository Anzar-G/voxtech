import React, { useState, useEffect } from 'react';
import Businesses from '../components/Businesses';
import PageSkeleton from '../components/loaders/PageSkeleton';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
};
import PageWrapper from '../components/animations/PageWrapper';

const BusinessesPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <Businesses />
        </PageWrapper>
    );
};

export default BusinessesPage;
