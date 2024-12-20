import TimelineEvent from '@/components/timeline-event'

const events = [
  {
    date: "2023-06-15",
    title: "Senior Full Stack Developer",
    description: "Joined TechCorp as a Senior Full Stack Developer, leading a team of 5 developers.",
    details: "As a Senior Full Stack Developer at TechCorp, I'm responsible for architecting and implementing scalable web applications. I lead a team of 5 developers, mentor junior team members, and collaborate with product managers to deliver high-quality software solutions.",
    images: [
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280"
    ]
  },
  {
    date: "2022-03-10",
    title: "Full Stack Developer",
    description: "Promoted to Full Stack Developer at InnoSoft, taking on more responsibilities in both frontend and backend development.",
    details: "In my role as a Full Stack Developer at InnoSoft, I worked on a variety of projects using technologies such as React, Node.js, and PostgreSQL. I was responsible for implementing new features, optimizing database queries, and improving the overall performance of our applications.",
    images: [
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280"
    ]
  },
  {
    date: "2021-01-05",
    title: "Frontend Developer",
    description: "Started as a Frontend Developer at InnoSoft, focusing on creating responsive and interactive user interfaces.",
    details: "As a Frontend Developer at InnoSoft, I specialized in building responsive and interactive user interfaces using React and TypeScript. I worked closely with the design team to implement pixel-perfect designs and ensure a smooth user experience across all devices.",
    images: [
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280"
    ]
  },
  {
    date: "2020-06-20",
    title: "Software Engineering Intern",
    description: "Completed a summer internship at StartupX, gaining hands-on experience in agile development methodologies.",
    details: "During my internship at StartupX, I worked on a variety of projects that helped me gain practical experience in software development. I participated in daily stand-ups, sprint planning, and retrospectives, learning the ins and outs of agile development methodologies.",
    images: [
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280"
    ]
  },
  {
    date: "2020-05-15",
    title: "Bachelor's Degree in Computer Science",
    description: "Graduated with honors from Tech University with a Bachelor's degree in Computer Science.",
    details: "Completed my Bachelor's degree in Computer Science at Tech University, graduating with honors. My coursework included advanced algorithms, database systems, web development, and machine learning. I also participated in various hackathons and coding competitions during my time at the university.",
    images: [
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280",
      "/placeholder.svg?height=200&width=280"
    ]
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-primary h-full border left-1/2"></div>
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            details={event.details}
            images={event.images}
          />
        ))}
      </div>
    </div>
  )
}

