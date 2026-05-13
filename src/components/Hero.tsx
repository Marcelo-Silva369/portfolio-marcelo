import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FaPython, FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { TbBrandSupabase } from 'react-icons/tb';

const technologies = [
  { name: 'Python', url: 'https://docs.python.org/3/', icon: FaPython, color: 'hover:text-[#3776AB] hover:border-[#3776AB]/50 hover:bg-[#3776AB]/10 hover:shadow-[0_0_15px_rgba(55,118,171,0.3)]' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript', icon: FaJs, color: 'hover:text-[#F7DF1E] hover:border-[#F7DF1E]/50 hover:bg-[#F7DF1E]/10 hover:shadow-[0_0_15px_rgba(247,223,30,0.3)]' },
  { name: 'HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML', icon: FaHtml5, color: 'hover:text-[#E34F26] hover:border-[#E34F26]/50 hover:bg-[#E34F26]/10 hover:shadow-[0_0_15px_rgba(227,79,38,0.3)]' },
  { name: 'CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS', icon: FaCss3Alt, color: 'hover:text-[#1572B6] hover:border-[#1572B6]/50 hover:bg-[#1572B6]/10 hover:shadow-[0_0_15px_rgba(21,114,182,0.3)]' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', icon: SiTailwindcss, color: 'hover:text-[#06B6D4] hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', icon: SiTypescript, color: 'hover:text-[#3178C6] hover:border-[#3178C6]/50 hover:bg-[#3178C6]/10 hover:shadow-[0_0_15px_rgba(49,120,198,0.3)]' },
  { name: 'Node.js', url: 'https://nodejs.org/docs/', icon: FaNodeJs, color: 'hover:text-[#339933] hover:border-[#339933]/50 hover:bg-[#339933]/10 hover:shadow-[0_0_15px_rgba(51,153,51,0.3)]' },
  { name: 'Supabase', url: 'https://supabase.com/docs', icon: TbBrandSupabase, color: 'hover:text-[#3ECF8E] hover:border-[#3ECF8E]/50 hover:bg-[#3ECF8E]/10 hover:shadow-[0_0_15px_rgba(62,207,142,0.3)]' },
  { name: 'SQL', url: 'https://www.postgresql.org/docs/', icon: FaDatabase, color: 'hover:text-[#336791] hover:border-[#336791]/50 hover:bg-[#336791]/10 hover:shadow-[0_0_15px_rgba(51,103,145,0.3)]' },
  { name: 'Next.js', url: 'https://nextjs.org/docs', icon: SiNextdotjs, color: 'hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' },
  { name: 'React', url: 'https://react.dev/', icon: FaReact, color: 'hover:text-[#61DAFB] hover:border-[#61DAFB]/50 hover:bg-[#61DAFB]/10 hover:shadow-[0_0_15px_rgba(97,218,251,0.3)]' }
];

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-32">
      {/* Background Subtle Text */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none"
      >
        <h2 className="text-[25vw] md:text-[30vw] font-black uppercase text-white/[0.02] leading-none">
          SHARK
        </h2>
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="w-8 md:w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em]">{t('hero.subtitle')}</span>
            </motion.div>

            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] xs:text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter"
              >
                Marcelo <br />
                <span className="text-primary text-glow-red">Silva</span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-4 md:mt-6 w-full"
            >
              <p className="text-white/40 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-md mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
              
              <div className="mt-8 md:mt-10 flex flex-wrap gap-1.5 md:gap-3 justify-center lg:justify-start">
                {technologies.map((tech, index) => (
                  <motion.a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.05, 
                      type: "spring", 
                      stiffness: 120 
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group flex items-center px-2 py-1 md:px-4 md:py-2 bg-white/[0.03] border border-white/10 rounded-md backdrop-blur-sm text-[8px] md:text-[10px] font-bold tracking-widest text-white/50 transition-all duration-300 cursor-pointer uppercase ${tech.color}`}
                  >
                    <span>{tech.name}</span>
                    <div className="flex items-center justify-center overflow-hidden w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                      <tech.icon size={14} className="min-w-[14px]" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content - Overlapping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] aspect-[4/5]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
              
              {/* The Hero Image */}
              <img 
                src="/images/img-hero.png" 
                alt="Marcelo Silva" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,0,0,0.15)]"
              />
              
              {/* Decorative elements behind image */}
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 border-t-2 border-r-2 border-primary/20 -translate-y-2 translate-x-2 md:-translate-y-4 md:translate-x-4" />
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 border-b-2 border-l-2 border-primary/20 translate-y-2 -translate-x-2 md:translate-y-4 md:-translate-x-4" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-20">
        <div className="flex flex-col items-end gap-2">
          <span className="text-white text-[10px] font-black uppercase tracking-[0.5em] rotate-90 origin-right translate-y-12">{t('hero.est')}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
