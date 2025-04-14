"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export function ScrollingLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled through all logos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-12 overflow-x-auto scrollbar-hide py-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Double the logos to create seamless scrolling effect */}
        {[...Array(16)].map((_, i) => (
          <Image
            key={i}
            src="/Images/client/shell.png"
            alt="Amazon"
            width={100}
            height={30}
            className="opacity-70 hover:opacity-100 transition flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}
