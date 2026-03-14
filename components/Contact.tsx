"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [status, setStatus] = useState("idle") // "idle" | "submitting" | "success" | "error"

  const contactInfo = [
    { icon: Phone, text: "+91-9021867098", href: "tel:+919021867098" },
    { icon: Mail, text: "cpatil7350638164@gmail.com", href: "mailto:cpatil7350638164@gmail.com" },
    { icon: MapPin, text: "Ahmedabad, Gujarat, India", href: "#" },
    { icon: Github, text: "GitHub", href: "https://github.com/chetupatil1818" },
    { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/chetan-patil-aa2545266" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e3e7c3c2-9a4a-409c-9bba-dd73f277e9cb", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); 
        
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        console.error("Submission failed:", result);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* RESTORED: section-title custom class */}
          <h2 className="section-title inline-block">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* RESTORED: card custom class */}
            <div className="card p-8 h-full">
              {/* RESTORED: text-secondary custom class */}
              <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to new opportunities and collaborations. 
                Feel free to reach out through any of these channels:
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ x: 10 }}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                          {item.text}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-green-700 dark:text-green-400 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Actively open to new opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* RESTORED: card custom class */}
            <div className="card p-8 h-full">
              {/* RESTORED: text-secondary custom class */}
              <h3 className="text-2xl font-bold mb-6 text-secondary dark:text-white">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={status !== "idle"}
                  className={`btn-primary w-full flex items-center justify-center transition-all duration-300 ${
                    status === "submitting" ? "opacity-70 cursor-not-allowed" :
                    status === "success" ? "!bg-green-500 !border-green-500" :
                    status === "error" ? "!bg-red-500 !border-red-500" : ""
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        <Send size={18} className="mr-2" /> Send Message
                      </motion.div>
                    )}
                    {status === "submitting" && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Sending...
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        <CheckCircle size={18} className="mr-2" /> Message Sent!
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        <AlertCircle size={18} className="mr-2" /> Error Sending
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            📍 Based in Ahmedabad, Gujarat, India • 🌐 Available for remote work worldwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact