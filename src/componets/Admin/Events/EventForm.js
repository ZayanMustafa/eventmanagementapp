// admin/components/EventForm.js
'use client';
import Button from '@/componets/ui/Button';
import Input from '@/componets/ui/TextArea';
import { useState } from 'react';

export default function EventForm({ eventData, onSubmit }) {
  const [formData, setFormData] = useState(eventData || {
    title: '',
    type: '',
    description: '',
    image: '',
    date: '',
    venue: '',
    seats: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call - replace with actual backend integration
    new Promise((resolve) => {
      setTimeout(() => {
        // This would be your actual API call in production:
        /*
        fetch('/api/events', {
          method: eventData ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
          onSubmit(data);
          setIsSuccess(true);
          if (!eventData) setFormData({
            title: '',
            type: '',
            description: '',
            image: '',
            date: '',
            venue: '',
            seats: ''
          });
        })
        .catch(error => console.error('Error:', error))
        .finally(() => setIsSubmitting(false));
        */
        
        // Mock success response
        resolve({ success: true });
      }, 1000);
    }).then(() => {
      onSubmit(formData);
      setIsSuccess(true);
      if (!eventData) {
        setFormData({
          title: '',
          type: '',
          description: '',
          image: '',
          date: '',
          venue: '',
          seats: ''
        });
      }
      setTimeout(() => setIsSuccess(false), 3000);
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-surface rounded-xl p-6 border border-gray-700 mb-8">
      <h3 className="text-2xl font-bold text-primary mb-6">
        {eventData ? 'Edit Event' : 'Add New Event'}
      </h3>

      {isSuccess ? (
        <div className="text-center py-4 bg-green-500/10 rounded-lg mb-6">
          <p className="text-green-400 font-medium">
            Event {eventData ? 'updated' : 'added'} successfully!
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Event Title</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Event Type</label>
            <Input
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Image URL</label>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Date</label>
            <Input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Venue</label>
            <Input
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Total Seats</label>
            <Input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white mb-2">Description</label>
            <Input
              as="textarea"
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : (eventData ? 'Update Event' : 'Create Event')}
        </Button>
      </form>
    </div>
  );
}