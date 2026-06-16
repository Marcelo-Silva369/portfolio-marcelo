import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
  {
    title: 'Golden Barber Shop',
    category: 'Front-end, Back-end, Web+PWA',
    description: 'Site Desenvolvido para a barbearia de um cliente.',
    image: '/images/projeto-golden-barbershop.png',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'PWA', 'Node.js', 'SQL', 'Supabase'],
    url: 'https://youtu.be/mx2u7tkeZSI?si=muZ0urMfsa7ijgVn'
  },
  {
    title: 'Lux Drinks Barman',
    category: 'Front-end, Back-end, Web',
    description: 'Site Desenvolvido para uma empresa de Barman e eventos.',
    image: '/images/projeto-lux-drinks-barman.png',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'PWA', 'Node.js', 'SQL', 'Supabase'],
    url: 'https://youtu.be/dps8_KFPPt0'
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
