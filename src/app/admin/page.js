// admin/page.js
'use client';
import EventForm from '@/componets/Admin/Events/EventForm';
import EventList from '@/componets/Admin/Events/EventList';
import EventRequests from '@/componets/Admin/Events/EventRequest';
import { mockEventRequests, mockEvents } from '@/constant/AdminMocData';
import { useState } from 'react';
// import EventForm from './components/EventForm';
// import EventList from './components/EventList';
// import EventRequests from './components/EventRequests';
// import { mockEvents, mockEventRequests } from './utils/mockData';

export default function AdminPage() {
  const [events, setEvents] = useState(mockEvents);
  const [requests] = useState(mockEventRequests);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddEvent = (newEvent) => {
    if (editingEvent) {
      // Update existing event
      setEvents(events.map(e => e.id === editingEvent.id ? { ...newEvent, id: editingEvent.id } : e));
    } else {
      // Add new event
      const eventWithId = { 
        ...newEvent, 
        id: Math.max(...events.map(e => e.id), 0) + 1,
        availableSeats: newEvent.seats
      };
      setEvents([...events, eventWithId]);
    }
    setEditingEvent(null);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  // Commented API integration example
  /*
  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  */

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Event Management Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <EventForm 
            eventData={editingEvent}
            onSubmit={handleAddEvent}
          />
          <EventList 
            events={events} 
            onEdit={setEditingEvent}
            onDelete={handleDeleteEvent}
          />
        </div>
        
        <div>
          <EventRequests requests={requests} />
        </div>
      </div>
    </div>
  );
}