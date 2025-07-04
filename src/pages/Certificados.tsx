
import Header from '@/components/Header';

const Certificados = () => {
  const certificates = [
    {
      title: 'Frontend Completo',
      institution: 'Danki Code',
      date: '2025',
      level: 'Avançado',
      image: '/images/Certificado-Front-End-Completo-2.0.png',
      pdf: '/pdfs/Curso de Front-End Completo 2.0.pdf' // Caminho para o PDF
    },
    {
      title: 'JavaScript Completo',
      institution: 'Danki Code',
      date: '2025',
      level: 'Avançado',
      image: '/images/Certificado-JavaScript.png',
      pdf: '/pdfs/Curso JavaScript Completo.pdf' // Caminho para o PDF
    },
    {
      title: 'Python Impressionador',
      institution: 'Hashtag Treinamentos',
      date: '2025',
      level: 'Avançado',
      image: '/images/Certificado-Python-Impressionador.png',
      pdf: '/pdfs/Python Impressionador - Marcelo Erinaldo Da Silva.pdf' // Caminho para o PDF
    },
    {
      title: 'IA Impressionador',
      institution: 'Hashtag Treinamentos',
      date: '2024',
      level: 'Avançado',
      image: '/images/Certificado-IA-Impressionador.png',
      pdf: '/pdfs/Inteligência Artificial Impressionador - Marcelo Erinaldo Da Silva.pdf' // Caminho para o PDF
    },
    {
      title: 'Excel Impressionador',
      institution: 'Hashtag Treinamentos',
      date: '2024',
      level: 'Avançado',
      image: '/images/Certificado-Excel-Impressionador.png',
      pdf: '/pdfs/Excel Impressionador - Marcelo Erinaldo Da Silva.pdf' // Caminho para o PDF
    },
    {
      title: 'Auxiliar Administrativo',
      institution: 'Centro Educacional BRASTEC',
      date: '2024',
      level: 'Avançado',
      image: '/images/Certificado-Administracao.png',
      pdf: '/pdfs/Certificado.pdf' // Caminho para o PDF
    },
    {
      title: 'Lógica de Programação em Python',
      institution: 'Curso em Video',
      date: '2024',
      level: 'Iniciante',
      image: '/images/Certificado-Logica-Programacao.png',
      pdf: '/pdfs/Certificado logica de programção.pdf' // Caminho para o PDF
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-green-400 mb-12 text-center">
            Certificados
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-400/10 to-blue-400/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div 
                  className="h-48 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => window.open(cert.pdf, '_blank', 'noopener,noreferrer')}
                  title="Clique para visualizar o certificado"
                >
                  <div className="relative w-full h-full group">
                    <img 
                      src={cert.image} 
                      alt={`Certificado de ${cert.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://via.placeholder.com/300x200/1a1a2e/00ff9d?text=Certificado';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-semibold bg-green-500 px-4 py-2 rounded-lg">
                        Ver Certificado
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-300 mb-2">{cert.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">{cert.date}</span>
                  <span className="px-3 py-1 bg-green-400/20 border border-green-400/50 rounded-full text-green-400 text-sm">
                    {cert.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificados;
