"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';

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
    <>
      <NextSeo
        title="AI Automation & Marketing Agency | WebNexaAI"
        description="WebNexaAI helps businesses scale with AI agents, workflow automations, lead-gen chatbots, and custom AI marketing systems."
        canonical="https://webnexaai.com/"
      />
      <main className="min-h-screen relative">
        {/* 3D Background */}
        <Suspense fallback={<div className="fixed inset-0 bg-black/90" />}>
          <ThreeBackground />
        </Suspense>

        {/* Hero Section */}
        <header>
          <HeroSection />
        </header>

        {/* Unified Background for Testimonials & Portfolio */}
        <section aria-label="Testimonials and Portfolio" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src="/bg1.png" alt="Background" width={1920} height={1080} className="w-full h-full object-cover object-center" style={{ minHeight: '100%', minWidth: '100%' }} />
          </div>
          <TestimonialsSection />
          <PortfolioSection />
        </section>

        <section aria-label="Services">
          <ServicesSection />
        </section>

        <section aria-label="Process">
          <ProcessSection />
        </section>
      </main>
    </>
  );
}
