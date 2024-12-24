'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const blogs = [
  {
    id: 'featured',
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "As we approach 2024, the web development landscape continues to evolve at a rapid pace. From new frameworks to innovative design paradigms, here's what you need to know to stay ahead of the curve.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2023-12-20",
    tags: ["Web Development", "Future Trends"],
    author: "Mayank Rohilla",
    readTime: "10 min read"
  },
  {
    id: 'blog-2',
    title: "Mastering React Server Components",
    excerpt: "Deep dive into React Server Components and how they're revolutionizing web development.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-12-15",
    tags: ["React", "Web Development"],
    author: "Mayank Rohilla",
    readTime: "8 min read"
  },
  {
    id: 'blog-3',
    title: "The Power of TypeScript in Large Applications",
    excerpt: "How TypeScript improves developer experience and reduces bugs in large-scale applications.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-12-10",
    tags: ["TypeScript", "Development"],
    author: "Mayank Rohilla",
    readTime: "12 min read"
  },
  {
    id: 'blog-4',
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for building robust and scalable APIs using Node.js and Express.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-12-05",
    tags: ["Node.js", "Backend"],
    author: "Mayank Rohilla",
    readTime: "15 min read"
  },
  {
    id: 'blog-5',
    title: "UI/UX Design Trends for 2024",
    excerpt: "Exploring the latest trends in user interface and experience design.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-12-01",
    tags: ["UI/UX", "Design"],
    author: "Mayank Rohilla",
    readTime: "7 min read"
  },
  {
    id: 'blog-6',
    title: "Introduction to Data Science with Python",
    excerpt: "Getting started with data science using Python and popular libraries.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-11-25",
    tags: ["Data Science", "Python"],
    author: "Mayank Rohilla",
    readTime: "20 min read"
  },
  {
    id: 'blog-7',
    title: "Mobile-First Design Philosophy",
    excerpt: "Why mobile-first design is crucial in today's web development landscape.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-11-20",
    tags: ["Design", "Mobile"],
    author: "Mayank Rohilla",
    readTime: "9 min read"
  },
  {
    id: 'blog-8',
    title: "Advanced Git Workflows",
    excerpt: "Mastering complex Git workflows for better team collaboration.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-11-15",
    tags: ["Git", "Development"],
    author: "Mayank Rohilla",
    readTime: "11 min read"
  },
  {
    id: 'blog-9',
    title: "The Rise of AI in Web Development",
    excerpt: "How artificial intelligence is shaping the future of web development.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-11-10",
    tags: ["AI", "Web Development"],
    author: "Mayank Rohilla",
    readTime: "13 min read"
  },
  {
    id: 'blog-10',
    title: "Performance Optimization Techniques",
    excerpt: "Essential techniques for optimizing web application performance.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    date: "2023-11-05",
    tags: ["Performance", "Web Development"],
    author: "Mayank Rohilla",
    readTime: "14 min read"
  }
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const featuredPost = blogs[0]
  const remainingPosts = blogs.slice(1)

  const filteredPosts = remainingPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return a.title.localeCompare(b.title)
  })

  return (
    <div className="min-h-screen">
      {/* Featured Post */}
      <article className="relative">
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="container mx-auto px-4">
          <div className="relative -mt-32 max-w-2xl">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold">{featuredPost.title}</h1>
              <p className="text-lg text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featuredPost.author}</span>
                <span>•</span>
                <time>{new Date(featuredPost.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric'
                        })}</time>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-input bg-background"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Most Recent</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Filter by tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map(post => (
              <Link key={post.id} href={`/blog/blog-template`} className="group">
                <article className="space-y-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time>{new Date(post.date).toLocaleDateString()}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

