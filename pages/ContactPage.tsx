import React, { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import PageSkeleton from '../components/loaders/PageSkeleton';
import PageWrapper from '../components/animations/PageWrapper';

const ContactPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
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
