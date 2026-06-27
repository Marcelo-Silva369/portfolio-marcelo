import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  
  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Bio', path: '/perfil' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Certificados', path: '/certificados' },
    { name: 'Currículo', path: '/curriculo' },
    { name: 'Contato', path: '/contato' },
  ];

   const socialItems = [
     { icon: Linkedin, href: 'https://www.linkedin.com/in/tubarao-dev' },
     { icon: Instagram, href: 'https://www.instagram.com/tubarao.dev.ofc/' },
     { icon: Youtube, href: 'https://youtube.com/@sharkdev-369?si=pfEhetmjKyGxO4Pg' },
   ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? 'bg-black backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-black/0 border-b border-transparent'
      }`}>
        <nav className={`container mx-auto px-6 flex justify-between items-center transition-all duration-700 ease-in-out ${
          scrolled ? 'h-20' : 'h-28'
        }`}>
          {/* Logo / Left Side */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-12 flex items-center justify-center overflow-hidden rounded-xl">
                <img 
                  src="/images/logo-oficial_shark_dev.png" 
                  alt="Shark Dev Logo" 
                  className="w-full h-full object-contain scale-[1.8]" 
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-gradient-red transition-colors">Tubarão Dev</span>
                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/40">Portfolio</span>
              </div>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 mr-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[13px] font-black uppercase tracking-widest transition-colors ${
                    location.pathname === item.path ? 'text-gradient-red' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(true)}
              className="flex lg:hidden items-center gap-3 group group-hover:shadow-[0_0_20px_rgba(100,181,246,0.5)]"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors duration-500">
                <Menu size={20} className="text-white group-hover:text-primary transition-colors" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar Navigation */}
      <div className="lg:hidden">
        <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/15 backdrop-blur-sm z-[100]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75vw] md:w-full md:max-w-sm bg-black border-l border-white/5 z-[110] p-6 md:p-10 flex flex-col"
            >
              <div className="flex justify-end items-center">
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary hover:shadow-[0_0_20px_rgba(100,181,246,0.5)] transition-colors duration-500 group"
                >
                  <X size={20} className="text-white group-hover:text-primary transition-colors" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 my-8">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full px-4 py-3 border border-white/10 rounded-xl font-black uppercase tracking-widest leading-none transition-all duration-500 group hover:border-[#64B5F6]/50 hover:shadow-[0_0_20px_rgba(100,181,246,0.3)] ${
                        location.pathname === item.path 
                          ? 'text-gradient-red border-[#64B5F6]/50 bg-[#64B5F6]/5' 
                          : 'text-white/40 hover:text-white bg-transparent'
                      }`}
                    >
                      <span className="text-sm sm:text-base">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col items-center gap-6 mb-auto mt-12">
                <div className="h-[1px] w-12 bg-white/10" />
                <div className="flex gap-6">
                  {socialItems.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="text-white/40 hover:text-primary transition-colors duration-500"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gradient-red">Shark Dev Portfólio</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default Header;