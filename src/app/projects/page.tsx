'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import ProjectListItem from '@/components/project-list-item'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SectionHeading from '@/components/section-heading'
import Link from 'next/link'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring product listings, shopping cart, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    projectLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    domain: "Development"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, user authentication, and team features.",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    projectLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    domain: "Development"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "An interactive dashboard that uses machine learning to provide insights from user data and predict trends.",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    projectLink: "https://example-analytics.com",
    githubLink: "https://github.com/yourusername/analytics-dashboard",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    domain: "Data Science"
  },
  {
    title: "Mobile App Design System",
    description: "A comprehensive design system for mobile applications, including component library and usage guidelines.",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
    projectLink: "https://example-design.com",
    githubLink: "https://github.com/yourusername/design-system",
    technologies: ["Figma", "Storybook", "React Native"],
    domain: "UI/UX Design"
  }
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDomain, setSelectedDomain] = useState<string>('all')
  const [selectedTech, setSelectedTech] = useState<string>('all')
  const [sortBy, setSortBy] = useState('newest')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDomain = selectedDomain === 'all' || project.domain === selectedDomain
    const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech)
    return matchesSearch && matchesDomain && matchesTech
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'alphabetical') {
      return a.title.localeCompare(b.title)
    }
    // Add more sorting options as needed
    return 0
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-background to-secondary/20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Crafting Digital Excellence
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Discover my portfolio of digital projects, demonstrating my skills in <strong>Web Development</strong>,<strong> UI/UX design</strong> and <strong>Data Science</strong>.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-1486546910464-ec8e45c4a137?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFic3RyYWN0fGVufDB8fDB8fHwy`}
                      alt={`Project ${i}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* <SectionHeading title="Featured Projects" subtitle="MY WORK" /> */}

          {/* Search and Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search projects..."
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
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Filter by domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Domains</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedTech} onValueChange={setSelectedTech}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Filter by tech" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Technologies</SelectItem>
                <SelectItem value="React">React</SelectItem>
                <SelectItem value="Next.js">Next.js</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="Node.js">Node.js</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Projects List */}
          <div className="space-y-12 mt-12">
            {sortedProjects.map((project, index) => (
              <ProjectListItem key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

