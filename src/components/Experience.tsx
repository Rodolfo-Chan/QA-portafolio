interface ExperienceItem {
  position: string
  company: string
  period: string
  responsibilities: string[]
}

const experience: ExperienceItem[] = [
  {
    position: 'Senior QA Engineer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    responsibilities: [
      'Lead a team of 5 QA testers in agile environment',
      'Developed automated test scripts reducing regression time by 60%',
      'Implemented CI/CD pipeline integration for automated testing'
    ]
  },
  {
    position: 'QA Tester',
    company: 'Digital Innovations LLC',
    period: '2017 - 2020',
    responsibilities: [
      'Performed manual and automated testing for web applications',
      'Created detailed test plans and test cases',
      'Reported and tracked bugs using JIRA'
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
            <div className="flex justify-between items-baseline mb-4">
              <p className="text-qa-primary font-medium">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
            </div>
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