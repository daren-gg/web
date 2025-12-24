"use client"

import { useState } from "react"

const wolfVariants = [
  "/wolves/wolf_cyan.png",
  "/wolves/wolf_green.png",
  "/wolves/wolf_mustard.png",
  "/wolves/wolf_pink.png",
  "/wolves/wolf_red.png",
]

export function WolfLogo({ className = "h-8 w-8 object-contain" }: { className?: string }) {
  const [currentWolf, setCurrentWolf] = useState("/wolf-logo.png")

  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * wolfVariants.length)
    setCurrentWolf(wolfVariants[randomIndex])
  }

  const handleMouseLeave = () => {
    setCurrentWolf("/wolf-logo.png")
  }

  return (
    <img
      src={currentWolf}
      alt="daren.gg logo"
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}
