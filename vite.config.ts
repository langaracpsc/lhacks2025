import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    cloudflare(),
    // Bundle analyzer - only in build mode
    ...(process.env.ANALYZE ? [visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Optimize resolution by reducing extension checks
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  server: {
    // Warm up frequently used files for better dev performance
    warmup: {
      clientFiles: [
        './src/App.tsx',
        './src/components/Navigation.tsx',
        './src/components/HeroSection.tsx',
        './src/components/MainContent.tsx'
      ]
    },
    // Auto-open for performance boost
    open: true
  },
  // Optimize build performance and output
  build: {
    // Use esbuild for faster builds
    minify: 'esbuild',
    // Reduce chunk size for better loading
    chunkSizeWarningLimit: 500,
    // Advanced chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and core libraries
          vendor: ['react', 'react-dom'],
          // UI libraries chunk
          ui: ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-label'],
          // Animation libraries chunk  
          motion: ['motion'],
          // Form libraries chunk
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Carousel libraries chunk
          carousel: ['embla-carousel-react', 'embla-carousel-autoplay', 'embla-carousel-auto-scroll'],
          // Utility libraries chunk
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        // Optimize asset naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13.1']
  }
})
