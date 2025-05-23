"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

// Dynamically import backgrounds to avoid SSR issues
const ThreeBackground = dynamic(
  () => import("./three-background"),
  { ssr: false }
)

const CSSBackground = dynamic(
  () => import("./css-background"),
  { ssr: false }
)

export default function BackgroundWrapper() {
  const [useThreeJS, setUseThreeJS] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if device has good performance for Three.js
    const hasGoodPerformance = window.navigator.hardwareConcurrency > 4
    setUseThreeJS(hasGoodPerformance)
  }, [])

  if (!isClient) {
    return <CSSBackground />
  }

  return useThreeJS ? <ThreeBackground /> : <CSSBackground />
}
