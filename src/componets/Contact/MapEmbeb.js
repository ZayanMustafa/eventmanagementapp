


'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';

export default function MapEmbed() {
  return (
    <motion.div 
      {...fadeIn}
      className="rounded-xl overflow-hidden border border-gray-700 h-full min-h-[300px]"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.041164044448!2d67.0288763150039!3d24.861872984051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e3c6f1c3e3d%3A0x2d1a5e5e5e5e5e5e!2sTech%20Hub!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
}
