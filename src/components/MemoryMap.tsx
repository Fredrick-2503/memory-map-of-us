
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { memoryLocations, MemoryLocation, Memory } from "../data/memories";
import MemoryCarousel from "./MemoryCarousel";
import { Dialog, DialogContent } from "../components/ui/dialog";
import L from 'leaflet';
import { Heart } from "lucide-react";

interface MemoryMapProps {
  onToggleAudio: () => void;
  audioEnabled: boolean;
}

// Create a heart-shaped icon marker
const createHeartIcon = (color: string = "#f43f5e", size: number = 30) => {
  return L.divIcon({
    html: `<svg class="heart-marker" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                  fill="${color}" stroke="${color}" stroke-width="1" />
          </svg>`,
    className: '',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2]
  });
};

// Function to adjust the map view
const MapAdjuster = ({ location }: { location?: MemoryLocation | null }) => {
  const map = useMap();
  
  useEffect(() => {
    if (location) {
      map.flyTo(location.coordinates, 13, {
        animate: true,
        duration: 1.5
      });
    } else {
      // Set the view to include all markers
      const bounds = L.latLngBounds(memoryLocations.map(loc => loc.coordinates));
      map.fitBounds(bounds, {
        padding: [50, 50],
        animate: true,
        duration: 1.5
      });
    }
  }, [location, map]);
  
  return null;
};

const MemoryMap = ({ onToggleAudio, audioEnabled }: MemoryMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<MemoryLocation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  
  // Initial map center (will be adjusted by MapAdjuster)
  const defaultCenter: [number, number] = [39.8283, -98.5795]; // Center of US
  
  // Handle marker click
  const handleMarkerClick = (location: MemoryLocation) => {
    setSelectedLocation(location);
    setIsDialogOpen(true);
  };
  
  // Close the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Reset map view after dialog closes
    setTimeout(() => {
      if (mapRef.current) {
        const bounds = L.latLngBounds(memoryLocations.map(loc => loc.coordinates));
        mapRef.current.fitBounds(bounds, {
          padding: [50, 50],
          animate: true,
          duration: 1.5
        });
      }
    }, 300);
  };
  
  return (
    <div className="h-full w-full relative">
      {/* Map Container */}
      <div className="h-full w-full">
        {/* Only render MapContainer after component mounts to avoid SSR issues */}
        {typeof window !== 'undefined' && (
          <MapContainer 
            center={defaultCenter} 
            zoom={4} 
            className="map-container"
            whenReady={() => setMapLoaded(true)}
            whenCreated={(map) => { mapRef.current = map; }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            
            {/* Memory Location Markers */}
            {memoryLocations.map((location) => (
              <Marker
                key={location.id}
                position={location.coordinates}
                icon={createHeartIcon()}
                eventHandlers={{
                  click: () => handleMarkerClick(location),
                }}
              />
            ))}
            
            {/* Map View Adjuster */}
            <MapAdjuster location={selectedLocation} />
          </MapContainer>
        )}
      </div>
      
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background/70 to-transparent p-4 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-handwritten text-2xl text-love-700">The Map of Us</h1>
          <button 
            onClick={onToggleAudio}
            className="text-sm text-foreground/70 hover:text-love-600"
          >
            {audioEnabled ? "Mute Music" : "Play Music"}
          </button>
        </div>
      </div>
      
      {/* Memory Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white/95 backdrop-blur-md">
          {selectedLocation && (
            <div className="p-4">
              <h2 className="font-serif text-2xl mb-4 text-center text-love-700">{selectedLocation.name}</h2>
              <MemoryCarousel memories={selectedLocation.memories} />
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Map Attribution */}
      <div className="absolute bottom-2 right-2 text-[10px] text-foreground/40 z-10">
        Map data © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default MemoryMap;
