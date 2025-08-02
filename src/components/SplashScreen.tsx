import { motion } from 'motion/react'
import { useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    // Show splash for 3 seconds, then trigger transition
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

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
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8 flex items-center justify-center">
          <img 
            src="/LogoSplash.png" 
            alt="Langara Hacks Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  )
} 