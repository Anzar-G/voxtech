import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/loaders/PageSkeleton';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Businesses from '../components/Businesses';
import Contact from '../components/Contact';

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
            <About />
            <Services />
            <Projects />
            <Journey />
            <Businesses />
            <Contact />
        </div>
    );
};

export default HomePage;
