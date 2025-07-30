



'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FEATURED_EVENTS } from '@/constant/EventData';
import EventCard from '@/componets/ui/Events/EventCard';
import EventSearch from '@/componets/ui/Events/EventSearch';

export default function FeaturedEvents() {
  const [filteredEvents, setFilteredEvents] = useState(FEATURED_EVENTS);

  const handleSearch = (searchTerm, selectedType) => {
    const filtered = FEATURED_EVENTS.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || event.type === selectedType;
      return matchesSearch && matchesType;
    });
    setFilteredEvents(filtered);
  };

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-2 text-accent">Featured Events</h2>
      <p className="text-secondary mb-8">Join upcoming tech gatherings</p>
      
      <EventSearch onSearch={handleSearch} />
      
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary">No events found. Try different search terms.</p>
        </div>
      )}

      <div className="text-center mt-12">
        <Link 
          href="/events"
          className="inline-block px-6 py-3 bg-surface hover:bg-primary hover:text-background rounded-lg transition-colors border border-primary"
        >
          View All Events →
        </Link>
      </div>
    </section>
  );
}