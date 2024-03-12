import React from "react"
import heroImgRight from "/assets/hero-img.png"
import heroImgLeft from "/assets/hero-img-left.png"
import {motion, useScroll, useTransform} from "framer-motion"

export default function Hero() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const imageXLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const imageXRight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
  

  return (
    <header
      ref={ref} 
      className="relative h-24 lg:h-56 bg-indigo-50 flex justify-center items-center z-10 overflow-hidden">
      <motion.img
        style={{x: imageXLeft}}
        src={heroImgLeft} 
        alt="icons" 
        className="h-24 lg:h-56 absolute top-0 left-0 object-cover"
      />
      <motion.img
        style={{x: imageXRight}} 
        src={heroImgRight} 
        alt="icons" 
        className="h-24 lg:h-56 absolute top-0 right-0 object-cover"
      />
      
      <h1 className="text-slate-800 text-2xl lg:text-5xl max-w-36 lg:max-w-full text-center">Component Library</h1>
    </header>
  )
}