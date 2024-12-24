import { Quote } from 'lucide-react'
import SectionHeading from './section-heading'

const testimonials = [
  {
    content: "Working with Mayank was an absolute pleasure. His technical expertise and attention to detail resulted in an outstanding product.",
    author: "John Doe",
    position: "CEO",
    company: "TechCorp"
  },
  {
    content: "Mayank's ability to translate complex requirements into elegant solutions is remarkable. He's a true professional.",
    author: "Jane Smith",
    position: "Creative Director",
    company: "DesignHub"
  },
  {
    content: "The quality of work and commitment to deadlines made our collaboration extremely successful. Highly recommended!",
    author: "Mike Johnson",
    position: "Product Manager",
    company: "StartupX"
  }
]

export default function TestimonialSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="TESTIMONIALS" 
          title="What Clients Say"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-lg p-6 space-y-4"
            >
              <Quote className="h-8 w-8 text-primary" />
              <p className="text-muted-foreground">{testimonial.content}</p>
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

