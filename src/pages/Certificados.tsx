import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

import Footer from '@/components/Footer';

const certificates = [
  {
    title: 'Frontend Completo',
    institution: 'Danki Code',
    date: '2025',
    level: 'Avançado',
    image: '/images/Certificado-Front-End-Completo-2.0.png',
    pdf: '/pdfs/Curso de Front-End Completo 2.0.pdf'
  },
  {
    title: 'JavaScript Completo',
    institution: 'Danki Code',
    date: '2025',
    level: 'Avançado',
    image: '/images/Certificado-JavaScript.png',
    pdf: '/pdfs/Curso JavaScript Completo.pdf'
  },
  {
    title: 'Python Impressionador',
    institution: 'Hashtag Treinamentos',
    date: '2025',
    level: 'Avançado',
    image: '/images/Certificado-Python-Impressionador.png',
    pdf: '/pdfs/Python Impressionador - Marcelo Erinaldo Da Silva.pdf'
  },
  {
    title: 'IA Impressionador',
    institution: 'Hashtag Treinamentos',
    date: '2024',
    level: 'Avançado',
    image: '/images/Certificado-IA-Impressionador.png',
    pdf: '/pdfs/Inteligência Artificial Impressionador - Marcelo Erinaldo Da Silva.pdf'
  },
  {
    title: 'Excel Impressionador',
    institution: 'Hashtag Treinamentos',
    date: '2024',
    level: 'Avançado',
    image: '/images/Certificado-Excel-Impressionador.png',
    pdf: '/pdfs/Excel Impressionador - Marcelo Erinaldo Da Silva.pdf'
  },
  {
    title: 'Auxiliar Administrativo',
    institution: 'Centro Educacional BRASTEC',
    date: '2024',
    level: 'Avançado',
    image: '/images/Certificado-Administracao.png',
    pdf: '/pdfs/Certificado.pdf'
  },
  {
    title: 'Lógica de Programação em Python',
    institution: 'Curso em Video',
    date: '2024',
    level: 'Iniciante',
    image: '/images/Certificado-Logica-Programacao.png',
    pdf: '/pdfs/Certificado logica de programção.pdf'
  },
  {
    title: 'Lógica de Programação (PHP/JS)',
    institution: 'Danki Code',
    date: '2025',
    level: 'Iniciante',
    image: '/images/Logica de programação (PHP - JavaScript).png',
    pdf: '/pdfs/Curso logica de programação - foco PHP-JAVASICRIPT.pdf'
  }
];

const Certificados = () => {
  
  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-[#0C0C0C] text-[#D7E2EA]">
        
        <Header />
      
        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow">
          <div className="flex flex-col gap-4 mb-16">
            <span className="text-gradient-red text-[11px] font-black uppercase tracking-[0.4em]">Formação & Certificações</span>
            <h1 className="hero-heading text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
              Cursos & <br />
              <span className="text-white/20">Diplomas</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => cert.pdf && window.open(cert.pdf, '_blank')}
                className="flex flex-col gap-6 p-6 sm:p-8 border border-white/10 bg-[#0C0C0C] hover:border-[#64B5F6]/50 group-hover:shadow-[0_0_20px_rgba(100,181,246,0.3)] transition-all duration-500 group cursor-pointer rounded-[25px]"
              >
                <div className="flex justify-between items-start">
                  <span className="text-gradient-red text-[10px] font-black uppercase tracking-widest">{cert.date}</span>
                  <span className="text-[10px] text-gradient-red font-bold uppercase tracking-widest">{cert.level}</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#D7E2EA] group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#64B5F6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{cert.title}</h3>
                  <p className="text-gradient-red text-sm font-medium uppercase tracking-widest">{cert.institution}</p>
                </div>

                <div className="mt-4 w-12 h-[1px] bg-[#64B5F6] group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Certificados;