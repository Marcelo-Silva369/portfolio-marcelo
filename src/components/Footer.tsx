import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-xl font-black text-gradient-blue uppercase tracking-tighter">
              Marcelo <span className="text-gradient-red">Silva</span>
            </span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Tubarão Dev Portfólio</span>
          </div>

          <div className="flex gap-8">
            <span className="text-[10px] text-white/40 uppercase tracking-widest cursor-default">© 2026 Todos os Direitos Reservados</span>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/tubarao.dev.ofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-gradient-red transition-colors duration-300"
            >
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/tubarao-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-gradient-red transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://youtube.com/@sharkdev-369?si=pfEhetmjKyGxO4Pg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-gradient-red transition-colors duration-300"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;