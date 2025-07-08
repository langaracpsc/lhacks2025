import { motion } from 'motion/react'
import { type ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 }
      case 'down': return { y: -50, x: 0 }
      case 'left': return { x: 50, y: 0 }
      case 'right': return { x: -50, y: 0 }
      default: return { y: 50, x: 0 }
    }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialPosition() 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: 'easeOut' 
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export const StaggeredContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = '' 
}: StaggeredContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredItemProps {
  children: ReactNode
  className?: string
}

export const StaggeredItem = ({ 
  children,
  className = '' 
}: StaggeredItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30 
        },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 