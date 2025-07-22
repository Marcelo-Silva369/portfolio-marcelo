
import { useState, useEffect, useRef } from 'react';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const minSwipeDistance = 50; // Distância mínima em pixels para considerar um swipe

  const projects = [
    {
      title: 'Formulário',
      description: 'Sistema de cadastro completo',
      image: '/images/formulario.png',
      tech: ['HTML', 'CSS'],
      url: 'https://marcelo-silva369.github.io/Formulario/' // Adicione a URL do projeto
    },
    {
      title: 'Jogo-P-P-T',
      description: 'Jogo de Pedra, Papel e Tesoura',
      image: '/images/jogo-pedra-papel-tesoura.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://marcelo-silva369.github.io/Jogo-pedra-papel-tesoura/' // Adicione a URL do projeto
    },
    {
      title: 'Site-Pokédex',
      description: 'Catálogo completo de Pokémons',
      image: '/images/pokedex.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      url: 'https://marcelo-silva369.github.io/pokedex/' // Adicione a URL do projeto
    },
    {
      title: 'List-Supermercado',
      description: 'Lista de compras interativa',
      image: '/images/list-supermercado.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://marcelo-silva369.github.io/lista-supermercado/' // Adicione a URL do projeto
    },
    {
      title: 'LandingPage-Hotel',
      description: 'Site promocional para hotel',
      image: '/images/landingpage-hotel.png',
      tech: ['HTML', 'CSS'],
      url: 'https://marcelo-silva369.github.io/landing-page-hotel/' // Adicione a URL do projeto
    },
    {
      title: 'Cadastro de Produtos',
      description: 'Automação de cadastro de produtos usando o Pandas do Python',
      image: '/images/automacao-python.png',
      tech: ['Python'],
      url: 'https://youtu.be/obEeJ5uBzvY?si=EWd61LqyqdN5CDKx' // Adicione a URL do projeto
    },
    {
      title: 'Dashboard de Vendas',
      description: 'Análise de dados de vendas e faturamento mensal, trimestral e anual',
      image: '/images/dashboard-vendas.png',
      tech: ['Excel'],
      url: 'https://youtu.be/ubc12N9-EwE?si=JI3u5Cwoi-HlobVb' // Adicione a URL do projeto
    },
    {
      title: 'Dashboard Hawking',
      description: 'Análise de dados de vendedores com hawking mensal e anual',
      image: '/images/dashboard-Hawking-vendas.png',
      tech: ['Excel'],
      url: 'https://youtu.be/bILNUs9thoE?si=aBSDt9CegQNUnb08' // Adicione a URL do projeto
    },
    {
      title: 'Clone do Instagram',
      description: 'Clone da tela de login do Instagram sem backend',
      image: '/images/insta-clone.png',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js'],
      url: 'https://instaclone-369.netlify.app/' // Adicione a URL do projeto
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Funções para manipulação de toque
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="pb-16 sm:pb-20 bg-gradient-to-b from-black/30 to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-6">
          Projetos
        </h2>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black/50 to-transparent backdrop-blur-sm border border-green-400/20">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-1000 ease-in-out touch-none"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-lg hover:from-green-300 hover:to-green-400 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      Ver Projeto
                    </a>
                  </div>
                  
                  <div className="order-1 md:order-2 touch-auto">
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
          
        </div>
        
        {/* Única linha de indicadores */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-green-400 w-8' 
                  : 'bg-gray-600 w-2.5 hover:bg-gray-400'
              }`}
              aria-label={`Ir para o projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
