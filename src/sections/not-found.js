


'use client';

import { motion } from 'framer-motion';
import { fadeIn, hoverScale } from '@/lib/animation';
import { useRouter } from 'next/navigation';
import Button from '../componets/ui/Button';

export default function NotFound({ 
  title = "Page Not Found",
  subtitle = "The page you're looking for doesn't exist or has been moved",
  showBackButton = true 
}) {
  const router = useRouter();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen flex flex-col items-center justify-center text-center p-6"
    >
      {/* 404 Graphic */}
      <motion.div {...fadeIn} className="mb-8">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full animate-pulse"></div>
          <div className="relative flex items-center justify-center w-full h-full">
            <span className="text-8xl font-bold text-primary">404</span>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.h1 {...fadeIn} className="text-4xl md:text-5xl font-bold text-primary mb-4">
        {title}
      </motion.h1>
      
      <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-xl text-secondary max-w-2xl mb-8">
        {subtitle}
      </motion.p>

      {/* Actions */}
      {showBackButton && (
        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
          <Button
            {...hoverScale}
            variant="primary"
            size="lg"
            onClick={() => router.back()}
            className="px-8 py-3 text-lg"
          >
            ← Go Back
          </Button>
        </motion.div>
      )}
      
      <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="mt-8">
        <p className="text-secondary mb-2">or</p>
        <Button
          asLink
          href="/"
          variant="outline"
          size="lg"
          className="px-8 py-3 text-lg"
        >
          Return Home
        </Button>
      </motion.div>
    </motion.div>
  );
}

