'use client';

import { NAV_LINKS } from '@/constant/NavData';
import { fadeIn } from '@/lib/animation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 py-4">
                {NAV_LINKS.map((link) => (
                  <motion.a
                    key={link.path}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    exit={{ x: -20 }}
                    href={link.path}
                    className="text-lg font-medium text-slate-700 hover:text-cyan-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
