import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PageTransition from '@/components/PageTransition';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-black text-white selection:bg-primary selection:text-white">
        
        <Header />
        
        <main className="relative z-10 flex-grow">
          <Hero />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
