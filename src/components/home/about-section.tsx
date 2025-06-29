"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { Button } from "../ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                About Us Image
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-10 h-10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-sm font-semibold text-primary mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Leading IT Solutions & Digital Services Provider</h3>
              <p className="text-muted-foreground mb-8">
                WebNexaAI is a premier technology solutions provider, offering innovative digital services and custom software solutions. Our expert team delivers high-quality, scalable solutions that empower businesses to thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Quality Assurance</h4>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">24/7 Online Support</h4>
                </div>
              </div>
            </div>

            <Button asChild variant="outline" className="mt-6">
              <Link href="/about-us">
                More Details
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
