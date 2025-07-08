import { motion } from 'motion/react'
import { Mail, Instagram } from 'lucide-react'

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  // Team members data - duplicated for seamless loop
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

  // Duplicate the array for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers]

  return (
    <footer className="bg-lh-dark py-20">
      <div className="w-full">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[60px] font-bold text-white text-center mb-16 leading-tight px-4"
        >
          LANGARA HACKS 2025<br />
          HACKATHON COMMITTEE
        </motion.h2>

        {/* Team Members Continuous Scroll */}
        <div className="relative mb-16 overflow-hidden w-full">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: [0, -100 + '%']
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={index}
                className="text-center flex-shrink-0 w-[200px] md:w-[240px]"
              >
                {/* Team Member Card */}
                <div 
                  className="w-full h-[288px] rounded-[13px] mb-4 flex items-center justify-center text-white/60 text-sm"
                  style={{
                    backgroundColor: 'rgb(46, 46, 46)'
                  }}
                >
                  Picture Placeholder
                </div>
                
                {/* Name & Position */}
                <h4 className="text-white text-lg font-medium mb-1">
                  {member.name}
                </h4>
                <p className="text-white/80 text-sm">
                  {member.position}
                </p>
              </div>
            ))}
          </motion.div>
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
          <span className="text-white text-sm">
            @langaracpsc
          </span>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white transition-colors"
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