"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import * as React from "react"

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
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    if (isHovered) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }
    autoplayRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, isHovered]);

  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-black">
      <div className="container flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">It's all about speed</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            We provide you with a test account that can be set up in seconds.<br />
            Our main focus is getting responses to you as soon as we can.
          </p>
        </div>
        <Carousel
          className="w-full max-w-2xl mx-auto"
          setApi={setEmblaApi}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 * idx }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <div className="text-left w-full flex justify-center">
                    <span className="text-[64px] text-gray-700 leading-none mr-2 -mt-4 select-none">“</span>
                    <span className="sr-only">Quote</span>
                  </div>
                  <p className="text-xl md:text-2xl italic text-white font-medium max-w-2xl mx-auto">
                    {testimonial.content}
                  </p>
                  <div className="flex flex-col items-center mt-2">
                    {testimonial.profilePhoto && (
                      <img src={testimonial.profilePhoto} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mb-2" />
                    )}
                    <span className="font-bold text-lg text-blue-400">{testimonial.author}</span>
                    <span className="text-sm text-gray-400">{testimonial.position} {testimonial.company && (
                      <>
                        <span className="mx-1">|</span>
                        {testimonial.company}
                      </>
                    )}</span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
