"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"

const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Web Security", href: "/services/web-security" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Programming", href: "/services/programming" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Blockchain Development", href: "/services/blockchain-development" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full flex justify-center mt-6">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-2 bg-background/90 border border-border rounded-full shadow-none backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-bold text-lg text-foreground">
          <Image src="/logo.png" alt="WebNexaAI Logo" width={32} height={32} className="rounded-full" />
          <span className="font-extrabold">WebNexaAI</span>
        </Link>
        {/* Center Links */}
        <div className="flex items-center space-x-8 mx-8">
          <Link href="/services" className="text-secondary hover:text-foreground transition-colors font-medium">Services</Link>
          <Link href="/process" className="text-secondary hover:text-foreground transition-colors font-medium">Process</Link>
          <Link href="/solutions" className="text-secondary hover:text-foreground transition-colors font-medium">Solutions</Link>
        </div>
        {/* Let's Talk Button */}
        <Link href="/contact" className="btn-glow-border flex items-center px-4 py-2 text-white font-medium transition-all duration-300 hover:scale-105 relative z-10">
          Let&apos;s Talk
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </nav>
    </header>
  )
}
