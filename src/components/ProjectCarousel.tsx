import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Formulário',
    description: 'Sistema de cadastro completo',
    image: '/images/formulario.png',
    tech: ['HTML', 'CSS'],
    url: 'https://marcelo-silva369.github.io/Formulario/'
  },
  {
    title: 'Jogo-P-P-T',
    description: 'Jogo de Pedra, Papel e Tesoura',
    image: '/images/jogo-pedra-papel-tesoura.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://marcelo-silva369.github.io/Jogo-pedra-papel-tesoura/'
  },
  {
    title: 'Site-Pokédex',
    description: 'Catálogo completo de Pokémons',
    image: '/images/pokedex.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    url: 'https://marcelo-silva369.github.io/pokedex/'
  },
  {
    title: 'List-Supermercado',
    description: 'Lista de compras interativa',
    image: '/images/list-supermercado.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://marcelo-silva369.github.io/lista-supermercado/'
  },
  {
    title: 'LandingPage-Hotel',
    description: 'Site promocional para hotel',
    image: '/images/landingpage-hotel.png',
    tech: ['HTML', 'CSS'],
    url: 'https://marcelo-silva369.github.io/landing-page-hotel/'
  },
  {
    title: 'Cadastro de Produtos',
    description: 'Automação usando Python',
    image: '/images/automacao-python.png',
    tech: ['Python'],
    url: 'https://youtu.be/obEeJ5uBzvY?si=EWd61LqyqdN5CDKx'
  },
  {
    title: 'Dashboard de Vendas',
    description: 'Análise de vendas mensais',
    image: '/images/dashboard-vendas.png',
    tech: ['Excel'],
    url: 'https://youtu.be/ubc12N9-EwE?si=JI3u5Cwoi-HlobVb'
  },
  {
    title: 'Clone do Instagram',
    description: 'Clone da tela de login',
    image: '/images/insta-clone.png',
    tech: ['Tailwind CSS', 'React'],
    url: 'https://instaclone-369.netlify.app/'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.8,
      opacity: 0,
      z: -300
    }),
    center: {
      zIndex: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      z: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      rotateY: direction < 0 ? -45 : 45,
      scale: 0.8,
      opacity: 0,
      z: -300,
      transition: {
        duration: 0.5
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="relative w-full py-20 pb-32 overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950 border-t border-blue-500/20" style={{ perspective: 2000 }}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-16"
        >
          Meus Projetos 3D
        </motion.h2>

        <div className="relative w-full max-w-5xl mx-auto h-[500px] flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full sm:w-[80%] lg:w-[60%] h-full flex flex-col justify-between bg-gray-800/80 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner mb-6"
                style={{ transform: "translateZ(50px)" }}
              >
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div className="flex-1 flex flex-col justify-end text-center" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {projects[currentIndex].description}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {projects[currentIndex].tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={projects[currentIndex].url}
                  target="_blank"
                  className="mx-auto flex items-center justify-center gap-2 w-48 py-3 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all hover:scale-105"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <ExternalLink size={20} />
                  Visitar App
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-black/50 border border-blue-500/50 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all hover:scale-110 backdrop-blur-md"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={30} />
          </button>
          
          <button 
            className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-black/50 border border-green-500/50 text-green-400 rounded-full hover:bg-green-500 hover:text-black transition-all hover:scale-110 backdrop-blur-md"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Indicadores em baixo */}
        <div className="flex justify-center mt-12 gap-3 relative z-20">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-blue-400 shadow-[0_0_10px_#60a5fa]' : 'w-3 bg-gray-600 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
