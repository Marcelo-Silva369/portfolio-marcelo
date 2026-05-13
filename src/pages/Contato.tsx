import Header from "@/components/Header";
import { Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Contato = () => {
  const { t } = useLanguage();
  const contactMethods = [
    { name: "Email", value: "sharkdev369@gmail.com", icon: Mail, href: "mailto:sharkdev369@gmail.com" },
    { name: "Instagram", value: "@shark.dev_369", icon: Instagram, href: "https://www.instagram.com/shark.dev_369/" },
    { name: "WhatsApp", value: "+55 81 98235-6879", icon: FaWhatsapp, href: "https://wa.me/5581982356879" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative flex flex-col bg-black text-white">
        
        <Header />

        <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex-grow flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col items-center text-center gap-16">
              
              <div className="flex flex-col gap-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-primary text-[11px] font-black uppercase tracking-[0.4em]"
                >
                  {t('contact.title')}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter"
                >
                  {t('contact.subtitle')} <br />
                  <span className="text-white/40">{t('contact.contact')}</span>
                </motion.h1>
              </div>

              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-12 w-full md:w-auto">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.name}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex flex-row md:flex-col items-center gap-6 md:gap-4 group w-fit md:w-auto mx-auto md:mx-0"
                    >
                      <div className="relative group/btn overflow-hidden shrink-0">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 bg-white/5 border border-white/10 group-hover:border-primary flex items-center justify-center transition-colors duration-300 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]"
                        >
                          <method.icon size={24} className="relative z-10 text-primary group-hover:text-white transition-colors duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-red-900 to-red-600 transition-all duration-700 ease-out group-hover:h-full">
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-red-400/50 to-transparent animate-pulse" />
                          </div>
                        </motion.div>
                      </div>
                      <div className="flex flex-col gap-1 text-left md:text-center min-w-[180px] md:min-w-0">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">{method.name}</span>
                        <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-500 break-all">{method.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contato;
