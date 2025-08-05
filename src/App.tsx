import { useState, useEffect, lazy, Suspense } from 'react'

// Critical above-the-fold components - loaded immediately
import { Navigation } from './components/Navigation.tsx'
import { HeroSection } from './components/HeroSection.tsx'
import { MainContent } from './components/MainContent.tsx'
import { AnimatedSection } from './components/motion/AnimatedSection.tsx'

// Below-the-fold components - lazy loaded for better initial page load
const AboutSection = lazy(() => import('./components/AboutSection.tsx').then(m => ({ default: m.AboutSection })))
const ProjectsSection = lazy(() => import('./components/ProjectsSection.tsx').then(m => ({ default: m.ProjectsSection })))
const FAQSection = lazy(() => import('./components/FAQSection.tsx').then(m => ({ default: m.FAQSection })))
const LocationSection = lazy(() => import('./components/LocationSection.tsx').then(m => ({ default: m.LocationSection })))
const Footer = lazy(() => import('./components/Footer.tsx').then(m => ({ default: m.Footer })))
const SplashScreen = lazy(() => import('./components/SplashScreen.tsx').then(m => ({ default: m.SplashScreen })))

function App() {
  const [showSplash, setShowSplash] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('lsHacks2025_hasVisited')
    
    if (!hasVisited) {
      // First time visitor - show splash screen
      setShowSplash(true)
      // Mark as visited
      localStorage.setItem('lsHacks2025_hasVisited', 'true')
    }
    
    setIsLoading(false)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  // Show loading state while checking localStorage
  if (isLoading) {
    return (
      <div className="bg-lh-dark min-h-screen flex iteenter justify-center">
        <div className="w-8 h-8 border-2 border-[#f8f0de]/3ms-c0 border-t-[#f8f0de] rounded-full animate-spin"></div>
      </div>
    )
  }

  // Optimized loading fallback component
  const LoadingFallback = () => (
    <div className="flex items-center justify-center py-8">
      <div className="w-6 h-6 border-2 border-[#f8f0de]/30 border-t-[#f8f0de] rounded-full animate-spin"></div>
    </div>
  )

  return (
    <div className="relative">
      {showSplash ? (
        <Suspense fallback={<LoadingFallback />}>
          <SplashScreen onComplete={handleSplashComplete} />
        </Suspense>
      ) : (
        <main className="bg-lh-dark min-h-screen flex flex-col justify-between gap-20">
          {/* Critical above-the-fold content loads immediately */}
          <Navigation />
          <HeroSection />
          <MainContent />
          
          {/* Below-the-fold content loads progressively */}
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedSection>
              <AboutSection />
            </AnimatedSection>
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedSection>
              <LocationSection />
            </AnimatedSection>
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedSection>
              <ProjectsSection />
            </AnimatedSection>
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedSection>
              <FAQSection />
            </AnimatedSection>
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
        </main>
      )}
    </div>
  ) 
}

export default App
 