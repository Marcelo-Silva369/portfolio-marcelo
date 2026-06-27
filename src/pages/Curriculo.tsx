import Header from "@/components/Header";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";

const Curriculo = () => {
  const [selectedResume, setSelectedResume] = useState<'com-foto' | 'sem-foto'>('com-foto');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSelectResume = (type: 'com-foto' | 'sem-foto') => {
    if (selectedResume !== type) {
      setImageLoaded(false);
      setSelectedResume(type);
    }
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-[#0C0C0C] text-[#D7E2EA]">
        
        <Header />
        
        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-gradient-red text-[11px] font-black uppercase tracking-[0.4em]">Documentação</span>
            <h1 className="hero-heading text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
              Currículo <br />
              <span className="text-white/20">Técnico</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Card Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] md:aspect-[1/1.4] bg-white/[0.02] border border-white/5 overflow-hidden group flex items-center justify-center order-2 rounded-[30px]"
            >
              {!imageLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#D7E2EA]/20 gap-4">
                  <Loader2 size={32} className="animate-spin text-[#64B5F6]" />
                  <span className="text-[10px] uppercase tracking-widest font-black">Carregando visualização...</span>
                </div>
              )}
              <img 
                src={selectedResume === 'com-foto' ? "/images/Currículo com foto.png" : "/images/Currículo sem foto.png"} 
                alt="Resume Preview" 
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-12 left-12 pointer-events-none">
                <span className="text-gradient-red text-[10px] font-black uppercase tracking-[0.3em]">Official</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#D7E2EA]">
                  {selectedResume === 'com-foto' ? 'Currículo com Foto (PDF)' : 'Currículo sem Foto (PDF)'}
                </h3>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col gap-12 pt-12 order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black uppercase tracking-widest text-gradient-red">Baixar Currículo</h2>
                <p className="text-[#D7E2EA]/70 text-sm leading-relaxed max-w-md">
                  Acesse meu histórico profissional detalhado, competências técnicas e trajetória acadêmica nos formatos abaixo.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <motion.div
                  onClick={() => handleSelectResume('com-foto')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer flex items-center justify-between p-4 sm:p-8 border transition-all duration-500 group rounded-2xl ${
                    selectedResume === 'com-foto' ? 'border-[#64B5F6] bg-[#64B5F6]/5' : 'border-white/10 hover:border-[#64B5F6]/50'
                  }`}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#64B5F6]">Versão Completa</span>
                    <span className="text-lg font-black uppercase tracking-widest text-[#D7E2EA]">Currículo com Foto (PDF)</span>
                  </div>
                  
                  {selectedResume === 'com-foto' && imageLoaded && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href="/documents/Currículo com foto.pdf"
                      download="Curriculo-Marcelo-Silva-Com-Foto.pdf"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-[#64B5F6] text-white hover:bg-[#3B82F6] hover:shadow-[0_0_20px_rgba(100,181,246,0.5)] transition-all duration-300 rounded-full"
                      title="Download PDF"
                    >
                      <Download size={20} />
                    </motion.a>
                  )}
                </motion.div>

                <motion.div
                  onClick={() => handleSelectResume('sem-foto')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer flex items-center justify-between p-4 sm:p-8 border transition-all duration-500 group rounded-2xl ${
                    selectedResume === 'sem-foto' ? 'border-[#64B5F6] bg-[#64B5F6]/5' : 'border-white/10 hover:border-[#64B5F6]/50'
                  }`}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#64B5F6]">Versão Sem Foto</span>
                    <span className="text-lg font-black uppercase tracking-widest text-[#D7E2EA]">Currículo sem Foto (PDF)</span>
                  </div>
                  
                  {selectedResume === 'sem-foto' && imageLoaded && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href="/documents/Currículo sem foto.pdf"
                      download="Curriculo-Marcelo-Silva-Sem-Foto.pdf"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-[#64B5F6] text-white hover:bg-[#3B82F6] hover:shadow-[0_0_20px_rgba(100,181,246,0.5)] transition-all duration-300 rounded-full"
                      title="Download PDF"
                    >
                      <Download size={20} />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Curriculo;