"use client"

import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, Canvas } from '@react-three/fiber'

// Simplified floating particle component
const FloatingParticle = ({
  position,
  size,
  color,
  speed
}: {
  position: [number, number, number],
  size: number,
  color: string,
  speed: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const initialY = useRef(position[1])

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    const time = clock.getElapsedTime()

    // Gentle floating animation
    meshRef.current.position.y = initialY.current + Math.sin(time * speed) * 0.5
    meshRef.current.rotation.z = time * speed * 0.2
  })

  return (
    <mesh ref={meshRef} position={position}>
      <circleGeometry args={[size, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

// Simplified particles field
const ParticlesField = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 5
      ] as [number, number, number],
      size: Math.random() * 0.15 + 0.05,
      color: Math.random() > 0.5 ? '#3b82f6' : '#6366f1',
      speed: Math.random() * 0.3 + 0.1
    }))
  }, [])

  return (
    <group>
      {particles.map((particle, i) => (
        <FloatingParticle
          key={i}
          position={particle.position}
          size={particle.size}
          color={particle.color}
          speed={particle.speed}
        />
      ))}
    </group>
  )
}

// Simplified geometric shapes component
const GeometricShapes = () => {
  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 3
      ] as [number, number, number],
      size: Math.random() * 0.8 + 0.3,
      color: Math.random() > 0.5 ? '#1e40af' : '#3730a3',
      rotationSpeed: Math.random() * 0.2 + 0.05,
      shape: Math.random() > 0.5 ? 'box' : 'octahedron'
    }))
  }, [])

  return (
    <group>
      {shapes.map((shape, i) => (
        <GeometricShape
          key={i}
          position={shape.position}
          size={shape.size}
          color={shape.color}
          rotationSpeed={shape.rotationSpeed}
          shape={shape.shape}
        />
      ))}
    </group>
  )
}

// Individual geometric shape
const GeometricShape = ({
  position,
  size,
  color,
  rotationSpeed,
  shape
}: {
  position: [number, number, number],
  size: number,
  color: string,
  rotationSpeed: number,
  shape: string
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    const time = clock.getElapsedTime()
    meshRef.current.rotation.x = time * rotationSpeed
    meshRef.current.rotation.y = time * rotationSpeed * 0.7
  })

  const renderGeometry = () => {
    switch(shape) {
      case 'box':
        return <boxGeometry args={[size, size, size]} />
      case 'octahedron':
        return <octahedronGeometry args={[size]} />
      default:
        return <boxGeometry args={[size, size, size]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshBasicMaterial color={color} transparent opacity={0.15} wireframe />
    </mesh>
  )
}

// Main scene component
const Scene = () => {
  return (
    <group>
      <ParticlesField />
      <GeometricShapes />
    </group>
  )
}

// Main component with performance optimizations
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
        gl={{
          antialias: false, // Disable antialiasing for performance
          powerPreference: 'high-performance',
          alpha: true
        }}
      >
        <color attach="background" args={['#0f172a']} />
        <Scene />
      </Canvas>
    </div>
  )
}
