// File: src/app/events/page.jsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { FEATURED_EVENTS } from "@/constant/EventData";
import EventSearch from "@/componets/Events/EventSearch";
import EventCard from "@/componets/Events/EventCard";
import Pagination from "@/componets/Events/Pagination";

export default function EventsPage() {
  // Remove searchParams from props
  const [filteredEvents, setFilteredEvents] = useState(FEATURED_EVENTS);
  const searchParams = useSearchParams(); // Now this is the only declaration
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const EVENTS_PER_PAGE = 6;

  const handleSearch = (searchTerm, selectedType) => {
    const filtered = FEATURED_EVENTS.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "All" || event.type === selectedType;
      return matchesSearch && matchesType;
    });
    setFilteredEvents(filtered);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="container py-12"
    >
      {/* Header Section */}
      <motion.section {...staggerContainer} className="mb-16 text-center">
        <motion.h1
          {...fadeIn}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Discover Tech Events
        </motion.h1>
        <motion.p
          {...fadeIn}
          className="text-xl text-secondary max-w-3xl mx-auto mb-8"
        >
          Join hackathons, workshops, and seminars to boost your skills
        </motion.p>
        <motion.div {...fadeIn}>
          <EventSearch onSearch={handleSearch} />
        </motion.div>
      </motion.section>

      {/* Events Grid */}
      {paginatedEvents.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {paginatedEvents.map((event, i) => (
            <motion.div key={event.id} variants={fadeIn} custom={i * 0.1}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          {...fadeIn}
          className="text-center py-16 mb-16" // Added bottom margin
        >
          <p className="text-xl text-secondary">
            No matching events found. Try adjusting your search filters.
          </p>
        </motion.div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mb-24">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </motion.main>
  );
}
