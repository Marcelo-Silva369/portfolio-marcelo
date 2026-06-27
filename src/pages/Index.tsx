import React from 'react';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <PageTransition>
      <div className="main-wrapper min-h-screen relative flex flex-col bg-[#0C0C0C] text-[#D7E2EA] selection:bg-[#B600A8] selection:text-white overflow-x-clip">
        <main className="w-full flex-grow flex flex-col">
          {/* Global Header */}
          <Header />
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Marquee Section */}
          <MarqueeSection />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Services Section */}
          <ServicesSection />

          {/* 5. Projects Section */}
          <ProjectsSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
