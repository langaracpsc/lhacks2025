import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

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
          className="mb-8"
        >
          <div className="w-[478px] h-[478px] mx-auto rounded-lg shadow-lh-hero flex items-center justify-center">
            {/* Langara Hacks Logo SVG */}
            <svg 
              width="400" 
              height="400" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Background circle */}
              <circle cx="200" cy="200" r="180" fill="#6F080F" opacity="0.1"/>
              
              {/* Main L shape */}
              <path d="M120 120 L120 280 L280 280 L280 240 L160 240 L160 120 Z" fill="#6F080F"/>
              
              {/* H shape */}
              <path d="M180 140 L180 200 L220 200 L220 140 L240 140 L240 260 L220 260 L220 220 L180 220 L180 260 L160 260 L160 140 Z" fill="#006FFE"/>
              
              {/* Decorative brackets */}
              <path d="M100 100 L100 120 L120 120 L120 100 M280 100 L300 100 L300 120 L280 120 M100 280 L120 280 L120 300 L100 300 M280 280 L300 280 L300 300 L280 300" 
                    stroke="#006FFE" 
                    strokeWidth="8" 
                    fill="none"/>
              
              {/* Tech elements */}
              <circle cx="260" cy="160" r="8" fill="#006FFE"/>
              <circle cx="140" cy="200" r="6" fill="#6F080F"/>
              <rect x="240" y="180" width="20" height="3" fill="#006FFE"/>
              <rect x="130" y="240" width="15" height="3" fill="#6F080F"/>
            </svg>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-hero font-bold text-lh-text-light mb-6 leading-tight font-helvetica"
        >
          LANGARA HACKS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="text-lh-text-light/80 text-xl mb-8 max-w-4xl mx-auto font-spline leading-relaxed"
        >
          lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis leo eu aenean sed diam urna tempor. pulvinar vivamus fringilla lacus nec metusbibendum
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-lh-primary hover:bg-lh-primary/90 text-lh-text-light border-lh-primary h-12 px-8 text-base font-medium rounded-full"
            >
              Register Now
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-lh-primary text-lh-primary hover:bg-lh-primary hover:text-lh-text-light h-12 px-8 text-base font-medium rounded-full"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating animation elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-lh-accent rounded-full opacity-60"
      />
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-1/4 right-10 w-6 h-6 bg-lh-primary rounded-full opacity-40"
      />
    </section>
  )
} 