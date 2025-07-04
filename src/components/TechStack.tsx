
const TechStack = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Tecnologias
        </h2>
        
        <div className="flex justify-center items-center space-x-16">
          {/* HTML */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-24 bg-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-orange-500/50">
              <span className="text-white font-bold text-2xl">HTML</span>
            </div>
            <span className="text-white font-semibold">HTML</span>
          </div>
          
          {/* JavaScript */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-24 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-yellow-400/50">
              <span className="text-black font-bold text-2xl">JS</span>
            </div>
            <span className="text-white font-semibold">JavaScript</span>
          </div>
          
          {/* CSS */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-20 h-24 bg-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/50">
              <span className="text-white font-bold text-2xl">CSS</span>
            </div>
            <span className="text-white font-semibold">CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
