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
  const [leftFade, setLeftFade] = useState(true)
  const [middleFade, setMiddleFade] = useState(true)
  const [rightFade, setRightFade] = useState(true)
  const [mobileFade, setMobileFade] = useState(true)
  


  // Function to get random index for each image array
  const getRandomIndex = (arrayLength: number) => {
    return Math.floor(Math.random() * arrayLength)
  }

  // Initialize random indices on component mount
  useEffect(() => {
    setLeftImageIndex(getRandomIndex(leftRandomImages.length))
    setMiddleImageIndex(getRandomIndex(middleRandomImages.length))
    setRightImageIndex(getRandomIndex(rightRandomImages.length))
    setMobileImageIndex(getRandomIndex(mobileRandomImages.length))
    
    // Initialize fade states
    setLeftFade(false)
    setMiddleFade(false)
    setRightFade(false)
    setMobileFade(false)
    
    // Trigger fade in after a short delay
    setTimeout(() => {
      setLeftFade(true)
      setMiddleFade(true)
      setRightFade(true)
      setMobileFade(true)
    }, 100)
  }, [])


  return (
    <div className="w-full pt-30  gap-16 px-4 relative h-[400vh] 2xl:h-[100vh] xl:h-[105vh] lg:h-[110vh] md:h-[130vh] sm:h-[140vh]">
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
          { mobileRandomImages[mobileImageIndex] && (
            <img 
              src={mobileRandomImages[mobileImageIndex]} 
              alt="Random mobile image" 
              className={`w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
                mobileFade ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => {
                setMobileFade(true)
                setTimeout(() => {
                  setMobileFade(false)
                  setTimeout(() => {
                    setMobileImageIndex((prev: number) => {
                      const next = prev + 1;
                      return next >= mobileRandomImages.length ? 0 : next
                    })
                    setMobileFade(true)
                  }, 400) // Longer background visibility for slower transitions
                }, 4000)
              }}
            />
          )}
        </div>

        {/* Desktop Images */}
        {/* Left image - Rectangle 12 */}
        <div 
          className="hidden md:block absolute left-[7%] top-[25%] w-[24%] h-[63%] rounded-[13px] overflow-hidden"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          { leftRandomImages[leftImageIndex] && (
            <img 
              src={leftRandomImages[leftImageIndex]} 
              alt="Random image 1" 
              className={`w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
                leftFade ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => {
                setLeftFade(true)
                setTimeout(() => {
                  setLeftFade(false)
                  setTimeout(() => {
                    setLeftImageIndex((prev: number) => {
                      const next = prev + 1;
                      return next >= leftRandomImages.length ? 0 : next
                    })
                    setLeftFade(true)
                  }, 400) // Longer background visibility for slower transitions
                }, 3000)
              }}
            />
          )}
        </div>
        
                {/* Center image - Rectangle 13 */}
        <div 
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[-5%] w-[32%] h-[90%] rounded-[13px] overflow-hidden"
          style={{ backgroundColor: 'rgb(46, 46, 46)' }}
        >
          { middleRandomImages[middleImageIndex] && (
            <img 
              src={middleRandomImages[middleImageIndex]} 
              alt="Random image 2" 
              className={`w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
                middleFade ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => {
                setMiddleFade(true)
                setTimeout(() => {
                  setMiddleFade(false)
                  setTimeout(() => {
                    setMiddleImageIndex((prev: number) => {
                      const next = prev + 1
                      return next >= middleRandomImages.length ? 0 : next
                    })
                    setMiddleFade(true)
                  }, 400) // Longer background visibility for slower transitions
                }, 4000)
              }}
            />
          )}
        </div>
        
                {/* Right image - Rectangle 14 with blue border */}
        <div 
          className="hidden md:block absolute right-[7%] top-[10%] w-[24%] h-[88%] rounded-[13px] overflow-hidden"
          style={{ 
            backgroundColor: 'rgb(46, 46, 46)',
            boxShadow: '0px 4px 22.7px rgba(0, 0, 0, 0.25)'
          }}
        >
          { rightRandomImages[rightImageIndex] && (
            <img 
              src={rightRandomImages[rightImageIndex]} 
              alt="Random image 3" 
              className={`w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
                rightFade ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => {
                setRightFade(true)
                setTimeout(() => {
                  setRightFade(false)
                  setTimeout(() => {
                    setRightImageIndex((prev: number) => {
                      const next = prev + 1;
                      return next >= rightRandomImages.length ? 0 : next
                    })
                    setRightFade(true)
                  }, 400) // Longer background visibility for slower transitions
                }, 5000)
              }}
            />
          )}
        </div>
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="tracking-tighter absolute bottom-20 text-[80px] font-sm-bold  text-[#f8f0de] mb-6 leading-tight text-center relative z-20 "
      >
        LANGARA HACKS
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className=" text-[#f8f0de]/80 text-center relative z-20  absolute text-xl bottom-20 max-w-3xl mx-auto text-center leading-relaxed"
      >
        LangaraHacks is the annual hackathon hosted by the Langara Computer Science Club dedicated to empowering students through innovation, creativity, and hands-on experience. Over one exciting weekend, participants team up to build real-world tech solutions, from web apps and games to tools that solve everyday problems.
        <br />
        <br />
More than just a competition, LangaraHacks is a launchpad for learning, growth, and connection. It’s a beginner-friendly, high-energy environment where you can explore new technologies, attend hands-on workshops, get guidance from industry mentors, and collaborate with a vibrant community of creators.
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