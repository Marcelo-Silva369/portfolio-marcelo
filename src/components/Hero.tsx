import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactButton } from '@/components/ui/ContactButton';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0C0C0C] to-black">
      {/* 1. HERO PORTRAIT (Behind text, z-0) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <FadeIn
          delay={0.6}
          y={30}
          className="pointer-events-auto w-full h-full flex items-end justify-center"
        >
          <img
            src="/images/img-hero.png"
            alt="Marcelo Silva"
            className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(181,1,167,0.15)] filter brightness-90 pointer-events-none"
            loading="eager"
          />
        </FadeIn>
      </div>

      {/* 2. HERO HEADING (In front of portrait, z-20) */}
      <div className="w-full flex-grow flex items-center justify-center relative z-20 px-4 sm:px-6 pointer-events-none">
        <div className="w-full overflow-hidden flex flex-col items-center mt-32 sm:mt-44 md:mt-72">
          <FadeIn delay={0.15} y={40} className="w-full text-center">
            <h1 className="hero-heading text-[17vw] sm:text-[19vw] md:text-[16vw] lg:text-[15vw] font-black uppercase tracking-tight leading-none whitespace-nowrap select-none">
              Marcelo
            </h1>
          </FadeIn>
          <FadeIn delay={0.3} y={30} className="text-center">
            <p className="text-[4.5vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gradient-blue select-none">
              Tubarão Dev
            </p>
          </FadeIn>
        </div>
      </div>

      {/* 3. BOTTOM BAR (z-30) - Overlays the bottom of the image */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black via-black/80 to-transparent pt-56 sm:pt-20 md:pt-16 pb-4 sm:pb-6 md:pb-8">
        <div className="px-4 sm:px-6 md:px-10 flex justify-between items-end gap-3">
          {/* Left description */}
          <FadeIn delay={0.35} y={20} className="text-left max-w-[40%] sm:max-w-none">
            <p
              className="font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
              style={{
                fontSize: 'clamp(0.6rem, 1.2vw, 1.5rem)',
                maxWidth: 'clamp(120px, 20vw, 280px)',
              }}
            >
              um criador 3d movido a criar projetos marcantes e inesquecíveis
            </p>
          </FadeIn>

          {/* Right action button */}
          <FadeIn delay={0.5} y={20} className="pointer-events-auto shrink-0">
            <ContactButton
              label="Contato"
              onClick={() => navigate('/contato')}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Hero;