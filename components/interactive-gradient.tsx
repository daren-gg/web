"use client"

import { useEffect, useState, useRef } from "react"

export function InteractiveGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isInside, setIsInside] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()

        // Check if mouse is over the navigation header (first 64px from top)
        const isOverHeader = e.clientY < 64

        const isMouseInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom &&
          !isOverHeader

        setIsInside(isMouseInside)

        if (isMouseInside) {
          // Convert mouse position to percentage relative to the container
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          setMousePosition({ x, y })
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Interactive Gradients - Perfectly Circular, Stacked Vertically */}
      <div
        className="absolute transition-all duration-700 ease-out"
        style={{
          width: '700px',
          height: '700px',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.6) 0%, rgba(96, 165, 250, 0.3) 30%, rgba(96, 165, 250, 0) 60%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: isInside ? 0.1 : 0,
        }}
      />
      <div
        className="absolute transition-all duration-900 ease-out"
        style={{
          width: '700px',
          height: '700px',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y - 3}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.6) 0%, rgba(167, 139, 250, 0.3) 30%, rgba(167, 139, 250, 0) 60%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: isInside ? 0.1 : 0,
        }}
      />
      <div
        className="absolute transition-all duration-800 ease-out"
        style={{
          width: '600px',
          height: '600px',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y + 3}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.5) 0%, rgba(34, 211, 238, 0.2) 30%, rgba(34, 211, 238, 0) 60%)',
          filter: 'blur(90px)',
          borderRadius: '50%',
          opacity: isInside ? 0.08 : 0,
        }}
      />
    </div>
  )
}
