const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-green-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-blue-400/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-yellow-400 mb-6 sm:mb-8 animate-fade-in">
          Shark Dev
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in delay-500 px-4">
          Olá! Eu sou Marcelo, um Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis
        </p>
        
        <div className="animate-fade-in delay-1000">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8">Tecnologias</h3>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 px-4">
            <div className="px-4 sm:px-5 py-2 bg-orange-500/20 border border-orange-500/50 rounded-lg backdrop-blur-sm">
              <span className="text-orange-400 font-semibold text-sm sm:text-base">HTML</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm sm:text-base">CSS</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-blue-800/20 border border-blue-300/50 rounded-lg backdrop-blur-sm">
              <span className="text-blue-300 font-semibold text-sm sm:text-base">Tailwind</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-yellow-400/20 border border-yellow-400/50 rounded-lg backdrop-blur-sm">
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">JavaScript</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-green-400/20 border border-green-400/50 rounded-lg backdrop-blur-sm">
              <span className="text-green-400 font-semibold text-sm sm:text-base">React</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-blue-400/20 border border-blue-400/50 rounded-lg backdrop-blur-sm">
              <span className="text-blue-300 font-semibold text-sm sm:text-base">TypeScript</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-purple-400/20 border border-purple-400/50 rounded-lg backdrop-blur-sm">
              <span className="text-purple-300 font-semibold text-sm sm:text-base">Node.js</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm sm:text-base">Python</span>
            </div>
            <div className="px-4 sm:px-5 py-2 bg-green-700/20 border border-green-700/50 rounded-lg backdrop-blur-sm">
              <span className="text-green-600 font-semibold text-sm sm:text-base">Excel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
