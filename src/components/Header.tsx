import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (mode: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-6 mb-8">
      <h1 className="text-2xl font-bold text-qa-primary"></h1>
      <nav className="flex items-center space-x-6">
        <a href="#skills" className="hover:text-qa-primary transition">Skills</a>
        <a href="#projects" className="hover:text-qa-primary transition">Projects</a>
        <a href="#experience" className="hover:text-qa-primary transition">Experience</a>
        <a href="#contact" className="hover:text-qa-primary transition">Contact</a>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-300" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </nav>
    </header>
  )
}