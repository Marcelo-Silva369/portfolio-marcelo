
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const Curriculo = () => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('curriculo-content');
    const opt = {
      margin: 1,
      filename: 'curriculo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mb-6 sm:mb-0 text-center sm:text-left">
              Currículo
            </h1>
            <Button 
              onClick={handleDownloadPDF}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              Baixar PDF
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div 
              id="curriculo-content"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              
              {/* Experiência */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-400 mb-6">Experiência</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-xl font-bold text-white">Desenvolvedor Full Stack</h3>
                    <p className="text-gray-400 mb-2">Tech Company • 2023 - Presente</p>
                    <p className="text-gray-300">
                      Desenvolvimento de aplicações web usando React, Node.js e MongoDB. 
                      Colaboração em equipe ágil para entregar soluções de alta qualidade.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-xl font-bold text-white">Desenvolvedor Frontend</h3>
                    <p className="text-gray-400 mb-2">Digital Agency • 2022 - 2023</p>
                    <p className="text-gray-300">
                      Criação de interfaces responsivas e interativas usando HTML, CSS e JavaScript. 
                      Foco em experiência do usuário e performance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Educação */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-400 mb-6">Educação</h2>
                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-bold text-white">Ciência da Computação</h3>
                  <p className="text-gray-400 mb-2">Universidade Federal • 2020 - 2024</p>
                  <p className="text-gray-300">
                    Bacharelado com foco em desenvolvimento de software e tecnologias web.
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="text-3xl font-bold text-green-400 mb-6">Habilidades Técnicas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Frontend</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• React & Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• HTML5 & CSS3</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Backend</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Node.js & Express</li>
                      <li>• MongoDB</li>
                      <li>• PostgreSQL</li>
                      <li>• RESTful APIs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Ferramentas</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Git & GitHub</li>
                      <li>• Docker</li>
                      <li>• AWS</li>
                      <li>• Figma</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Curriculo;
