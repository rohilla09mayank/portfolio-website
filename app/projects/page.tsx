import ProjectListItem from '@/components/project-list-item'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring product listings, shopping cart, and secure checkout process.",
    image: "/placeholder.svg?height=400&width=600",
    projectLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, user authentication, and team features.",
    image: "/placeholder.svg?height=400&width=600",
    projectLink: "https://example-taskmanager.com",
    githubLink: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Firebase", "Material-UI", "Redux"]
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard that provides real-time weather information and forecasts for multiple locations.",
    image: "/placeholder.svg?height=400&width=600",
    projectLink: "https://example-weatherapp.com",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    technologies: ["Vue.js", "OpenWeatherMap API", "Chart.js", "Vuetify"]
  },
  {
    title: "Personal Finance Tracker",
    description: "A comprehensive personal finance application for tracking expenses, creating budgets, and visualizing financial data.",
    image: "/placeholder.svg?height=400&width=600",
    projectLink: "https://example-financetracker.com",
    githubLink: "https://github.com/yourusername/finance-tracker",
    technologies: ["Angular", "TypeScript", "D3.js", "Node.js", "PostgreSQL"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectListItem key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

