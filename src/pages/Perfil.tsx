import Header from "@/components/Header";

const Perfil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-green-400 mb-8 text-center">
              Meu Perfil
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-green-400/10 to-blue-400/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-400 mb-6 overflow-hidden">
                    <img
                      src="/images/LogoCurriculo.png"
                      alt="Sua Foto"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Se a imagem não carregar, mostra apenas o gradiente
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-white text-center mb-2">
                    Marcelo Silva
                  </h1>
                  <h2 className="text-2xl font-bold text-green-400 text-center mb-2">
                    Desenvolvedor Front-end
                  </h2>
                  <p className="text-gray-300 text-center">
                    Apaixonado por criar soluções digitais inovadoras. Com
                    experiência em desenvolvimento front-end e back-end, busco
                    sempre entregar projetos de alta qualidade que ofereçam
                    excelente experiência ao usuário.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Sobre Mim
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Oi, me chamo Marcelo! Sou pernambucano, nascido em Tacaimbó,
                    na zona rural, vindo de uma família simples e batalhadora.
                    Com 2 anos fui morar em São Paulo, mas voltei pra minha
                    terrinha com 5 anos. Minha infância foi bem humilde, sem
                    muito acesso a tecnologia, mas sempre fui muito curioso e
                    com vontade de aprender tudo que via pela frente.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Aos 16 anos me mudei pra Toritama, onde moro até hoje. Foi
                    aqui que tive mais contato com internet e tecnologia e
                    também descobri o dom de cantar, onde passei 18 anos.
                    Conheci muitas pessoas legais e cantei em várias bandas de
                    forró da região. Sempre fui apaixonado por tudo que envolve
                    tecnologia, e nos últimos anos isso só cresceu. Já trabalhei
                    com marketing, focado em prospecção de leads, o que me deu
                    uma boa base de comunicação e estratégia.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Hoje estou focado 100% em entrar de vez no mundo da
                    programação, já concluí cursos de HTML, CSS e JavaScript, e
                    atualmente estou estudando Python, uma linguagem que tem me
                    deixado ainda mais empolgado com as possibilidades da
                    tecnologia e da inteligência artificial. Sou pai de dois
                    filhos, tenho o apoio da minha família em tudo, e meu maior
                    sonho é conseguir meu primeiro emprego na área de
                    tecnologia, crescer profissionalmente e dar uma vida melhor
                    pra quem eu amo. No tempo livre, curto jogar, ler, estudar,
                    ver filmes (principalmente de ficção científica, comédia e
                    ação).
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Estou focado nos estudos de programação e inteligência
                    artificial — esse mundo me fascina de verdade. Tô nessa
                    jornada pra nunca parar de aprender e transformar minha
                    história com muito esforço e dedicação.
                  </p>
                  <h4 className="text-2xl font-bold text-green-400 mb-4">
                    Habilidades
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-400/20 border border-green-400/50 rounded-lg p-4">
                      <h5 className="text-green-400 font-semibold mb-2">
                        Frontend
                      </h5>
                      <p className="text-gray-300 text-sm">
                        HTML, CSS, Tailwind Css, JavaScript, React
                      </p>
                    </div>
                    <div className="bg-blue-400/20 border border-blue-400/50 rounded-lg p-4">
                      <h5 className="text-blue-400 font-semibold mb-2">
                        Backend
                      </h5>
                      <p className="text-gray-300 text-sm">
                        Node.js, Express, MongoDB, Python, IA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
