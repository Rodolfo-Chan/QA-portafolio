const skills = [
  { name: 'Manual Testing', level: 90 },
  { name: 'Automated Testing', level: 80 },
  { name: 'Selenium', level: 75 },
  { name: 'Cypress', level: 70 },
  { name: 'JIRA', level: 85 },
  { name: 'TestRail', level: 80 },
  { name: 'Postman', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'Agile Methodologies', level: 85 },
]

const devSkills = [
  { name: 'Python', level: 85 },
  { name: 'Django', level: 80 },
  { name: 'MySQL', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'ReactJS', level: 75 },
  { name: 'Vite', level: 70 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'GitHub', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="800">
        Skills & Expertise
      </h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center "
            data-aos="fade-down"
            data-aos-offset="150"
            data-aos-duration="700">
          QA Testing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={`qa-${index}`} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-offset="150"
              data-aos-duration="600"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                  data-aos="zoom-in-right"
                  data-aos-delay={index * 100}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-center"
            data-aos="fade-down"
            data-aos-offset="150"
            data-aos-duration="700">
          Web Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devSkills.map((skill, index) => (
            <div 
              key={`dev-${index}`} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-offset="150"
              data-aos-duration="600"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                  data-aos="zoom-in-right"
                  data-aos-delay={index * 100}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}