import React from 'react';
import Hero from '../components/Hero';
import PageWrapper from '../components/animations/PageWrapper';

const HomePage: React.FC = () => {
    return (
        <PageWrapper>
            <Hero />
        </PageWrapper>
    );
};

export default HomePage;
