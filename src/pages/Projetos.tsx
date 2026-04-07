import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AnimatedTitle from '@/components/AnimatedTitle';
import { ExternalLink, Github } from 'lucide-react';

const Projetos = () => {
  const [showContent, setShowContent] = useState(false);

  const projects = [
    {
      title: 'Formulário',
      description: 'Sistema de cadastro completo e responsivo.',
      image: '/images/formulario.png',
      tech: ['HTML', 'CSS'],
      url: 'https://marcelo-silva369.github.io/Formulario/'
    },
    {
      title: 'Jogo-P-P-T',
      description: 'Clássico Pedra, Papel e Tesoura interativo.',
      image: '/images/jogo-pedra-papel-tesoura.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://marcelo-silva369.github.io/Jogo-pedra-papel-tesoura/'
    },
    {
      title: 'Site-Pokédex',
      description: 'Catálogo dinâmico consumindo PokeAPI.',
      image: '/images/pokedex.png',
      tech: ['JS', 'API', 'Avançado'],
      url: 'https://marcelo-silva369.github.io/pokedex/'
    },
    {
      title: 'List-Supermercado',
      description: 'Lista de compras inteligente com persistência.',
      image: '/images/list-supermercado.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://marcelo-silva369.github.io/lista-supermercado/'
    },
    {
      title: 'LandingPage-Hotel',
      description: 'Site promocional de alto luxo para hotel.',
      image: '/images/landingpage-hotel.png',
      tech: ['HTML', 'CSS', 'Design'],
      url: 'https://marcelo-silva369.github.io/landing-page-hotel/'
    },
    {
      title: 'Cadastro de Produtos',
      description: 'Automação industrial utilizando Python.',
      image: '/images/automacao-python.png',
      tech: ['Python', 'Automação'],
      url: 'https://youtu.be/obEeJ5uBzvY?si=EWd61LqyqdN5CDKx'
    },
    {
      title: 'Dashboard de Vendas',
      description: 'Análise de BI integrada com Excel.',
      image: '/images/dashboard-vendas.png',
      tech: ['Excel', 'BI', 'Data'],
      url: 'https://youtu.be/ubc12N9-EwE?si=JI3u5Cwoi-HlobVb'
    },
    {
      title: 'Clone do Instagram',
      description: 'Interface pixel-perfect do Instagram.',
      image: '/images/insta-clone.png',
      tech: ['React', 'Tailwind CSS'],
      url: 'https://instaclone-369.netlify.app/'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 pt-44 sm:pt-32 pb-24 relative z-10">
          <AnimatedTitle 
            text="MEUS PROJETOS" 
            onComplete={() => setShowContent(true)}
          />
          
          <AnimatePresence>
            {showContent && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-11" 
                style={{ perspective: 1500 }}
              >
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, z: -200, rotateY: 30 }}
                    whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateX: 5,
                      z: 30,
                      transition: { duration: 0.3 }
                    }}
                    className="relative overflow-hidden rounded-[2.5rem] shadow-2xl cursor-pointer transform-gpu group border border-blue-500/10"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Efeito de Feixe Giratório */}
                    <div className="absolute inset-0 pointer-events-none" style={{ transform: "translateZ(0px)" }}>
                      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px]" style={{ transform: 'translate(-50%, -50%)' }}>
                        <motion.div
                          animate={{ rotate: [0, index % 2 === 0 ? 360 : -360] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                          className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `conic-gradient(from 0deg, transparent 70%, #60a5fa 100%)` }}
                        />
                      </div>
                    </div>

                    <div className="absolute inset-[2px] bg-slate-950/90 backdrop-blur-3xl rounded-[2.3rem]"></div>

                    {/* Conteúdo do Projeto */}
                    <div className="relative p-6 sm:p-7 flex flex-col h-full z-10" style={{ transformStyle: 'preserve-3d' }}>
                      <div 
                        className="h-44 sm:h-52 rounded-3xl mb-6 flex overflow-hidden relative shadow-inner border border-blue-900/30"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                      </div>
                      
                      <div style={{ transform: "translateZ(40px)" }}>
                        <h3 className="text-2xl font-black text-white mb-3 tracking-tighter uppercase">{project.title}</h3>
                        <p className="text-blue-200/70 text-sm mb-6 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                              {t}
                            </span>
                          ))}
                        </div>

                        <motion.a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 transition-all"
                        >
                          <ExternalLink size={16} />
                          Abrir Projeto
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </PageTransition>
  );
};

export default Projetos;
