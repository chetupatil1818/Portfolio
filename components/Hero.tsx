"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
      
      {/* This optional overlay dims the rest of the page slightly 
        when you hover the image, making the effect even stronger 
      */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 z-30 pointer-events-none backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      
      <div className="container relative z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold mb-4 block"
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-wrap items-center gap-x-4"
            >
              <span>Hi, I'm</span>
              <motion.span 
                className="whitespace-nowrap drop-shadow-md"
                animate={{ 
                  color: [
                    "#ff0000", "#ff7f00", "#ffff00", "#00ff00", 
                    "#00bbff", "#4b0082", "#9400d3", "#ff0000"
                  ] 
                }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              >
                Chetan Patil
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ originX: 0 }}
              whileHover={{ 
                scale: 1.15,
                y: -5,
                color: [
                  "#ff0000", "#ff7f00", "#ffff00", "#00ff00", 
                  "#00bbff", "#4b0082", "#9400d3", "#ff0000"
                ],
                transition: { 
                  color: { duration: 2, ease: "linear", repeat: Infinity },
                  scale: { type: "spring", stiffness: 300, damping: 15 },
                  y: { type: "spring", stiffness: 300, damping: 15 }
                }
              }}
              className="relative group text-2xl md:text-3xl text-secondary dark:text-gray-300 mb-6 w-fit cursor-default hover:drop-shadow-2xl transition-shadow duration-300"
            >
              DevOps Engineer
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-500 ease-out rounded-full flex items-center">
                <span className="absolute -right-3 w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />
              </span>
            </motion.h2>

            {/* Default Description (hides when image is hovered) */}
            <motion.div 
              animate={{ opacity: isHovered ? 0 : 1, filter: isHovered ? "blur(4px)" : "blur(0px)" }}
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              Automating workflows, scaling cloud infrastructure, and engineering seamless software delivery pipelines.
            </motion.div>
            
            {/* CTA Buttons - FIXED DOWNLOAD LINK */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn-primary">
                Hire Me
              </motion.a>
              
              {/* IMPORTANT: Put chetan_main_resume.pdf in your public folder! */}
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                href="/chetan_main_resume.pdf" 
                download 
                className="btn-outline flex items-center"
              >
                <Download className="inline mr-2" size={18} />
                Download CV
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4"
            >
              {[
                { icon: Github, href: "https://github.com/chetupatil1818", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/chetan-patil-aa2545266", label: "LinkedIn" },
                { icon: Mail, href: "mailto:cpatil7350638164@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* RIGHT CONTENT - PROFILE IMAGE & HOVER DESCRIPTION */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* The Image Container */}
            <motion.div 
              className="relative w-80 h-80 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ 
                scale: isHovered ? 1.5 : 1, // Increased scale for dramatic effect
                y: isHovered ? -30 : 0,    // Moves image up slightly to make room for text below
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div 
                animate={{ opacity: isHovered ? 0.6 : 0.2, scale: isHovered ? 1.2 : 1 }}
                className="absolute inset-0 bg-primary rounded-full blur-3xl animate-pulse" 
              />
              
              <div className={`relative w-full h-full rounded-full overflow-hidden border-4 transition-colors duration-500 shadow-2xl ${isHovered ? 'border-primary' : 'border-white dark:border-gray-800'}`}>
                <Image 
                  src="/profile.jpg" 
                  alt="Chetan Patil" 
                  fill 
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0], x: isHovered ? 30 : 0, rotate: isHovered ? 20 : 0 }}
                transition={{ y: { repeat: Infinity, duration: 3 }, x: { duration: 0.5 } }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                🚀
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], x: isHovered ? -30 : 0, rotate: isHovered ? -20 : 0 }}
                transition={{ y: { repeat: Infinity, duration: 4, delay: 1 }, x: { duration: 0.5 } }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                💻
              </motion.div>
            </motion.div>

            {/* THE HIGHLIGHTED TEXT THAT APPEARS BELOW THE IMAGE
              This uses AnimatePresence to mount/unmount cleanly 
            */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 30, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="absolute bottom-[-100px] w-full max-w-sm p-5 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-primary/30 shadow-2xl shadow-primary/20 text-center z-50 pointer-events-none"
                >
                  <p className="text-gray-900 dark:text-white font-medium text-lg">
                    Automating workflows, scaling cloud infrastructure, and engineering seamless software delivery pipelines.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        <ChevronDown size={32} className="text-primary" />
      </motion.div>
    </section>
  )
}

export default Hero