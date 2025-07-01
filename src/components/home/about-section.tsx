"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { ReactNode, useState } from "react"

import { Button } from "../ui/button"

interface AboutSectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
}

const AboutSection = ({ icon, title, children, delay = 0 }: AboutSectionProps) => {
  const [isOpen, setIsOpen] = useState(true); // Start expanded by default

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 mb-4 cursor-pointer group p-4 rounded-lg transition-all duration-300"
        whileHover={{ 
          x: 8,
          backgroundColor: "rgba(30, 58, 138, 0.1)",
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span 
          className="text-2xl flex-shrink-0 text-blue-400"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
        <motion.h2 
          className="text-2xl font-semibold text-white flex-grow group-hover:text-blue-300 transition-colors duration-300"
          whileHover={{ x: 4 }}
        >
          {title}
        </motion.h2>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-blue-400"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, x: -20 }}
            animate={{ opacity: 1, height: "auto", x: 0 }}
            exit={{ opacity: 0, height: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-16 text-gray-300 leading-relaxed pl-4 border-l-2 border-blue-400/30">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutSection;
