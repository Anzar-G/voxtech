import React from 'react';

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'rectangular' | 'circular';
    width?: string | number;
    height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    variant = 'rectangular',
    width,
    height
}) => {
    const baseClasses = "bg-electric-500/10 animate-pulse";

    const variantClasses = {
        text: "rounded h-4 w-full",
        rectangular: "rounded-lg",
        circular: "rounded-full"
    };



    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${width ? `w-[${width}]` : ''} ${height ? `h-[${height}]` : ''} ${className}`}
        />
    );
};

export default Skeleton;
