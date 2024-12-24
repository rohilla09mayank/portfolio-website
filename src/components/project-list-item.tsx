import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectListItemProps {
  title: string
  description: string
  image: string
  projectLink: string
  githubLink: string
  technologies: string[]
  domain: string
}

export default function ProjectListItem({
  title,
  description,
  image,
  projectLink,
  githubLink,
  technologies,
  domain,
}: ProjectListItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 group">
      <div className="w-full md:w-1/4 relative aspect-video md:aspect-square">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="w-full md:w-3/4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              {domain}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href='/projects/project-template'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> View Project
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

