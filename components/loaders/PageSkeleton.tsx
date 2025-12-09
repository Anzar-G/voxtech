import React from 'react';
import Skeleton from '../ui/Skeleton';
import { motion } from 'framer-motion';

const PageSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 px-6 lg:px-20 bg-navy-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <Skeleton variant="circular" width={64} height={64} className="mb-4" />
                    <Skeleton variant="text" width={300} height={40} />
                    <Skeleton variant="text" width={500} height={20} />
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <Skeleton variant="rectangular" height={200} className="mb-4" />
                            <Skeleton variant="text" width="80%" height={24} className="mb-2" />
                            <Skeleton variant="text" width="60%" height={20} className="mb-4" />
                            <Skeleton variant="text" width="100%" height={16} className="mb-2" />
                            <Skeleton variant="text" width="90%" height={16} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageSkeleton;
