


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

