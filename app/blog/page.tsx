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

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    category: 'Web Development',
    date: 'May 15, 2024',
    author: 'Alex Johnson',
    excerpt: 'Explore the emerging trends that are shaping the future of web development, from AI integration to serverless architecture.',
    image: '/placeholder.jpg',
    link: '/blog/future-web-development'
  },
  {
    id: 2,
    title: 'Designing for Accessibility: Best Practices for Inclusive UX',
    category: 'UI/UX Design',
    date: 'May 10, 2024',
    author: 'Sarah Chen',
    excerpt: 'Learn how to create digital experiences that are accessible to all users, regardless of their abilities or disabilities.',
    image: '/placeholder.jpg',
    link: '/blog/designing-accessibility'
  },
  {
    id: 3,
    title: 'How Blockchain is Revolutionizing Digital Security',
    category: 'Blockchain',
    date: 'May 5, 2024',
    author: 'Michael Rodriguez',
    excerpt: 'Discover how blockchain technology is transforming digital security and creating new opportunities for businesses.',
    image: '/placeholder.jpg',
    link: '/blog/blockchain-security'
  },
  {
    id: 4,
    title: 'Mobile App Development: Native vs. Cross-Platform',
    category: 'App Development',
    date: 'April 28, 2024',
    author: 'Priya Patel',
    excerpt: 'A comprehensive comparison of native and cross-platform app development approaches to help you choose the right strategy.',
    image: '/placeholder.jpg',
    link: '/blog/native-vs-cross-platform'
  },
  {
    id: 5,
    title: 'Leveraging AI for Business Growth: Practical Applications',
    category: 'AI & Machine Learning',
    date: 'April 20, 2024',
    author: 'David Kim',
    excerpt: 'Explore practical ways businesses can implement AI to drive growth, improve efficiency, and enhance customer experiences.',
    image: '/placeholder.jpg',
    link: '/blog/ai-business-growth'
  },
  {
    id: 6,
    title: 'SEO Strategies That Actually Work in 2024',
    category: 'Digital Marketing',
    date: 'April 15, 2024',
    author: 'Emma Wilson',
    excerpt: 'Discover effective SEO strategies that can help your business improve visibility and drive organic traffic in 2024.',
    image: '/placeholder.jpg',
    link: '/blog/seo-strategies'
  }
];

// Categories for filtering
const categories = ['All', 'Web Development', 'UI/UX Design', 'Blockchain', 'App Development', 'AI & Machine Learning', 'Digital Marketing'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

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
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Blog</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemFadeIn}
            >
              Insights, tips, and industry trends from our team of experts to help you stay ahead in the digital world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Filter */}
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

      {/* Blog Grid */}
      <section className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id}
                className="backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 rounded-lg overflow-hidden group"
                variants={itemFadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgba(99, 102, 241, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Link href={post.link}>
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 p-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/30 text-blue-300 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      Read More
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

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 rounded-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest insights, tips, and trends in the digital world. No spam, just valuable content.
              </p>
            </div>
            <form className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                />
                <motion.button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
