
// File: src/componets/Events/Pagination.js

'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';
import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  return (
    <motion.div {...fadeIn} className="flex justify-center gap-2 mt-12">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i}
          href={`/events?page=${i + 1}`}
          className={`px-4 py-2 rounded-lg ${
            currentPage === i + 1
              ? 'bg-primary text-white'
              : 'bg-surface text-primary hover:bg-gray-800'
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </motion.div>
  );
}