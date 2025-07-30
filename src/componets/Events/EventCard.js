'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';
import Button from '../Button';
import { useState } from 'react';
// import Modal from './Modal'; 
import EnrollmentForm from '@/componets/ui/Events/EventForm';
import Modal from '../../model';

export default function EventCard({ event }) {
  const [showForm, setShowForm] = useState(false);
  const seatsLeft = event.seats - event.registered;
  const isFull = seatsLeft <= 0;

  const handleEnrollClick = () => {
    if (!isFull) {
      setShowForm(true);
    }
  };

  return (
    <>
      <motion.div 
        {...fadeIn}
        className="card hover:shadow-xl transition-shadow"
      >
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-primary">{event.title}</h3>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface">
              {event.type}
            </span>
          </div>
          <p className="text-secondary mb-4">{event.description}</p>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{event.venue}</span>
            </div>
            <div className={`flex items-center gap-2 ${
              isFull ? 'text-red-400' : 'text-accent'
            }`}>
              {isFull ? 'Event Closed' : `${seatsLeft} seats left`}
            </div>
          </div>

          <Button
            variant={isFull ? "disabled" : "primary"}
            className="w-full mt-4"
            disabled={isFull}
            onClick={handleEnrollClick}
          >
            {isFull ? 'Event Closed' : 'Enroll Now'}
          </Button>
        </div>
      </motion.div>

      {/* Enrollment Modal */}
      {showForm && (
       // In your EventCard component
<Modal
  isOpen={showForm}
  onClose={() => setShowForm(false)}
  title={`Enroll in ${event.title}`}
  size="md"
>
  <EnrollmentForm 
    event={event}
    onSuccess={() => setShowForm(false)}
  />
</Modal>
      )}
    </>
  );
}