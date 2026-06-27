import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton = ({
  label = 'Live Project',
  onClick,
  className = '',
}: LiveProjectButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full border-2 border-[#64B5F6] text-[#64B5F6] font-medium uppercase tracking-widest 
        px-8 py-3 sm:px-10 sm:py-3.5 
        text-sm sm:text-base transition-colors duration-300 cursor-pointer group-hover:shadow-[0_0_20px_rgba(100,181,246,0.5)] ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A1628]">{label}</span>
      <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-white to-[#64B5F6] transition-all duration-700 ease-out group-hover:h-full" />
    </motion.button>
  );
};

export default LiveProjectButton;
