import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { MemoryLocation } from "../data/memories";
import MemoryCarousel from "./MemoryCarousel";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import L from 'leaflet';

interface MemoryMapProps {
  onToggleAudio: () => void;
  audioEnabled: boolean;
  memories: MemoryLocation[];
}

// Create a heart-shaped icon marker for individual locations
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

// Create a clean, glowing heart icon marker for region centers (static, non-pulsing)
const createRegionHeartIcon = (color: string = "#f43f5e", size: number = 38) => {
  return L.divIcon({
    html: `<div class="relative w-10 h-10 flex items-center justify-center region-marker-container">
             <!-- Heart SVG -->
             <svg class="heart-marker drop-shadow-md transition-transform duration-300 hover:scale-110" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                     fill="${color}" stroke="${color}" stroke-width="1" />
             </svg>
           </div>`,
    className: 'custom-region-icon',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2]
  });
};

// Create atmospheric breathing fog blob with floating heart vapours
const createBlushBlobIcon = (type: 'bengaluru' | 'small') => {
  const isBengaluru = type === 'bengaluru';
  const width = isBengaluru ? 300 : 160;
  const height = isBengaluru ? 380 : 160;
  
  // Floating heart vapours inside the blob
  const heartCount = isBengaluru ? 6 : 3;
  let heartsHtml = '';
  
  for (let i = 0; i < heartCount; i++) {
    const left = Math.floor(Math.random() * 70) + 15;
    const top = Math.floor(Math.random() * 50) + 35;
    const duration = (Math.random() * 5 + 7).toFixed(1);
    const delay = (Math.random() * 8).toFixed(1);
    const size = Math.floor(Math.random() * 6) + 6;
    const opacity = (Math.random() * 0.25 + 0.25).toFixed(2);
    const colors = ["#f43f5e", "#ec4899", "#f472b6", "#fb7185", "#ff85a2"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const sway = Math.floor(Math.random() * 40) - 20;
    const rise = Math.floor(Math.random() * 50) + 70;
    const endScale = Math.random() * 0.2 + 0.35;
    
    heartsHtml += `
      <div class="absolute animate-heart-particle" style="
        left: ${left}%;
        top: ${top}%;
        color: ${color};
        --particle-duration: ${duration}s;
        --particle-delay: ${delay}s;
        --particle-rise: ${rise}px;
        --particle-sway: ${sway}px;
        --particle-opacity: ${opacity};
        --particle-end-scale: ${endScale};
        pointer-events: none;
      ">
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    `;
  }
  
  const innerClass = isBengaluru ? 'blush-blob-bengaluru' : 'blush-blob-small';
  
  return L.divIcon({
    html: `
      <div class="relative w-full h-full flex items-center justify-center region-marker-container">
        <div class="${innerClass} absolute inset-0"></div>
        ${heartsHtml}
      </div>
    `,
    className: 'custom-region-icon',
    iconSize: [width, height],
    iconAnchor: [width/2, height/2]
  });
};

interface RegionGroup {
  id: string;
  name: string;
  coordinates: [number, number];
  locations: MemoryLocation[];
  totalMemoriesCount: number;
}

// Map coordinates to region names
const getRegionForCoordinate = (lat: number, lng: number, locationName: string): { name: string; key: string } => {
  if (lat < 12.4 && lng < 76.8) return { name: "Mysuru", key: "mysuru" };
  if (lat > 13.1) return { name: "Doddaballapura", key: "doddaballapura" };
  if (lat < 12.78 && lng < 77.40) return { name: "Ramanagara", key: "ramanagara" };
  if (lat >= 12.78 && lat < 12.90 && lng < 77.45) return { name: "Bidadi", key: "bidadi" };
  if (lat < 12.88 && lng >= 77.48 && lng < 77.68) return { name: "Jigani / Bannerghatta", key: "jigani" };
  if (lat >= 12.88 && lat < 13.08 && lng >= 77.48 && lng < 77.75) return { name: "Bengaluru", key: "bengaluru" };
  
  return { name: "Other Region", key: "other" };
};

// Group memory locations into region-based clusters
const groupLocationsByRegion = (locations: MemoryLocation[]): RegionGroup[] => {
  const groups: { [key: string]: RegionGroup } = {};
  
  locations.forEach(loc => {
    const [lat, lng] = loc.coordinates;
    const region = getRegionForCoordinate(lat, lng, loc.name);
    
    if (!groups[region.key]) {
      groups[region.key] = {
        id: region.key,
        name: region.name,
        coordinates: [0, 0],
        locations: [],
        totalMemoriesCount: 0
      };
    }
    
    groups[region.key].locations.push(loc);
    groups[region.key].totalMemoriesCount += loc.memories.length;
  });
  
  // Calculate average coordinates for the cluster centroid
  return Object.values(groups).map(group => {
    let sumLat = 0;
    let sumLng = 0;
    group.locations.forEach(loc => {
      sumLat += loc.coordinates[0];
      sumLng += loc.coordinates[1];
    });
    group.coordinates = [
      sumLat / group.locations.length,
      sumLng / group.locations.length
    ];
    return group;
  });
};

// Function to adjust the map view
const MapAdjuster = ({ 
  location, 
  memories, 
  onAdjustZoom 
}: { 
  location?: MemoryLocation | null; 
  memories: MemoryLocation[]; 
  onAdjustZoom: (zoom: number) => void;
}) => {
  const map = useMap();
  
  useEffect(() => {
    if (location) {
      map.flyTo(location.coordinates, 13, {
        animate: true,
        duration: 1.5
      });
      const timer = setTimeout(() => {
        onAdjustZoom(13);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (memories.length > 0) {
      const bounds = L.latLngBounds(memories.map(loc => loc.coordinates));
      map.fitBounds(bounds, {
        padding: [20, 20],
        animate: true,
        duration: 1.5
      });
      const timer = setTimeout(() => {
        onAdjustZoom(map.getZoom());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [location, map, memories, onAdjustZoom]);
  
  return null;
};

// Component to get reference to the map
const MapReference = ({ 
  setMapRef, 
  onZoomInit 
}: { 
  setMapRef: (map: L.Map) => void; 
  onZoomInit: (zoom: number) => void;
}) => {
  const map = useMap();
  
  useEffect(() => {
    setMapRef(map);
    onZoomInit(map.getZoom());
  }, [map, setMapRef, onZoomInit]);
  
  return null;
};

// Component to track zoom events
const ZoomTracker = ({ onZoomChange }: { onZoomChange: (zoom: number) => void }) => {
  const map = useMap();
  
  useEffect(() => {
    const handleZoomEnd = () => {
      onZoomChange(map.getZoom());
    };
    map.on('zoomend', handleZoomEnd);
    return () => {
      map.off('zoomend', handleZoomEnd);
    };
  }, [map, onZoomChange]);
  
  return null;
};

const MemoryMap = ({ onToggleAudio, audioEnabled, memories }: MemoryMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<MemoryLocation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapRef, setMapRef] = useState<L.Map | null>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(4);
  
  const ZOOM_THRESHOLD = 11;
  const defaultCenter: [number, number] = [12.9716, 77.5946]; // Bengaluru Center
  
  // Group memories into regions
  const regions = groupLocationsByRegion(memories);
  
  // Handle marker click for individual locations
  const handleMarkerClick = (location: MemoryLocation) => {
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 1500);
    setSelectedLocation(location);
  };
  
  // Handle region marker click (zooms in to the region)
  const handleRegionClick = (region: RegionGroup) => {
    if (mapRef) {
      mapRef.flyTo(region.coordinates, 13, {
        animate: true,
        duration: 1.5
      });
      setCurrentZoom(13);
    }
  };
  
  // Close the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    if (mapRef && memories.length > 0) {
      const bounds = L.latLngBounds(memories.map(loc => loc.coordinates));
      mapRef.fitBounds(bounds, {
        padding: [50, 50],
        animate: true,
        duration: 1.5
      });
    }
  };
  
  // Zoom on polygon double click/click
  const zoomToCoords = (coords: [number, number]) => {
    if (mapRef) {
      mapRef.flyTo(coords, 12, { animate: true, duration: 1.5 });
      setCurrentZoom(12);
    }
  };
  
  return (
    <div className="h-full w-full relative">
      {/* Map Container */}
      <div className="h-full w-full">
        {/* Only render MapContainer after component mounts to avoid SSR issues */}
        {typeof window !== 'undefined' && (
          <MapContainer 
            center={defaultCenter} 
            zoom={8} 
            className="map-container"
            whenReady={() => setMapLoaded(true)}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            
            {/* Smooth Blushing HTML/CSS Blobs (Static, non-flashy, zero-state particles) */}
            {currentZoom < ZOOM_THRESHOLD && (
              <>
                {/* Combined Bengaluru & Jigani/Bannerghatta Blushing Blob */}
                <Marker
                  position={[12.88, 77.59]}
                  icon={createBlushBlobIcon('bengaluru')}
                  eventHandlers={{
                    click: () => zoomToCoords([12.92, 77.59])
                  }}
                />
                
                {/* Separate Doddaballapura Blushing Blob */}
                <Marker
                  position={[13.25, 77.55]}
                  icon={createBlushBlobIcon('small')}
                  eventHandlers={{
                    click: () => zoomToCoords([13.25, 77.55])
                  }}
                />
                
                {/* Separate Bidadi Blushing Blob */}
                <Marker
                  position={[12.8767, 77.3340]}
                  icon={createBlushBlobIcon('small')}
                  eventHandlers={{
                    click: () => zoomToCoords([12.8767, 77.3340])
                  }}
                />
                
                {/* Separate Ramanagara Blushing Blob */}
                <Marker
                  position={[12.7214, 77.2965]}
                  icon={createBlushBlobIcon('small')}
                  eventHandlers={{
                    click: () => zoomToCoords([12.7214, 77.2965])
                  }}
                />
                
                {/* Separate Mysuru Blushing Blob */}
                <Marker
                  position={[12.31, 76.66]}
                  icon={createBlushBlobIcon('small')}
                  eventHandlers={{
                    click: () => zoomToCoords([12.31, 76.66])
                  }}
                />
              </>
            )}
            
            {/* Centered Region Markers & Detailed Markers */}
            {currentZoom < ZOOM_THRESHOLD ? (
              // Region Centroid Markers (Clean Hearts)
              regions.map((region) => (
                <Marker
                  key={region.id}
                  position={region.coordinates}
                  icon={createRegionHeartIcon()}
                  eventHandlers={{
                    click: () => handleRegionClick(region),
                  }}
                />
              ))
            ) : (
              // Detailed Individual Location Markers
              memories.map((location) => (
                <Marker
                  key={location.id}
                  position={location.coordinates}
                  icon={createHeartIcon()}
                  eventHandlers={{
                    click: () => handleMarkerClick(location),
                  }}
                />
              ))
            )}
            
            {/* Map View Adjuster */}
            {mapLoaded && (
              <MapAdjuster 
                location={selectedLocation} 
                memories={memories} 
                onAdjustZoom={setCurrentZoom} 
              />
            )}
            
            {/* Map Reference Getter */}
            <MapReference setMapRef={setMapRef} onZoomInit={setCurrentZoom} />
            
            {/* Map Zoom Tracker */}
            <ZoomTracker onZoomChange={setCurrentZoom} />
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
        <DialogContent className="sm:max-w-[600px] p-0 overflow-auto bg-white/95 backdrop-blur-md z-[1050]">
          {selectedLocation && (
            <div className="p-4 sm:max-w-[600px]">
              <DialogTitle className="font-serif text-2xl mb-4 text-center text-love-700">{selectedLocation.name}</DialogTitle>
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
