'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    date: '2023-05-01',
    excerpt: 'This is a brief excerpt of the first blog post...',
    image: '/placeholder.svg?height=200&width=400',
    reads: 1200,
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    title: 'Blog Post 2',
    date: '2023-04-15',
    excerpt: 'This is a brief excerpt of the second blog post...',
    image: '/placeholder.svg?height=200&width=400',
    reads: 980,
    likes: 32,
    comments: 8,
  },
  {
    id: 3,
    title: 'Blog Post 3',
    date: '2023-03-30',
    excerpt: 'This is a brief excerpt of the third blog post...',
    image: '/placeholder.svg?height=200&width=400',
    reads: 1500,
    likes: 60,
    comments: 20,
  },
]

export default function BlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + blogPosts.length) % blogPosts.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / blogPosts.length) * 100}%)` }}
        >
          {blogPosts.map((post) => (
            <div key={post.id} className="w-1/2 flex-shrink-0 px-4">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="bg-card rounded-lg shadow overflow-hidden dark:bg-gray-800">
                  <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{post.reads} reads</span>
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </Link>
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

