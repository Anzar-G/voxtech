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
    const baseClasses = "bg-white/10 animate-pulse";

    const variantClasses = {
        text: "rounded h-4 w-full",
        rectangular: "rounded-lg",
        circular: "rounded-full"
    };

    const style = {
        width: width,
        height: height
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={style}
        />
    );
};

export default Skeleton;
