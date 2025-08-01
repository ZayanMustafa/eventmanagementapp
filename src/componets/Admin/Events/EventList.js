



// admin/components/EventList.js
'use client';
import Button from '@/componets/ui/Button';
import { useState } from 'react';

export default function EventList({ events, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const currentEvents = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-surface rounded-xl p-6 border border-gray-700 mb-8">
      <h3 className="text-2xl font-bold text-primary mb-6">All Events</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Seats</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map(event => (
              <tr key={event.id} className="border-b border-gray-700 hover:bg-gray-800/50">
                <td className="py-3 px-4">{event.title}</td>
                <td className="py-3 px-4 capitalize">{event.type}</td>
                <td className="py-3 px-4">{new Date(event.date).toLocaleString()}</td>
                <td className="py-3 px-4">{event.availableSeats}/{event.seats}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => onEdit(event)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => onDelete(event.id)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              size="sm"
              variant={currentPage === i + 1 ? 'primary' : 'outline'}
              onClick={() => setCurrentPage(i + 1)}
              className="mx-1"
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}