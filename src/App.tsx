import { useState } from 'react'
import useFirstLoad from './hooks/useFirstLoad'
import SplashScreen from './components/SplashScreen'
import MainContent from './components/MainContent'


function App() {
  const isFirstLoad = useFirstLoad()
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(true)
  }

  // Show splash screen only on first load
 
    return <SplashScreen onComplete={handleSplashComplete} />
  

  // Show main content
  // return <MainContent />
}

export default App
