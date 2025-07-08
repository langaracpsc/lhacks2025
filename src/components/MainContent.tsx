import { motion } from 'framer-motion'

const MainContent = () => {
  return (
    <div className="w-full pt-30 gap-16 px-4 relative h-[150vh]">
      {/* Top dotted pattern */}
      <div className="absolute top-0 left-0 w-[390px] h-[60px]" style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      {/* Image placeholders layout */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        {/* Left image - Rectangle 12 */}
        <div 
          className="absolute left-[7%] top-[25%] w-[24%] h-[63%] rounded-[13px] flex items-center justify-center text-white/50 text-sm"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          Picture Placholder
        </div>
        
        {/* Center image - Rectangle 13 */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 top-[-5%] w-[32%] h-[90%] rounded-[13px] flex items-center justify-center text-white/50 text-sm"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          Picture Placholder
        </div>
        
        {/* Right image - Rectangle 14 with blue border */}
        <div 
          className="absolute right-[7%] top-[10%] w-[24%] h-[88%] rounded-[13px] flex items-center justify-center text-white/50 text-sm"
          style={{ 
            backgroundColor: 'rgb(46, 46, 46)',
            
            boxShadow: '0px 4px 22.7px rgba(0, 0, 0, 0.25)'
          }}
        >
          Picture Placholder
        </div>
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="tracking-tighter absolute bottom-20 text-[80px]  text-white mb-6 leading-tight tracking-wider text-center relative z-20 "
      >
        LANGARA HACKS
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className=" text-white/80 text-xl mb-16 max-w-3xl mx-auto text-center leading-relaxed"
      >
        lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis leo eu aenean sed diam urna tempor. ulvinar vivamus fringilla lacus nec metusbibendum
      </motion.p>

      {/* Bottom-right dotted pattern */}
      <div className="absolute bottom-0 right-0 w-[390px] h-[60px]" style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />
    </div>
  )
}

export { MainContent }