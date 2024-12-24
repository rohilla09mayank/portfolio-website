'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link className="text-xl font-bold tracking-tighter" href="/">
            MR
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8 text-sm">
              <Link 
                href="/projects" 
                className={`transition-colors ${isActive('/projects') ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
              >
                Projects
              </Link>
              <Link 
                href="/experience" 
                className={`transition-colors ${isActive('/experience') ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
              >
                Experience
              </Link>
              <Link 
                href="/blog" 
                className={`transition-colors ${isActive('/blog') ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
              >
                Blog
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/contact" 
                className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Let's Talk
              </Link>
              <div className="relative w-9 h-9">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="absolute inset-0 flex items-center justify-center rounded-full hover:bg-accent"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </button>
              </div>
            </div>
          </div>

          <button
            className="md:hidden p-2 hover:bg-accent rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/5">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              href="/projects" 
              className={`transition-colors ${isActive('/projects') ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/experience" 
              className={`transition-colors ${isActive('/experience') ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-foreground font-medium' : 'text-foreground/60 hover:text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

