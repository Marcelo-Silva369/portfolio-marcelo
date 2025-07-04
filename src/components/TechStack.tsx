
const TechStack = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          Tecnologias
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {/* HTML */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 sm:w-20 h-20 sm:h-24 bg-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-orange-500/50">
              <span className="text-white font-bold text-lg sm:text-2xl">HTML</span>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">HTML</span>
          </div>
          
          {/* JavaScript */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 sm:w-20 h-20 sm:h-24 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-yellow-400/50">
              <span className="text-black font-bold text-lg sm:text-2xl">JS</span>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">JavaScript</span>
          </div>
          
          {/* CSS */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 sm:w-20 h-20 sm:h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/50">
              <span className="text-white font-bold text-lg sm:text-2xl">CSS</span>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
