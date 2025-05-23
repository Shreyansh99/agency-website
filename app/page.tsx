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
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative elements - responsive positioning */}
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border border-blue-400/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/4 right-4 sm:top-1/3 sm:right-16 w-10 h-10 sm:w-16 sm:h-16 border border-purple-400/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-16 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-pulse-glow animation-delay-2000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="text-center lg:text-left relative z-10 order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                <span className="block text-white">Powering</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Digital</span>
                <span className="block text-white">Revolution</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building innovative solutions for tomorrow&apos;s challenges. Transforming ideas into powerful digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/start-transformation-today"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full text-white overflow-hidden transition-all duration-300 hover:scale-105"
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
              className="h-[300px] sm:h-[400px] lg:h-[500px] w-full relative rounded-lg flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border border-blue-500/30 order-1 lg:order-2"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse-glow"></div>
                <div className="absolute w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse-glow animation-delay-2000"></div>
                <div className="absolute w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-purple-500/25 to-pink-500/25 animate-pulse-glow animation-delay-4000"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4 animate-float">🚀</div>
                <p className="text-blue-400 text-lg sm:text-xl font-semibold">Innovation in Motion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden backdrop-blur-sm bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-500/30 animate-pulse-glow"></div>
                  <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 animate-pulse-glow animation-delay-2000"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 animate-float">💡</div>
                  <p className="text-indigo-400 text-lg sm:text-xl font-semibold">Smart Solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">About Us</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                  Leading IT Solutions & Digital Services Provider
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  FlyYourTech is a premier technology solutions provider, offering innovative digital services and custom software solutions. Our expert team delivers high-quality, scalable solutions that empower businesses to thrive in the digital age.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-blue-500 text-sm sm:text-base font-medium rounded-md text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
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
