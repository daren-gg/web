"use client"

import { useEffect, useState } from "react"

export function AppStoreBadge() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    // Initial check
    checkDarkMode()

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="inline-block transition-transform duration-300 ease-out hover:scale-110">
      <img
        src={isDark ? "/badges/app-store-white.svg" : "/badges/app-store-black.svg"}
        alt="Download on the Mac App Store"
        className="h-12 w-auto"
      />
    </div>
  )
}
