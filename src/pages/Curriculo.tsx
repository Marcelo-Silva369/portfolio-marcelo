
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const Curriculo = () => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('curriculo-content');
    const opt = {
      margin: 0.5,
      filename: 'curriculo.pdf',
      image: { 
        type: 'jpeg', 
        quality: 1.0 
      },
      html2canvas: { 
        scale: 3,
        useCORS: true,
        letterRendering: true,
        allowTaint: false,
        dpi: 300,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait',
        compress: false
      }
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
              className="bg-white text-black rounded-2xl p-8 print:bg-white print:text-black"
              style={{
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                color: '#000000'
              }}
            >
              
              {/* Experiência */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-600 mb-6 border-b-2 border-green-600 pb-2">Experiência</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-bold text-black">Desenvolvedor Full Stack</h3>
                    <p className="text-gray-600 mb-2 font-semibold">Tech Company • 2023 - Presente</p>
                    <p className="text-black">
                      Desenvolvimento de aplicações web usando React, Node.js e MongoDB. 
                      Colaboração em equipe ágil para entregar soluções de alta qualidade.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold text-black">Desenvolvedor Frontend</h3>
                    <p className="text-gray-600 mb-2 font-semibold">Digital Agency • 2022 - 2023</p>
                    <p className="text-black">
                      Criação de interfaces responsivas e interativas usando HTML, CSS e JavaScript. 
                      Foco em experiência do usuário e performance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Educação */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-600 mb-6 border-b-2 border-green-600 pb-2">Educação</h2>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-bold text-black">Ciência da Computação</h3>
                  <p className="text-gray-600 mb-2 font-semibold">Universidade Federal • 2020 - 2024</p>
                  <p className="text-black">
                    Bacharelado com foco em desenvolvimento de software e tecnologias web.
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="text-3xl font-bold text-green-600 mb-6 border-b-2 border-green-600 pb-2">Habilidades Técnicas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3 bg-gray-100 p-2 rounded">Frontend</h4>
                    <ul className="space-y-2 text-black">
                      <li>• React & Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• HTML5 & CSS3</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3 bg-gray-100 p-2 rounded">Backend</h4>
                    <ul className="space-y-2 text-black">
                      <li>• Node.js & Express</li>
                      <li>• MongoDB</li>
                      <li>• PostgreSQL</li>
                      <li>• RESTful APIs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3 bg-gray-100 p-2 rounded">Ferramentas</h4>
                    <ul className="space-y-2 text-black">
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
