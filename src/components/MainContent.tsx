import { motion } from 'framer-motion'

const MainContent = () => {
  return (
    <div className="container mx-auto gap-16 px-4 relative h-[100vh]">
      {/* Top dotted pattern */}
      <div className="absolute top-0 left-0 w-[390px] h-[60px]" style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      {/* Image placeholders layout */}
      <div className=" top-20 left-0 right-0 grid grid-cols-3 gap-8 z-10">
        <div className="aspect-square bg-[#2A2A2A] rounded-lg flex items-center justify-center text-white/50 mt-20">
          Picture Placholder
        </div>
        <div className="aspect-[1/1.3] bg-[#2A2A2A] rounded-lg flex items-center justify-center text-white/50 -mt-10">
          Picture Placholder
        </div>
        <div className="aspect-square bg-[#2A2A2A] rounded-lg flex items-center justify-center text-white/50 mt-20">
          Picture Placholder
        </div>
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className=" text-[80px] font-bold text-white mb-6 leading-tight tracking-wider text-center relative z-20 "
      >
        LANGARA HACKS
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="text-white/80 text-xl mb-16 max-w-3xl mx-auto text-center leading-relaxed"
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