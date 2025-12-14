#!/usr/bin/env node

/**
 * Image Optimization Script
 * Generates WebP versions and responsive sizes for all images
 * Run: npm run optimize-images
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
    inputDir: path.join(__dirname, '../public'),
    imageExtensions: ['.jpg', '.jpeg', '.png'],
    // Mobile-first sizes
    sizes: [
        { width: 640, suffix: '-640w' },   // Mobile
        { width: 1024, suffix: '-1024w' }, // Tablet
        { width: 1920, suffix: '-1920w' }  // Desktop
    ],
    quality: {
        jpeg: 85,
        png: 90,
        webp: 80
    }
};

/**
 * Process a single image file
 */
async function processImage(filePath) {
    try {
        const ext = path.extname(filePath).toLowerCase();
        const dir = path.dirname(filePath);
        const basename = path.basename(filePath, ext);

        console.log(`📸 Processing: ${path.relative(CONFIG.inputDir, filePath)}`);

        // Get image metadata
        const metadata = await sharp(filePath).metadata();

        // Generate responsive sizes
        for (const size of CONFIG.sizes) {
            // Skip if original is smaller than target size
            if (metadata.width && metadata.width < size.width) {
                continue;
            }

            const outputBase = path.join(dir, `${basename}${size.suffix}`);

            // Generate optimized original format
            if (ext === '.jpg' || ext === '.jpeg') {
                await sharp(filePath)
                    .resize(size.width, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .jpeg({
                        quality: CONFIG.quality.jpeg,
                        progressive: true,
                        mozjpeg: true
                    })
                    .toFile(`${outputBase}${ext}`);
            } else if (ext === '.png') {
                await sharp(filePath)
                    .resize(size.width, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .png({
                        quality: CONFIG.quality.png,
                        compressionLevel: 9,
                        palette: true
                    })
                    .toFile(`${outputBase}${ext}`);
            }

            // Generate WebP version (better compression)
            await sharp(filePath)
                .resize(size.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({
                    quality: CONFIG.quality.webp,
                    effort: 6
                })
                .toFile(`${outputBase}.webp`);
        }

        // Generate optimized original (for fallback)
        const optimizedPath = filePath.replace(ext, `-optimized${ext}`);

        if (ext === '.jpg' || ext === '.jpeg') {
            await sharp(filePath)
                .jpeg({
                    quality: CONFIG.quality.jpeg,
                    progressive: true,
                    mozjpeg: true
                })
                .toFile(optimizedPath);
        } else if (ext === '.png') {
            await sharp(filePath)
                .png({
                    quality: CONFIG.quality.png,
                    compressionLevel: 9
                })
                .toFile(optimizedPath);
        }

        console.log(`   ✅ Generated ${CONFIG.sizes.length * 2} variants`);

    } catch (error) {
        console.error(`   ❌ Error processing ${filePath}:`, error.message);
    }
}

/**
 * Recursively find and process images
 */
async function processDirectory(dir) {
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                // Skip node_modules and hidden directories
                if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
                    await processDirectory(fullPath);
                }
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();

                // Process image files (skip already optimized ones)
                if (CONFIG.imageExtensions.includes(ext) &&
                    !entry.name.includes('-640w') &&
                    !entry.name.includes('-1024w') &&
                    !entry.name.includes('-1920w') &&
                    !entry.name.includes('-optimized')) {
                    await processImage(fullPath);
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }
}

/**
 * Main execution
 */
async function main() {
    console.log('🚀 Starting image optimization...');
    console.log(`📂 Input directory: ${CONFIG.inputDir}`);
    console.log(`📏 Generating sizes: ${CONFIG.sizes.map(s => s.width).join(', ')}`);
    console.log('');

    const startTime = Date.now();

    await processDirectory(CONFIG.inputDir);

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log('');
    console.log(`✨ Optimization complete in ${duration}s`);
    console.log('');
    console.log('💡 Next steps:');
    console.log('   1. Use OptimizedImage component in your React code');
    console.log('   2. Update image references to use new responsive images');
    console.log('   3. Run "npm run build" to test production bundle');
}

// Run if called directly
if (process.argv[1] === __filename) {
    main().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

export { processImage, processDirectory };
