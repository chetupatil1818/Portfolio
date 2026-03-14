"use client"

import { motion } from "framer-motion"
import { Code2, Database, GitBranch, Terminal, Award, Briefcase, GraduationCap,Settings,Rocket,Workflow, LineChart,Activity,Server, Cloud } from "lucide-react"

const About = () => {
   const skills = [
   { name: "SSMS", level: 85, icon: Database },
  { name: "Powershell Scripting", level: 80, icon: Terminal },
  { name: "MySQL", level: 75, icon: Database },
  { name: "MongoDB", level: 70, icon: Database },
  
  // Version Control & CI/CD
  { name: "Git & GitHub", level: 85, icon: GitBranch },
  { name: "TeamCity", level: 75, icon: Settings }, // Gear icon for build configurations
  { name: "Octopus Deploy", level: 75, icon: Rocket }, // Rocket for software deployment
  
  // Integrations & Infrastructure
  { name: "Make.com", level: 90, icon: Workflow }, // Workflow mapping for API integrations
  { name: "IIS", level: 75, icon: Server }, // Server icon for web hosting
  { name: "AWS", level: 70, icon: Cloud }, // Cloud for Amazon Web Services
  
  // Monitoring & Observability
  { name: "Grafana", level: 70, icon: LineChart }, // Chart for visual dashboards
  { name: "Prometheus", level: 70, icon: Activity },
  ]

  const experiences = [
    {
    title: "DevOps Engineer",
    company: "Brain Payroll",
    period: "Jul 2025 - Present",
    description: "Managed infrastructure and automated CI/CD pipelines to streamline software delivery. Configured container orchestration, monitored system health, and maintained database servers to ensure high availability and performance.",
    skills: [
      "Docker","Kubernetes","TeamCity","Octopus Deploy","Grafana","Prometheus","SSMS","PowerShell","AWS"
    ],
    icon: Server, 
  }
  ]

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Parul Institute of Engineering and Technology",
      period: "Sep 2022 - Present",
      score: "CGPA: 7.66/10",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "J.G. Natawadkar Junior College",
      period: "2021 - 2022",
      score: "81%",
      icon: GraduationCap,
    },
    {
      degree: "Secondary School (SSC)",
      institution: "Mother Teressa English School",
      period: "2019 - 2020",
      score: "75%",
      icon: GraduationCap,
    },
  ]

  const achievements = [
    { name: "Computer Networks (NPTEL)", icon: Award },
    { name: "SQL Basic (HackerRank)", icon: Award },
    { name: "Data Structures (Udemy)", icon: Award },
    { name: "Java Basics (HackerRank)", icon: Award },
    { name: "Database Management (Udemy)", icon: Award },
    { name: "Campus Ambassador (Unstop)", icon: Award },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Motivated and detail-oriented Computer Science student with hands-on experience in web development 
                and project-based learning. Passionate about continuous learning and using technology to create 
                real-world solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Code2 size={20} className="text-primary" />
                  <span>5+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Award size={20} className="text-primary" />
                  <span>6+ Certifications</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Terminal size={20} className="text-primary" />
                  <span>Always Learning</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Middle Column - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon size={18} className="text-primary" />
                          <span className="font-medium dark:text-white">{skill.name}</span>
                        </div>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Languages & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Languages</h3>
              <div className="space-y-3">
                {[
                  { lang: "Marathi", level: "Native", percentage: 100 },
                  { lang: "English", level: "Proficient", percentage: 85 },
                  { lang: "Hindi", level: "Proficient", percentage: 90 },
                  { lang: "Gujarati", level: "Intermediate", percentage: 60 },
                ].map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="dark:text-gray-300">{lang.lang}</span>
                      <span className="text-primary text-sm">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-primary h-1.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Cricket", "Football", "Music", "Travel", "Coding", "Reading"].map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <div className="card p-6">
            <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">Achievements & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <p className="text-sm font-medium dark:text-gray-300">{item.name}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
        
        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white flex items-center">
                <Briefcase className="mr-2 text-primary" size={24} />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg dark:text-white">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                        <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white flex items-center">
                <GraduationCap className="mr-2 text-primary" size={24} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg dark:text-white">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                        <p className="text-sm font-semibold text-primary">{edu.score}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About