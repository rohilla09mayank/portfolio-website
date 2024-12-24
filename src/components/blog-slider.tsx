import InfiniteSlider from './infinite-slider'
import BlogTile from './blog-tile'

const dummyBlogs = [
  {
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "As we approach 2024, the web development landscape continues to evolve at a rapid pace. From new frameworks to innovative design paradigms, here's what you need to know to stay ahead of the curve.",
    image: "/placeholder.svg?height=338&width=600",
    date: "2023-12-15",
    tags: ["Web Development", "Future Trends"],
    slug: "future-of-web-development-2024"
  },
  {
    title: "Mastering React Hooks: Advanced Techniques and Best Practices",
    excerpt: "React Hooks have revolutionized the way we write components. In this deep dive, we explore advanced techniques and best practices to take your React skills to the next level.",
    image: "/placeholder.svg?height=338&width=600",
    date: "2023-12-10",
    tags: ["React", "JavaScript"],
    slug: "mastering-react-hooks"
  },
  {
    title: "The Rise of JAMstack: Building Fast and Secure Websites",
    excerpt: "JAMstack architecture is gaining popularity for its ability to create fast, secure, and scalable websites. Learn how to leverage this modern web development approach in your next project.",
    image: "/placeholder.svg?height=338&width=600",
    date: "2023-12-05",
    tags: ["JAMstack", "Web Performance"],
    slug: "rise-of-jamstack"
  },
  {
    title: "Accessibility in Web Design: Creating Inclusive Digital Experiences",
    excerpt: "Designing for accessibility is not just a legal requirement, it's a moral imperative. Discover how to create web experiences that are inclusive and usable for everyone.",
    image: "/placeholder.svg?height=338&width=600",
    date: "2023-11-30",
    tags: ["Accessibility", "UX Design"],
    slug: "accessibility-in-web-design"
  }
]

export default function BlogSlider() {
  return (
    <InfiniteSlider itemsToShow={2}>
      {dummyBlogs.map((blog, index) => (
        <BlogTile key={index} {...blog} />
      ))}
    </InfiniteSlider>
  )
}

