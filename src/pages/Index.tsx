
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import ProjectCarousel from '@/components/ProjectCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main>
        <Hero />
        <TechStack />
        <ProjectCarousel />
      </main>
      
      <footer className="bg-black/50 backdrop-blur-sm border-t border-green-400/20 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Portfólio. Desenvolvido com ❤️ e tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
