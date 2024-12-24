import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import Header from '@/components/header'
import { ThemeProvider } from 'next-themes'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { ScrollToTop } from '@/components/scroll-to-top'
import SectionHeading from '@/components/section-heading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayank Rohilla - Full Stack Developer',
  description: 'Portfolio of a Full Stack Developer, UI/UX Designer, and Data Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="relative min-h-screen">
              <ScrollToTop />
              {/* Background Elements */}
              <div className="fixed inset-0 -z-10 overflow-hidden">
                <div
                  className="gradient-bg w-[500px] h-[500px] left-1/4 top-1/4"
                  style={{
                    background: 'linear-gradient(to right top, rgba(var(--primary), 0.1), rgba(var(--secondary), 0.1))'
                  }}
                />
                <div
                  className="gradient-bg w-[600px] h-[600px] right-1/4 top-1/3"
                  style={{
                    background: 'linear-gradient(to left top, rgba(var(--accent), 0.1), rgba(var(--primary), 0.1))'
                  }}
                />
                <div
                  className="gradient-bg w-[400px] h-[400px] left-1/3 bottom-1/4"
                  style={{
                    background: 'linear-gradient(to right bottom, rgba(var(--secondary), 0.1), rgba(var(--accent), 0.1))'
                  }}
                />
              </div>

              <Header />
              <main className="pt-16">
                {children}
                <section id="collaborate" className="bg-secondary mt-16 py-24 w-full">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                      <SectionHeading title="Let's Collaborate" subtitle="CONTACT ME" />
                      <p className="text-muted-foreground mt-0 pt-0">
                        Have a project in mind? Let's create something amazing together.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </section>
              </main>

              <footer className="mt-0 border-t">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="text-left text-primary mb-8">
                    <Link href="/" className="text-3xl font-bold tracking-tighter">
                      MR
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Contact</h3>
                      <div className="space-y-3">
                        <a href="tel:+918800537594" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                          <Phone className="h-4 w-4 mr-2" />
                          +91 8800537594
                        </a>
                        <a href="mailto:rohilla.mayankr@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                          <Mail className="h-4 w-4 mr-2" />
                          rohilla.mayankr@gmail.com
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Social</h3>
                      <div className="space-y-3">
                        <a href="https://github.com/rohilla09mayank" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/mayank-rohilla-9100541a7" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Pages</h3>
                      <div className="space-y-3">
                        <Link href="/projects" className="block text-sm text-muted-foreground hover:text-foreground">
                          Projects
                        </Link>
                        <Link href="/experience" className="block text-sm text-muted-foreground hover:text-foreground">
                          Experience
                        </Link>
                        <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
                          Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 border-t text-center text-sm text-muted-foreground mt-8">
                    <div className="mb-2">
                      © {new Date().getFullYear()} Mayank Rohilla. All rights reserved.
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Link href="/privacy" className="hover:text-foreground">
                        Privacy Policy
                      </Link>
                      <Link href="/terms" className="hover:text-foreground">
                        Terms of Service
                      </Link>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

