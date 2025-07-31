




'use client';

import { useState } from 'react';
// import Input from '../TextArea';
// import Button from '../Button';
import { EVENT_TYPES } from '@/constant/EventData';
import Button from '../ui/Button';
import Input from '../ui/TextArea';
// import Input from '@/components/ui/Input';
// import Button from '@/components/ui/Button';
// import { EVENT_TYPES } from '@/constants/events';

export default function EventSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, selectedType);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <Input
          type="text"
          label="Search events"
          placeholder="Hackathons, seminars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 w-full"
          hideLabel
        />
        
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 rounded-lg bg-surface text-primary border border-gray-700 h-[42px]"
        >
          <option value="All">All Types</option>
          {EVENT_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        
        <Button
          type="submit"
          variant="primary"
          className="h-[42px]"
        >
          Search
        </Button>
      </div>
    </form>
  );
}