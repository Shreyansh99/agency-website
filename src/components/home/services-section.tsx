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
  Bitcoin
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Design",
    description: "Delivering cutting-edge, transparent, and efficient web design solutions. We ensure that your web presence is not only visually appealing but also user-friendly and accessible.",
    projects: 10,
    href: "/ourportfolio"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "We specialize in building robust, user-friendly websites that cater to your business needs. Our development process is streamlined to produce frictionless deliverables, ensuring seamless user experiences.",
    projects: 10,
    href: "/ourportfolio"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Our UI/UX design services focus on creating intuitive and engaging user interfaces. We aim to provide designs that are both aesthetically pleasing and functionally effective, enhancing user satisfaction.",
    projects: 10,
    href: "/ourportfolio"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Web Security",
    description: "Our team is dedicated to securing your web assets. We offer comprehensive web security services that protect your data and ensure the integrity of your online presence.",
    projects: 2,
    href: "/ourportfolio"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Boost your online presence with our digital marketing services. We employ innovative strategies to increase your visibility and drive engagement across all digital platforms.",
    projects: 30,
    href: "/ourportfolio"
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Programming",
    description: "We provide top-notch programming services, creating efficient and scalable solutions tailored to your specific requirements. Our team ensures that all deliverables are user-friendly and aligned with your business goals.",
    projects: 20,
    href: "/ourportfolio"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "App Development",
    description: "We create high-performing, feature-rich mobile applications that cater to a wide range of business needs. Our development process is focused on delivering apps that provide a seamless user experience.",
    projects: 5,
    href: "/ourportfolio"
  },
  {
    icon: <Bitcoin className="h-8 w-8" />,
    title: "Blockchain Development",
    description: "Stay ahead with our blockchain development services. We offer secure and transparent solutions that leverage the latest in blockchain technology to enhance your business operations.",
    projects: 14,
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
                      {service.projects} Projects Completed
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
