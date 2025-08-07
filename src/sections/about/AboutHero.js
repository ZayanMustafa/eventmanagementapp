

import { fadeIn, staggerContainer } from "@/lib/animation";
import { motion } from "framer-motion";



export function AboutHero() {
  return (
    <motion.section {...staggerContainer} className="text-center mb-16">
      <motion.h1
        {...fadeIn}
        className="text-4xl md:text-6xl font-bold text-primary mb-6"
      >
        About SkillSphere
      </motion.h1>
      <motion.p
        {...fadeIn}
        className="text-xl text-secondary max-w-3xl mx-auto"
      >
        Bridging the gap between classroom learning and real-world tech challenges
      </motion.p>
    </motion.section>
  );    
}

        