'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

interface TimelineEventProps {
  date: string
  title: string
  description: string
  details: string
  images: string[]
}

export default function TimelineEvent({ date, title, description, details, images }: TimelineEventProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8 flex justify-between items-center w-full">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-primary-foreground">{date.split('-')[2]}</h1>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 cursor-pointer hover:bg-accent transition-colors duration-200">
            <h3 className="mb-3 font-bold text-primary text-xl">{title}</h3>
            <p className="text-sm leading-snug tracking-wide text-muted-foreground">{description}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-muted-foreground">{details}</p>
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
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
        </DialogContent>
      </Dialog>
    </div>
  )
}

