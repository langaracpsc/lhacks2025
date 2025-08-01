import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import img1 from '/rand1.webp'
import img2 from '/rand2.webp'
import img3 from '/rand3.webp'
import img4 from '/rand4.webp'
import img5 from '/rand5.webp'
import img6 from '/rand6.webp'
import img7 from '/rand7.webp'
import img8 from '/rand8.webp'
import img9 from '/rand9.webp'
import img10 from '/rand10.webp'
import img11 from '/rand11.webp'
import img12 from '/rand12.webp'

const MainContent = () => {
  // Arrays of random images for different positions
  const leftRandomImages = [
    img1,
    img2, 
    img3,
    img4,
    img5
  ]

  const rightRandomImages = [
    img6,
    img7,
    img8,
    img9
  ]

  const middleRandomImages = [
    img10,
    img11,
    img12
  ]

  // Single array for mobile - combines all images
  const mobileRandomImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9,
    img10, img11, img12
  ]

  const [leftImageIndex, setLeftImageIndex] = useState(0)
  const [middleImageIndex, setMiddleImageIndex] = useState(0)
  const [rightImageIndex, setRightImageIndex] = useState(0)
  const [mobileImageIndex, setMobileImageIndex] = useState(0)
  
  // Animation states for fade effects
  const [leftFade, setLeftFade] = useState(false)
  const [middleFade, setMiddleFade] = useState(false)
  const [rightFade, setRightFade] = useState(false)
  const [mobileFade, setMobileFade] = useState(false)

  // Function to get random index for each image array
  const getRandomIndex = (arrayLength: number) => {
    return Math.floor(Math.random() * arrayLength)
  }

  // Initialize random indices and start animations
  useEffect(() => {
    setLeftImageIndex(getRandomIndex(leftRandomImages.length))
    setMiddleImageIndex(getRandomIndex(middleRandomImages.length))
    setRightImageIndex(getRandomIndex(rightRandomImages.length))
    setMobileImageIndex(getRandomIndex(mobileRandomImages.length))
    
    // Fade in all images initially
    setTimeout(() => {
      setLeftFade(true)
      setMiddleFade(true)
      setRightFade(true)
      setMobileFade(true)
    }, 200)
  }, [])

  // Smooth transition function
  const transitionImage = (
    setFadeState: (value: boolean) => void,
    setImageIndex: (value: (prev: number) => number) => void,
    arrayLength: number
  ) => {
    // Fade out
    setFadeState(false)
    
    // Change image after fade out completes
    setTimeout(() => {
      setImageIndex((prev: number) => {
        const next = prev + 1
        return next >= arrayLength ? 0 : next
      })
      
      // Fade in new image
      setTimeout(() => {
        setFadeState(true)
      }, 200)
    }, 1800) // Wait for fade out to complete (matches duration 1.8s)
  }

  // Set up intervals for each image with staggered timing
  useEffect(() => {
    // Left image changes every 12 seconds
    const leftInterval = setInterval(() => {
      transitionImage(setLeftFade, setLeftImageIndex, leftRandomImages.length)
    }, 12000)

    // Middle image changes every 14 seconds (slightly offset)
    const middleInterval = setInterval(() => {
      transitionImage(setMiddleFade, setMiddleImageIndex, middleRandomImages.length)
    }, 14000)

    // Right image changes every 16 seconds
    const rightInterval = setInterval(() => {
      transitionImage(setRightFade, setRightImageIndex, rightRandomImages.length)
    }, 16000)

    // Mobile image changes every 10 seconds
    const mobileInterval = setInterval(() => {
      transitionImage(setMobileFade, setMobileImageIndex, mobileRandomImages.length)
    }, 10000)

    return () => {
      clearInterval(leftInterval)
      clearInterval(middleInterval)
      clearInterval(rightInterval)
      clearInterval(mobileInterval)
    }
  }, [])

  return (
    <div className="w-full pt-30  gap-16 px-4 relative  ">
      {/* Top dotted pattern */}
      <div className="absolute sm:block hidden top-0 left-0 w-[390px] h-[60px]" style={{
        backgroundImage: `radial-gradient(circle, rgb(248, 240, 222) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      {/* Image placeholders layout */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        {/* Mobile Single Image */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-[10%] w-[80%] h-[60%] rounded-[13px] overflow-hidden"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          <motion.img 
            key={`mobile-${mobileImageIndex}`}
            src={mobileRandomImages[mobileImageIndex]} 
            alt="Random mobile image" 
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, filter: 'blur(10px) grayscale(80%)' }}
            animate={{ 
              opacity: mobileFade ? 1 : 0, 
              filter: mobileFade ? 'blur(0px) grayscale(70%)' : 'blur(10px) grayscale(80%)' 
            }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>

        {/* Desktop Images */}
        {/* Left image - Rectangle 12 */}
        <div 
          className="hidden md:block absolute left-[7%] top-[25%] w-[24%] h-[63%] rounded-[13px] overflow-hidden"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          <motion.img 
            key={`left-${leftImageIndex}`}
            src={leftRandomImages[leftImageIndex]} 
            alt="Random image 1" 
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, filter: 'blur(10px) grayscale(70%)' }}
            animate={{ 
              opacity: leftFade ? 1 : 0, 
              filter: leftFade ? 'blur(0px) grayscale(70%)' : 'blur(10px) grayscale(70%)' 
            }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
        
        {/* Center image - Rectangle 13 */}
        <div 
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[-5%] w-[32%] h-[90%] rounded-[13px] overflow-hidden"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          <motion.img 
            key={`middle-${middleImageIndex}`}
            src={middleRandomImages[middleImageIndex]} 
            alt="Random image 2" 
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, filter: 'blur(10px) grayscale(70%)' }}
            animate={{ 
              opacity: middleFade ? 1 : 0, 
              filter: middleFade ? 'blur(0px) grayscale(70%)' : 'blur(10px) grayscale(70%)' 
            }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
        
        {/* Right image - Rectangle 14 with blue border */}
        <div 
          className="hidden md:block absolute right-[7%] top-[10%] w-[24%] h-[88%] rounded-[13px] overflow-hidden"
          style={{ 
            backgroundColor: 'rgb(46, 46, 46)',
            boxShadow: '0px 4px 22.7px rgba(0, 0, 0, 0.25)'
          }}
        >
          <motion.img 
            key={`right-${rightImageIndex}`}
            src={rightRandomImages[rightImageIndex]} 
            alt="Random image 3" 
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0, filter: 'blur(10px) grayscale(70%)' }}
            animate={{ 
              opacity: rightFade ? 1 : 0, 
              filter: rightFade ? 'blur(0px) grayscale(70%)' : 'blur(10px) grayscale(70%)' 
            }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="tracking-tighter absolute bottom-20 text-[80px] font-sm-bold text-[#f8f0de] mb-6 leading-tight text-center relative z-20"
        style={{ textShadow: '0 3px 5px rgba(248, 240, 222, 0.3)' }}
      >
        LANGARA HACKS
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="text-[#f8f0de]/80 text-center relative z-20 absolute text-xl bottom-20 max-w-3xl mx-auto leading-relaxed"
      >
        <span className="font-semibold text-[#f8f0de]">LangaraHacks</span> is the <em>annual hackathon</em> hosted by the Langara Computer Science Club dedicated to empowering students through <span className="font-medium text-[#f8f0de]/90">innovation</span>, <span className="font-medium text-[#f8f0de]/90">creativity</span>, and <span className="font-medium text-[#f8f0de]/90">hands-on experience</span>. Over <em>one exciting weekend</em>, participants team up to build <span className="font-medium">real-world tech solutions</span>, from web apps and games to tools that solve everyday problems.
        <br />
        <br />
        More than just a competition, <span className="font-semibold text-[#f8f0de]">LangaraHacks</span> is a <em>launchpad</em> for <span className="font-medium text-[#f8f0de]/90">learning</span>, <span className="font-medium text-[#f8f0de]/90">growth</span>, and <span className="font-medium text-[#f8f0de]/90">connection</span>. It's a <span className="font-medium">beginner-friendly</span>, <span className="font-medium">high-energy environment</span> where you can explore new technologies, attend <em>hands-on workshops</em>, get guidance from <em>industry mentors</em>, and collaborate with a vibrant community of creators.
      </motion.p>

      {/* Bottom-right dotted pattern */}
      <div className="absolute top-[1400px] sm:top-[1300px] md:top-[1200px] lg:top-[1100px] bottom-0 right-0 w-[390px] h-[60px] hidden sm:block" style={{
        backgroundImage: `radial-gradient(circle, rgb(248, 240, 222) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />
    </div>
  )
}

export { MainContent }