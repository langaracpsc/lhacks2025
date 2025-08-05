/**
 * Image optimization utilities for better loading performance
 */

// Lazy loading intersection observer
export const createLazyImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy-image');
            img.classList.add('loaded');
          }
        }
      });
    },
    {
      rootMargin: '50px 0px', // Start loading 50px before image enters viewport
      threshold: 0.01
    }
  );
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Generate responsive image srcset
export const generateSrcSet = (imagePath: string, sizes: number[] = [400, 800, 1200]) => {
  const baseUrl = imagePath.split('.').slice(0, -1).join('.');
  const ext = imagePath.split('.').pop();
  
  return sizes
    .map(size => `${baseUrl}-${size}w.${ext} ${size}w`)
    .join(', ');
};

// Optimize image loading with modern formats
export const getOptimizedImageUrl = (src: string, format: 'webp' | 'avif' = 'webp') => {
  if (src.includes('.webp') || src.includes('.avif')) {
    return src; // Already optimized
  }
  
  const basePath = src.split('.').slice(0, -1).join('.');
  return `${basePath}.${format}`;
};