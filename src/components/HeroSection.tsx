import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

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
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
          className="absolute bottom-32 right-16 w-40 h-40 bg-lh-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lh-light rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            {/* Custom Langara Hacks Logo */}
            <motion.circle
              cx="150"
              cy="150"
              r="140"
              stroke="#006FFD"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.text
              x="150"
              y="120"
              textAnchor="middle"
              className="text-4xl font-bold fill-lh-text-light font-helvetica"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              LH
            </motion.text>
            <motion.text
              x="150"
              y="180"
              textAnchor="middle"
              className="text-lg fill-lh-accent font-spline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              2025
            </motion.text>
            {/* Coding brackets */}
            <motion.text
              x="80"
              y="160"
              textAnchor="middle"
              className="text-6xl fill-lh-primary font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              {'<'}
            </motion.text>
            <motion.text
              x="220"
              y="160"
              textAnchor="middle"
              className="text-6xl fill-lh-primary font-mono"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              {'>'}
            </motion.text>
          </svg>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-hero font-bold text-lh-text-light leading-tight font-helvetica">
            LANGARA HACKS
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-lh-text-light/80 max-w-3xl mx-auto font-spline leading-relaxed">
            lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis leo eu aenean sed diam urna tempor. ulvinar vivamus fringilla lacus nec metusbibendum
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-lh-primary hover:bg-lh-primary/90 text-lh-text-light px-8 py-4 text-lg"
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
              className="border-lh-accent text-lh-accent hover:bg-lh-accent hover:text-lh-text-light px-8 py-4 text-lg"
            >
              Learn More
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 