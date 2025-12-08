import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-in';
    delay?: number;
    duration?: number;
    className?: string;
    viewportMargin?: string;
    once?: boolean;
}

const getVariants = (variant: string, duration: number) => {
    const transition = { duration, ease: [0.22, 1, 0.36, 1] }; // Professional ease

    switch (variant) {
        case 'fade-up':
            return {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition }
            };
        case 'fade-left':
            return {
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition }
            };
        case 'fade-right':
            return {
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition }
            };
        case 'scale-up':
            return {
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition }
            };
        case 'blur-in':
            return {
                hidden: { opacity: 0, filter: 'blur(8px)' },
                visible: { opacity: 1, filter: 'blur(0px)', transition }
            };
        default:
            return {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition }
            };
    }
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    variant = 'fade-up',
    delay = 0,
    duration = 0.3,
    className = '',
    viewportMargin = '0px',
    once = true,
    ...props
}) => {
    // Simplified: just render children with minimal fade-in, no scroll triggering issues
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
