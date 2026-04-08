import { Mail, MapPin, Github, Linkedin, Phone, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  isVisible?: boolean;
}

const Footer = ({ isVisible = true }: FooterProps) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-b from-gray-900/10 to-black/10 backdrop-blur-xl py-6 sm:py-6 relative z-10 mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Título Centralizado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight uppercase">
            Shark Dev
          </h2>
          <p className="text-blue-300/60 text-sm mt-2">Programador</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          
          {/* Seção de Contato */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sharkdev369@gmail.com"
                className="flex items-center gap-3 text-blue-300/80 hover:text-blue-400 transition-colors group"
              >
                <Mail size={18} className="text-blue-500 group-hover:text-blue-400" />
                <span className="text-sm">sharkdev369@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/5581982356879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-300/80 hover:text-blue-400 transition-colors group"
              >
                <Phone size={18} className="text-blue-500 group-hover:text-blue-400" />
                <span className="text-sm">(81) 9.8235-6879 / WhatsApp</span>
              </a>
              <p className="text-xs text-blue-400/60 mt-2">Freelancer e disponível para</p>
              <p className="text-xs text-blue-400/60 mt-2">Trabalho Remoto (Home Office)</p>
            </div>
          </motion.div>

          {/* Seção de Localização */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">Localização</h3>
            <div className="flex items-start gap-3 text-blue-300/80">
              <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
              <div>
              <a href="https://www.google.com.br/maps/place/8%C2%B000'39.2%22S+36%C2%B002'59.1%22W/@-8.010875,-36.0503797,216m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-8.010875!4d-36.049736?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D">
                <p className="text-sm">Rua Projetada - 70</p>
                <p className="text-sm">Vila Cannã - Caruaru - PE</p>
              </a>
              </div>
            </div>
          </motion.div>

          {/* Seção de Redes Sociais */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">Redes Sociais</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://github.com/Marcelo-silva369"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200"
                title="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="http://www.linkedin.com/in/shark-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/shark.dev_369"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200"
                title="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@SharkDev-369"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200"
                title="YouTube"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-blue-500/20 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2026 - Portfólio. Desenvolvido por Shark Dev.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;