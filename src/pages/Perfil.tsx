import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";

const Perfil = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-black text-white">
        
        <Header />

        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side: Large Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-lg"
            >
              <img 
                src="/images/img-hero.png" 
                alt="Marcelo Silva" 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700 brightness-90 bg-white/[0.02] p-6"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/10 mix-blend-color" />
              
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/5 pointer-events-none" />
            </motion.div>
            {/* Right Side: Content */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gradient-red text-[11px] font-black uppercase tracking-[0.4em]"
                >
                  A Trajetória
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black text-gradient-blue uppercase leading-none tracking-tighter"
                >
                  Marcelo <br />
                  <span className="text-gradient-red">Silva</span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-6 text-white/50 text-sm md:text-base leading-relaxed tracking-wide font-medium"
              >
                <p>Nascido em Tacaimbó, Pernambuco, minha jornada no mundo do desenvolvimento começou com a curiosidade de transformar linhas de código em soluções reais. Hoje, como Shark Dev, foco em entregar excelência técnica com uma estética premium.</p>
                <p>Com um olhar apurado para o design e uma base sólida em lógica de programação, transito entre o front-end e back-end, garantindo que cada interface seja tão funcional quanto visualmente impactante.</p>
                <p>Atualmente, dedico minha visão para explorar novas fronteiras na inteligência artificial e no design de interfaces modernas, unindo a robustez do código à fluidez da experiência do usuário.</p>
              </motion.div>
              {/* Specs / Details */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gradient-red">Experiência</span>
                  <span className="text-2xl font-black text-gradient-blue uppercase">2+ Anos</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gradient-red">Stack Principal</span>
                  <span className="text-2xl font-black text-gradient-blue uppercase">Fullstack</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gradient-red">Foco</span>
                  <span className="text-2xl font-black text-gradient-blue uppercase">Design & Perf</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gradient-red">Base</span>
                  <span className="text-2xl font-black text-gradient-blue uppercase">Toritama, PE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Perfil;