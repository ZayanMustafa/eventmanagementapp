



'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';
import CountUp from 'react-countup'; 

export default function Milestone({ value, label, isNumber = true }) {
  return (
    <motion.div 
      {...fadeIn}
      className="text-center p-6 bg-surface rounded-lg border border-gray-700"
    >
      <div className="text-4xl font-bold text-accent mb-2">
        {isNumber ? (
          <CountUp end={value} duration={2.5} />
        ) : (
          value
        )}
      </div>
      <p className="text-secondary">{label}</p>
    </motion.div>
  );
}
