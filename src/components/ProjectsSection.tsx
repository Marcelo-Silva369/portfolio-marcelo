import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { LiveProjectButton } from '@/components/ui/LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    category: 'Front-end, Back-end, Web+PWA',
    title: 'Golden Barber Shop',
    desc: 'Site desenvolvido para a barbearia de um cliente, unindo agendamento inteligente e uma interface limpa.',
    image: '/images/projeto-golden-barbershop.png',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'PWA', 'Node.js', 'SQL', 'Supabase'],
    url: 'https://youtu.be/mx2u7tkeZSI?si=muZ0urMfsa7ijgVn'
  },
  {
    num: '02',
    category: 'Front-end, Back-end, Web',
    title: 'Lux Drinks Barman',
    desc: 'Plataforma institucional desenvolvida para uma empresa de Barman e eventos, focada em conversão.',
    image: '/images/projeto-lux-drinks-barman.png',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'PWA', 'Node.js', 'SQL', 'Supabase'],
    url: 'https://youtu.be/dps8_KFPPt0'
  },
  {
    num: '03',
    category: 'Business Intelligence',
    title: 'Dashboard de Vendas',
    desc: 'Análise completa de BI integrada com Excel para otimização de faturamento e tomada de decisões.',
    image: '/images/dashboard-vendas.png',
    tech: ['Excel', 'BI', 'Data', 'Dashboards'],
    url: 'https://youtu.be/ubc12N9-EwE?si=JI3u5Cwoi-HlobVb'
  }
];

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const ProjectCard = ({ project, index, total, progress }: ProjectCardProps) => {
  // Define target scale: earlier cards scale down more
  const targetScale = 1 - (total - 1 - index) * 0.03;
  
  // Scale down during the scroll progress range of the subsequent card
  // For index i, it scales down when the next card is scrolling into view
  const start = index / total;
  const end = Math.min(1, (index + 1) / total);
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <motion.div
      style={{ 
        scale,
        top: `calc(96px + ${index * 28}px)`,
      }}
      className="sticky w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 overflow-hidden shadow-2xl origin-top z-10 mb-[30vh] last:mb-0"
    >
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/15">
        <div className="flex items-center gap-4 sm:gap-6">
          <span 
            className="font-black text-[#D7E2EA] select-none leading-none animate-pulse"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 80px)' }}
          >
            {project.num}
          </span>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-gradient-red font-black uppercase tracking-[0.3em]">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-gradient-blue">
              {project.title}
            </h3>
          </div>
        </div>
        
        <LiveProjectButton 
          label="Ver Projeto"
          onClick={() => window.open(project.url, '_blank')}
        />
      </div>

      {/* Bottom Row: 2-Column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-grow overflow-hidden pb-4">
        {/* Left Column - Details */}
        <div className="flex flex-col gap-4 text-left h-full justify-between py-2">
          <div className="flex flex-col gap-3">
            <p className="text-[#D7E2EA]/60 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              {project.desc}
            </p>
          </div>
          
          {/* Tech list */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span 
                key={t} 
                className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D7E2EA]/40 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Single Large Project Screenshot */}
        <div 
          className="w-full overflow-hidden rounded-[25px] sm:rounded-[35px] md:rounded-[45px] border border-white/5 cursor-pointer relative aspect-video md:aspect-[16/10] flex items-center justify-center bg-white/[0.01]"
          onClick={() => window.open(project.url, '_blank')}
        >
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 pointer-events-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 opacity-0 hover:opacity-10 transition-opacity duration-500 mix-blend-color pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of the entire container list
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-28 relative z-30"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 10vw, 160px)' }}
          >
            Projetos
          </h2>
        </FadeIn>

        {/* Sticky-Stacking Project Cards Container */}
        <div ref={containerRef} className="w-full flex flex-col relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.num}
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;