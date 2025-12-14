import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),

    // Gzip compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files > 1KB
      deleteOriginFile: false
    }),

    // Brotli compression (better than gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024
    })
  ],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2015',

    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: 'lightningcss',

    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console logs in production
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        // Remove dead code
        dead_code: true,
        // Optimize conditions
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        // Reduce size
        inline: 2,
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },

    // Chunk strategy for optimal loading
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - split by size
          if (id.includes('node_modules')) {
            // React core (critical, load first)
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }

            // Router (needed early)
            if (id.includes('react-router')) {
              return 'react-router';
            }

            // Icons (large, can be lazy)
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'icons';
            }

            // Framer motion (heavy)
            if (id.includes('framer-motion')) {
              return 'animations';
            }

            // Other vendor code
            return 'vendor';
          }

          // Split by pages
          if (id.includes('pages/')) {
            const parts = id.split('pages/');
            if (parts.length > 1) {
              const pageName = parts[1].split('.')[0];
              return `page-${pageName}`;
            }
          }

          // Split components by feature
          if (id.includes('components/')) {
            // Keep small components together
            return 'components-shared';
          }
        },

        // Optimal chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 500, // Warn if chunk > 500KB

    // Sourcemaps only in development
    sourcemap: false,

    // Report size info
    reportCompressedSize: true
  },

  // Preview optimizations
  preview: {
    port: 4173,
    strictPort: true
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env']
  },

  server: {
    port: 5173,
  },
});
