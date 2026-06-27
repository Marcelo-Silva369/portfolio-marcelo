import React, { useRef, useState, useEffect } from 'react';
import {
  SiPython, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiReact,
  SiTypescript, SiNodedotjs, SiNextdotjs, SiGit, SiFigma,
  SiMongodb, SiPostgresql, SiPrisma, SiFramer, SiDocker
} from 'react-icons/si';

interface Tech {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
}

const TECHNOLOGIES: Tech[] = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Framer', icon: SiFramer, color: '#0055FF' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1 = [...TECHNOLOGIES.slice(0, 8), ...TECHNOLOGIES.slice(0, 8), ...TECHNOLOGIES.slice(0, 8)];
  const row2 = [...TECHNOLOGIES.slice(8), ...TECHNOLOGIES.slice(8), ...TECHNOLOGIES.slice(8)];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-6 w-full"
    >
      <div className="w-full flex">
        <div
          className="flex gap-4 transition-transform duration-100 ease-out"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={`row1-${index}`} className="group relative overflow-hidden shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 [perspective:400px]">
                  <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-[#64B5F6] rounded-2xl overflow-hidden transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(100,181,246,0.5)]">
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0 transition-all duration-700 ease-out group-hover:h-full"
                      style={{ background: `linear-gradient(to top, #ffffff, ${tech.color})` }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-2 opacity-50 animate-pulse"
                        style={{ background: `linear-gradient(to bottom, ${tech.color}80, transparent)` }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center rounded-2xl">
                      <Icon size={36} style={{ color: tech.color }} />
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-2xl">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#0A1628] text-center leading-tight px-1">{tech.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div
          className="flex gap-4 transition-transform duration-100 ease-out"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={`row2-${index}`} className="group relative overflow-hidden shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 [perspective:400px]">
                  <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-[#64B5F6] rounded-2xl overflow-hidden transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(100,181,246,0.5)]">
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0 transition-all duration-700 ease-out group-hover:h-full"
                      style={{ background: `linear-gradient(to top, #ffffff, ${tech.color})` }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-2 opacity-50 animate-pulse"
                        style={{ background: `linear-gradient(to bottom, ${tech.color}80, transparent)` }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center rounded-2xl">
                      <Icon size={36} style={{ color: tech.color }} />
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-2xl">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#0A1628] text-center leading-tight px-1">{tech.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
