import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TerminalLoader from './TerminalLoader';
import { AnimatePresence, motion } from 'framer-motion';

const GlobalLoader: React.FC = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    // Track visited paths to prevent reloading them
    const visitedPaths = React.useRef<Set<string>>(new Set());

    useEffect(() => {
        // Only trigger loading if the path hasn't been visited yet
        if (!visitedPaths.current.has(location.pathname)) {
            setIsLoading(true);
            visitedPaths.current.add(location.pathname);

            const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds duration
            return () => clearTimeout(timer);
        } else {
            // Confirm loading is off for visited pages
            setIsLoading(false);
        }
    }, [location.pathname]); // Trigger only on path change

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-navy-900" // High z-index to cover everything
                >
                    <TerminalLoader />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GlobalLoader;
