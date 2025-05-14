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

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="800">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 50}  // Retraso escalonado menor para mejor fluidez
            data-aos-offset="150"
            data-aos-duration="600"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
                data-aos="zoom-in-right"  // Animación adicional para la barra
                data-aos-delay={index * 100}  // Retraso adicional
                data-aos-offset="2"
            data-aos-duration="6"
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-100">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}