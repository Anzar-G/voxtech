import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
};
import PageWrapper from '../components/animations/PageWrapper';

const ContactPage: React.FC = () => {
    return (
        <PageWrapper>
            <Contact />
        </PageWrapper>
    );
};

export default ContactPage;
