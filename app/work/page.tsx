"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Portfolio data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.',
    image: '/placeholder.jpg',
    link: '/work/e-commerce-platform'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    tags: ['Figma', 'Adobe XD', 'Prototyping'],
    description: 'A comprehensive financial dashboard design for a fintech startup, featuring intuitive data visualization and user-friendly interface.',
    image: '/placeholder.jpg',
    link: '/work/financial-dashboard'
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    category: 'App Development',
    tags: ['React Native', 'Firebase', 'Health API'],
    description: 'A mobile application for healthcare providers to manage patient records, appointments, and communication.',
    image: '/placeholder.jpg',
    link: '/work/healthcare-app'
  },
  {
    id: 4,
    title: 'Real Estate Website',
    category: 'Web Development',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    description: 'A modern real estate website with property listings, search functionality, and agent profiles.',
    image: '/placeholder.jpg',
    link: '/work/real-estate-website'
  },
  {
    id: 5,
    title: 'Crypto Trading Platform',
    category: 'Blockchain Development',
    tags: ['Solidity', 'Web3.js', 'React'],
    description: 'A decentralized cryptocurrency trading platform with wallet integration and real-time market data.',
    image: '/placeholder.jpg',
    link: '/work/crypto-trading-platform'
  },
  {
    id: 6,
    title: 'AI Content Generator',
    category: 'AI & Machine Learning',
    tags: ['Python', 'TensorFlow', 'NLP'],
    description: 'An AI-powered content generation tool that creates high-quality, SEO-optimized content for various industries.',
    image: '/placeholder.jpg',
    link: '/work/ai-content-generator'
  }
];

// Categories for filtering
const categories = ['All', 'Web Development', 'UI/UX Design', 'App Development', 'Blockchain Development', 'AI & Machine Learning', 'Digital Marketing'];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              variants={itemFadeIn}
            >
              <span className="block text-white">Our</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Portfolio</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemFadeIn}
            >
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
                    : 'bg-blue-500/10 text-gray-300 hover:bg-blue-500/20'
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 rounded-lg overflow-hidden group"
                variants={itemFadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgba(99, 102, 241, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Link href={project.link}>
                  <div className="h-56 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="p-4 w-full">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/30 text-blue-300 rounded-full mb-2">
                          {project.category}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="text-xs text-gray-300">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      View Project
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={itemFadeIn}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemFadeIn}
            >
              Let's create something amazing together. Contact us to discuss your project.
            </motion.p>
            <motion.div variants={itemFadeIn}>
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative flex items-center">
                  START A PROJECT
                  <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
