import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Navigation,
  HeroSection,
  AboutSection,
  ProjectsSection,
  FAQSection,
  Footer,
  AnimatedSection,
  MainContent,
  LocationSection,
  SplashScreen
} from './components'

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
      <div className="bg-lh-dark min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-lh-dark min-h-screen flex flex-col justify-between gap-20"
          >
            <Navigation />
            <HeroSection />
            <MainContent />
            <AnimatedSection>
              <AboutSection />
            </AnimatedSection>
            <AnimatedSection>
              <LocationSection />
            </AnimatedSection>
            <AnimatedSection>
              <ProjectsSection />
            </AnimatedSection>
            <AnimatedSection>
              <FAQSection />
            </AnimatedSection>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
