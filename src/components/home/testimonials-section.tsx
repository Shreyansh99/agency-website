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
    content: "I had a great experience working with Fly Your Tech. Their team is incredibly talented and focused on delivering results that matter. They went above and beyond to ensure that our project was successful, providing valuable insights and suggestions along the way. The collaboration was smooth, and the end result was fantastic.",
    author: "Varun Gupta",
    position: "Sales Consultant"
  },
  {
    id: 2,
    content: "Working with Fly Your Tech was an absolute pleasure. Their team is highly professional and responsive, ensuring that our project was completed on time and to the highest standards. They brought our vision to life with creative solutions and an innovative approach. We look forward to collaborating with them on future projects.",
    author: "Aakash Verma",
    position: "Sales Manager"
  },
  {
    id: 3,
    content: "Fly Your Tech's expertise in tech development is unmatched. From the initial consultation to the final delivery, the process was seamless. Their attention to detail and commitment to quality made all the difference in the success of our project. I highly recommend their services to anyone looking for a reliable and skilled tech partner.",
    author: "Neha Kapoor",
    position: "BDA"
  },
  {
    id: 4,
    content: "The team at Fly Your Tech is exceptional. They understood our requirements perfectly and delivered a product that exceeded our expectations. Their ability to adapt to changing needs and provide innovative solutions was impressive. Communication was always clear, and they were always available to address any concerns.",
    author: "Rahul Deshmukh",
    position: "Account executive"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
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
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="text-primary">
                        <Quote className="h-12 w-12 rotate-180" />
                      </div>
                      <p className="text-lg italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-3">
                          <span className="text-xl font-bold">{testimonial.author.charAt(0)}</span>
                        </div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      </div>
                    </div>
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
      </div>
    </section>
  )
}
