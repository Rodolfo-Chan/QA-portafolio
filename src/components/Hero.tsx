import { FC } from 'react';
import profileImage from '../assets/images/tu-foto-perfil.jpg.png'; // Ajusta la ruta

const Hero: FC = () => {
  return (
    <section className="py-12 md:py-20 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-qa-primary">Rodolfo</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Quality Assurance Engineer
          </h3>
          <p className="text-lg mb-8">
            With one year of experience in manual and automated testing,
            I ensure software quality through comprehensive test strategies
            and attention to detail.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="border border-qa-primary text-qa-primary hover:bg-qa-primary hover:text-white dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-qa-primary text-qa-primary hover:bg-qa-primary hover:text-white dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          {/* Contenedor de la imagen con animación */}
          <div className="relative">
            {/* Anillos de onda */}
            <div className="absolute inset-0 rounded-full border-2 border-qa-primary animate-wave-1"></div>
            <div className="absolute inset-0 rounded-full border-2 border-qa-primary animate-wave-2"></div>
            <div className="absolute inset-0 rounded-full border-2 border-qa-primary animate-wave-3"></div>
            
            {/* Imagen de perfil */}
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Profile Photo"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-qa-primary shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para las animaciones */}
      <style >{`
        @keyframes wave {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-wave-1 {
          animation: wave 3s ease-out infinite;
        }
        .animate-wave-2 {
          animation: wave 3s ease-out 1s infinite;
        }
        .animate-wave-3 {
          animation: wave 3s ease-out 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;