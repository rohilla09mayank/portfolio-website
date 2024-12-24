'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SectionHeading from '@/components/section-heading'

const workTypes = [
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'development', label: 'Development' },
  { value: 'data-science', label: 'Data Science' }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    workType: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent, type: 'collaboration' | 'job') => {
    e.preventDefault()
    console.log('Submitting form:', { ...formData, type })
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeading 
            title="Let's Work Together" 
            subtitle="GET IN TOUCH"
          />
          
          <form className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name *
                </label>
                <input
                  required
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="designation" className="block text-sm font-medium mb-2">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="workType" className="block text-sm font-medium mb-2">
                Work Type
              </label>
              <Select 
                value={formData.workType} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, workType: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select work type" />
                </SelectTrigger>
                <SelectContent>
                  {workTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e, 'collaboration')}
                className="flex-1 inline-flex justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit for Collaboration
              </button>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e, 'job')}
                className="flex-1 inline-flex justify-center rounded-full border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Submit for Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

