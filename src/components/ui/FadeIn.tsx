import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<any> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof typeof motion | string;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  ...props
}: FadeInProps) => {
  // Use motion.create or dynamic motion indexer
  // Framer Motion 12 allows motion.create(as) or just mapping to motion[as]
  const MotionComponent = typeof as === 'string' && (motion as any)[as] 
    ? (motion as any)[as] 
    : motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
