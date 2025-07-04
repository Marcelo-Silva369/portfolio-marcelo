
import { useState, useEffect } from 'react';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Formulário',
      description: 'Sistema de cadastro completo',
      image: '/images/formulario.png',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Jogo-P-P-T',
      description: 'Jogo de Pedra, Papel e Tesoura',
      image: '/images/jogo-pedra-papel-tesoura.png',
      tech: ['JavaScript', 'CSS', 'HTML']
    },
    {
      title: 'Site-Pokédex',
      description: 'Catálogo completo de Pokémons',
      image: '/images/pokedex.png',
      tech: ['React', 'API', 'CSS']
    },
    {
      title: 'List-Supermercado',
      description: 'Lista de compras interativa',
      image: '/images/list-supermercado.png',
      tech: ['JavaScript', 'LocalStorage']
    },
    {
      title: 'LandingPage-Hotel',
      description: 'Site promocional para hotel',
      image: '/images/landingpage-hotel.png',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black/30 to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Projetos
        </h2>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black/50 to-transparent backdrop-blur-sm border border-green-400/20">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 p-4 sm:p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 md:order-1 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 sm:px-4 py-2 bg-green-400/20 border border-green-400/50 rounded-full text-green-400 text-xs sm:text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-lg hover:from-green-300 hover:to-green-400 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                      Ver Projeto
                    </button>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <div className="bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg bg-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 sm:space-x-3 py-4 sm:py-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
