import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProjectTemplate() {
  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <Link href="/projects" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Title</h1>
              <p className="text-xl text-muted-foreground mb-6">A brief description of the project and its main features.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project Screenshot"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
            <p className="text-lg mb-12">
              Describe the problem that this project aims to solve. What were the challenges or pain points that inspired the creation of this solution?
            </p>

            <h2 className="text-3xl font-bold mb-6">How It's Built</h2>
            <p className="text-lg mb-12">
              Explain the technologies, frameworks, and methodologies used to build this project. Discuss any interesting technical challenges and how they were overcome.
            </p>

            <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Screenshot+${index}`}
                    alt={`Project screenshot ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">How to Use</h2>
            <p className="text-lg mb-6">
              Provide instructions on how to use or access the project. Include any necessary setup steps, configuration, or user guide information.
            </p>

            <h2 className="text-3xl font-bold mb-6">How to Run the Project</h2>
            <div className="bg-secondary rounded-lg p-6 mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Installation</h3>
                <CopyButton text="npm install
npm run dev" />
              </div>
              <pre className="bg-background p-4 rounded-md overflow-x-auto">
                <code>{`npm install
npm run dev`}</code>
              </pre>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/example/project-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Github className="mr-2 h-4 w-4" />
                View Repository
              </a>
              <a
                href="https://example-project.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0"
      onClick={copyToClipboard}
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="sr-only">Copy code</span>
    </Button>
  )
}

