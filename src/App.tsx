import './App.css'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-lh-dark font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
