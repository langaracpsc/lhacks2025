import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-lh-dark">
      <div className="container mx-auto px-4">
        {/* Main Container with rounded rectangle matching Figma specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[70px] p-16 text-center relative"
          style={{
            backgroundColor: 'transparent',
            border: '6px solid rgb(44, 44, 44)',
            boxShadow: '13px 20px 40px 2px rgba(130, 122, 122, 1)'
          }}
        >
          {/* Title */}
          <h2 className="text-[80px] font-bold text-white mb-8 leading-tight tracking-wider">
            THIS YEAR
          </h2>
          
          {/* Event Details */}
          <p className="text-white text-2xl mb-12 font-light tracking-wide">
            SEPTEMBER 20 - 21 | 48 HOURS | LIMITED SPOTS
          </p>
          
          {/* More Info Button */}
          <Button 
            variant="outline"
            className="border-[#6F0510] text-[#6F0510] bg-transparent hover:bg-[#6F0510] hover:text-white rounded-full px-8 py-3 text-lg font-medium transition-all"
          >
            More info
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 