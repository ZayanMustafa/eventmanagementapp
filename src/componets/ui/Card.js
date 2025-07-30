




'use client';

import { motion } from 'framer-motion';
import { hoverScale } from '@/lib/animation';

export default function Card({ title, description, className = '', ...props }) {
  return (
    <motion.div
      {...hoverScale}
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${className}`}
      {...props}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}







