import { 
  FaBug, 
  FaJira, 
  FaNodeJs,
  FaGitAlt,
  FaQuestionCircle,
  FaServer,
  FaMobile,
  FaCode 
} from 'react-icons/fa';
import { 
  SiPostman, 
  SiAppium, 
  SiTestrail, 
  SiGitlab, 
  SiMocha,
  SiScrumalliance,
  SiApachejmeter,
  SiNewrelic,
  SiCharles
} from 'react-icons/si';

// Mapeo de tecnologías a iconos
const techIcons: Record<string, React.ReactNode> = {
  'Selenium': <FaBug className="text-red-500 text-lg" />,
  'JMeter': <SiApachejmeter className="text-blue-500 text-lg" />,
  'Postman': <SiPostman className="text-orange-500 text-lg" />,
  'JIRA': <FaJira className="text-blue-600 text-lg" />,
  'Appium': <SiAppium className="text-green-600 text-lg" />,
  'TestRail': <SiTestrail className="text-blue-400 text-lg" />,
  'Charles Proxy': <SiCharles className="text-purple-500 text-lg" />,
  'GitLab CI': <SiGitlab className="text-orange-600 text-lg" />,
  'Newman': <SiNewrelic className="text-gray-700 dark:text-gray-300 text-lg" />,
  'Node.js': <FaNodeJs className="text-green-500 text-lg" />,
  'Mocha': <SiMocha className="text-yellow-600 text-lg" />,
  'Agile Methodologies': <SiScrumalliance className="text-purple-600 text-lg" />,
  'Git': <FaGitAlt className="text-orange-700 text-lg" />,
  'API': <FaCode className="text-blue-500 text-lg" />,
  'Performance Testing': <FaServer className="text-green-500 text-lg" />,
  'Mobile Testing': <FaMobile className="text-blue-400 text-lg" />
};


interface Project {
  title: string
  description: string
  technologies: string[]
  results: string
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform Testing',
    description: 'Comprehensive testing of a large-scale e-commerce platform including UI, functionality, and performance testing.',
    technologies: ['Selenium', 'JMeter', 'Postman', 'JIRA'],
    results: 'Reduced critical bugs in production by 40%'
  },
  {
    title: 'Mobile App QA Strategy',
    description: 'Developed and implemented a complete QA strategy for a cross-platform mobile application.',
    technologies: ['Appium', 'TestRail', 'Charles Proxy', 'GitLab CI'],
    results: 'Improved test coverage from 65% to 92%'
  },
  {
    title: 'API Test Automation',
    description: 'Created an automated test suite for REST API endpoints with data-driven testing approach.',
    technologies: ['Postman', 'Newman', 'Node.js', 'Mocha'],
    results: 'Reduced regression testing time from 8 hours to 45 minutes'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-duration="800">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <h3 className="text-2xl font-semibold text-qa-primary mb-2 dark:text-gray-100">{project.title}</h3>
            <p className="mb-4 dark:text-gray-100">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2 dark:text-gray-100">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-gray-100 gap-2"
                  >
                    {techIcons[tech] || <FaQuestionCircle className="text-gray-500 text-lg" />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-green-100 dark:bg-blue-900 p-3 rounded-lg">
              <span className="font-semibold">Key Results:</span> {project.results}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}