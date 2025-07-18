import { motion } from 'motion/react'
import { useState } from 'react'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'FAQ', href: '#faq' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex md:justify-start max-md:justify-between w-full px-4"
    >
    <div className={` flex md:justify-start max-md:justify-between w-full px-4`}>
          <div className="flex max-md:justify-end md:justify-start pl-10 pt-10 items-center h-20 w-full">
            {/* Desktop Navigation - Left aligned */}
            <div className="hidden md-max:pl-[90%] md:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    color: '#f8f0de',
                    textShadow: '0px 0px 8px rgba(248, 240, 222, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[18px] font-bold transition-all duration-300 relative cursor-pointer"
                  style={{
                    color: 'rgba(245, 245, 245, 0.59)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {item.label}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#f8f0de]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.15, ease: 'easeInOut' }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - Right aligned */}
            <div className="md:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 flex items-center  justify-center transition-colors relative rounded-md"
              style={{
                backgroundColor: 'transparent'
              }}
            >
              {/* Simple white hamburger lines like in the image */}
              <div className="relative w-6 h-4 z-50">
                <motion.div
                  className="absolute w-6 h-0.5 bg-[#f8f0de] rounded-full"
                  style={{ top: '0px' }}
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-6 h-0.5 bg-[#f8f0de] rounded-full"
                  style={{ top: '6px' }}
                  animate={{
                    opacity: isMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-6 h-0.5 bg-[#f8f0de] rounded-full"
                  style={{ top: '12px' }}
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with full screen background */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? '100vh' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden fixed inset-0 z-40"
        >
          <div className="py-4 space-y-4 pt-32 px-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  x: 15,
                  scale: 1.05,
                  color: '#f8f0de',
                  textShadow: '0px 0px 8px rgba(248, 240, 222, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[24px] font-bold py-2 transition-all duration-300 cursor-pointer"
                style={{
                  color: 'rgba(245, 245, 245, 0.59)'
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

      {/* Full screen background overlay when menu is open */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-lh-dark/95 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      </div>
    </motion.nav>
  )
} 