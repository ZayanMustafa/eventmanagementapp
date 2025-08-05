


// admin/components/EventRequests.js
'use client';
import { useState } from 'react';

export default function EventRequests({ requests }) {
  const [expandedRequest, setExpandedRequest] = useState(null);

  return (
    <div className="bg-surface rounded-xl p-6 border border-gray-700">
      <h3 className="text-2xl font-bold text-primary mb-6">Event Requests</h3>
      
      <div className="space-y-4">
        {requests.map(request => (
          <div 
            key={request.id} 
            className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors cursor-pointer"
            onClick={() => setExpandedRequest(expandedRequest === request.id ? null : request.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-white">{request.name}</h4>
                <p className="text-sm text-gray-300">{request.email}</p>
              </div>
              <div className="text-sm text-gray-400">
                {new Date(request.date).toLocaleString()}
              </div>
            </div>
            
            {expandedRequest === request.id && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="mb-2">
                  <span className="text-sm text-gray-400">Event Type:</span>
                  <span className="ml-2 text-white capitalize">{request.eventType}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Message:</span>
                  <p className="mt-1 text-white">{request.message}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}