interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-2 mb-12 text-center">
      {subtitle && (
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
          {subtitle}
        </h2>
      )}
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        {title}
      </h3>
    </div>
  )
}

