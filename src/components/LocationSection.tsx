import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export const LocationSection = () => {
  return (
    <section className="py-20 bg-lh-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-[48px] font-bold text-white leading-tight">
                T Building Gallery<br />
                Langara College
              </h2>
              
              <div className="space-y-2">
                <p className="text-white text-lg">
                  100 W 49th Ave,
                </p>
                <p className="text-white text-lg">
                  Vancouver, BC V5X 3B3
                </p>
              </div>
            </div>

            <Button
              className="rounded-[40px] px-8 py-3 text-lg transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgb(191, 18, 30)',
                color: 'rgb(148, 15, 24)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.cursor = 'pointer'
                e.currentTarget.style.backgroundColor = 'rgb(191, 18, 30)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'rgb(148, 15, 24)'
              }}
            >
              View on Google Maps
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right side - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.712683454102!2d-123.11018188820204!3d49.22497577471979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e0!3m2!1spt-BR!2sca!4v1751946316553!5m2!1spt-BR!2sca"
                width="100%"
                className='rounded-lg grayscale'
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Langara College Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection 