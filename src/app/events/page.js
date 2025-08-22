"use client";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FEATURED_EVENTS } from "@/constant/EventData";
import EventsHeader from "@/sections/events/EventHeader";
import EventsGrid from "@/sections/events/EventGrid";
import NoEventsMessage from "@/sections/events/NoEventMassage";
import Pagination from "@/componets/Events/Pagination";

function EventsContent() {
  const [filteredEvents, setFilteredEvents] = useState(FEATURED_EVENTS);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams?.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const EVENTS_PER_PAGE = 6;

  // Reset to page 1 when filters change
  useEffect(() => {
    // If current page is greater than total pages after filtering, reset to page 1
    const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
    if (currentPage > totalPages && totalPages > 0) {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      router.replace(`/events?${params.toString()}`, { scroll: false });
    }
  }, [filteredEvents, currentPage, searchParams, router, EVENTS_PER_PAGE]);

  const handleSearch = (searchTerm, selectedType) => {
    const filtered = FEATURED_EVENTS.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "All" || event.type === selectedType;
      return matchesSearch && matchesType;
    });
    setFilteredEvents(filtered);
    
    // Reset to page 1 after search/filter
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    // Only update if we're not already on page 1
    if (currentPage !== 1) {
      router.replace(`/events?${params.toString()}`, { scroll: false });
    }
  };

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
      <EventsHeader onSearch={handleSearch} />
      
      {paginatedEvents.length > 0 ? (
        <EventsGrid events={paginatedEvents} />
      ) : (
        <NoEventsMessage />
      )}

      {totalPages > 1 && (
        <div className="mb-24">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            hasNextPage={currentPage < totalPages}
            hasPrevPage={currentPage > 1}
          />
        </div>
      )}
    </motion.main>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <EventsContent />
    </Suspense>
  );
}