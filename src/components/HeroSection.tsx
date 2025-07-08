import { motion } from 'framer-motion'
import { MainContent } from './MainContent'

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-lh-dark pt-16">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-20 left-10 w-32 h-32 bg-lh-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-lh-primary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-32 flex justify-center items-center flex-col" 
        >
          <img src="/logo.png" alt="Langara Hacks" width={480} height={480} />

          <button 
              className="text-white cursor-pointer text-[20px] rounded-[40px] border border-[#6F0510] bg-[#6F0510] hover:bg-[#6F0510]/90 px-21 py-3 transition-all"
          >
              Apply Now
          </button>
        </motion.div>

      
      </div>
    </section>
  )
} 