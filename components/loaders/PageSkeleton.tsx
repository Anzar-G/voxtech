import React from 'react';
import Skeleton from '../ui/Skeleton';

const PageSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6 lg:px-20 bg-navy-900 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Hero / Header Skeleton */}
                <div className="flex flex-col items-center space-y-4 text-center">
                    <Skeleton variant="circular" width={64} height={64} className="mb-2" />
                    <Skeleton variant="text" width={240} height={40} className="mx-auto" />
                    <Skeleton variant="text" width={400} height={20} className="mx-auto opacity-70" />
                </div>

                {/* Journey Timeline Skeleton (Mimic Mobile Carousel / Desktop Zigzag) */}
                <div>
                    <Skeleton variant="text" width={180} height={28} className="mb-8 mx-auto" />
                    {/* Mobile Horizontal Scroll Look */}
                    <div className="flex lg:hidden overflow-hidden gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex-shrink-0 w-[85vw] max-w-[320px] p-6 bg-electric-500/5 border border-electric-500/10 rounded-2xl">
                                <div className="flex justify-between mb-4">
                                    <Skeleton width={80} height={24} className="rounded-full" />
                                    <Skeleton width={32} height={32} variant="circular" />
                                </div>
                                <Skeleton width="70%" height={28} className="mb-2" />
                                <Skeleton width="100%" height={16} className="mb-1" />
                                <Skeleton width="90%" height={16} className="mb-4" />
                                <div className="space-y-2">
                                    <Skeleton width="100%" height={32} className="rounded-lg" />
                                    <Skeleton width="100%" height={32} className="rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Desktop Zigzag Look */}
                    <div className="hidden lg:flex flex-col gap-12">
                        {[1, 2].map((i) => (
                            <div key={i} className={`flex gap-12 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                <div className="w-1/2 bg-electric-500/5 border border-electric-500/10 rounded-2xl p-8 h-64">
                                    <Skeleton width={48} height={48} className="mb-4" />
                                    <Skeleton width={200} height={32} className="mb-2" />
                                    <Skeleton width="100%" height={16} className="mb-1" />
                                    <Skeleton width="80%" height={16} />
                                </div>
                                <div className="w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Media Analytics Skeleton */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <Skeleton width={48} height={48} className="rounded-xl" />
                        <Skeleton width={240} height={36} />
                    </div>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        {/* Panel 1 */}
                        <div className="bg-electric-500/5 border border-electric-500/10 rounded-3xl p-6 lg:p-8 mb-8 lg:mb-0">
                            <div className="flex gap-4 mb-8">
                                <Skeleton width={56} height={56} className="rounded-2xl" />
                                <div>
                                    <Skeleton width={140} height={24} className="mb-2" />
                                    <Skeleton width={100} height={16} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <Skeleton className="col-span-2 h-32 rounded-2xl" />
                                <Skeleton className="h-24 rounded-2xl" />
                                <Skeleton className="h-24 rounded-2xl" />
                            </div>
                            <Skeleton className="w-full h-24 rounded-2xl mb-8" />
                            <div className="flex gap-3 overflow-hidden">
                                <Skeleton className="w-[120px] h-[160px] rounded-xl flex-shrink-0" />
                                <Skeleton className="w-[120px] h-[160px] rounded-xl flex-shrink-0" />
                                <Skeleton className="w-[120px] h-[160px] rounded-xl flex-shrink-0" />
                            </div>
                        </div>

                        {/* Panel 2 (Hidden on mobile usually in skeleton or shown below) */}
                        <div className="hidden lg:block bg-electric-500/5 border border-electric-500/10 rounded-3xl p-6 lg:p-8">
                            <div className="flex gap-4 mb-8">
                                <Skeleton width={56} height={56} className="rounded-2xl" />
                                <div>
                                    <Skeleton width={140} height={24} className="mb-2" />
                                    <Skeleton width={100} height={16} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <Skeleton className="col-span-2 h-32 rounded-2xl" />
                                <Skeleton className="h-24 rounded-2xl" />
                                <Skeleton className="h-24 rounded-2xl" />
                            </div>
                            <Skeleton className="w-full h-24 rounded-2xl mb-8" />
                            <div className="flex gap-3 overflow-hidden">
                                <Skeleton className="w-[120px] h-[160px] rounded-xl flex-shrink-0" />
                                <Skeleton className="w-[120px] h-[160px] rounded-xl flex-shrink-0" />
                                <Skeleton className="w-[120px] h-[160px] rounded-xl flex-shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PageSkeleton;
