import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectCarousel from '@/components/ProjectCarousel';
import PageTransition from '@/components/PageTransition';
import { GlobalBackground } from '@/components/GlobalBackground';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative flex flex-col">
      <GlobalBackground />
      <Header />
      
      <main className="pt-28 sm:pt-0 relative z-10 flex-grow">
        <Hero />
      </main>
      
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;