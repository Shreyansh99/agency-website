"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Import components
import HeroSection from "../src/components/home/hero-section";
import ServicesSection from "../src/components/home/services-section";
import ProcessSection from "../src/components/home/process-section";
import PortfolioSection from "../src/components/home/portfolio-section";
import TestimonialsSection from "../src/components/home/testimonials-section";

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
      <HeroSection />

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
                  WebNexaAI is a premier technology solutions provider, offering innovative digital services and custom software solutions. Our expert team delivers high-quality, scalable solutions that empower businesses to thrive in the digital age.
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
    </div>
  );
}
