import { motion } from 'framer-motion';
import { useState } from 'react';

const technologies = [
  { name: 'HTML', color: 'text-orange-400', hex: '#fb923c', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', color: 'text-blue-400', hex: '#60a5fa', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Tailwind', color: 'text-cyan-400', hex: '#22d3ee', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', color: 'text-yellow-400', hex: '#facc15', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', color: 'text-cyan-400', hex: '#60a5fa', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', color: 'text-blue-500', hex: '#3b82f6', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', color: 'text-green-500', hex: '#22c55e', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', color: 'text-yellow-500', hex: '#eab308', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Excel', color: 'text-green-600', hex: '#16a34a', img: 'https://img.icons8.com/color/256/microsoft-excel-2019--v1.png' },
];

const TitleText = () => {
  const text = "Shark Dev";
  return (
    <h1 
      className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 sm:mb-8 flex justify-center flex-wrap gap-x-2"
      style={{ perspective: 1000 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 100, rotateX: 90, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15,
            type: "spring",
            damping: 12,
            stiffness: 150
          }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-500 drop-shadow-[0_10px_20px_rgba(74,222,128,0.4)]"
          style={{ transformStyle: 'preserve-3d', WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

const TechCard = ({ tech, index }: { tech: typeof technologies[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const spinDir = index % 2 === 0 ? 360 : -360;

  return (
    <motion.div
      initial={{ opacity: 0, z: -200, rotateY: -90 }}
      animate={{ opacity: 1, z: 0, rotateY: 0 }}
      transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 100, damping: 10 }}
      className="relative w-[140px] xs:w-36 sm:w-40 h-16 sm:h-20 cursor-pointer"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ rotateX: isHovered ? 180 : 0, z: isHovered ? 40 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        className="w-full h-full relative rounded-xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face: Text with Beam */}
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300 group"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)' }}
        >
          {/* Animated light beam container */}
          <div className="absolute inset-[-50%] w-[200%] h-[200%]">
            <motion.div
              animate={{ rotate: [0, spinDir] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ background: `conic-gradient(from 0deg, transparent 60%, ${tech.hex} 100%)` }}
            />
          </div>
          
          <div className="absolute inset-[2px] bg-slate-900/90 backdrop-blur-md rounded-[10px] flex items-center justify-center">
            <span className={`${tech.color} font-black text-base sm:text-lg tracking-wide`}>{tech.name}</span>
          </div>
        </div>
        
        {/* Back Face: LOGO with Beam */}
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg) translateZ(1px)' }}
        >
          <div className="absolute inset-[-50%] w-[200%] h-[200%]">
            <motion.div
              animate={{ rotate: [0, spinDir] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ background: `conic-gradient(from 0deg, transparent 60%, ${tech.hex} 100%)` }}
            />
          </div>

          <div className="absolute inset-[2px] bg-gray-800/95 backdrop-blur-xl rounded-[10px] flex items-center justify-center shadow-inner">
            <img src={tech.img} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 flex items-center justify-center min-h-screen overflow-hidden">
      
      <div className="text-center z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* 3D Animated Typewriter Title */}
        <TitleText />
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-14 px-4 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Olá! Eu sou Marcelo, um Desenvolvedor <span className="text-blue-400 font-bold">Front-end</span> apaixonado por criar experiências digitais interativas.
        </motion.p>
        
        <motion.div 
          className="w-full px-4 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-8 sm:mb-10 uppercase"
            style={{ perspective: 500 }}
            animate={{ z: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Tecnologias
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 max-w-4xl mx-auto px-2" style={{ perspective: 1200 }}>
            {technologies.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
