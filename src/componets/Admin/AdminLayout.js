




// components/admin/AdminLayout.jsx
'use client';
import { useState } from 'react';

export default function AdminLayout({ eventsContent, requestsContent }) {
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="bg-surface min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      
      <div className="flex border-b border-gray-700 mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'events' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('events')}
        >
          Manage Events
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'requests' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('requests')}
        >
          Event Requests
        </button>
      </div>

      {activeTab === 'events' ? eventsContent : requestsContent}
    </div>
  );
}


