
import Header from '@/components/Header';

const Certificados = () => {
  const certificates = [
    {
      title: 'React Developer',
      institution: 'Tech Academy',
      date: '2024',
      level: 'Avançado'
    },
    {
      title: 'JavaScript ES6+',
      institution: 'Code Institute',
      date: '2023',
      level: 'Intermediário'
    },
    {
      title: 'Node.js Backend',
      institution: 'Dev School',
      date: '2023',
      level: 'Avançado'
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
                <div className="h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CERTIFICADO</span>
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
