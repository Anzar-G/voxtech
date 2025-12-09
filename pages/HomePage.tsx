import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/loaders/PageSkeleton';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <PageSkeleton />;

    return (
        <div className="overflow-hidden">
            <Hero />
        </div>
    );
};

export default HomePage;
