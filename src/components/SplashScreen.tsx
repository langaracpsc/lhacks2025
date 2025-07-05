import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [textVisible, setTextVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start text fade in after component mounts
    const fadeInTimer = setTimeout(() => {
      setTextVisible(true)
    }, 500)

    // Start fade out after text has been visible
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
    }, 3000)

    // Complete splash screen after fade out
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Wine gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/30 to-transparent"></div>
      
      {/* Langara Hacks text */}
      <h1 
        className={`text-4xl md:text-6xl font-bold text-white transition-opacity duration-1000 ease-in-out ${
          textVisible && !fadeOut ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Langara Hacks
      </h1>
    </div>
  )
}

export default SplashScreen 