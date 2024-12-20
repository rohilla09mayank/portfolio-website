import { Book, Briefcase, Code } from 'lucide-react'

export default function PersonalInfo() {
  return (
    <section className="bg-card rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
      <div className="bg-primary p-6 dark:bg-gray-700">
        <h2 className="text-2xl font-bold text-primary-foreground">About Me</h2>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-start space-x-4">
          <Book className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                B.Tech from <span className="highlight-blue">Indraprastha Institute of Information Technology</span>, 2021
              </li>
              <li>
                Class XII from <span className="highlight-green">Bal Bharati Public School</span>, 2017
              </li>
              <li>
                Class X from <span className="highlight-yellow">Bal Bharati Public School</span>, 2015
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Briefcase className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                Software Developer at <span className="highlight-purple">Almasons</span> (Jan, 2022 - July, 2024)
              </li>
              <li>
                Frontend Developer at <span className="highlight-green">Teamarcs</span> (Sep, 2021 - Jan, 2022)
              </li>
              <li>
                Frontend Developer at <span className="highlight-yellow">Unigo Cabs</span> (Aug, 2020 - Aug, 2021)
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Code className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'JavaScript', 'HTML', 'CSS', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'MongoDB',
                'Docker', 'UI/UX Design', 'Data Analysis', 'Machine Learning', 'Excel', 'Tailwind',
                'Sass', 'Vue.js'
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

