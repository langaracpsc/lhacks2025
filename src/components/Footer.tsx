import { motion } from 'motion/react'
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/motion/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Twitter, Instagram, Mail, MapPin } from 'lucide-react'

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  const teamMembers = [
    {
      name: "Name Placeholder",
      position: "Position Placeholder",
      image: "placeholder"
    },
    {
      name: "Name Placeholder",
      position: "Position Placeholder",
      image: "placeholder"
    },
    {
      name: "Name Placeholder",
      position: "Position Placeholder",
      image: "placeholder"
    },
    {
      name: "Name Placeholder",
      position: "Position Placeholder",
      image: "placeholder"
    },
    {
      name: "Name Placeholder",
      position: "Position Placeholder",
      image: "placeholder"
    }
  ]

  return (
    <footer className="bg-lh-dark border-t border-lh-medium/20">
      <div className="container mx-auto px-4 py-16">
        {/* Team Section */}
        <AnimatedSection delay={0.2} className="mb-16">
          <h2 className="text-hero font-bold text-lh-text-light text-center mb-8 font-helvetica">
            LANGARA HACKS 2025 HACKATHON COMMITTEE
          </h2>
          
          <StaggeredContainer 
            staggerDelay={0.15} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {teamMembers.map((member, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="bg-lh-medium/20 border-lh-medium/30 backdrop-blur-sm shadow-lh-card h-full">
                    <CardContent className="p-6 text-center">
                      {/* Profile Image Placeholder */}
                      <div className="w-24 h-24 mx-auto mb-4 bg-lh-medium/40 rounded-full flex items-center justify-center">
                        <span className="text-lh-text-light/60 text-sm">
                          Picture Placeholder
                        </span>
                      </div>
                      
                      {/* Name & Position */}
                      <h4 className="text-lg font-semibold text-lh-text-light mb-2">
                        {member.name}
                      </h4>
                      <p className="text-lh-text-light/60 text-sm">
                        {member.position}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </AnimatedSection>

        {/* Footer Bottom */}
        <AnimatedSection delay={0.4}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Handle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-lh-text-light font-inter text-sm">
                @langaracpsc
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ 
                    scale: 1.2,
                    color: '#006FFD'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-lh-text-light/60 hover:text-lh-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-lh-medium/20"
          >
            <p className="text-lh-text-light/40 text-sm">
              © 2025 Langara Hacks. All rights reserved.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  )
} 