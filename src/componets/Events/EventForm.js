// File: src/components/Events/EventForm.js

'use client';
import Button from '@/componets/ui/Button';
import Input from '@/componets/ui/TextArea';
import { useState } from 'react';

export default function EnrollmentForm({ event, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventId: event.id 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log('Enrollment data:', formData);
    onSuccess(); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="eventId" value={event.id} />
      
      <Input
        label="Full Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />    
      
      
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      
      <Input
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        required
      />
      
      <div className="bg-surface p-4 rounded-lg">
        <h4 className="font-medium mb-2">Event Details</h4>
        <p className="text-sm">{event.title}</p>
        <p className="text-xs text-secondary">{new Date(event.date).toLocaleString()}</p>
      </div>
      
      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button" 
          variant="outline"
          onClick={() => onSuccess()}
        >
          Cancel
        </Button>
        <Button type="submit">
          Confirm Enrollment
        </Button>
      </div>
    </form>
  );
}

