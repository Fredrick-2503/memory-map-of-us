
export interface Memory {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  quote?: string;
}

export interface MemoryLocation {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  memories: Memory[];
}

export const memoryLocations: MemoryLocation[] = [
  {
    id: "loc1",
    name: "Our First Date",
    coordinates: [40.712776, -74.005974], // New York City
    memories: [
      {
        id: "mem1",
        title: "Coffee Shop Meeting",
        description: "The moment we first met. You were wearing that blue sweater I love, and I was 10 minutes late because I couldn't decide what to wear. You smiled when I walked in, and I knew this was the beginning of something beautiful.",
        image: "/images/coffee-shop.jpg",
        date: "April 15, 2021",
        quote: "The beginning of forever"
      },
      {
        id: "mem2",
        title: "Evening Walk",
        description: "After coffee turned into dinner, and dinner turned into a walk. The city lights reflected in your eyes as we talked for hours, losing track of time completely.",
        image: "/images/evening-walk.jpg",
        date: "April 15, 2021"
      }
    ]
  },
  {
    id: "loc2",
    name: "Summer Beach Trip",
    coordinates: [34.0522, -118.2437], // Los Angeles
    memories: [
      {
        id: "mem3",
        title: "Sunset on the Shore",
        description: "The day seemed to stretch forever as we laid on the warm sand. You read your book while I dozed off. When I woke up, you had collected shells and arranged them in a heart shape next to me.",
        image: "/images/beach-sunset.jpg",
        date: "July 23, 2021",
        quote: "Some infinities are bigger than other infinities"
      },
      {
        id: "mem4",
        title: "Midnight Swim",
        description: "We snuck down to the beach when everyone else was asleep. The water was cold but your hand was warm in mine. The moon made everything glow silver.",
        image: "/images/night-swim.jpg",
        date: "July 24, 2021"
      },
      {
        id: "mem5",
        title: "Beachside Picnic",
        description: "You surprised me with a picnic—complete with all my favorite foods. We sat there eating strawberries and watching people walk by, making up stories about their lives.",
        image: "/images/beach-picnic.jpg",
        date: "July 25, 2021"
      }
    ]
  },
  {
    id: "loc3",
    name: "Mountain Getaway",
    coordinates: [39.7392, -104.9903], // Denver area
    memories: [
      {
        id: "mem6",
        title: "Cabin Morning",
        description: "I woke up early and found you already on the porch with two steaming cups of coffee. We watched the mist rise from the valley below as the sun painted everything gold.",
        image: "/images/cabin-morning.jpg",
        date: "October 10, 2021",
        quote: "The best mornings are the quiet ones with you"
      },
      {
        id: "mem7",
        title: "Trail to the Summit",
        description: "The hike was harder than we expected, but we kept encouraging each other all the way to the top. The view was worth every step.",
        image: "/images/mountain-trail.jpg",
        date: "October 11, 2021"
      }
    ]
  }
];

// Note: Replace these placeholder images with your actual images
// Store them in public/images/ folder, and update the paths accordingly
