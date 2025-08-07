


// components/events/EventsGrid.jsx
"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import EventCard from "@/componets/Events/EventCard";

export default function EventsGrid({ events }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {events.map((event, i) => (
        <motion.div key={event.id} variants={fadeIn} custom={i * 0.1}>
          <EventCard event={event} />
        </motion.div>
      ))}
    </motion.div>
  );
}
