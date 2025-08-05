



'use client';

import { motion } from 'framer-motion';
import { heroImageAnim, heroTextAnim, heroButtonAnim } from '@/lib/animation';
import { HERO_DATA } from '@/constant/HeroData';
import Button from '@/componets/ui/Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        {...heroImageAnim}
        className="absolute inset-0 z-0"
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${HERO_DATA.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-2xl ms-4 text-white">
          <motion.h1 
            {...heroTextAnim}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            {HERO_DATA.title}
          </motion.h1>
          
          <motion.p 
            {...heroTextAnim}
            className="text-xl md:text-2xl mb-8"
          >
            {HERO_DATA.subtitle}
          </motion.p>

          <motion.div {...heroButtonAnim}>
            <Link
              className="inline-block"
              href={HERO_DATA.ctaLink}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4"
                >
                  {HERO_DATA.ctaText}
                </Button>
              </Link>
          </motion.div>

          {/* Features List */}
          <motion.ul 
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8
                }
              }
            }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {HERO_DATA.features.map((feature, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                ✓ {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

