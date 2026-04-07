import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  onComplete?: () => void;
}

const AnimatedTitle = ({ text, className = "", onComplete }: AnimatedTitleProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Se o texto já estiver completo (por exemplo, após uma re-renderização do pai), não reinicia.
    if (displayedText === text) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
        if (onComplete) {
          setTimeout(onComplete, 600); // Pausa de 600ms após terminar de escrever
        }
      }
    }, 120); // Velocidade de escrita mais lenta (120ms)

    return () => clearInterval(interval);
  }, [text, onComplete]); // Removi o displayedText do trigger para evitar loops, mas mantive a lógica de segurança.

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`flex justify-center items-center flex-wrap gap-x-1 sm:gap-x-2 font-black mb-16 ${className}`}>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] text-3xl md:text-4xl lg:text-5xl"
      >
        {"{"}
      </motion.span>
      
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] text-3xl md:text-4xl lg:text-5xl">
        {displayedText}
        <span className={`inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
      </span>

      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] text-3xl md:text-4xl lg:text-5xl"
      >
        {"}"}
      </motion.span>
    </div>
  );
};

export default AnimatedTitle;
