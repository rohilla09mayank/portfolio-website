import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import ProjectTile from '@/components/project-tile'
import BlogSlider from '@/components/blog-slider'
import ContactForm from '@/components/contact-form'
import PersonalInfo from '@/components/personal-info'
import ClientLogos from '@/components/client-logos'
import QuoteSection from '@/components/quote-section'
import SectionHeading from '@/components/section-heading'
import InfiniteSlider from '@/components/infinite-slider'
import BlogTile from '@/components/blog-tile'

export default function Home() {
  const socialActivities = [
    {
      platform: "X",
      handle:'@mayankrohilla',
      content: "Just published a new blog post on React hooks!",
      date: "2023-12-15",
      image: "/Images/icons8-twitterx-100.png"
    },
    {
      platform: "LinkedIn",
      handle:'@mayank17299',
      content: "Excited to announce my new role as a Senior Developer!",
      date: "2023-12-10",
      image: "/Images/icons8-linkedin-100.png"
    },
    {
      platform: "Github",
      handle:'@mayank21rohilla',
      content: "Merged a major feature into my open-source project.",
      date: "2023-12-05",
      image: "/Images/icons8-github-100.png"
    },
    {
      platform: "Instagram",
      handle:'@mayankrohilla21',
      content: "Behind the scenes of my latest coding session.",
      date: "2023-12-01",
      image: "/Images/icons8-instagram-100.png"
    }
  ]
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ['Next.js', 'React', 'Node.js'],
      slug: "e-commerce-platform"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization with machine learning insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ['Python', 'TensorFlow', 'React'],
      slug: "ai-analytics-dashboard"
    },
    {
      title: "Mobile App for Fitness Tracking",
      description: "Cross-platform app for personalized workout plans.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ['React Native', 'Firebase', 'Redux'],
      slug: "fitness-tracking-app"
    },
    {
      title: "Blockchain-based Supply Chain",
      description: "Transparent and secure supply chain management system.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ['Ethereum', 'Solidity', 'Web3.js'],
      slug: "blockchain-supply-chain"
    },
    {
      title: "Virtual Reality Education Platform",
      description: "Immersive learning experiences for students worldwide.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ['Unity', 'C#', 'WebGL'],
      slug: "vr-education-platform"
    },
    {
      title: "IoT Smart Home System",
      description: "Centralized control for connected home devices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ['Raspberry Pi', 'MQTT', 'Node.js'],
      slug: "iot-smart-home"
    }
  ]

  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of web development and what it means for developers.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
      date: "2023-12-15",
      tags: ["AI", "Web Development"],
      slug: "future-of-ai-in-web-development"
    },
    {
      title: "Building Scalable Microservices with Docker",
      excerpt: "A comprehensive guide to creating and managing microservices architecture using Docker containers.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
      date: "2023-12-10",
      tags: ["Microservices", "Docker"],
      slug: "scalable-microservices-with-docker"
    },
    {
      title: "Mastering TypeScript: Advanced Techniques",
      excerpt: "Dive deep into TypeScript's advanced features and learn how to write more robust and maintainable code.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
      date: "2023-12-05",
      tags: ["TypeScript", "JavaScript"],
      slug: "mastering-typescript-advanced-techniques"
    },
    {
      title: "The Rise of Edge Computing in Modern Web Architecture",
      excerpt: "Understand the benefits and challenges of edge computing and its impact on web application performance.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
      date: "2023-11-30",
      tags: ["Edge Computing", "Web Architecture"],
      slug: "rise-of-edge-computing"
    },
    {
      title: "Implementing Secure Authentication with JWT",
      excerpt: "Step-by-step guide to implementing JSON Web Tokens for secure user authentication in web applications.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
      date: "2023-11-25",
      tags: ["Security", "Authentication"],
      slug: "secure-authentication-with-jwt"
    },
    {
      title: "Optimizing React Performance: Best Practices",
      excerpt: "Learn advanced techniques to boost the performance of your React applications and deliver smoother user experiences.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHwy",
      date: "2023-11-20",
      tags: ["React", "Performance"],
      slug: "optimizing-react-performance"
    }
  ]

  return (
    <div className="space-y-24">
      <section className="min-h-[80vh] flex items-center pt-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-[900px] mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              {/* The{' '} <span className="text-primary">Art</span>{' '}of{' '} Digital{' '} <span className="text-primary">Engineering</span>{' '} */}

              Solutions{' '}that{' '}Blend{' '}
              <span className="text-primary">Art</span>{' '}
              & {' '}
              <span className="text-primary">Tech</span>{' '}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[700px] mx-auto">
              I'm Mayank Rohilla, passionate about pushing the boundaries in the digital world. I combine full-stack development skills with a keen eye for design and data-driven insights to create impactful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 w-full sm:w-auto"
              >
                Let's Collaborate
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
              >
                View Projects
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-x-8 pt-6">
              <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Data Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-center mb-8 font-medium tracking-[0.1em] uppercase text-secondary-foreground">Our Clients</h2>
          <ClientLogos />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <PersonalInfo />
      </section>

      <QuoteSection />

      <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Solutions I've Built" subtitle="PROJECTS" />
        <div className="mt-12 space-y-8">
          <InfiniteSlider itemsToShow={3} smItemsToShow={2} mdItemsToShow={2} lgItemsToShow={3}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <ProjectTile {...project} />
              </div>
            ))}
          </InfiniteSlider>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="From the Blog" subtitle="INSIGHTS & THOUGHTS" />
        <div className="mt-12 space-y-8">
          <InfiniteSlider itemsToShow={1} smItemsToShow={2} mdItemsToShow={2} lgItemsToShow={3}>
            {blogPosts.map((post, index) => (
              <div key={index} className="px-2">
                <BlogTile {...post} />
              </div>
            ))}
          </InfiniteSlider>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      <section id="activities" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <SectionHeading title="Recent Activities" subtitle="SOCIAL MEDIA" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialActivities.map((activity, index) => (
              <div key={index} className="bg-card rounded-lg shadow overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Image
                      src={activity.image}
                      alt={activity.platform + 'by Icon8'}
                      width={40}
                      height={40}
                      className="text-primary mr-2 invert mix-blend-difference"
                    />
                    <div>
                      <h3 className="font-semibold">{activity.handle}</h3>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                  <p className="text-sm">{activity.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

