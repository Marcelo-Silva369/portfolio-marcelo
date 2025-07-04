
import Header from '@/components/Header';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-green-400 mb-12 text-center">
            Contato
          </h1>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="bg-gradient-to-br from-green-400/10 to-blue-400/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Entre em Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">contato@portfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone</p>
                    <p className="text-white font-semibold">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Localização</p>
                    <p className="text-white font-semibold">São Paulo, SP</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-400/20 rounded-lg flex items-center justify-center transition-colors">
                    <Github className="w-5 h-5 text-white hover:text-green-400" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-400/20 rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulário */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Envie uma Mensagem</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold py-3 rounded-lg hover:from-green-300 hover:to-green-400 transition-all duration-300 hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
