import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
    onLoad?: React.ReactEventHandler<HTMLImageElement>;
    onError?: React.ReactEventHandler<HTMLImageElement>;
}

/**
 * Mobile-optimized image component
 * - Serves WebP with fallback
 * - Uses srcset for responsive sizes
 * - Lazy loads by default (unless priority)
 */
export default function OptimizedImage({
    src,
    alt,
    className = '',
    priority = false,
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    style,
    onLoad,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    // Generate responsive image sources
    const getImageSources = (baseSrc: string) => {
        if (!baseSrc) return { webp: '', original: '', srcset: '', srcsetWebp: '' };

        // Handle external URLs or data URIs gracefully
        if (baseSrc.startsWith('http') || baseSrc.startsWith('data:')) {
            return {
                webp: baseSrc,
                original: baseSrc,
                srcset: '',
                srcsetWebp: ''
            };
        }

        const withoutExt = baseSrc.replace(/\.[^.]+$/, '');
        const ext = baseSrc.match(/\.[^.]+$/)?.[0] || '.jpg';

        return {
            webp: `${withoutExt}.webp`,
            original: baseSrc,
            // Mobile: 640w, Tablet: 1024w, Desktop: 1920w
            srcset: `
        ${withoutExt}-640w${ext} 640w,
        ${withoutExt}-1024w${ext} 1024w,
        ${withoutExt}-1920w${ext} 1920w
      `.trim(),
            srcsetWebp: `
        ${withoutExt}-640w.webp 640w,
        ${withoutExt}-1024w.webp 1024w,
        ${withoutExt}-1920w.webp 1920w
      `.trim()
        };
    };

    const sources = getImageSources(src || '');
    const hasSrcSet = sources.srcset && sources.srcsetWebp;

    // Minimal placeholder while loading
    const placeholder = (
        <div
            className={`bg-gray-200 animate-pulse ${className}`}
            style={{ aspectRatio: '16/9', ...style }}
        />
    );

    return (
        <picture>
            {/* WebP sources for modern browsers */}
            {hasSrcSet && (
                <source
                    type="image/webp"
                    srcSet={sources.srcsetWebp}
                    sizes={sizes}
                />
            )}

            {/* Fallback for browsers without WebP support */}
            {hasSrcSet && (
                <source
                    type="image/jpeg"
                    srcSet={sources.srcset}
                    sizes={sizes}
                />
            )}

            {/* Actual img tag */}
            <img
                {...props}
                src={sources.original}
                alt={alt}
                sizes={sizes}
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={(e) => {
                    setIsLoaded(true);
                    onLoad?.(e);
                }}
                // Important for CLS (Cumulative Layout Shift)
                width="1920"
                height="1080"
                style={{ width: '100%', height: 'auto', ...style }}
            />

            {!isLoaded && placeholder}
        </picture>
    );
}
