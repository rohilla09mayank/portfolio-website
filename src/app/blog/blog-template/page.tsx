import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogTemplate() {
  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Post Title</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span>Author Name</span>
          <span>•</span>
          <time dateTime="2023-12-15">December 15, 2023</time>
          <span>•</span>
          <div className="flex flex-wrap gap-2">
            {['Web Development', 'React', 'Next.js'].map(tag => (
              <span key={tag} className="bg-secondary px-2 py-1 rounded-full text-xs">{tag}</span>
            ))}
          </div>
        </div>
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Blog post main image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mb-12">Image description goes here</p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>Section Heading</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="relative aspect-video my-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Additional blog image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground italic mb-8">Caption for the additional image</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>Another Section Heading</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map(index => (
            <Link key={index} href={`/blog/blog-${index}`} className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Related+Blog+${index}`}
                    alt={`Related Blog ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Related Blog Post Title {index}</h3>
                  <p className="text-muted-foreground">December 10, 2023</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

