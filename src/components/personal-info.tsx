import { ArrowUpRight } from 'lucide-react'

export default function PersonalInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-primary">MAYANK ROHILLA | FULL STACK DEVELOPER</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                Crafting Digital Experiences with a Personal Touch.
              </h3>
            </div>
            <a
              href="/cv.pdf"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View CV
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              I'm Mayank Rohilla, a problem-solver at heart. I approach every project with a curious and analytical mindset, seeking to understand the underlying needs and challenges before diving into solutions. I breaking down complex problems into manageable pieces and finding creative ways to overcome obstacles.
            </p>
            <p className="text-lg text-muted-foreground">
              I enjoy working closely with others to understand their needs and bring their ideas to life. I'm passionate about creating solutions that meets technical requirements and deliver lasting value.
            </p>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground mb-1 uppercase">Experience</dt>
                <dd className="text-highcolor font-medium text-lg">3+ Years</dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-1 uppercase">Projects</dt>
                <dd className="text-highcolor font-medium text-lg">50+ Web Apps</dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-1 uppercase">Collaboration</dt>
                <dd className="text-highcolor font-medium text-lg">30+ Happy Clients</dd>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          <div className="bg-secondary rounded-lg p-8 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Languages</div>
              <div className="text-2xl font-bold mb-2">React, Next, Vue, JS, Sass, etc</div>
            </div>
            <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
          <div className="bg-primary/10 rounded-lg p-8 text-center relative overflow-hidden group">
            <div className="relative z-10">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Design Tools</div>
            <div className="text-2xl font-bold mb-2">Figma, Webflow, Canva, Balsimic, Miro, etc</div>
            </div>
            <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
          <div className="bg-secondary rounded-lg p-8 text-center relative overflow-hidden group">
            <div className="relative z-10">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Data Analysis</div>
            <div className="text-2xl font-bold mb-2">Python, Pandas, Tableau, Excel, MatplotLib, etc</div>
            </div>
            <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

