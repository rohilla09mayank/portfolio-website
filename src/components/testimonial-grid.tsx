interface Testimonial {
  author: string
  company: string
  designation: string
  message: string
}

const testimonials: Testimonial[] = [
  {
    author: "John Doe",
    company: "TechCorp",
    designation: "CEO",
    message: "Working with Mayank was an absolute pleasure. His technical expertise and attention to detail resulted in an outstanding product."
  },
  {
    author: "Jane Smith",
    company: "DesignHub",
    designation: "Creative Director",
    message: "Mayank's ability to translate complex requirements into elegant solutions is remarkable. He's a true professional."
  },
  {
    author: "Mike Johnson",
    company: "StartupX",
    designation: "Product Manager",
    message: "The quality of work and commitment to deadlines made our collaboration extremely successful. Highly recommended!"
  },
  {
    author: "Sarah Williams",
    company: "InnoTech",
    designation: "CTO",
    message: "Exceptional problem-solving skills and a great team player. Mayank consistently delivered beyond our expectations."
  }
]

export default function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`bg-card p-6 rounded-lg border border-border/50 ${
            index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
          }`}
        >
          <blockquote className="space-y-4">
            <p className="text-muted-foreground">{testimonial.message}</p>
            <footer>
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.designation} at {testimonial.company}
              </div>
            </footer>
          </blockquote>
        </div>
      ))}
    </div>
  )
}

