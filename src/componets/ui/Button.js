'use client';

import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '@/lib/animation';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) {
  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    secondary: 'bg-sky-500 hover:bg-sky-600 text-white',
    outline: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50'
  };

  const sizes = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  return (
    <motion.button
      {...hoverScale}
      {...tapScale}
      className={`rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}


