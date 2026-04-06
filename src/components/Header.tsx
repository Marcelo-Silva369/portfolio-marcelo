
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Perfil', path: '/perfil' },
    { name: 'Certificados', path: '/certificados' },
    { name: 'Currículo', path: '/curriculo' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-blue-400/20">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: { scale: 1.05 },
              tap: { scale: 0.95 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="inline-block rounded-xl"
          >
            <Link 
              to="/" 
              className="px-3 py-1.5 sm:px-5 sm:py-2 flex items-center justify-center bg-gradient-to-r from-blue-900 to-cyan-700 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow border border-white/20"
            >
              <motion.span
                variants={{
                  hover: { 
                    scale: 1.15, 
                    rotateZ: -5,
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 8 }
                  }
                }}
                className="text-lg sm:text-2xl font-black text-white inline-block"
              >
                Home
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base lg:text-lg font-medium transition-all duration-300 hover:text-blue-400 ${
                  isActive(item.path)
                    ? 'text-blue-400 border-b-2 border-green-400'
                    : 'text-white hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-400/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-all duration-300 hover:text-blue-400 ${
                    isActive(item.path)
                      ? 'text-blue-400 border-l-2 border-green-400 pl-2'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
