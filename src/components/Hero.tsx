
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center z-10">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-yellow-400 mb-8 animate-fade-in">
          Portfólio
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-500">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
        </p>
        
        <div className="flex justify-center space-x-6 animate-fade-in delay-1000">
          <div className="px-6 py-3 bg-green-400/20 border border-green-400/50 rounded-lg backdrop-blur-sm">
            <span className="text-green-400 font-semibold">React</span>
          </div>
          <div className="px-6 py-3 bg-blue-400/20 border border-blue-400/50 rounded-lg backdrop-blur-sm">
            <span className="text-blue-400 font-semibold">TypeScript</span>
          </div>
          <div className="px-6 py-3 bg-purple-400/20 border border-purple-400/50 rounded-lg backdrop-blur-sm">
            <span className="text-purple-400 font-semibold">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
