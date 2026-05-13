import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
  {
    title: 'Formulário',
    category: 'Web System',
    description: 'Sistema de cadastro completo e responsivo.',
    image: '/images/formulario.png',
    tech: ['HTML', 'CSS'],
    url: 'https://marcelo-silva369.github.io/Formulario/'
  },
  {
    title: 'Jogo-P-P-T',
    category: 'Game',
    description: 'Clássico Pedra, Papel e Tesoura interativo.',
    image: '/images/jogo-pedra-papel-tesoura.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://marcelo-silva369.github.io/Jogo-pedra-papel-tesoura/'
  },
  {
    title: 'Site-Pokédex',
    category: 'API Integration',
    description: 'Catálogo dinâmico consumindo PokeAPI.',
    image: '/images/pokedex.png',
    tech: ['JS', 'API', 'Avançado'],
    url: 'https://marcelo-silva369.github.io/pokedex/'
  },
  {
    title: 'List-Supermercado',
    category: 'Productivity',
    description: 'Lista de compras inteligente com persistência.',
    image: '/images/list-supermercado.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://marcelo-silva369.github.io/lista-supermercado/'
  },
  {
    title: 'LandingPage-Hotel',
    category: 'Landing Page',
    description: 'Site promocional de alto luxo para hotel.',
    image: '/images/landingpage-hotel.png',
    tech: ['HTML', 'CSS', 'Design'],
    url: 'https://marcelo-silva369.github.io/landing-page-hotel/'
  },
  {
    title: 'Cadastro de Produtos',
    category: 'Automation',
    description: 'Automação industrial utilizando Python.',
    image: '/images/automacao-python.png',
    tech: ['Python', 'Automação'],
    url: 'https://youtu.be/obEeJ5uBzvY?si=EWd61LqyqdN5CDKx'
  },
  {
    title: 'Dashboard de Vendas',
    category: 'Business Intelligence',
    description: 'Análise de BI integrada com Excel.',
    image: '/images/dashboard-vendas.png',
    tech: ['Excel', 'BI', 'Data'],
    url: 'https://youtu.be/ubc12N9-EwE?si=JI3u5Cwoi-HlobVb'
  },
  {
    title: 'Clone do Instagram',
    category: 'Front-end',
    description: 'Interface pixel-perfect do Instagram.',
    image: '/images/insta-clone.png',
    tech: ['React', 'Tailwind CSS'],
    url: 'https://instaclone-369.netlify.app/'
  }
];

const Projetos = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-black text-white">
        
        <Header />
        
        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
          <div className="flex flex-col gap-4 mb-16">
            <span className="text-primary text-[11px] font-black uppercase tracking-[0.4em]">{t('portfolio.title')}</span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              {t('portfolio.subtitle')} <br />
              <span className="text-white/20">{t('portfolio.gallery')}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-5 group"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-video overflow-hidden rounded-lg border border-white/5 cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/40 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color pointer-events-none" />
                </div>

                {/* Content Outside Image */}
                <div className="flex flex-col gap-2 px-2">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Action Button */}
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-wider text-white/40 border border-white/10 px-2 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="relative group/btn">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.url, '_blank')}
                      className="mt-6 self-start px-6 py-3 bg-white/5 border border-white/10 hover:border-primary text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 text-primary group-hover:text-white relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-shadow duration-700"
                    >
                      <span className="relative z-10 transition-colors duration-300">{t('portfolio.open')}</span>
                      <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-red-900 to-red-600 transition-all duration-700 ease-out group-hover:h-full">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-red-400/50 to-transparent animate-pulse" />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projetos;
