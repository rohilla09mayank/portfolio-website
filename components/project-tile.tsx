import Image from 'next/image'
import Link from 'next/link'

interface ProjectTileProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export default function ProjectTile({ title, description, image, technologies, link }: ProjectTileProps) {
  return (
    <Link href={link} className="block">
      <div className="bg-card rounded-lg shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden dark:bg-gray-800">
        <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

