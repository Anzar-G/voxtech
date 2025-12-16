import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

const pageVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeOut'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: 'easeIn'
        }
    }
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className={`min-h-screen w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
