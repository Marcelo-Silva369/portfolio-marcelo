import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton = ({
  label = 'Contact Me',
  onClick,
  className = '',
}: ContactButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 
        text-xs sm:text-sm md:text-base cursor-pointer group-hover:shadow-[0_0_20px_rgba(100,181,246,0.5)] ${className}`}
      style={{
        background: 'linear-gradient(123deg, #0A1628 7%, #1a3a6b 37%, #2d5aa0 72%, #64B5F6 100%)',
        boxShadow: '0px 4px 4px rgba(100, 181, 246, 0.25), inset 4px 4px 12px #2d5aa0',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A1628]">{label}</span>
      <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-white to-[#64B5F6] transition-all duration-700 ease-out group-hover:h-full" />
    </motion.button>
  );
};

export default ContactButton;
