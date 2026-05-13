import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Perfil = () => {
  const { t } = useLanguage();
  
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Workspace" 
                className="w-full h-full object-cover grayscale brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 mix-blend-color" />
              
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none" />
            </motion.div>
            {/* Right Side: Content */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-primary text-[11px] font-black uppercase tracking-[0.4em]"
                >
                  {t('bio.title')}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter"
                >
                  Marcelo <br />
                  <span className="text-white/20">{t('bio.name_last')}</span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-6 text-white/50 text-sm md:text-base leading-relaxed tracking-wide font-medium"
              >
                <p>{t('bio.p1')}</p>
                <p>{t('bio.p2')}</p>
                <p>{t('bio.p3')}</p>
              </motion.div>
              {/* Specs / Details */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t('bio.exp')}</span>
                  <span className="text-2xl font-black uppercase">2+ Anos</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t('bio.stack')}</span>
                  <span className="text-2xl font-black uppercase">{t('bio.stack_val')}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t('bio.focus')}</span>
                  <span className="text-2xl font-black uppercase">Design & Perf</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t('bio.base')}</span>
                  <span className="text-2xl font-black uppercase">Toritama, PE</span>
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
