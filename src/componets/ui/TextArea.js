


'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';

export default function Input({ label, error, className = '', hideLabel = false, ...props }) {
  return (
    <motion.div
      {...fadeIn}
      className={`mb-4 ${className}`}
    >
      {!hideLabel && label && (
        <label className="block text-gray-700 mb-2">{label}</label>
      )}
      <input
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-cyan-200'
        }`}
        {...props} 
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </motion.div>
  );
}



