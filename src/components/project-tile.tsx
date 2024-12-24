import Image from 'next/image'
import Link from 'next/link'

interface ProjectTileProps {
  title: string
  description: string
  image: string
  technologies: string[]
}

export default function ProjectTile({ title, description, image, technologies }: ProjectTileProps) {
  return (
    <Link href="/projects/project-template" className="group block">
      <div className="space-y-4 bg-card rounded-lg overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-lg h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image || '/placeholder.svg?height=400&width=600'}
            alt={title}
            width={600}
            height={400}
            className="transition-transform duration-300 group-hover:scale-105 object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div key={tech} className="flex items-center space-x-1">
                <Image
                  src={`/placeholder.svg?height=16&width=16`}
                  alt={tech}
                  width={16}
                  height={16}
                  className="rounded-sm"
                />
                <span className="text-xs text-muted-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

