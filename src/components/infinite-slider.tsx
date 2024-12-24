'use client'

import { useState, useEffect, ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface InfiniteSliderProps {
  children: ReactNode[]
  itemsToShow: number
  smItemsToShow?: number
  mdItemsToShow?: number
  lgItemsToShow?: number
  xlItemsToShow?: number
}

export default function InfiniteSlider({
  children,
  itemsToShow = 1,
  smItemsToShow = 2,
  mdItemsToShow = 2,
  lgItemsToShow = 3,
  xlItemsToShow = 3
}: InfiniteSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(itemsToShow)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const nextSlide = () => {
    if (currentIndex < children.length - visibleItems) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
    }
    else{
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? children.length - visibleItems : prevIndex - 1
    )
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 768) {
        setIsSmallScreen(true) // Disable slider on smaller screens
        setVisibleItems(2) // Display 2 tiles in a grid
      } else {
        setIsSmallScreen(false) // Enable slider for medium screens and above
        if (width >= 1280 && xlItemsToShow) {
          setVisibleItems(xlItemsToShow) // Extra large screens (>= 1280px)
        } else if (width >= 1024 && lgItemsToShow) {
          setVisibleItems(lgItemsToShow) // Large screens (>= 1024px)
        } else if (width >= 768 && mdItemsToShow) {
          setVisibleItems(mdItemsToShow) // Medium screens (>= 768px)
        } else {
          setVisibleItems(itemsToShow) // Default fallback
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [itemsToShow, smItemsToShow, mdItemsToShow, lgItemsToShow, xlItemsToShow])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isSmallScreen) nextSlide()
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [children.length, isSmallScreen])

  if (isSmallScreen) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {children.slice(0, 2).map((child, index) => (
          <div key={index} className="p-2">
            {child}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            width: `${(children.length * 50) / visibleItems}%`
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${100 / visibleItems}%` // Adjust tile size dynamically
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg hover:bg-accent"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg hover:bg-accent"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
