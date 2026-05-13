import Header from "@/components/Header";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Curriculo = () => {
  const { t } = useLanguage();
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
      <div className="min-h-screen relative flex flex-col bg-black text-white">
        
        <Header />
        
        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
          <div className="flex flex-col gap-4 mb-1 md:mb-1">
            <span className="text-primary text-[11px] font-black uppercase tracking-[0.4em]">{t('cv.title')}</span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              {t('cv.subtitle')} <br />
              <span className="text-white/20">{t('cv.card')}</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Card Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] md:aspect-[1/1.4] bg-white/[0.02] border border-white/5 overflow-hidden group flex items-center justify-center order-2"
            >
              {!imageLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 gap-4">
                  <Loader2 size={32} className="animate-spin" />
                  <span className="text-[10px] uppercase tracking-widest font-black">Carregando visualização...</span>
                </div>
              )}
              <img 
                src={selectedResume === 'com-foto' ? "/images/Currículo com foto.png" : "/images/Currículo sem foto.png"} 
                alt="Resume Preview" 
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0 scale-95'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-12 left-12 pointer-events-none">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Official</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
                  {selectedResume === 'com-foto' ? t('cv.v1_name') : t('cv.v2_name')}
                </h3>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col gap-12 pt-12 order-1">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black uppercase tracking-widest">{t('cv.download')}</h2>
                <p className="text-white/40 text-sm leading-relaxed max-w-md">
                  {t('cv.description')}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <motion.div
                  onClick={() => handleSelectResume('com-foto')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer flex items-center justify-between p-4 sm:p-8 border transition-colors duration-500 group ${
                    selectedResume === 'com-foto' ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-primary/50'
                  }`}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t('cv.v1_label')}</span>
                    <span className="text-lg font-black uppercase tracking-widest">{t('cv.v1_name')}</span>
                  </div>
                  
                  {selectedResume === 'com-foto' && imageLoaded && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href="/documents/Currículo com foto.pdf"
                      download="Curriculo-Marcelo-Silva-Com-Foto.pdf"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-primary text-black hover:bg-white transition-colors duration-300"
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
                  className={`cursor-pointer flex items-center justify-between p-4 sm:p-8 border transition-colors duration-500 group ${
                    selectedResume === 'sem-foto' ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-primary/50'
                  }`}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t('cv.v2_label')}</span>
                    <span className="text-lg font-black uppercase tracking-widest">{t('cv.v2_name')}</span>
                  </div>
                  
                  {selectedResume === 'sem-foto' && imageLoaded && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href="/documents/Currículo sem foto.pdf"
                      download="Curriculo-Marcelo-Silva-Sem-Foto.pdf"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-primary text-black hover:bg-white transition-colors duration-300"
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
