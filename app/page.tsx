"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Import components
import ServicesSection from "../src/components/home/services-section";
import ProcessSection from "../src/components/home/process-section";
import PortfolioSection from "../src/components/home/portfolio-section";
import TestimonialsSection from "../src/components/home/testimonials-section";
import ContactCTA from "../src/components/home/contact-cta";

// Dynamic import for performance optimization
const ThreeBackground = dynamic(() => import("../src/components/three-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black/90" />
});

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

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* 3D Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-black/90" />}>
        <ThreeBackground />
      </Suspense>

      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-16 w-16 h-16 border border-purple-400/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-pulse-glow animation-delay-2000"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left relative z-10"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block text-white">Powering</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Digital</span>
                <span className="block text-white">Revolution</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Building innovative solutions for tomorrow's challenges. Transforming ideas into powerful digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/start-transformation-today"
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative flex items-center">
                    TRANSFORM NOW
                    <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="h-[400px] lg:h-[500px] w-full relative rounded-lg flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border border-blue-500/30"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse-glow"></div>
                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse-glow animation-delay-2000"></div>
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/25 to-pink-500/25 animate-pulse-glow animation-delay-4000"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 animate-float">🚀</div>
                <p className="text-blue-400 text-xl font-semibold">Innovation in Motion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden backdrop-blur-sm bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-500/30 animate-pulse-glow"></div>
                  <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 animate-pulse-glow animation-delay-2000"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 animate-float">💡</div>
                  <p className="text-indigo-400 text-xl font-semibold">Smart Solutions</p>
                </div>
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
                <h2 className="text-sm font-semibold text-blue-400 mb-2">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Leading IT Solutions & Digital Services Provider</h3>
                <p className="text-gray-300 mb-8">
                  FlyYourTech is a premier technology solutions provider, offering innovative digital services and custom software solutions. Our expert team delivers high-quality, scalable solutions that empower businesses to thrive in the digital age.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-400 hover:bg-blue-500/10 transition-colors"
              >
                More Details
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
}
