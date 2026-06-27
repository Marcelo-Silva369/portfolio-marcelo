import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character = ({ char, index, total, progress }: CharacterProps) => {
  // Distribute the character reveal across the scroll range
  const start = index / total;
  const end = Math.min(1, start + 0.1); // Smooth overlap window
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      {/* Invisible layout placeholder */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const totalChars = characters.length;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => (
        <Character
          key={index}
          char={char}
          index={index}
          total={totalChars}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
export default AnimatedText;
