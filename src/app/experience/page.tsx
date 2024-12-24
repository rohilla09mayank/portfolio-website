'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownToLine } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import SectionHeading from '@/components/section-heading'

interface TimelineEvent {
  date: string
  title: string
  description: string
  details: string
  images: string[]
}

const events: TimelineEvent[] = [
  {
    date: "2019-05-01",
    title: "Internship",
    description: "First internship at Galific Arts.",
    details: "Gained initial experience in [mention specific skills or technologies used, e.g., web design, front-end development, etc.]. Contributed to [mention specific projects or tasks].",
    images: []
  },
  {
    date: "2020-06-10",
    title: "Freelance Web Developer",
    description: "First freelancing project for Unigo Cabs.",
    details: "Developed [mention what you developed, e.g., a landing page, a web application feature] using [mention technologies used]. This project allowed me to gain experience in [mention specific skills gained, e.g., client communication, project management, specific technologies].",
    images: []
  },
  {
    date: "2021-03-01", // Replace XX with the exact day if you know it
    title: "Mobile Application Team Lead",
    description: "Promoted to Team Lead for Mobile Application Development at Unigo Cabs.",
    details: "Led a team of [number] developers in the development of [mention the app or type of app]. Responsibilities included [mention key responsibilities, e.g., project planning, task delegation, code reviews, mentoring junior developers]. Achieved [mention key achievements, quantifying them if possible, e.g., launched the app on time and within budget, improved app store ratings by X points].",
    images: []
  },
  {
    date: "2021-09-05",
    title: "Frontend Developer",
    description: "Started as a Frontend Developer at TeamArcs.",
    details: "Focused on building user interfaces using [mention technologies, e.g., React, JavaScript, HTML, CSS]. Key responsibilities included [mention 1-2 key responsibilities, e.g., developing reusable components, implementing responsive designs].",
    images: []
  },
  {
    date: "2022-12-24",
    title: "Software Developer",
    description: "Joined Almasons as a Software Developer.",
    details: "Worked on [mention the type of projects or products] using [mention technologies]. Contributed to [mention key contributions or achievements, quantifying them if possible].",
    images: []
  }
]

const skills = [
  { name: "JAVASCRIPT", icon: "/placeholder.svg?height=40&width=40" },
  { name: "TYPESCRIPT", icon: "/placeholder.svg?height=40&width=40" },
  { name: "FIREBASE", icon: "/placeholder.svg?height=40&width=40" },
  { name: "REACT JS/TS", icon: "/placeholder.svg?height=40&width=40" },
  { name: "HTML", icon: "/placeholder.svg?height=40&width=40" },
  { name: "CSS", icon: "/placeholder.svg?height=40&width=40" },
  { name: "SCSS", icon: "/placeholder.svg?height=40&width=40" },
  { name: "GIT", icon: "/placeholder.svg?height=40&width=40" },
  { name: "REACT-ROUTER-DOM", icon: "/placeholder.svg?height=40&width=40" }
]

export default function ExperiencePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {/* A Look <span className='text-primary'>Back</span> Looking <span className='text-primary'>Forward</span> */}
              My Digital <span className='text-primary'>Footprint.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                My journey has been marked by both challenges and triumphs. This timeline highlights key milestones that demonstrate my growth, learning and the evolution of my skills. Each experience has provided valuable lessons and contributed to my ability to create impactful digital solutions. From overcoming early coding hurdles to achieving significant project milestones, this is my story so far.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-1549241520-425e3dfc01cb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                      alt={`Experience ${i}`}
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

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mayank Rohilla"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">MY SKILLS</h2>
                <div className="grid grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {/* <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="rounded-sm"
                      /> */}
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">ALSO SOME BUNCH OF ORDINARY SKILLS:</h3>
                <p className="text-sm text-muted-foreground">
                  STYLED-COMPONENTS, ADOBE XD, FIGMA, LINUX, MACOS, WINDOWS.
                </p>
              </div>
              <Link
                href="/cv.pdf"
                className="inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent"
              >
                Get my resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading title="Experience" subtitle="CAREER PATH" />
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-0 sm:left-1/2 -ml-px h-full w-px border-l border-dashed border-border" />

              {/* Timeline events */}
              <div className="space-y-12">
                {events.map((event, index) => (
                  <div key={index} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Date capsule - always on top for mobile, centered for larger screens */}
                    <div className="mb-4 sm:mb-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`w-full sm:w-[calc(50%-2rem)] cursor-pointer group ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:ml-auto'
                        }`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="bg-card p-6 rounded-lg hover:bg-accent/50 transition-colors">
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-[625px]">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedEvent.title}</DialogTitle>
                <div className="text-sm text-muted-foreground">
                  {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {selectedEvent.details.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedEvent.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Event image ${index + 1}`}
                      width={280}
                      height={200}
                      className="rounded-md object-cover"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

