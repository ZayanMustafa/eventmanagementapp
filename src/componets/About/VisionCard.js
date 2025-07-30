


'use client';

import { motion } from 'framer-motion';
import { fadeIn, hoverScale } from '@/lib/animation';

export default function VisionCard({ title, description, points }) {
  return (
    <motion.div 
      {...hoverScale}
      className="bg-surface rounded-xl p-6 shadow-lg border border-gray-700"
    >
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-secondary mb-6">{description}</p>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-accent"
          >
            <span className="text-primary">▹</span> {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}