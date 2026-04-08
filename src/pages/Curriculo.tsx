import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalBackground } from "@/components/GlobalBackground";
import { useState } from "react";
import Footer from "@/components/Footer";
import AnimatedTitle from "@/components/AnimatedTitle";

const Curriculo = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);


  const handleDownloadPDFSemFoto = () => {
    const link = document.createElement("a");
    link.href = "/documents/Currículo sem foto.pdf";
    link.download = "Curriculo-Marcelo-Silva.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDFComFoto = () => {
    const link = document.createElement("a");
    link.href = "/documents/Currículo com foto.pdf";
    link.download = "Curriculo-Marcelo-Silva-Com-Foto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative flex flex-col">
        <GlobalBackground />
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 pt-44 sm:pt-32 pb-24 relative z-10 overflow-hidden flex-grow">
          <div className="container mx-auto max-w-5xl">
            <AnimatedTitle 
              text="CURRÍCULO" 
              onComplete={() => setShowContent(true)}
            />

            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(1px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >


            {/* CURRÍCULO COM FOTO */}
            <motion.div 
              initial={{ opacity: 0, x: -100, rotateY: 30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="mb-24"
              style={{ perspective: 1500 }}
            >
              <div 
                className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6 border-b border-blue-500/20 pb-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <h2 className="text-3xl font-bold text-cyan-400 text-center sm:text-left shadow-cyan-400/20">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Versão com Foto</span>
                </h2>
                
                <motion.div 
                  whileHover="hover" 
                  whileTap="tap" 
                  variants={{ hover: { scale: 1.05 }, tap: { scale: 0.95 } }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="rounded-xl inline-block"
                >
                  <Button
                    onClick={handleDownloadPDFComFoto}
                    className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white px-8 py-6 rounded-xl border border-white/20 font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_30px_rgba(34,211,238,0.5)] transition-shadow"
                  >
                    <motion.div
                      variants={{
                        hover: { 
                          scale: 1.15, 
                          rotateZ: -3,
                          y: -3,
                          transition: { type: "spring", stiffness: 400, damping: 8 }
                        }
                      }}
                      className="flex items-center gap-3"
                    >
                      <Download size={24} />
                      Download PDF
                    </motion.div>
                  </Button>
                </motion.div>
              </div>

              <motion.div 
                className="max-w-4xl mx-auto cursor-pointer"
                whileHover={{ scale: 1.03, z: 40 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === 'com-foto' ? null : 'com-foto');
                }}
              >
                <div className="bg-slate-800 p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-blue-600/30 group">
                  <div className="bg-white rounded-3xl overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-20 lg:hidden ${activeCard === 'com-foto' ? 'opacity-100 pointer-events-auto bg-black/40' : 'opacity-0 group-hover/img:opacity-100 pointer-events-none group-hover/img:pointer-events-auto'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage("/images/Currículo com foto.png");
                        }}
                        className="text-white font-bold bg-blue-600/90 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] backdrop-blur-md cursor-pointer"
                      >
                        Ampliar Imagem
                      </motion.span>
                    </div>

                    <img
                      src="/images/Currículo com foto.png"
                      alt="Prévia do Currículo Com Foto"
                      className="w-full h-auto transition-opacity"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CURRÍCULO SEM FOTO */}
            <motion.div 
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-10"
              style={{ perspective: 1500 }}
            >
              <div 
                className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6 border-b border-blue-500/20 pb-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <h2 className="text-3xl font-bold text-center sm:text-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Versão sem Foto</span>
                </h2>
                
                <motion.div 
                  whileHover="hover" 
                  whileTap="tap" 
                  variants={{ hover: { scale: 1.05 }, tap: { scale: 0.95 } }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="rounded-xl inline-block"
                >
                  <Button
                    onClick={handleDownloadPDFSemFoto}
                    className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white px-8 py-6 rounded-xl border border-white/20 font-bold shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(34,211,238,0.5)] transition-shadow"
                  >
                    <motion.div
                      variants={{
                        hover: { 
                          scale: 1.15, 
                          rotateZ: -3,
                          y: -3,
                          transition: { type: "spring", stiffness: 400, damping: 8 }
                        }
                      }}
                      className="flex items-center gap-3"
                    >
                      <Download size={24} />
                      Download PDF
                    </motion.div>
                  </Button>
                </motion.div>
              </div>

              <motion.div 
                className="max-w-4xl mx-auto cursor-pointer"
                whileHover={{ scale: 1.03, z: 40 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === 'sem-foto' ? null : 'sem-foto');
                }}
              >
                <div className="bg-slate-800 p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-blue-600/30 group">
                  <div className="bg-white rounded-3xl overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-20 lg:hidden ${activeCard === 'sem-foto' ? 'opacity-100 pointer-events-auto bg-black/40' : 'opacity-0 group-hover/img:opacity-100 pointer-events-none group-hover/img:pointer-events-auto'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage("/images/Currículo sem foto.png");
                        }}
                        className="text-white font-bold bg-blue-600/90 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] backdrop-blur-md cursor-pointer"
                      >
                        Ampliar Imagem
                      </motion.span>
                    </div>

                    <img
                      src="/images/Currículo sem foto.png"
                      alt="Prévia do Currículo Sem Foto"
                      className="w-full h-auto transition-opacity"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </main>
      
      <Footer isVisible={showContent} />
    </div>
    </PageTransition>
  );
};

export default Curriculo;
