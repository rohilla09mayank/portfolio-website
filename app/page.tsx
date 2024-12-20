import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, Github, Linkedin, Instagram } from 'lucide-react'
import ProjectTile from '@/components/project-tile'
import BlogSlider from '@/components/blog-slider'
import ContactForm from '@/components/contact-form'
import PersonalInfo from '@/components/personal-info'
import SocialMediaSlider from '@/components/social-media-slider'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[calc(100vh-4rem)]">
        <div className="space-y-6 w-full md:w-1/2">
          <h1 className="text-4xl font-bold">Hello, I'm Mayank Rohilla</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer | UI/UX Designer | Data Scientist
          </p>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            I'm a passionate developer with expertise in creating beautiful, functional, and data-driven applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="#collaborate"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
            >
              Contact Me
            </Link>
            <Link 
              href="#projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 aspect-square relative">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Mayank Rohilla"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <PersonalInfo />

      <section id="projects">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link href="/projects" className="inline-flex items-center text-primary hover:underline">
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectTile
            title="Project 1"
            description="A brief description of your project"
            image="/placeholder.svg?height=200&width=200"
            technologies={['react', 'nextjs', 'typescript']}
            link="/projects/project-1"
          />
          <ProjectTile
            title="Project 2"
            description="Another brief description"
            image="/placeholder.svg?height=200&width=200"
            technologies={['python', 'django', 'postgresql']}
            link="/projects/project-2"
          />
          <ProjectTile
            title="Project 3"
            description="Yet another brief description"
            image="/placeholder.svg?height=200&width=200"
            technologies={['vue', 'nodejs', 'mongodb']}
            link="/projects/project-3"
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Blog Posts</h2>
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <BlogSlider />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
                i % 3 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ paddingBottom: '100%' }}
            >
              <Image
                src={`/placeholder.svg?height=${200 + i * 50}&width=${200 + i * 50}`}
                alt={`Certificate ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="collaborate" className="space-y-8">
        <h2 className="text-2xl font-semibold">Let's Collaborate</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex flex-col space-y-4">
              <a href="https://github.com/rohilla09mayank/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mayank-rohilla-9100541a7/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+918800537594</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:rohilla.mayankr@gmail.com" className="hover:underline">rohilla.mayankr@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Recent Activities</h2>
        <SocialMediaSlider />
      </section>
    </div>
  )
}

