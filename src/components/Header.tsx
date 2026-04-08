import { Link, useLocation } from 'react-router-dom';
import { User, GraduationCap, FileText, Mail, Laptop, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [previousIndex, setPreviousIndex] = useState(0);
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Perfil', path: '/perfil', icon: User },
    { name: 'Projetos', path: '/projetos', icon: Laptop },
    { name: 'Certificados', path: '/certificados', icon: GraduationCap },
    { name: 'Currículo', path: '/curriculo', icon: FileText },
    { name: 'Contato', path: '/contato', icon: Mail },
  ];

  const getActiveIndex = () => {
    const index = navItems.findIndex(item => 
      item.path === '/' ? location.pathname === '/' || location.pathname === '' : location.pathname.startsWith(item.path)
    );
    return index !== -1 ? index : 0;
  };

  const activeIndex = getActiveIndex();

  // Atualiza o índice anterior quando o ativo muda
  useEffect(() => {
    if (activeIndex !== previousIndex) {
      setPreviousIndex(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-4 sm:px-8 h-20 sm:h-28 flex justify-between items-center relative">
          
          <div className="flex items-center">
            <div className="group flex items-center gap-3 cursor-default">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600/10 rounded-xl border-2 border-blue-500/20 flex items-center justify-center overflow-hidden">
                <img src="/images/logo-oficial_shark_dev.png" alt="Shark Dev Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-black text-xl sm:text-2xl tracking-tighter">
                 SHARK <span className="text-blue-500">DEV</span>
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden sm:flex items-center h-full">
            <div className="flex items-center gap-0 h-12 px-2 relative" style={{ minWidth: 'fit-content' }}>
              {/* SINGLE UFO INDICATOR DESKTOP - Deslizamento ultra suave e lento */}
              <motion.div
                key={`ufo-${activeIndex}`}
                initial={false}
                className="absolute top-[-16px] z-20 pointer-events-none flex flex-col items-center"
                animate={{ x: activeIndex * 75 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  mass: 2 
                }}
                style={{ width: 75 }}
              >
                <UFOVisual icon={navItems[activeIndex].icon} activeIndex={activeIndex} />
              </motion.div>

              {navItems.map((item, idx) => {
                const active = activeIndex === idx;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative flex flex-col items-center justify-center w-[75px] h-full group outline-none pt-8"
                  >
                    {/* Ícone que sobe para ser abduzido */}
                    <motion.div
                      animate={{ 
                        y: active ? -32 : 0, 
                        opacity: active ? 0 : 0.6,
                        scale: active ? 0.2 : 1,
                        filter: active ? "brightness(3) drop-shadow(0 0 15px #3b82f6)" : "brightness(1)"
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: active ? 0.4 : 0,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      className="text-white"
                    >
                      <item.icon size={20} strokeWidth={2} />
                    </motion.div>

                    {/* Nome que aparece no lugar do ícone quando é abduzido */}
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ opacity: 0, y: 10, scale: 0.5 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.5 }}
                          transition={{ 
                            delay: 0.6,
                            duration: 0.4,
                            ease: "easeOut"
                          }}
                          className="absolute text-[10px] font-black uppercase tracking-wider text-blue-400 whitespace-nowrap"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE NAV */}
      <nav className="sm:hidden fixed top-[90px] left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-[480px]">
        <div className="bg-slate-950/90 backdrop-blur-xl border border-blue-500/20 rounded-full px-2 py-3 shadow-2xl relative">
           <div className="flex justify-around items-center h-10 relative">
              {/* SINGLE UFO INDICATOR MOBILE - Deslizamento ultra suave e lento */}
              <motion.div
                key={`ufo-mobile-${activeIndex}`}
                initial={false}
                className="absolute -top-[32px] z-20 pointer-events-none flex flex-col items-center"
                animate={{ 
                  left: `${(activeIndex * (100 / navItems.length)) + (50 / navItems.length)}%`
                }}
                transition={{ 
                  left: { 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20, 
                    mass: 2 
                  }
                }}
                style={{ transform: "translateX(-50%)", width: 50 }}
              >
                <UFOVisual icon={navItems[activeIndex].icon} activeIndex={activeIndex} />
              </motion.div>

              {navItems.map((item, idx) => {
                const active = activeIndex === idx;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative flex flex-col items-center justify-center w-full h-full outline-none"
                  >
                    {/* Ícone que sobe para ser abduzido */}
                    <motion.div
                      animate={{ 
                        y: active ? -40 : 0, 
                        opacity: active ? 0 : 0.6,
                        scale: active ? 0.2 : 1,
                        filter: active ? "brightness(3) drop-shadow(0 0 15px #3b82f6)" : "brightness(1)"
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: active ? 0.4 : 0,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      className="text-white"
                    >
                      <item.icon size={20} strokeWidth={2} />
                    </motion.div>

                    {/* Nome que aparece no lugar do ícone quando é abduzido */}
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ opacity: 0, y: 10, scale: 0.5 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.5 }}
                          transition={{ 
                            delay: 0.6,
                            duration: 0.4,
                            ease: "easeOut"
                          }}
                          className="absolute text-[9px] font-black uppercase tracking-wider text-blue-400 whitespace-nowrap"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                );
              })}
           </div>
        </div>
      </nav>
    </>
  );
};

const UFOVisual = ({ icon: Icon, name, activeIndex }: { icon: any, name?: string, activeIndex?: number }) => (
  <div className="flex flex-col items-center relative">
    {/* Container da nave que flutua */}
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }}
      className="flex flex-col items-center"
    >
      {/* Cúpula do UFO com ícone absorvido - tamanho reduzido */}
      <div className="w-8 h-5 bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 rounded-t-full flex items-center justify-center overflow-hidden">
         <motion.div
           initial={{ y: 20, opacity: 0, scale: 0.5 }}
           animate={{ y: 0, opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
         >
           <Icon size={10} color="#60a5fa" strokeWidth={3} />
         </motion.div>
      </div>
      
      {/* Base do UFO - Disco com luzes piscantes - tamanho reduzido */}
      <div className="w-16 h-5 bg-gradient-to-br from-slate-800 to-slate-950 border-x-2 border-b-2 border-slate-700/50 rounded-[100%] shadow-xl flex justify-around items-center px-2 relative z-30">
         {[1,2,3,4].map(i => (
            <motion.div 
              key={i} 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
              className="w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_#3b82f6]" 
            />
         ))}
      </div>
      
      {/* Feixe de Luz (Tractor Beam) - Acende UMA VEZ por mudança de índice - tamanho ajustado */}
      <motion.div 
        key={`beam-${activeIndex}`}
        initial={{ opacity: 0, scaleY: 0, originY: 0 }}
        animate={{ 
          opacity: [0, 1, 0.6, 0],
          scaleY: [0, 1, 1, 0]
        }}
        transition={{ 
          times: [0, 0.3, 0.7, 1],
          duration: 1.2,
          ease: "easeInOut"
        }}
        className="w-16 h-[50px] bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" 
        style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
      />
    </motion.div>

    {/* Nome da página - REMOVIDO pois agora aparece no lugar do ícone */}
  </div>
);

export default Header;
