import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalBackground } from '@/components/GlobalBackground';
import { useState } from 'react';

import AnimatedTitle from '@/components/AnimatedTitle';
import Footer from '@/components/Footer';

const Certificados = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const certificates = [
    {
      title: 'Frontend Completo',
      institution: 'Danki Code',
      date: '2025',
      level: 'Avançado',
      image: '/images/Certificado-Front-End-Completo-2.0.png',
      pdf: '/pdfs/Curso de Front-End Completo 2.0.pdf'
    },
    {
      title: 'JavaScript Completo',
      institution: 'Danki Code',
      date: '2025',
      level: 'Avançado',
      image: '/images/Certificado-JavaScript.png',
      pdf: '/pdfs/Curso JavaScript Completo.pdf'
    },
    {
      title: 'Python Impressionador',
      institution: 'Hashtag Treinamentos',
      date: '2025',
      level: 'Avançado',
      image: '/images/Certificado-Python-Impressionador.png',
      pdf: '/pdfs/Python Impressionador - Marcelo Erinaldo Da Silva.pdf'
    },
    {
      title: 'IA Impressionador',
      institution: 'Hashtag Treinamentos',
      date: '2024',
      level: 'Avançado',
      image: '/images/Certificado-IA-Impressionador.png',
      pdf: '/pdfs/Inteligência Artificial Impressionador - Marcelo Erinaldo Da Silva.pdf'
    },
    {
      title: 'Excel Impressionador',
      institution: 'Hashtag Treinamentos',
      date: '2024',
      level: 'Avançado',
      image: '/images/Certificado-Excel-Impressionador.png',
      pdf: '/pdfs/Excel Impressionador - Marcelo Erinaldo Da Silva.pdf'
    },
    {
      title: 'Auxiliar Administrativo',
      institution: 'Centro Educacional BRASTEC',
      date: '2024',
      level: 'Avançado',
      image: '/images/Certificado-Administracao.png',
      pdf: '/pdfs/Certificado.pdf'
    },
    {
      title: 'Lógica de Programação em Python',
      institution: 'Curso em Video',
      date: '2024',
      level: 'Iniciante',
      image: '/images/Certificado-Logica-Programacao.png',
      pdf: '/pdfs/Certificado logica de programção.pdf'
    },
    {
      title: 'Lógica de Programação (PHP/JS)',
      institution: 'Danki Code',
      date: '2025',
      level: 'Iniciante',
      image: '/images/Logica de programação (PHP - JavaScript).png',
      pdf: '/pdfs/Curso logica de programação - foco PHP-JAVASICRIPT.pdf'
    }
  ];

  return (
    <PageTransition>
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative flex flex-col"
        onClick={() => setActiveCard(null)}
      >
        <GlobalBackground />
        <Header />
      
        <main className="container mx-auto px-4 sm:px-6 pt-44 sm:pt-32 pb-24 relative z-10 overflow-hidden flex-grow">
          <AnimatedTitle 
            text="CERTIFICADOS" 
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

            {certificates.map((cert, index) => (
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
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                {/* CLIPPED BEAM LAYER */}
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

                {/* FEIXE LUMINOSO */}
                <div className="absolute inset-[2px] bg-slate-900/30 backdrop-blur-3xl rounded-[2.3rem]"></div>
                
                {/* CONTENT LAYER */}
                <div className="relative p-4 sm:p-6 flex flex-col h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <div 
                    className="h-40 sm:h-48 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex overflow-hidden relative shadow-inner group/img border border-blue-900/30"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <img 
                      src={cert.image} 
                      alt={`Certificado de ${cert.title}`}
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://via.placeholder.com/300x200/0f172a/3b82f6?text=Carregando';
                      }}
                    />
                    <div 
                      className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 ${activeCard === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 group-hover/img:opacity-100 pointer-events-none group-hover/img:pointer-events-auto'}`}
                      onClick={(e) => e.stopPropagation()} // Previne que o clique no overlay feche o card imediatamente
                    >
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.pdf, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-white font-bold bg-blue-600 px-6 py-3 rounded-xl shadow-[0_0_15px_#3b82f6] cursor-pointer"
                      >
                        Visualizar PDF
                      </motion.span>
                    </div>
                  </div>
                  
                  <div style={{ transform: "translateZ(40px)" }}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                    <p className="text-sm sm:text-base text-blue-300 mb-4 font-medium">{cert.institution}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-blue-500/20 mt-auto gap-2">
                      <span className="text-cyan-400 font-bold text-base sm:text-lg">{cert.date}</span>
                      <span className="px-3 py-0.5 sm:px-4 sm:py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-100 text-xs sm:text-sm font-semibold shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer isVisible={showContent} />
      </div>
    </PageTransition>
  );
};

export default Certificados;
