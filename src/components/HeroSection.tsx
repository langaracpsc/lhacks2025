import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-lh-dark">
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
          className="mb-32 flex justify-center items-center flex-col w-full" 
        >
          <div className="flex justify-center items-center w-full">
            <img src="/logo.png" alt="Langara Hacks" width={480} height={480} className="mx-auto" />
          </div>

          <button 
            onClick={() => navigate('/applicants')}
              className="text-[#f8f0de] cursor-pointer text-[20px] rounded-[40px] border border-[#6F0510] bg-[#6F0510] hover:bg-[#6F0510]/90 px-21 py-3 transition-all mt-8"
          >
              Apply Now
            </button>
        </motion.div>

      
      </div>
    </section>
  )
} 