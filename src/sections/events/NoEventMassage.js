


// components/events/NoEventsMessage.jsx
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

export default function NoEventsMessage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="text-center py-16 mb-16" 
    >
      <p className="text-xl text-secondary">
        Oops! No coding sessions available.
        Try changing your search filters or check back soon for new developer events and workshops.
      </p>
    </motion.div>
  );
}