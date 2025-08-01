import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="bg-lh-dark  max-xl:pt-[150px] xl:pt-[50px]">
      <div className="container   mx-auto px-4">
        {/* Main Container with rounded rectangle matching Figma specs */}
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            y: 50,
            borderWidth: 0,
            boxShadow: '0px 0px 0px 0px rgba(130, 122, 122, 0)'
          }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            y: 0,
            borderWidth: 6,
            boxShadow: '13px 20px 40px 2px rgba(130, 122, 122, 1)'
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            borderWidth: { delay: 0.3, duration: 0.4 },
            boxShadow: { delay: 0.5, duration: 0.5 }
          }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[70px] p-16 text-center relative"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'rgb(44, 44, 44)',
            borderStyle: 'solid'
          }}
        >
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[80px] font-bold text-[#f8f0de] mb-8 leading-tight tracking-wider text-center"
            style={{ textShadow: '0 3px 5px rgba(248, 240, 222, 0.3)' }}
          >
            THIS YEAR
          </motion.h2>
          
          {/* Event Details */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#f8f0de] text-2xl mb-12 font-light tracking-wide"
          >
            SEPTEMBER 20 - 21 | 48 HOURS | LIMITED SPOTS
          </motion.p>

          {/* More Info Button */}
                    <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
            <Button 
              variant="outline"
              className="border-[#6F0510] cursor-pointer text-[#f8f0de] bg-transparent hover:bg-[#6F0510] hover:text-[#f8f0de] rounded-full px-8 py-3 text-lg font-medium transition-all"
                    >
              More info
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
                    </motion.div>
              </motion.div>
      </div>
    </section>
  )
} 