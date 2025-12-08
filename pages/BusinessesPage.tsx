import React from 'react';
import Businesses from '../components/Businesses';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
};
import PageWrapper from '../components/animations/PageWrapper';

const BusinessesPage: React.FC = () => {
    return (
        <PageWrapper>
            <Businesses />
        </PageWrapper>
    );
};

export default BusinessesPage;
