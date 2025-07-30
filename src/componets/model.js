



'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animation';
import Button from './ui/Button';
// import Button from './Button';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md', // sm, md, lg
  closeOnOutsideClick = true
}) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            onClick={closeOnOutsideClick ? onClose : null}
          />

          {/* Modal Content */}
          <motion.div
            {...fadeIn}
            className={`relative z-10 w-full ${sizeClasses[size]} bg-surface rounded-xl shadow-2xl overflow-hidden`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-primary">{title}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </Button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {children}
            </div>

            {/* Footer (optional) */}
            {/* <div className="p-4 border-t border-gray-700 flex justify-end">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

