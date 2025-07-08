import { motion } from 'motion/react'
import { AnimatedSection } from '@/components/motion/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Users, ArrowUpRight } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-lh-dark">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <h2 className="text-hero font-bold text-lh-text-light mb-6 font-helvetica">
            THIS YEAR
          </h2>
          <p className="text-xl text-lh-text-light/80 font-spline max-w-4xl mx-auto leading-relaxed">
            SEPTEMBER 20 - 21 | 48 HOURS | LIMITED SPOTS
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Description */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.4}>
              <Card className="bg-lh-medium/20 border-lh-medium/30 backdrop-blur-sm shadow-lh-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-lh-text-light mb-6 font-helvetica">
                    LANGARA HACKS
                  </h3>
                  <p className="text-lh-text-light/80 leading-relaxed mb-6 font-spline">
                    lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis leo eu aenean sed diam urna tempor. ulvinar vivamus fringilla lacus nec metusbibendum
                  </p>
                  
                  <Button 
                    className="bg-lh-primary hover:bg-lh-primary/90 text-lh-text-light rounded-full px-6 py-3 font-medium"
                  >
                    Learn More About LangAra Hacks
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Right Column - Event Details */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.6}>
              <Card className="bg-lh-medium/10 border-lh-medium/20 backdrop-blur-sm shadow-lh-card h-full">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-lh-accent/20 rounded-full mb-4"
                      >
                        <Calendar className="w-8 h-8 text-lh-accent" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-lh-text-light mb-2">
                        SEPTEMBER 20 - 21
                      </h4>
                      <p className="text-lh-text-light/60">
                        2 Days of Innovation
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-lh-primary/20 rounded-full mb-4"
                      >
                        <Clock className="w-8 h-8 text-lh-primary" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-lh-text-light mb-2">
                        48 HOURS
                      </h4>
                      <p className="text-lh-text-light/60">
                        Non-stop Coding
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-lh-accent/20 rounded-full mb-4"
                      >
                        <Users className="w-8 h-8 text-lh-accent" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-lh-text-light mb-2">
                        LIMITED SPOTS
                      </h4>
                      <p className="text-lh-text-light/60">
                        Register Early
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-lh-primary/20 rounded-full mb-4"
                      >
                        <MapPin className="w-8 h-8 text-lh-primary" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-lh-text-light mb-2">
                        T BUILDING GALLERY
                      </h4>
                      <p className="text-lh-text-light/60">
                        Langara College
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Location Card */}
        <AnimatedSection delay={0.8} className="text-center">
          <Card className="bg-lh-medium/10 border-lh-medium/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <MapPin className="w-12 h-12 text-lh-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-lh-text-light mb-2">
                  T Building Gallery Langara College
                </h3>
                <p className="text-lh-text-light/60">
                  Vancouver, BC
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
} 