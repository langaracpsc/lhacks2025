import { motion } from 'motion/react'
import { Instagram } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import AutoScroll from "embla-carousel-auto-scroll"


export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/langaracpsc/", label: "Instagram" }
  ]

  // Team members data - duplicated for seamless loop
  const teamMembers = [
    {
      name: "April Ternida",
      position: "President",
      image: "/April.webp"
    },
    {
      name: "Wendy Surya",
      position: "Vice President",
      image: "/Wendy.webp"
    },
    {
      name: "Rishit Singh",
      position: "Tech Lead",
      image: "/Rishit.webp"
    },
    {
      name: "Felipe Barros",
      position: "Developer",
      image: "/Felipe.webp"
    },
    {
      name: "Shayaan Hassan",
      position: "Director of Events",
      image: "/Shayuun.webp"
    },
    {
      name: "Abi Chuma",
      position: "Director of Events",
      image: "/Abi.webp"
    },
    {
      name: "Dennis Yong",
      position: "Events Team",
      image: "/Dennis.webp"
    },
    {
      name: "Kobe Michael",
      position: "Media Team",
      image: "/Kobe.webp"
    },
    {
      name: "Rey Shahir",
      position: "Media Team",
      image: "/Rey.webp"
    },
    {
      name: "Grace Dong",
      position: "Media Team",
      image: "/Grace.webp"

    }, {
      name: "Jecht Alfonso",
      position: "Events Team",
      image: "/JechGood.webp"
    },

  ]

  return (
    <footer className="bg-lh-dark py-20">
      <div className="w-full">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[60px] font-bold text-[#f8f0de] text-center mb-16 leading-tight px-4"
          style={{ textShadow: '0 3px 5px rgba(248, 240, 222, 0.3)' }}
        >
          THE TEAM
        </motion.h2>

        {/* Team Members Carousel */}
        <div className="relative mb-16 w-full">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                direction: "forward",
                stopOnInteraction: false, 
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[200px] md:basis-[240px]">
                  <div className="text-center">
                    {/* Team Member Card */}
                    <div
                      className="w-full h-[288px] rounded-[13px] mb-4 overflow-hidden relative"
                      style={{
                        backgroundColor: 'rgb(46, 46, 46)'
                      }}
                    >
                      {/* Member Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay with name and position */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                        <h4 className="text-[#f8f0de] text-lg font-medium mb-1">
                          {member.name}
                        </h4>
                        <p className="text-[#f8f0de]/80 text-sm">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center px-4"
        >
          {/* Social Handle */}
          <span className="text-[#f8f0de] text-sm">
            @langaracpsc
          </span>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.15,
                  ease: "easeOut",
                  delay: index * 0.02
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.3,
                  y: -4,
                  rotate: 8,
                  transition: { duration: 0.08, ease: "easeOut" }
                }}
                whileTap={{
                  scale: 0.85,
                  transition: { duration: 0.03 }
                }}
                className="text-[#f8f0de]/80 hover:text-[#f8f0de] transition-all duration-75 cursor-pointer"
                aria-label={link.label}
              >
                <link.icon className="w-8 h-8" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 