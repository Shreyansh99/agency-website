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
  LayoutDashboard
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "AI Automation",
    description: "Automate operations & save time\nWe build AI agents and backend workflows that take care of repetitive tasks — from sales alerts to internal processes.",
    stat: "25+ AI agents deployed",
    href: "/services"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "AI Chatbots & Agents",
    description: "24/7 support that actually talks\nCustom GPT-powered bots that chat, guide, qualify, and book — just like a real team member.",
    stat: "Used by 20+ brands",
    href: "/services"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "AI Marketing Funnels",
    description: "Scale your reach on autopilot\nWe combine Meta ads, AI-generated copy, and automated follow-ups to drive predictable, scalable growth.",
    stat: "30% average increase in ROAS",
    href: "/services"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Design & Development",
    description: "Lightning-fast sites, built for conversion\nNext.js websites optimized for SEO, mobile, and speed — designed to look great and convert better.",
    stat: "50+ websites launched",
    href: "/services"
  },
  {
    icon: <LayoutDashboard className="h-8 w-8" />,
    title: "Custom CRM & Automation Dashboards",
    description: "All-in-one growth control panels\nCustom CRMs and dashboards that help you track leads, automate workflows, and grow with clarity.",
    stat: "10+ businesses scaled with internal tools",
    href: "/services"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="block h-full">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="text-primary mb-3 sm:mb-4">{service.icon}</div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {service.stat}
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
