"use client"

export default function CSSBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/30 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rotate-12 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-400/30 rotate-45 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-indigo-400/30 rotate-12 animate-float animation-delay-6000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/20 to-slate-900/60"></div>
      
      {/* Top and bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80"></div>
    </div>
  )
}
