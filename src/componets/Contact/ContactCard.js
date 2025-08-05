


'use client';

import { motion } from 'framer-motion';
import { hoverScale } from '@/lib/animation';
import Button from '../ui/Button';
import Link from 'next/link';

export default function ContactCard({ method }) {
  return (
    <motion.div 
      {...hoverScale}
      className="bg-surface rounded-xl p-6 border border-gray-700 h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
          {method.icon}
        </div>
        <h3 className="text-xl font-bold text-primary">{method.title}</h3>
      </div>
      <p className="text-secondary mb-6">{method.description}</p>
      <Link href={method.link} passHref>
        <Button 
          variant="outline"
          className="w-full"
      >
        {method.action}
      </Button>
      </Link>
    </motion.div>
  );
}

