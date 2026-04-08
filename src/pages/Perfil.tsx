import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalBackground } from "@/components/GlobalBackground";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import AnimatedTitle from "@/components/AnimatedTitle";

const TypewriterText = ({ text, delay, speed = 20 }: { text: string, delay: number, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, speed);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => {
      clearTimeout(startTimeout);
      if (timeout) clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  const paragraphs = displayedText.split('\n\n');

  return (
    <div className="min-h-[460px]">
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-6">{p}</p>
      ))}
    </div>
  );
};

const Perfil = () => {
  const [showContent, setShowContent] = useState(false);
  const fullText = `Oi, me chamo Marcelo! Sou pernambucano, nascido em Tacaimbó, na zona rural, vindo de uma família simples e batalhadora. Com 2 anos fui morar em São Paulo, mas voltei pra minha terrinha com 5 anos. Minha infância foi bem humilde, sem muito acesso a tecnologia, mas sempre fui muito curioso e com vontade de aprender tudo que via pela frente.

Aos 16 anos me mudei pra Toritama, onde moro até hoje. Foi aqui que tive mais contato com internet e tecnologia e também descobri o dom de cantar, onde passei 18 anos. Conheci muitas pessoas legais e cantei em várias bandas de forró da região. Sempre fui apaixonado por tudo que envolve tecnologia, e nos últimos anos isso só cresceu. Já trabalhei com marketing, focado em prospecção de leads, o que me deu uma boa base de comunicação e estratégia.

Hoje estou focado 100% em entrar de vez no mundo da programação, já concluí cursos de HTML, CSS e JavaScript, e atualmente estou estudando Python, uma linguagem que tem me deixado ainda mais empolgado com as possibilidades da tecnologia e da inteligência artificial. Sou pai de dois filhos, tenho o apoio da minha família em tudo, e meu maior sonho é conseguir meu primeiro emprego na área de tecnologia, crescer profissionalmente e dar uma vida melhor pra quem eu amo. No tempo livre, curto jogar, ler, estudar, ver filmes (principalmente de ficção científica, comédia e ação).

Estou focado nos estudos de programação e inteligência artificial — esse mundo me fascina de verdade. Tô nessa jornada pra nunca parar de aprender e transformar minha história com muito esforço e dedicação.`;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative flex flex-col">
        <GlobalBackground />
        <Header />

        <main className="container mx-auto px-4 sm:px-6 pt-44 sm:pt-32 pb-24 relative z-10 overflow-hidden flex-grow">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <AnimatedTitle 
              text="SOBRE MIM" 
              onComplete={() => setShowContent(true)}
            />

            <AnimatePresence>
              {showContent && (
                <motion.div 
                  initial={{ opacity: 0, filter: "blur(1px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="grid lg:grid-cols-12 gap-10" 
                  style={{ perspective: 2000 }}
                >
              
              {/* SIDEBAR: PERFIL CARD */}
              <motion.div 
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -100, rotateY: -30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
              >
                <div 
                  className="bg-gradient-to-b from-slate-800 to-blue-950/80 backdrop-blur-xl border border-blue-500/30 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu lg:sticky lg:top-28"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateZ: 5 }}
                    className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mb-8 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)] p-1"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-900">
                      <img
                        src="/images/LogoCurriculo.png"
                        alt="Sua Foto"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <div className="text-center" style={{ transform: "translateZ(30px)" }}>
                    <h2 className="text-3xl font-black text-white mb-2 tracking-wide">
                      Marcelo Silva
                    </h2>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
                      Desenvolvedor Front-end
                    </h3>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-6"></div>
                    
                    <p className="text-blue-100 text-sm leading-relaxed text-left px-2 border-l-2 border-cyan-400">
                      Apaixonado por criar soluções digitais inovadoras. Busco sempre entregar projetos de alta qualidade que ofereçam excelente experiência ao usuário corporativo e pessoal.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* MAIN CONTENT: BIOGRAFIA */}
              <motion.div 
                className="lg:col-span-8"
                initial={{ opacity: 0, x: 100, rotateY: 30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="bg-gradient-to-b from-slate-900/90 to-blue-950/80 backdrop-blur-md border border-slate-700/50 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                  
                  <h3 
                    className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b border-blue-500/20 pb-4 inline-block"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    Minha História
                  </h3>
                  
                  <div className="text-slate-300 text-lg leading-relaxed relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <TypewriterText text={fullText} delay={1.0} speed={10} />
                  </div>

                  {/* HABILLIDADES */}
                  <div className="mt-16" style={{ transform: "translateZ(40px)" }}>
                    <h4 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                      <span className="w-8 h-1 bg-cyan-400 rounded-full"></span>
                      Habilidades Técnicas
                    </h4>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-cyan-900/40 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm"
                      >
                        <h5 className="text-cyan-300 font-bold text-xl mb-4 flex items-center gap-2">
                          🌟 Frontend
                        </h5>
                        <p className="text-blue-100 font-medium">
                          HTML, CSS, Tailwind CSS, JavaScript, React
                        </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-blue-900/40 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm"
                      >
                        <h5 className="text-blue-300 font-bold text-xl mb-4 flex items-center gap-2">
                          ⚙️ Backend & Dados
                        </h5>
                        <p className="text-blue-100 font-medium">
                          Node.js, Express, MongoDB, Python, IA
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                </div>
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

export default Perfil;
