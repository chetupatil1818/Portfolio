"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const Projects = () => {
  const [filter, setFilter] = useState("all")
  
  const projects = [
    {
      title: "Agriculture Portal",
      description: "A comprehensive web portal for farmers providing crop recommendations, weather updates, market prices, and direct customer interaction.",
      image: "/projects/agriculture.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      github: "https://github.com/yourusername/agriculture-portal",
      live: "https://agriculture-portal.vercel.app",
      category: "web",
      featured: true,
    },
    // Add more projects here
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "/projects/weather.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-app.vercel.app",
      category: "web",
      featured: false,
    },
    {
      title: "Task Manager",
      description: "A full-stack task management application with user authentication and real-time updates.",
      image: "/projects/taskmanager.jpg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "NextAuth"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager.vercel.app",
      category: "web",
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Dev" },
    { value: "mobile", label: "Mobile" },
    { value: "ai", label: "AI/ML" },
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block">My Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents countless hours of learning and problem-solving.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.value
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10" />
                
                {/* Placeholder gradient - replace with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                    >
                      <Github size={20} className="text-gray-900" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} className="text-gray-900" />
                    </a>
                  </div>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold z-30">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-sm flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-sm flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/chetupatil1818"
            target="_blank"
            className="btn-outline inline-flex items-center"
          >
            <Eye className="mr-2" size={18} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects