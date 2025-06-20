interface ExperienceItem {
  position: string
  company: string
  responsibilities: string[]
}

const experience: ExperienceItem[] = [
  {
    position: 'QA Engineer',
    company: 'Various Companies',
    responsibilities: [
      'Experience in manual and automated testing to ensure software quality.',
      'Leading testing efforts and collaborating closely with development teams.',
      'Creating and maintaining test plans, cases, and reports.',
      'Familiar with tools like JIRA, Selenium, and CI/CD integration.'
    ]
  },
  {
    position: 'Web Developer',
    company: 'Various Projects',
    responsibilities: [
      'Developing responsive and user-friendly web applications.',
      'Working with HTML, CSS, JavaScript and modern frameworks.',
      'Collaborating with designers and backend developers.',
      'Maintaining and optimizing code for performance and scalability.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="800">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:text-gray-100"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-offset="150"
            data-aos-duration="600"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <p className="text-qa-primary font-medium mb-4">{exp.company}</p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-100">
              {exp.responsibilities.map((resp, i) => (
                <li 
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-offset="2"
                  data-aos-duration="6"
                >
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
