import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-lh-dark">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-lh-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-lh-primary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-16 sm:mb-24 md:mb-32 flex justify-center items-center flex-col w-full" 
        >
          <div className="flex justify-center items-center w-full">
            <img 
              src="/logo.png" 
              alt="Langara Hacks" 
              className="mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-contain" 
            />
          </div>

          <button 
            onClick={() => navigate('/applicants')}
            className="text-[#f8f0de] cursor-pointer text-base sm:text-lg md:text-[20px] rounded-[40px] border border-[#6F0510] bg-[#6F0510] hover:bg-[#6F0510]/90 px-6 sm:px-8 md:px-12 py-3 transition-all mt-6 sm:mt-8"
          >
            Apply Now
          </button>
        </motion.div>

      
      </div>
    </section>
  )
} 