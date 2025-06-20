import {
  FaBug, FaNodeJs, FaGitAlt, FaCode, FaDatabase, FaReact
} from 'react-icons/fa';
import {
  SiPostman, SiDjango, SiTailwindcss, SiVite, SiMysql,
  SiTypescript, SiMocha, SiNewrelic, SiPhp, SiBootstrap
} from 'react-icons/si';
import { LuServer } from 'react-icons/lu';

const techIcons: Record<string, React.ReactNode> = {
  'ReactJS': <FaReact className="text-blue-500 text-lg" />,
  'Vite': <SiVite className="text-purple-500 text-lg" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-600 text-lg" />,
  'Django': <SiDjango className="text-green-700 text-lg" />,
  'MySQL': <SiMysql className="text-blue-700 text-lg" />,
  'TypeScript': <SiTypescript className="text-blue-600 text-lg" />,
  'Git': <FaGitAlt className="text-orange-600 text-lg" />,
  'Node.js': <FaNodeJs className="text-green-500 text-lg" />,
  'Postman': <SiPostman className="text-orange-500 text-lg" />,
  'Newman': <SiNewrelic className="text-gray-600 text-lg" />,
  'Mocha': <SiMocha className="text-yellow-600 text-lg" />,
  'API': <FaCode className="text-blue-500 text-lg" />,
  'Backend': <LuServer className="text-gray-700 text-lg" />,
  'Database': <FaDatabase className="text-yellow-600 text-lg" />,
  'PHP': <SiPhp className="text-indigo-700 text-lg" />,
  'Bootstrap': <SiBootstrap className="text-purple-700 text-lg" />,
  'XAMPP': <LuServer className="text-orange-600 text-lg" />
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  results: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'API Test Automation',
    description: 'Created an automated test suite for REST API endpoints with data-driven testing approach.',
    technologies: ['Postman', 'Newman', 'Node.js', 'Mocha'],
    results: 'Reduced regression testing time from 8 hours to 45 minutes',
    link: ''
  },
  {
    title: 'Gran Paradise Hotel Platform',
    description: 'Web platform for showcasing hotel services, booking details, and information. Designed for user-friendly browsing and responsive layout.',
    technologies: ['ReactJS', 'Vite', 'Tailwind CSS', 'Git'],
    results: 'Responsive site for a luxury hotel with clean UI and smooth animations.',
    link: 'https://granparadise.netlify.app'
  },
  {
    title: 'Tallero Tec (Frontend & Backend)',
    description: 'Administrative system for managing sports workshop registrations, students, and credits, built for a technology institute.',
    technologies: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Django', 'MySQL', 'Git'],
    results: 'Full-stack platform allowing efficient student and workshop tracking.',
    link: 'https://tallerotec.netlify.app'
  },
  {
    title: 'Medical Appointment System',
    description: 'App to manage patients, appointments and consultation schedules. Includes frontend for interaction and backend for data processing.',
    technologies: ['ReactJS', 'Tailwind CSS', 'Django', 'MySQL', 'Postman', 'API'],
    results: 'Enabled easy appointment booking and reduced manual errors in clinics.',
    link: 'https://citasmedica.netlify.app/'
  },
  {
    title: 'Potable Water Management Platform',
    description: 'System developed to manage users and water meter connections, as well as to generate invoices for a local water service. Enables efficient billing and record-keeping.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'XAMPP'],
    results: 'Automated invoice generation and organized user/tap registration process.',
    link: 'http://localhost/agua/index.php'
  }
];

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
            <h3 className="text-2xl font-semibold text-qa-primary mb-2 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="mb-4 dark:text-gray-100">{project.description}</p>

            <div className="mb-4">
              <h4 className="font-medium mb-2 dark:text-gray-100">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-gray-100 gap-2"
                  >
                    {techIcons[tech] || <FaCode className="text-gray-500 text-lg" />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-green-100 dark:bg-blue-900 p-3 rounded-lg mb-2">
              <span className="font-semibold">Key Results:</span> {project.results}
            </div>

            {project.link && project.link.trim() !== '' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-qa-primary hover:underline dark:text-blue-300"
              >
                Visit Project ↗
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Extra contribution section */}
      <div
        className="mt-12 bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg shadow-md"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h3 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
          Additional Contribution
        </h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbGg2Eu3v9bcMdODijlCCLnMPSfnF4KvfGA&s"
          alt="HapyWallet"
          className="w-24 h-24 mb-4 rounded-full object-cover"
        />
        <p className="text-gray-800 dark:text-gray-100">
          I also created the <strong>User Manual</strong> for the <strong>HapyWallet</strong> platform and performed thorough verification to ensure that all <strong>functional requirements</strong> were fully met and documented.
        </p>
      </div>
    </section>
  );
}

