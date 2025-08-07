

// File : src/app/about/page.js

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { ABOUT_DATA } from "@/constant/AboutData";
import VisionCard from "@/componets/About/VisionCard";
import TeamMember from "@/componets/About/TeamMember";
import { EventRequest } from "@/sections/about/EventRequest";
import { AboutHero } from "@/sections/about/AboutHero";
import { FounderStory } from "@/sections/about/FounderStory";
import { MileStone } from "@/sections/about/MileStone";
import { CTASection } from "@/sections/about/CTASection";

export default function AboutPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="container py-12"
    >

      {/* About Hero Section */}
      <AboutHero />



      {/* Founder Story */}
      <FounderStory />

      {/* Vision */}
      <motion.section className="mb-20">
        <VisionCard {...ABOUT_DATA.vision} />
      </motion.section>


      {/* Milestones */}
      <MileStone />

      {/* Vision Section */}

      {/* Team Section */}
      <motion.section className="mb-20">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_DATA.team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              custom={i * 0.1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Event Request Section */}
          <EventRequest />

      {/* CTA */}
      <CTASection />

    </motion.main>
  );
}
