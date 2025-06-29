"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    highlight: "2x leads in just 30 days.",
    content: "We tripled our lead flow in less than a month thanks to WebNexa AI's automation setup. Their team nailed the website and built an AI bot that talks to our customers — and it actually works!",
    author: "Amit Roy",
    position: "Marketing Manager",
    company: "Lotus Wellness",
    companyLogo: "/images/company/lotus-wellness-logo.png", // placeholder
    profilePhoto: "/images/team/avatar1.png", // placeholder
    services: ["Website", "AI Chatbot", "Meta Ads"]
  },
  {
    id: 2,
    highlight: "+80% more appointments booked.",
    content: "The AI agent they built for us is a game changer. Our website is faster, and our sales team is free to focus on closing, not chasing leads.",
    author: "Neha Kapoor",
    position: "Sales Consultant",
    company: "BrightPath",
    companyLogo: "/images/company/brightpath-logo.png",
    profilePhoto: "/images/team/avatar3.png",
    services: ["AI Sales Agent", "Website Redesign"]
  },
  {
    id: 3,
    highlight: "Saved 10+ hours/week on support.",
    content: "WebNexaAI automated our FAQs and support. Our customers get instant answers, and our team can focus on growth. Highly recommend!",
    author: "Rahul Deshmukh",
    position: "Account Executive",
    company: "Urban Realty",
    companyLogo: "/images/company/urban-realty-logo.png",
    profilePhoto: "/images/team/avatar4.png",
    services: ["AI Support Bot", "Automation"]
  },
  {
    id: 4,
    highlight: "+65 happy clients and counting.",
    content: "The team at WebNexaAI is exceptional. They understood our requirements perfectly and delivered a product that exceeded our expectations.",
    author: "Aakash Verma",
    position: "Founder",
    company: "Verma Digital",
    companyLogo: "/images/company/verma-digital-logo.png",
    profilePhoto: "/images/team/avatar2.png",
    services: ["Custom CRM", "Web App"]
  }
]

const clientLogos = [
  "/images/company/lotus-wellness-logo.png",
  "/images/company/brightpath-logo.png",
  "/images/company/urban-realty-logo.png",
  "/images/company/verma-digital-logo.png"
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence and transparent delivery has earned us the trust of clients worldwide.
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none bg-transparent">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center text-center space-y-6"
                    >
                      {/* Highlight line */}
                      <div className="text-blue-400 text-base md:text-lg font-semibold mb-2">{testimonial.highlight}</div>
                      <div className="text-primary">
                        <Quote className="h-12 w-12 rotate-180" />
                      </div>
                      <p className="text-lg italic">"{testimonial.content}"</p>
                      <div className="flex flex-col items-center">
                        {/* Profile photo or stylized avatar */}
                        {testimonial.profilePhoto ? (
                          <img src={testimonial.profilePhoto} alt={testimonial.author} className="w-16 h-16 rounded-full border-2 border-blue-400 mb-3 object-cover" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-white">{testimonial.author.charAt(0)}</span>
                          </div>
                        )}
                        <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                        <div className="text-sm text-blue-200 flex items-center gap-2">
                          {testimonial.position}, {testimonial.company}
                          {testimonial.companyLogo && (
                            <img src={testimonial.companyLogo} alt={testimonial.company} className="h-6 ml-2 inline-block" />
                          )}
                        </div>
                        {/* Services used */}
                        {testimonial.services && (
                          <div className="text-xs text-blue-300 mt-1">Services: {testimonial.services.join(", ")}</div>
                        )}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>

        {/* Client logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-80">
          {clientLogos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Client Logo" className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
      </div>
    </section>
  )
}
