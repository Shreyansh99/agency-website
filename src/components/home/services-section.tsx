"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Globe,
  Code,
  Palette,
  Shield,
  TrendingUp,
  Terminal,
  Smartphone,
  Bitcoin,
  MessageSquare,
  LayoutDashboard,
  ArrowRight
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "AI Automation",
    description: "Automate operations & save time\nWe build AI agents and backend workflows that take care of repetitive tasks — from sales alerts to internal processes.",
    stat: "25+ AI agents deployed",
    href: "/ourportfolio"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "AI Chatbots & Agents",
    description: "24/7 support that actually talks\nCustom GPT-powered bots that chat, guide, qualify, and book — just like a real team member.",
    stat: "Used by 20+ brands",
    href: "/ourportfolio"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "AI Marketing Funnels",
    description: "Scale your reach on autopilot\nWe combine Meta ads, AI-generated copy, and automated follow-ups to drive predictable, scalable growth.",
    stat: "30% average increase in ROAS",
    href: "/ourportfolio"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Design & Development",
    description: "Lightning-fast sites, built for conversion\nNext.js websites optimized for SEO, mobile, and speed — designed to look great and convert better.",
    stat: "50+ websites launched",
    href: "/ourportfolio"
  },
  {
    icon: <LayoutDashboard className="h-8 w-8" />,
    title: "Custom CRM & Automation Dashboards",
    description: "All-in-one growth control panels\nCustom CRMs and dashboards that help you track leads, automate workflows, and grow with clarity.",
    stat: "10+ businesses scaled with internal tools",
    href: "/ourportfolio"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Our Expertise</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Services</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            We offer a comprehensive suite of digital solutions designed to transform your business and drive exceptional results.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015, boxShadow: "0 2px 16px #38bdf8" }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex flex-col justify-between h-full min-h-[320px] rounded-2xl bg-[#181926]/80 border border-[#38bdf8]/20 shadow-lg overflow-hidden p-6 group relative"
            >
              <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none select-none">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">{service.description}</p>
              </div>
              <a href={service.href} className="inline-flex items-center text-cyan-400 font-semibold group-hover:underline mt-auto">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
