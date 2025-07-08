import { useState } from 'react'
import {
  Navigation,
  HeroSection,
  AboutSection,
  ProjectsSection,
  FAQSection,
  Footer,
  AnimatedSection,
  MainContent,
  LocationSection
} from './components'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Show main content
  return (
    <main className="bg-lh-dark min-h-screen flex flex-col justify-between gap-20">
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
    </main>
  )
}

export default App
