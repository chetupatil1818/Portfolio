"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Custom Hacker Icon mimicking your image
const HackerLogo = ({ size = 36, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* This mask cuts out the face hole and a gap around the laptop */}
      <mask id="hackerMask">
        <rect width="24" height="24" fill="white" />
        <ellipse cx="12" cy="9" rx="3.5" ry="4.5" fill="black" />
        <rect x="3.5" y="14.5" width="17" height="9" rx="1.5" fill="black" />
      </mask>
      {/* This mask cuts out the tiny skull on the back of the laptop */}
      <mask id="laptopMask">
        <rect width="24" height="24" fill="white" />
        <circle cx="12" cy="18.5" r="1.2" fill="black" />
        <path d="M11 20h2v1h-2z" fill="black" />
      </mask>
    </defs>

    {/* Hooded Body */}
    <path 
      mask="url(#hackerMask)" 
      d="M12 2C8.13 2 5 5.13 5 9v2.26c-2.29.89-4 3.12-4 5.74V22h22v-5c0-2.62-1.71-4.85-4-5.74V9c0-3.87-3.13-7-7-7z" 
      fill="currentColor" 
    />
    
    {/* Laptop */}
    <rect 
      mask="url(#laptopMask)" 
      x="5" y="16" width="14" height="6" rx="0.5" 
      fill="currentColor" 
    />
  </svg>
)

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Custom Hacker Icon with CP below */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="#home" className="flex flex-col items-center justify-center group mt-1">
              <HackerLogo 
                size={38} 
                className="text-primary transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" 
              />
              <span className="text-[11px] font-bold mt-1 text-secondary dark:text-white tracking-[0.25em]">
                CP
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700"
          >
            <div className="container py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-secondary dark:text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar