
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useEffect } from 'react';

const Curriculo = () => {
  const handleDownloadPDF = () => {
    // Cria um link temporário para o PDF
    const link = document.createElement('a');
    link.href = '/documents/curriculo-site.pdf';
    link.download = 'Curriculo-Marcelo-Silva.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Garante que o código do cliente seja executado apenas no navegador
  useEffect(() => {
    // Código que depende do objeto window/document
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-400 text-center sm:text-left">
              Currículo
            </h1>
            <Button 
              onClick={handleDownloadPDF}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-colors text-lg"
            >
              <Download size={20} />
              Baixar PDF
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full">
                <img 
                  src="/images/curriculo-site.png" 
                  alt="Prévia do Currículo"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-6">Clique no botão acima para baixar o currículo em PDF</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Curriculo;
