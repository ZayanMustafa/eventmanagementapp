

// components/events/EventsHeader.js

"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import EventSearch from "@/componets/Events/EventSearch";

export default function EventsHeader({ onSearch }) {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer} 
      className="mb-16 text-center"
    >
      <motion.h1
        variants={fadeIn}
        className="text-4xl md:text-5xl font-bold text-primary mb-4"
      >
        Discover Tech Events
      </motion.h1>
      <motion.p
        variants={fadeIn}
        className="text-xl text-secondary max-w-3xl mx-auto mb-8"
      >
        Join hackathons, workshops, and seminars to boost your skills
      </motion.p>
      <motion.div variants={fadeIn}>
        <EventSearch onSearch={onSearch} />
      </motion.div>
    </motion.section>
  );
}