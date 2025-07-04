
import Header from '@/components/Header';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Entre em Contato</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mntprogramador369@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-sm sm:text-base break-all hover:text-green-400 transition-colors">
                    mntprogramador369@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <a href="https://wa.me/5581982356879" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-sm sm:text-base hover:text-green-400 transition-colors">
                    (81) 9 8235-6879
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localização</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Rua: Francisco Barbosa Xavier, 38 </p>
                  <p className="text-white font-semibold text-sm sm:text-base">Bairro: São Domingos</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Brejo da Madre de Deus - PE, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Marcelo-Silva369" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-gray-600/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="GitHub">
                  <Github className="w-5 h-5 text-white group-hover:text-gray-300 transition-colors" />
                </a>
                <a href="http://www.linkedin.com/in/marcelo-tubarao" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-blue-400/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="LinkedIn">
                  <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://www.instagram.com/marcelotubarao_369/profilecard/?igsh=MW9jcDZyeWQxdnZxbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="Instagram">
                  <Instagram className="w-5 h-5 text-white group-hover:text-pink-500 transition-colors" />
                </a>
                <a href="https://youtube.com/@marcelotubarao-xi2ej?si=AT9zZMtci98-klqF" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="YouTube">
                  <Youtube className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
                </a>
                <a href="https://wa.me/5581982356879" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group" title="WhatsApp">
                  <MessageCircle className="w-5 h-5 text-white group-hover:text-green-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
