"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import BackgroundWrapper from "../src/components/background-wrapper";
import CursorWrapper from "../src/components/cursor-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-950 text-gray-100`}>
        {/* Custom Motion Cursor */}
        <CursorWrapper />

        {/* Three.js Background */}
        <BackgroundWrapper />

        {/* Modern gradient background */}
        <div className="fixed inset-0 z-[-8] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>

        {/* Animated gradient orbs */}
        <div className="fixed inset-0 z-[-7] overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="fixed inset-0 z-[-6] opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Gradient overlay for better text readability */}
        <div className="fixed inset-0 z-[-5] bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80 pointer-events-none"></div>

        {/* Enhanced Header */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gradient-to-r from-slate-900/90 via-blue-950/90 to-slate-900/90 backdrop-blur-md">
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">FYT</span>
              </div>
              <div className="font-bold text-xl">
                <span className="text-blue-400">FLY</span> Your Tech
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-200 hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-200 hover:text-blue-400 transition-colors">About</Link>
              <Link href="/services" className="text-gray-200 hover:text-blue-400 transition-colors">Services</Link>
              <Link href="/work" className="text-gray-200 hover:text-blue-400 transition-colors">Our Work</Link>
              <Link href="/blog" className="text-gray-200 hover:text-blue-400 transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-200 hover:text-blue-400 transition-colors">Contact</Link>
            </nav>
            <div className="md:flex items-center space-x-4 hidden">
              <Link href="/get-started" className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-sm font-medium rounded-md text-blue-400 hover:bg-blue-500/10 transition-colors">
                Get Started
              </Link>
            </div>
            <button className="md:hidden text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-t border-gray-800/50 relative">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">FYT</span>
                  </div>
                  <div className="font-bold text-xl">
                    <span className="text-blue-400">FLY</span> Your Tech
                  </div>
                </Link>
                <p className="text-gray-400">
                  An influential creative agency. Gets IT Solutions For Expert Consultants
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/work" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                      Terms & Policies
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">Contact</h3>
                <p className="text-gray-400">contact@flyyourtech.com</p>
                <p className="text-gray-400">
                  Building 56, Ward 2, Amarpatan Road,<br />
                  Ramnagar, Satna, (M.P), INDIA
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">Let&apos;s Chat</h3>
                <Link
                  href="https://wa.me/message/IOLXVXKLJ4SLM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors"
                >
                  WhatsApp
                </Link>
                <p className="text-gray-400 mt-4">
                  GST REGISTRATION NUMBER: 23DEOPG6721R1ZX
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              <p>Fly Your Tech&apos;s, All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
