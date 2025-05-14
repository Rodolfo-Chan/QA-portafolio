import { useState, useEffect } from 'react'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Skills from '../src/components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css' // Importa el CSS de AOS
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App