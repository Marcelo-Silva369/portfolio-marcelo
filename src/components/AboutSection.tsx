import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { ContactButton } from '@/components/ui/ContactButton';

export const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      id="about" 
      className="min-h-screen w-full relative flex flex-col items-center justify-center text-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Absolute Corner 3D Images */}
      
      {/* Top Left: Moon */}
      <div className="absolute top-[4%] left-[5%] sm:left-[2%] md:left-[4%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Icon"
            className="w-[100px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
          />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D object */}
      <div className="absolute bottom-[8%] left-[10%] sm:left-[6%] md:left-[10%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Object"
            className="w-[70px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
          />
        </FadeIn>
      </div>

      {/* Top Right: Lego icon */}
      <div className="absolute top-[4%] right-[10%] sm:right-[2%] md:right-[4%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Icon"
            className="w-[100px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
          />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D group */}
      <div className="absolute bottom-[8%] right-[5%] sm:right-[6%] md:right-[10%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Object"
            className="w-[100px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]"
          />
        </FadeIn>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-4xl flex flex-col items-center relative z-20">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 10vw, 160px)' }}
          >
            Sobre mim
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Paragraph: Scroll Reveal */}
        <AnimatedText
          text="Desenvolvedor de software em constante evolução. Iniciei meus estudos em 2023 e, desde então, mergulhei de cabeça no ecossistema de desenvolvimento web e mobile. Sou da geração de programadores que enxerga a IA não como um atalho, co-piloto no dia a dia. Uso ferramentas de Inteligência Artificial para aumentar minha produtividade, debugar com eficiência e explorar novas tecnologias mais rápido, mantendo sempre o olhar crítico sobre a qualidade e a segurança do código que entrego. Vamos dar vida ao seu projeto!"
          className="text-[#64B5F6] font-medium text-center leading-relaxed max-w-[560px] select-none"
        />

        {/* Gap between text and contact button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.1} y={20}>
          <ContactButton
            label="Contato"
            onClick={() => navigate('/contato')}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;