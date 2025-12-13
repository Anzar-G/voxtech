import React, { useState, useEffect } from 'react';
import About from '../components/About';
import PageSkeleton from '../components/loaders/PageSkeleton';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';

const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const AboutPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <About />
        </PageWrapper>
    );
};

export default AboutPage;
