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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="FlyYourTech Logo" width={32} height={32} className="sm:w-10 sm:h-10" />
              <div className="font-bold text-lg sm:text-xl">
                <span className="text-primary">FLY</span> Your Tech
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-3 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button asChild size="sm">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <div>
                    <div className="text-lg font-medium mb-3">Our Services</div>
                    <div className="pl-4 flex flex-col space-y-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/blog" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                  <Link href="/portfolio" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    Portfolio
                  </Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/get-started" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
