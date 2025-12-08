import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};
import PageWrapper from '../components/animations/PageWrapper';

const ProjectsPage: React.FC = () => {
    return (
        <PageWrapper>
            <Projects />
        </PageWrapper>
    );
};

export default ProjectsPage;
