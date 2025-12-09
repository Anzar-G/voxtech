import React, { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import PageSkeleton from '../components/loaders/PageSkeleton';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
};
import PageWrapper from '../components/animations/PageWrapper';

const ContactPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <Contact />
        </PageWrapper>
    );
};

export default ContactPage;
