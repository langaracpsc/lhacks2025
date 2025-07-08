import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const ProjectsSection = () => {
  // Sample project data - you can expand this
  const projects = [
    {
      id: 1,
      title: "LANGARA HACKS 2023",
      name: "Project Name 1",
      info: "Information lorem ipsum lorem ipsum",
      description: [
        "lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.",
        "Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
      ],
      buttonText: "View on Devpost",
      imageColor: "rgb(47, 122, 255)"
    },
    {
      id: 2,
      title: "LANGARA HACKS 2024",
      name: "Project Name 2", 
      info: "Another project description here",
      description: [
        "Different project with unique features and technologies. Built with modern frameworks and innovative solutions for real-world problems.",
        "This project showcases advanced development skills and creative problem-solving approaches that were developed during the hackathon."
      ],
      buttonText: "View on GitHub",
      imageColor: "rgb(34, 197, 94)"
    },
    {
      id: 3,
      title: "LANGARA HACKS 2025",
      name: "Project Name 3",
      info: "Third project showcase entry",
      description: [
        "Latest project featuring cutting-edge technology and user-centered design principles. Developed with accessibility and performance in mind.",
        "Demonstrates expertise in full-stack development and modern deployment practices with comprehensive testing and documentation."
      ],
      buttonText: "View Demo",
      imageColor: "rgb(168, 85, 247)"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-lh-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[80px] font-bold text-white mb-4">PROJECTS</h2>
          <p className="text-xl text-yellow-400">lorem ipsum lorem ipsum lorem</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-4/5">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-lg overflow-hidden"
                    style={{
                      backgroundColor: 'rgb(220, 220, 218)',
                      border: '1px solid rgba(168, 157, 157, 0.74)'
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                      {/* Left Content */}
                      <div className="p-12 flex flex-col justify-center">
                        {/* Title */}
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="text-[48px] font-bold mb-6 leading-tight"
                          style={{
                            color: 'rgb(111, 8, 15)'
                          }}
                        >
                          {project.title}
                        </motion.h3>

                        {/* Name Placeholder */}
                        <motion.h4
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="text-2xl font-semibold mb-4"
                          style={{
                            color: 'rgb(20, 20, 20)'
                          }}
                        >
                          {project.name}
                        </motion.h4>

                        {/* Information Text */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-sm mb-6"
                          style={{
                            color: 'rgb(20, 20, 20)'
                          }}
                        >
                          {project.info}
                        </motion.p>

                        {/* Description Text */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="space-y-4 mb-8"
                        >
                          {project.description.map((paragraph, idx) => (
                            <p key={idx} className="text-base leading-relaxed" style={{ color: 'rgb(20, 20, 20)' }}>
                              {paragraph}
                            </p>
                          ))}
                        </motion.div>

                        {/* Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Button
                            className="rounded-[40px] px-6 py-3 text-base transition-all"
                            style={{
                              backgroundColor: 'transparent',
                              border: '1px solid rgb(111, 8, 14)',
                              color: 'rgb(111, 8, 14)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgb(111, 8, 14)'
                              e.currentTarget.style.color = 'white'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = 'rgb(111, 8, 14)'
                            }}
                          >
                            {project.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>

                      {/* Right Image Placeholder */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center p-8"
                      >
                        <div 
                          className="w-full h-full rounded-[40px] flex items-center justify-center text-white/50 text-xl font-medium"
                          style={{
                            backgroundColor: project.imageColor,
                            minHeight: '400px'
                          }}
                        >
                          Picture Placeholder
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <CarouselPrevious 
              className="w-12 h-12 -left-6 border-0"
              style={{
                backgroundColor: 'rgb(111, 8, 14)',
                color: 'white'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </CarouselPrevious>
            <CarouselNext 
              className="w-12 h-12 -right-6 border-0"
              style={{
                backgroundColor: 'rgb(111, 8, 14)',
                color: 'white'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
} 