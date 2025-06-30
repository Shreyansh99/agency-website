"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import BackgroundWrapper from "../src/components/background-wrapper";
import CursorWrapper from "../src/components/cursor-wrapper";
import Header from "../src/components/header";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        {/* Custom Motion Cursor */}
        <CursorWrapper />

        {/* Main Background Image */}
        <div
          className="fixed inset-0 z-[-10] bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: 'auto',
          }}
        ></div>

        {/* Dark base overlay */}
        <div className="fixed inset-0 z-[-9] bg-black/80"></div>

        {/* Additional atmospheric gradient */}
        <div className="fixed inset-0 z-[-7] bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>

        {/* Subtle warm glow effect */}
        <div className="fixed inset-0 z-[-6] bg-gradient-radial from-accent/10 via-transparent to-background/60"></div>

        {/* Subtle grid pattern overlay */}
        <div className="fixed inset-0 z-[-5] opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Additional background effects */}
        <BackgroundWrapper />

        {/* Enhanced Header */}
        <Header />

        <main className="flex-grow">
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-background border-t border-border relative">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <img src="/logo.png" alt="WebNexaAI Logo" className="w-8 h-8 rounded-full" />
                  <div className="font-bold text-xl text-foreground">
                    <span className="text-accent">WebNexaAI</span>
                  </div>
                </Link>
                <p className="text-secondary">
                  An influential creative agency. Gets IT Solutions For Expert Consultants
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-secondary hover:text-accent transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-secondary hover:text-accent transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/work" className="text-secondary hover:text-accent transition-colors">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-secondary hover:text-accent transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-secondary hover:text-accent transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-secondary hover:text-accent transition-colors">
                      Terms & Policies
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Contact</h3>
                <p className="text-secondary">contact@webnexaai.com</p>
                <p className="text-secondary">
                  Building 56, Ward 2, Amarpatan Road,<br />
                  Ramnagar, Satna, (M.P), INDIA
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Let&apos;s Chat</h3>
                <Link
                  href="https://wa.me/message/IOLXVXKLJ4SLM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-accent/20 border border-accent text-accent rounded-md hover:bg-accent/30 transition-colors"
                >
                  WhatsApp
                </Link>
                <p className="text-secondary mt-4">
                  GST REGISTRATION NUMBER: 23DEOPG6721R1ZX
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border text-center text-sm text-secondary">
              <p>WebNexaAI&apos;s, All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
