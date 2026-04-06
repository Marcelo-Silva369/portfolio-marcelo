import Header from "@/components/Header";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";

const Contato = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-t border-cyan-500/10">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 relative z-10 overflow-hidden">
          <AnimatedTitle text="CONTATOS" />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full shadow-[0_0_10px_#22d3ee] mb-16"
          ></motion.div>

          <div className="max-w-4xl mx-auto" style={{ perspective: 1500 }}>
            <motion.div 
              initial={{ opacity: 0, rotateX: -20, y: 100 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="bg-gradient-to-br from-slate-800/80 to-blue-950/80 backdrop-blur-xl border border-blue-500/30 rounded-[2rem] p-6 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-8 border-b border-blue-500/20 pb-4 inline-block" style={{ transform: "translateZ(30px)" }}>
                Informações Pessoais
              </h2>

              <div className="space-y-8" style={{ transform: "translateZ(40px)" }}>
                
                {/* EMAIL */}
                <motion.div whileHover={{ scale: 1.02, x: 10 }} className="relative group rounded-2xl overflow-hidden transition-all shadow-lg border border-transparent hover:shadow-[0_10px_30px_rgba(239,68,68,0.2)]">
                  {/* FEIXE LUMINOSO EMAIL */}
                  <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `conic-gradient(from 0deg, transparent 40%, #ef4444 100%)` }}
                    />
                  </div>
                  <div className="absolute inset-[2px] bg-slate-900 rounded-[14px]"></div>

                  <div className="relative z-10 flex items-center space-x-6 p-4">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sharkdev369@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)] border border-red-500/20 group-hover:border-orange-500/50"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img 
                        src="https://img.icons8.com/3d-fluency/94/mail.png" 
                        alt="Email" 
                        className="w-9 h-9 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" 
                        style={{ transform: "translateZ(20px)" }}
                      />
                    </a>
                    <div className="min-w-0">
                      <p className="text-cyan-400/80 text-sm font-semibold uppercase tracking-wider mb-1">Email Direto</p>
                      <p className="text-white font-bold text-lg sm:text-xl truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        sharkdev369@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* TELEFONE */}
                <motion.div whileHover={{ scale: 1.02, x: 10 }} className="relative group rounded-2xl overflow-hidden transition-all shadow-lg border border-transparent hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
                  {/* FEIXE LUMINOSO TELEFONE */}
                  <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `conic-gradient(from 0deg, transparent 40%, #3b82f6 100%)` }}
                    />
                  </div>
                  <div className="absolute inset-[2px] bg-slate-900 rounded-[14px]"></div>

                  <div className="relative z-10 flex items-center space-x-6 p-4">
                    <a
                      href="https://wa.me/5581982356879"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] border border-blue-500/20 group-hover:border-cyan-500/50"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img 
                        src="https://img.icons8.com/3d-fluency/94/whatsapp.png" 
                        alt="WhatsApp" 
                        className="w-10 h-10 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" 
                        style={{ transform: "translateZ(20px)" }}
                      />
                    </a>
                    <div>
                      <p className="text-blue-400/80 text-sm font-semibold uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                      <p className="text-white font-bold text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        (81) 9 8235-6879
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* LOCALIZAÇÃO */}
                <motion.div whileHover={{ scale: 1.02, x: 10 }} className="relative group rounded-2xl overflow-hidden transition-all shadow-lg border border-transparent hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)]">
                  {/* FEIXE LUMINOSO LOCALIZAÇÃO */}
                  <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `conic-gradient(from 0deg, transparent 40%, #a855f7 100%)` }}
                    />
                  </div>
                  <div className="absolute inset-[2px] bg-slate-900 rounded-[14px]"></div>

                  <div className="relative z-10 flex items-center space-x-6 p-4">
                    <a
                      href="https://www.google.com/maps?q=Rua:+Francisco+Barbosa+Xavier,+38,+São+Domingos,+Brejo+da+Madre+de+Deus+-+PE,+Brasil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] border border-purple-500/20 group-hover:border-pink-500/50"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img 
                        src="https://img.icons8.com/3d-fluency/94/map-marker--v2.png" 
                        alt="Localização" 
                        className="w-10 h-10 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" 
                        style={{ transform: "translateZ(20px)" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "https://img.icons8.com/color/96/marker--v1.png";
                        }}
                      />
                    </a>
                    <div>
                      <p className="text-purple-400/80 text-sm font-semibold uppercase tracking-wider mb-1">Local Base</p>
                      <p className="text-white font-semibold text-base sm:text-lg">Rua Francisco Barbosa Xavier, 38</p>
                      <p className="text-slate-300 text-sm sm:text-base">São Domingos, Brejo da Madre de Deus - PE</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* REDES SOCIAIS EM 3D */}
              <div className="mt-16 pt-10 border-t border-blue-500/20" style={{ transform: "translateZ(50px)" }}>
                <h3 className="text-xl font-bold text-cyan-400 mb-8 text-center">Conecte-se nas Redes Sociais</h3>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  
                  {[
                    { name: "GitHub", href: "https://github.com/Marcelo-Silva369", color: "from-gray-700 to-black", img: "https://img.icons8.com/3d-fluency/94/github.png", shadow: "shadow-gray-500/50" },
                    { name: "LinkedIn", href: "http://www.linkedin.com/in/marcelo-tubarao", color: "from-blue-600 to-blue-900", img: "https://img.icons8.com/3d-fluency/94/linkedin.png", shadow: "shadow-blue-500/50" },
                    { name: "Instagram", href: "https://www.instagram.com/shark.dev_369/profilecard/?igsh=MW9jcDZyeWQxdnZxbQ==", color: "from-purple-500 via-pink-500 to-orange-500", img: "https://img.icons8.com/3d-fluency/94/instagram-new.png", shadow: "shadow-pink-500/50" },
                    { name: "YouTube", href: "https://www.youtube.com/@SharkDev-369", color: "from-red-600 to-red-900", img: "https://img.icons8.com/3d-fluency/94/youtube-play.png", shadow: "shadow-red-500/50" },
                    { name: "WhatsApp", href: "https://wa.me/5581982356879", color: "from-green-500 to-emerald-800", img: "https://img.icons8.com/3d-fluency/94/whatsapp.png", shadow: "shadow-green-500/50" },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${social.color} rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:${social.shadow} transition-shadow border border-white/20`}
                      style={{ transformStyle: "preserve-3d" }}
                      whileHover={{ 
                        scale: 1.15, 
                        rotateY: idx < 2 ? 15 : (idx > 2 ? -15 : 0), 
                        rotateX: 10,
                        z: 40,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                      }}
                      whileTap={{ scale: 0.9, z: 0 }}
                    >
                      <img 
                        src={social.img} 
                        alt={social.name} 
                        className="w-8 h-8 sm:w-12 sm:h-12 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
                        style={{ transform: "translateZ(30px)" }}
                      />
                    </motion.a>
                  ))}

                </div>
              </div>

            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Contato;
