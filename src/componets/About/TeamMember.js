



'use client';

import { motion } from 'framer-motion';
import { hoverScale } from '@/lib/animation';

export default function TeamMember({ member }) {
  return (
    <motion.div
      {...hoverScale}
      className="bg-surface rounded-xl p-6 shadow-lg border border-gray-700"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
          {member.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">{member.name}</h3>
          <p className="text-secondary">{member.role}</p>
        </div>
      </div>
      <p className="text-secondary mb-4">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.expertise.map((skill, i) => (
          <span 
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}