import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects';
import PageSkeleton from '../components/loaders/PageSkeleton';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};
import PageWrapper from '../components/animations/PageWrapper';

const ProjectsPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <PageWrapper>
            <Projects />
        </PageWrapper>
    );
};

export default ProjectsPage;
