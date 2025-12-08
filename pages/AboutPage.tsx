import React from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';
import PageWrapper from '../components/animations/PageWrapper';

const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const AboutPage: React.FC = () => {
    return (
        <PageWrapper>
            <About />
        </PageWrapper>
    );
};

export default AboutPage;
