import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { LiveProjectButton } from '@/components/ui/LiveProjectButton';

const projects = [
  {
    title: 'Golden Barber Shop',
    category: 'Front-end, Back-end, Web+PWA',
    description: 'Site desenvolvido para a barbearia de um cliente, unindo agendamento inteligente e uma interface limpa.',
    image: '/images/projeto-golden-barbershop.png',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'PWA', 'Node.js', 'SQL', 'Supabase'],
    url: 'https://youtu.be/mx2u7tkeZSI?si=muZ0urMfsa7ijgVn'
  },
  {
    title: 'Lux Drinks Barman',
    category: 'Front-end, Back-end, Web',
    description: 'Plataforma institucional desenvolvida para uma empresa de Barman e eventos, focada em conversão.',
    image: '/images/projeto-lux-drinks-barman.png',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'PWA', 'Node.js', 'SQL', 'Supabase'],
    url: 'https://youtu.be/dps8_KFPPt0'
  },
  {
    title: 'Dashboard de Vendas',
    category: 'Business Intelligence',
    description: 'Análise completa de BI integrada com Excel para otimização de faturamento e tomada de decisões.',
    image: '/images/dashboard-vendas.png',
    tech: ['Excel', 'BI', 'Data'],
    url: 'https://youtu.be/ubc12N9-EwE?si=JI3u5Cwoi-HlobVb'
  }
];

const Projetos = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-[#0C0C0C] text-[#D7E2EA]">
        
        <Header />
        
        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
          <div className="flex flex-col gap-4 mb-16">
            <span className="text-gradient-red text-[11px] font-black uppercase tracking-[0.4em]">Ecossistema Digital</span>
            <h1 className="hero-heading text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
              Projetos <br />
              <span className="text-white/20">Selecionados</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-5 group border border-white/10 rounded-[30px] p-6 bg-[#0C0C0C] hover:border-[#D7E2EA]/30 transition-colors duration-500"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-video overflow-hidden rounded-[20px] border border-white/5 cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/40 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-color pointer-events-none" />
                </div>

                {/* Content Outside Image */}
                <div className="flex flex-col gap-2 flex-grow">
                  <span className="text-gradient-red text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#D7E2EA] group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#64B5F6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 cursor-pointer">{project.title}</h3>
                  <p className="text-[#D7E2EA]/60 text-sm leading-relaxed flex-grow">{project.description}</p>
                  
                  {/* Action Button */}
                  <div className="mt-4 flex items-center gap-2 flex-wrap">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-wider text-[#D7E2EA]/40 border border-white/10 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-start">
                    <LiveProjectButton
                      label="Ver Projeto"
                      onClick={() => window.open(project.url, '_blank')}
                    />
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