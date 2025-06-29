"use client"

import { motion } from "framer-motion";
import type { NextPage } from "next";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

const AboutPage: NextPage = () => {
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
              <span className="block text-white">About</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">WebNexaAI</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemFadeIn}
            >
              We are a team of passionate developers, designers, and digital strategists dedicated to transforming ideas into powerful digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden backdrop-blur-sm bg-blue-500/5 border border-blue-500/20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-indigo-500/20 animate-pulse"></div>
                </div>
                <p className="text-blue-400 text-xl relative z-10">Our Story Image</p>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div>
                <h2 className="text-sm font-semibold text-blue-400 mb-2">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">From Vision to Digital Reality</h3>
                <p className="text-gray-300 mb-4">
                  Founded in 2020, WebNexaAI began with a simple mission: to help businesses harness the power of technology to grow and thrive in the digital age.
                </p>
                <p className="text-gray-300 mb-8">
                  What started as a small team of passionate developers has grown into a full-service digital agency, delivering innovative solutions to clients worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
