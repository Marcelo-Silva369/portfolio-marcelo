
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Perfil', path: '/perfil' },
    { name: 'Certificados', path: '/certificados' },
    { name: 'Currículo', path: '/curriculo' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-green-400/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
            Portfólio
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-green-400 ${
                  isActive(item.path)
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-white hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
