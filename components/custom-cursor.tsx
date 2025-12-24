"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleDocumentLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
    }

    const handleDocumentEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)
    document.addEventListener('mouseleave', handleDocumentLeave)
    document.addEventListener('mouseenter', handleDocumentEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      document.removeEventListener('mouseleave', handleDocumentLeave)
      document.removeEventListener('mouseenter', handleDocumentEnter)
    }
  }, [isVisible])

  return (
    <>
      {/* Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] top-0 left-0"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      >
        <svg
          width={isHovering ? "20" : "16"}
          height={isHovering ? "20" : "16"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 transition-all duration-200"
          style={{ transform: 'translate(-2px, -2px)' }}
        >
          <path
            d="M2 2L18 10L9 11L6 18L2 2Z"
            fill="white"
            stroke="black"
            strokeWidth={isHovering ? "1.5" : "1"}
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Global styles to hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
