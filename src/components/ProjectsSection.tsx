import { motion } from 'motion/react'
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/motion/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Palette, Brain, Zap, Globe, Shield, ArrowRight, ArrowLeft } from 'lucide-react'

export const ProjectsSection = () => {
  const projectCategories = [
    {
      title: "Web Development",
      icon: Code,
      description: "Build responsive web applications using modern frameworks and technologies.",
      color: "bg-lh-primary/20",
      iconColor: "text-lh-primary"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Explore artificial intelligence and machine learning solutions for real-world problems.",
      color: "bg-lh-accent/20",
      iconColor: "text-lh-accent"
    },
    {
      title: "Social Impact",
      icon: Globe,
      description: "Create technology solutions that address social and environmental challenges.",
      color: "bg-lh-primary/20",
      iconColor: "text-lh-primary"
    },
    {
      title: "Creative Technology",
      icon: Palette,
      description: "Combine creativity with technology to build innovative digital experiences.",
      color: "bg-lh-accent/20",
      iconColor: "text-lh-accent"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Develop secure systems and explore cybersecurity challenges and solutions.",
      color: "bg-lh-primary/20",
      iconColor: "text-lh-primary"
    },
    {
      title: "Innovation Track",
      icon: Zap,
      description: "Open category for groundbreaking ideas and experimental technologies.",
      color: "bg-lh-accent/20",
      iconColor: "text-lh-accent"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-lh-dark relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left navigation circle */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-lh-primary rounded-full flex items-center justify-center z-10"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 text-lh-text-light" />
          </motion.div>
        </motion.div>

        {/* Right navigation circle */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-lh-primary rounded-full flex items-center justify-center z-10"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-lh-text-light" />
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <p className="text-xl text-lh-text-light/80 font-spline mb-4">
            lorem ipsum lorem ipsum lorem
          </p>
          <h2 className="text-hero font-bold text-lh-text-light mb-6 font-helvetica">
            PROJECTS
          </h2>
        </AnimatedSection>

        {/* Project Categories Grid */}
        <StaggeredContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectCategories.map((category) => (
            <StaggeredItem key={category.title}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`p-8 rounded-xl ${category.color} backdrop-blur-sm border border-lh-medium/20 h-full cursor-pointer group`}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  className="mb-6"
                >
                  <category.icon 
                    className={`w-12 h-12 ${category.iconColor} group-hover:drop-shadow-lg transition-all duration-300`}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-lh-text-light mb-3 group-hover:text-lh-accent transition-colors duration-300 font-helvetica">
                  {category.title}
                </h3>
                <p className="text-lh-text-light/70 font-spline leading-relaxed">
                  {category.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-lh-primary to-lh-accent mt-4"
                />
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* Call to Action */}
        <AnimatedSection delay={0.8} className="text-center">
          <Card className="bg-gradient-to-r from-lh-primary/20 to-lh-accent/20 border-lh-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-lh-text-light mb-4"
              >
                Ready to Build Something Amazing?
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lh-text-light/80 mb-8 max-w-2xl mx-auto"
              >
                Join fellow innovators and create projects that make a difference. Choose your category or think outside the box with our Innovation Track.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-lh-primary hover:bg-lh-primary/90 text-lh-text-light"
                  >
                    Register Now
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-lh-accent text-lh-accent hover:bg-lh-accent hover:text-lh-text-light"
                  >
                    View Past Projects
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
} 