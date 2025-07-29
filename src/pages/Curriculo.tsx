import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect } from "react";

const Curriculo = () => {
  const handleDownloadPDFSemFoto = () => {
    const link = document.createElement("a");
    link.href = "/documents/Currículo sem foto.pdf";
    link.download = "Curriculo-Marcelo-Silva.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDFComFoto = () => {
    const link = document.createElement("a");
    link.href = "/documents/Currículo com foto.pdf";
    link.download = "Curriculo-Marcelo-Silva-Com-Foto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Código que depende do objeto window/document
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Currículo sem foto */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-400 text-center sm:text-left">
              Currículo Sem Foto
            </h1>
            <Button
              onClick={handleDownloadPDFSemFoto}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-colors text-lg"
            >
              <Download size={20} />
              Baixar PDF
            </Button>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full">
                <img
                  src="/images/Currículo sem foto.png"
                  alt="Prévia do Currículo Sem Foto"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-6">
                Clique no botão acima para baixar o currículo sem foto em PDF
              </p>
            </div>
          </div>

          {/* Currículo com foto */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-400 text-center sm:text-left">
              Currículo Com Foto
            </h1>
            <Button
              onClick={handleDownloadPDFComFoto}
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
                  src="/images/Currículo com foto.png"
                  alt="Prévia do Currículo Com Foto"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-6">
                Clique no botão acima para baixar o currículo com foto em PDF
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Curriculo;
