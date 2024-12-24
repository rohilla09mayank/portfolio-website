'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const socialMediaPosts = [
  {
    id: 1,
    platform: 'Twitter',
    content: 'Just published a new blog post on React hooks!',
    date: '2023-05-01',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    platform: 'LinkedIn',
    content: 'Excited to announce my new role as a Senior Developer!',
    date: '2023-04-28',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    platform: 'GitHub',
    content: 'Merged a major feature into my open-source project.',
    date: '2023-04-25',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 4,
    platform: 'Instagram',
    content: 'Behind the scenes of my latest coding session.',
    date: '2023-04-22',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 5,
    platform: 'Twitter',
    content: 'Thoughts on the latest JavaScript framework?',
    date: '2023-04-20',
    image: '/placeholder.svg?height=100&width=100',
  },
]

export default function SocialMediaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % socialMediaPosts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + socialMediaPosts.length) % socialMediaPosts.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {socialMediaPosts.map((post) => (
            <div key={post.id} className="w-1/3 flex-shrink-0 px-4">
              <div className="bg-card rounded-lg shadow overflow-hidden dark:bg-gray-800">
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Image 
                      src={post.image || '/placeholder.svg?height=40&width=40'} 
                      alt={post.platform}
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <div>
                      <h3 className="font-semibold">{post.platform}</h3>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                  <p className="text-sm">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow dark:bg-gray-700"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-background/80 p-2 rounded-full shadow dark:bg-gray-700"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

