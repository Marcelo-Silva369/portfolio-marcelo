import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.bio': 'Bio',
    'nav.portfolio': 'Projetos',
    'nav.certificates': 'Certificados',
    'nav.cv': 'Currículo',
    'nav.contact': 'Contato',
    'hero.title': 'Marcelo Silva',
    'hero.subtitle': 'Programador',
    'hero.description': 'Shark Dev. Especialista em criar ecossistemas digitais robustos, unindo performance, escalabilidade e um design de alto nível cinematográfico.',
    'hero.cta': 'Explorar Projetos',
    'hero.est': 'EST. 2024',
    'bio.title': 'A Trajetória',
    'bio.name_last': 'Silva',
    'bio.p1': 'Nascido em Tacaimbó, Pernambuco, minha jornada no mundo do desenvolvimento começou com a curiosidade de transformar linhas de código em soluções reais. Hoje, como Shark Dev, foco em entregar excelência técnica com uma estética premium.',
    'bio.p2': 'Com um olhar apurado para o design e uma base sólida em lógica de programação, transito entre o front-end e back-end, garantindo que cada interface seja tão funcional quanto visualmente impactante.',
    'bio.p3': 'Atualmente, dedico minha visão para explorar novas fronteiras na inteligência artificial e no design de interfaces modernas, unindo a robustez do código à fluidez da experiência do usuário.',
    'bio.exp': 'Experiência',
    'bio.stack': 'Stack Principal',
    'bio.stack_val': 'Fullstack',
    'bio.focus': 'Foco',
    'bio.focus_val': 'Design & Performance',
    'bio.base': 'Base',
    'portfolio.title': 'Ecossistema Digital',
    'portfolio.subtitle': 'Projetos',
    'portfolio.gallery': 'Selecionados',
    'portfolio.open': 'Ver Detalhes',
    'certs.title': 'Formação & Certificações',
    'certs.subtitle': 'Cursos &',
    'certs.certificates': 'Diplomas',
    'cv.title': 'Documentação',
    'cv.subtitle': 'Currículo',
    'cv.card': 'Técnico',
    'cv.download': 'Baixar Currículo',
    'cv.description': 'Acesse meu histórico profissional detalhado, competências técnicas e trajetória acadêmica nos formatos abaixo.',
    'cv.v1_label': 'Versão Completa',
    'cv.v1_name': 'Currículo com Foto (PDF)',
    'cv.v2_label': 'Versão Sem Foto',
    'cv.v2_name': 'Currículo sem Foto (PDF)',
    'contact.title': 'Conexão',
    'contact.subtitle': 'Vamos',
    'contact.contact': 'Criar algo?',
    'footer.rights': 'Todos os Direitos Reservados',
    'footer.model': 'Shark Dev Portfólio',
  },
  en: {
    'nav.home': 'Home',
    'nav.bio': 'Bio',
    'nav.portfolio': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.cv': 'Resume',
    'nav.contact': 'Contact',
    'hero.title': 'Marcelo Silva',
    'hero.subtitle': 'Programmer',
    'hero.description': 'Shark Dev. Specialist in creating robust digital ecosystems, merging performance, scalability, and high-end cinematic design.',
    'hero.cta': 'Explore Projects',
    'hero.est': 'EST. 2024',
    'bio.title': 'The Journey',
    'bio.name_last': 'Silva',
    'bio.p1': 'Born in Tacaimbó, Pernambuco, my journey in the development world started with the curiosity to transform code lines into real solutions. Today, as Shark Dev, I focus on delivering technical excellence with a premium aesthetic.',
    'bio.p2': 'With a sharp eye for design and a solid foundation in programming logic, I transition between front-end and back-end, ensuring that each interface is as functional as it is visually impactful.',
    'bio.p3': 'Currently, I dedicate my vision to exploring new frontiers in artificial intelligence and modern interface design, uniting the robustness of code with the fluidity of user experience.',
    'bio.exp': 'Experience',
    'bio.stack': 'Main Stack',
    'bio.stack_val': 'Fullstack',
    'bio.focus': 'Focus',
    'bio.focus_val': 'Design & Performance',
    'bio.base': 'Base',
    'portfolio.title': 'Digital Ecosystem',
    'portfolio.subtitle': 'Projects',
    'portfolio.gallery': 'Selected',
    'portfolio.open': 'View Details',
    'certs.title': 'Education & Certifications',
    'certs.subtitle': 'Courses &',
    'certs.certificates': 'Diplomas',
    'cv.title': 'Documentation',
    'cv.subtitle': 'Resume',
    'cv.card': 'Technical',
    'cv.download': 'Download Resume',
    'cv.description': 'Access my detailed professional history, technical skills, and academic background in the formats below.',
    'cv.v1_label': 'Complete Version',
    'cv.v1_name': 'Resume with Photo (PDF)',
    'cv.v2_label': 'No Photo Version',
    'cv.v2_name': 'Resume without Photo (PDF)',
    'contact.title': 'Connection',
    'contact.subtitle': 'Let\'s',
    'contact.contact': 'Build something?',
    'footer.rights': 'All Rights Reserved',
    'footer.model': 'Shark Dev Portfolio',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
