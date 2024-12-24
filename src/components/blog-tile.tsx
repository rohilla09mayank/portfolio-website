import Image from 'next/image'
import Link from 'next/link'

interface BlogTileProps {
  title: string
  excerpt: string
  image: string
  date: string
  tags: string[]
}

export default function BlogTile({ title, excerpt, image, date, tags }: BlogTileProps) {
  return (
    <Link href="/blog/blog-template" className="group block">
      <div className="space-y-4 bg-card rounded-lg overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-lg h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={338}
            className="transition-transform duration-300 group-hover:scale-105 object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-medium line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="text-sm text-muted-foreground">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </Link>
  )
}

