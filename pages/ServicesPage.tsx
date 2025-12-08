import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';

const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
};

const ServicesPage: React.FC = () => {
    return (
        <PageWrapper>
            <Services />
        </PageWrapper>
    );
};

export default ServicesPage;
