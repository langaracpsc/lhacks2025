import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show splash for 3 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Wait for fade out animation to complete before calling onComplete
      setTimeout(onComplete, 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: `radial-gradient(circle at center, 
          rgb(110, 8, 15) 0%, 
          rgb(20, 20, 20) 70%)`
      }}
    >
      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1,
          delay: 0.5,
          ease: "easeOut"
        }}
        className="flex flex-col items-center"
      >
        {/* Logo Placeholder - Replace with actual LogoSplash.png */}
        <div className="w-32 h-32 mb-8 flex items-center justify-center">
          
        
          
         
          <img 
            src="public/LogoSplash.png" 
            alt="Langara Hacks Logo" 
            className="w-full h-full object-contain"
          />
         
        </div>

       

       
      </motion.div>

      {/* Fade out animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="absolute inset-0 bg-lh-dark"
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  )
} 