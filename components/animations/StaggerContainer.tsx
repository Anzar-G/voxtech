import React, { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}

const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    staggerDelay = 0.1,
    className = '',
    ...props
}) => {
    // Simplified: just render children without staggering to avoid delays
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};

export default StaggerContainer;
