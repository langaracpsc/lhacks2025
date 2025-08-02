import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1029)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Sample project data - you can expand this
  const projects = [
    {
      id: 1,
      title: "LANGARA HACKS 2024",
      name: "Podlyze",
      info: "Podcast Transcription and Analysis",
      description: [
        "Podlyze takes YouTube podcast links, generates concise summaries, and offers real-time chat functionality, allowing users to ask questions about the summarized content. It also translates the summaries into various languages, making the podcast more accessible to non-native speakers. Users can interact with the app to quickly grasp the key points or dive deeper into any section they're interested in..",
        "I used a combination of Next.js for the frontend and Node.js with Express for the backend. For podcast transcription and summarization, I integrated advanced natural language processing models. The translation feature leverages cloud-based APIs for multilingual support. The chat functionality is powered by a custom-built conversational AI that responds to queries about the podcast summaries. The entire infrastructure is backed by PostgreSQL for efficient data management."
      ],
      buttonText: "View on Devpost",
      imageColor: "rgb(47, 122, 255)",
      image: "/Podlyze.webp",
      link: "https://devpost.com/software/podlyze"
    },
    {
      id: 2,
      title: "LANGARA HACKS 2024",
      name: "HireHigher",
      info: "An AI Analysis of your Interview Skills!",
      description: [
        "HireHigher reads your Resume, the job you want, your skills, and your Linkedin and generates questions tailored to the info you provides it. Our custom made AI-interviewer will simulate a real interview and take note of your answers. Afterwards, HireHigher will provide feedback regarding your speech.",
        "We used React for the Frontend and Django for the backend. We hosted the backend on AWS. AI was built with OpenAi's GPT-4o-mini model. We used OCR for resume scraping, and Selenium for the Linkedin Info."
      ],
      buttonText: "View on Devpost",
      image: "/hireHigher.webp",
      link: "https://devpost.com/software/hirehigher"
    },
    {
      id: 3,
      title: "LANGARA HACKS 2024",
      name: "HacksBricsTeam",
      info: "AI powered stock advisor.",
      description: [
        "This financial advisor app uses real-time stock data and AI analysis to recommend the best investment options for users. It filters companies based on trading volume for stability, analyzes reputation and past performance using AI, and tailors suggestions to the user’s income. Users can add stocks to a wishlist, and the platform includes secure login/signup with end-to-end encryption via JSON Web Tokens.",
        "Built with the MERN stack, the app uses Mongoose for database management and JSON Web Tokens with Express for authentication. The backend handles requests to OpenAI’s GPT-3.5-turbo and Polygon.io for real-time stock data. After filtering data, the AI acts as a final layer to choose the most profitable stocks based on various factors. The frontend then displays these results through a user-friendly interface."
      ],
      buttonText: "View on Devpost",
      image: "/finaceadvisor.webp",
      link: "https://devpost.com/software/hacksbricsteam"
    },
    {
      id: 4,
      title: "LANGARA HACKS 2024",
      name: "Karaoke App",
      info: "Music and Karaoke",
      description: [
        "Our Karaoke app transforms any YouTube video into a karaoke-ready track. By removing the vocals and displaying synced lyrics, it allows users to sing along to just the instrumental version of their favorite songs",
        "We developed a user-friendly frontend that lets users drag and drop or paste a YouTube URL. Once the link is received, the app uses YouTube-DLP to download the audio and video content. It then applies MDX-Net, a powerful AI model for audio source separation, to isolate and extract the instrumental track. At the same time, the app uses the Genius API to identify and fetch the lyrics based on the song. Finally, the interface plays the instrumental version while displaying the synchronized lyrics, creating an intuitive and immersive karaoke experience."
      ],
      buttonText: "View on Devpost",
      image: "/karaoke.webp",
      link: "https://devpost.com/software/karaoke-app"
    },
  ]

  const handleProjectClick = (projectId: number, index: number) => {
    if (current !== index) return
    
    if (isMobile) {
      setExpandedProject(expandedProject === projectId ? null : projectId)
    }
  }

  return (
    <section id="projects" className="py-20 bg-lh-dark relative overflow-hidden w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-[#f8f0de] mb-4 text-center" style={{ textShadow: '0 3px 5px rgba(248, 240, 222, 0.3)' }}>PROJECTS</h2>
          <p className="text-lg sm:text-xl text-yellow-400 text-center">Projects from our LangaraHacks 2024</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full px-4 md:px-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => {
                const isCenter = current === index
                
                return (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-4/5 basis-[85%]">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className={`rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
                        isCenter 
                          ? `group relative ${isMobile ? 'cursor-pointer' : ''}` 
                          : 'opacity-60 cursor-default'
                      }`}
                      style={{
                        backgroundColor: 'rgb(220, 220, 218)',
                        border: '1px solid rgba(168, 157, 157, 0.74)'
                      }}
                      onClick={() => handleProjectClick(project.id, index)}
                    >
                      {/* Hover Image Dropdown - Only active for center card */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0 overflow-hidden z-10 p-4 transition-all duration-500 ease-in-out ${
                        !isCenter ? '' : 
                        isMobile
                          ? (expandedProject === project.id ? 'h-96' : 'h-0')
                          : 'group-hover:h-96'
                      }`}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>

                      <div className={`grid grid-cols-1 h-auto md:min-h-[600px] relative z-20 transition-all duration-500 ease-in-out ${
                        !isCenter ? '' :
                        isMobile
                          ? (expandedProject === project.id ? 'pb-96' : 'pb-0')
                          : 'group-hover:pb-96'
                      }`}>
                        {/* Top Content */}
                        <div className="p-6 md:p-12 flex flex-col justify-center h-full">
                          {/* Title */}
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[32px] md:text-[48px] font-bold mb-6 leading-tight text-center"
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

                          {/* Button - Only interactive for center card */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <Button
                              onClick={(e) => {
                                if (!isCenter) return
                                e.stopPropagation()
                                window.open(project.link, '_blank')
                              }}
                              className={`rounded-[40px] px-6 py-3 text-base transition-all ${
                                !isCenter ? 'pointer-events-none opacity-50' : ''
                              }`}
                              style={{
                                backgroundColor: 'transparent',
                                border: '1px solid rgb(111, 8, 14)',
                                color: 'rgb(111, 8, 14)'
                              }}
                              onMouseEnter={(e) => {
                                if (!isCenter) return
                                e.currentTarget.style.backgroundColor = 'rgb(111, 8, 14)'
                                e.currentTarget.style.color = '#f8f0de'
                              }}
                              onMouseLeave={(e) => {
                                if (!isCenter) return
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = 'rgb(111, 8, 14)'
                              }}
                            >
                              {project.buttonText}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious
              className="w-12 h-12 left-4 border-0 cursor-pointer fixed-nav-button hidden lg:flex"
              style={{
                backgroundColor: 'rgb(111, 8, 14)',
                color: '#f8f0de',
                position: 'absolute',
                top: '300px',
                transform: 'translateY(-50%)',
                zIndex: 30
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
              className="w-12 h-12 right-4 border-0 cursor-pointer fixed-nav-button hidden lg:flex"
              style={{
                backgroundColor: 'rgb(111, 8, 14)',
                color: '#f8f0de',
                position: 'absolute',
                top: '300px',
                transform: 'translateY(-50%)',
                zIndex: 30
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