


'use client';

import { NAV_LINKS } from '@/constant/NavData';
import { fadeIn } from '@/lib/animation';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <motion.header
      {...fadeIn}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="/"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-extrabold text-cyan-600"
          >
            SkillSphere
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.path}
                whileHover={{ y: -2 }}
                href={link.path}
                className="text-lg font-medium text-slate-700 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            {/* <motion.a
              href="/events"
              whileHover={{ y: -2 }}
              className="text-lg font-medium text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Register Now
            </motion.a> */}

          </nav>
        </div>
      </div>
    </motion.header>
  );
}

