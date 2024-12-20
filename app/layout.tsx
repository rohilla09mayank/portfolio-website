import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import Header from '@/components/header'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Portfolio of a Full Stack Developer, UI/UX Designer, and Data Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <footer className="bg-muted py-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mayank Rohilla. All rights reserved.
            </footer>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

