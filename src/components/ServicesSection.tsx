import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export const ServicesSection = () => {
  const services = [
    {
      num: '01',
      title: 'Modelagem 3D',
      desc: 'Criação de objetos detalhados, personagens ou ambientes sob medida para as necessidades do cliente, ideal para jogos, produtos e visualizações.',
    },
    {
      num: '02',
      title: 'Renderização',
      desc: 'Renders fotorrealistas de alta qualidade que mostram designs com iluminação, texturas e materiais personalizados para dar vida aos conceitos.',
    },
    {
      num: '03',
      title: 'Motion Design',
      desc: 'Animações dinâmicas e motion graphics que adicionam energia e narrativa a marcas, produtos e experiências digitais.',
    },
    {
      num: '04',
      title: 'Branding',
      desc: 'Desenvolvimento de identidades visuais coesas -- de logotipos a sistemas de marca completos -- que comunicam uma presença clara e memorável.',
    },
    {
      num: '05',
      title: 'Web Design',
      desc: 'Criação de sites limpos, modernos e focados em conversão, com atenção ao layout, tipografia e experiência do usuário.',
    },
  ];

  return (
    <section 
      id="services" 
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 10vw, 160px)' }}
          >
            Serviços
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service, index) => (
            <FadeIn
              key={service.num}
              delay={index * 0.1}
              y={30}
              className="w-full flex flex-row items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0"
            >
              {/* Left Column: Number */}
              <div 
                className="font-black text-[#0C0C0C] select-none leading-none w-1/4 min-w-[70px] sm:min-w-[120px]"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 140px)' }}
              >
                {service.num}
              </div>

              {/* Right Column: Name & Description Stack */}
              <div className="flex flex-col gap-2 w-3/4 text-left">
                <h3 
                  className="font-medium text-[#0C0C0C] uppercase tracking-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;