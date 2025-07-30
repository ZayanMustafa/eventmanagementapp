


'use client'; 
import { motion } from 'framer-motion';

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const hoverScale = {
  whileHover: { scale: 1.03 },
  transition: { type: 'spring', stiffness: 400 }
};

export const tapScale = {
  whileTap: { scale: 0.95 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


//  Hero 

export const heroImageAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.5, ease: "easeOut" }
};

export const heroTextAnim = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 }
};

export const heroButtonAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.6 }
};


