import { motion } from 'motion/react'
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/motion/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Palette, Brain, Zap, Globe, Shield, ArrowRight, ArrowLeft } from 'lucide-react'

export const ProjectsSection = () => {
  const projectCategories = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack applications, APIs, and web platforms",
      color: "bg-lh-accent/20 text-lh-accent",
      projects: ["E-commerce Platform", "Social Media App", "Portfolio Website"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems, data analysis, and automation",
      color: "bg-lh-primary/20 text-lh-primary",
      projects: ["Chatbot Assistant", "Image Recognition", "Predictive Analytics"]
    },
    {
      icon: Globe,
      title: "Social Impact",
      description: "Solutions for community and environmental challenges",
      color: "bg-lh-accent/20 text-lh-accent",
      projects: ["Climate Tracker", "Community Helper", "Education Tool"]
    },
    {
      icon: Palette,
      title: "Creative Tech",
      description: "Art, design, and interactive experiences",
      color: "bg-lh-primary/20 text-lh-primary",
      projects: ["Digital Art Gallery", "Music Visualizer", "VR Experience"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security tools, privacy solutions, and safe computing",
      color: "bg-lh-accent/20 text-lh-accent",
      projects: ["Password Manager", "Network Scanner", "Privacy Shield"]
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Experimental ideas and cutting-edge technology",
      color: "bg-lh-primary/20 text-lh-primary",
      projects: ["IoT Dashboard", "Blockchain App", "AR Tool"]
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
          {projectCategories.map((category, index) => (
            <StaggeredItem key={category.title}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-lh-medium/20 border-lh-medium/30 backdrop-blur-sm shadow-lh-card h-full group cursor-pointer">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${category.color}`}
                    >
                      <category.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-lh-text-light mb-4 group-hover:text-lh-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-lh-text-light/60 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Example Projects */}
                    <div className="space-y-2">
                      {category.projects.map((project, projectIndex) => (
                        <motion.div
                          key={project}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: projectIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1 h-1 bg-lh-accent rounded-full"></div>
                          <span className="text-lh-text-light/50 text-sm">{project}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                Join hundreds of developers, designers, and innovators for 48 hours of creativity, 
                learning, and building the future. Your next great idea starts here!
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