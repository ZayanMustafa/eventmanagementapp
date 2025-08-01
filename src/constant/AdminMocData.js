

// admin/utils/mockData.js
export const mockEvents = [
  {
    id: 1,
    title: "Tech Conference 2023",
    type: "conference",
    description: "Annual technology conference with top speakers",
    image: "/images/tech-conf.jpg",
    date: "2023-11-15T09:00:00",
    venue: "Convention Center",
    seats: 500,
    availableSeats: 320
  },
  {
    id: 2,
    title: "Music Festival",
    type: "festival",
    description: "3-day outdoor music festival",
    image: "/images/music-fest.jpg",
    date: "2023-12-10T16:00:00",
    venue: "Central Park",
    seats: 2000,
    availableSeats: 1500
  }
];

export const mockEventRequests = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    eventType: "workshop",
    message: "Looking for a React workshop for our team",
    date: "2023-10-05T14:30:00"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    eventType: "conference",
    message: "Interested in sponsoring your tech conference",
    date: "2023-10-06T10:15:00"
  }
];

