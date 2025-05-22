
import { useState, useRef, useEffect } from "react";
import { Memory } from "../data/memories";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

interface MemoryCarouselProps {
  memories: Memory[];
}

const MemoryCarousel = ({ memories }: MemoryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const currentMemory = memories[currentIndex];
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Handle next memory
  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
  };
  
  // Handle previous memory
  const goToPrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + memories.length) % memories.length);
  };
  
  // Reset animation direction after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(null);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Animation classes based on direction
  const getAnimationClasses = () => {
    if (direction === 'next') return 'animate-fade-in';
    if (direction === 'prev') return 'animate-fade-in';
    return '';
  };
  
  const isLastMemory = currentIndex === memories.length - 1;
  
  return (
    <div className="relative" ref={carouselRef}>
      {/* Memory Content */}
      <div className={`p-2 ${getAnimationClasses()}`}>
        <Card className="overflow-hidden border-none bg-white/60 backdrop-blur-sm shadow-lg">
          <CardContent className="p-0">
            {/* Image */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <Heart className="w-12 h-12 text-love-200 animate-pulse-gentle" fill="currentColor" />
              </div>
              <img
                src={currentMemory.image}
                alt={currentMemory.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // If image fails to load, show a placeholder
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              
              {currentMemory.quote && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/30 backdrop-blur-sm">
                  <p className="text-white font-handwritten text-lg text-center">
                    "{currentMemory.quote}"
                  </p>
                </div>
              )}
            </div>
            
            {/* Memory Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-xl text-love-700">{currentMemory.title}</h3>
                {currentMemory.date && (
                  <span className="text-sm text-muted-foreground font-light">
                    {currentMemory.date}
                  </span>
                )}
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                {currentMemory.description}
              </p>
              
              {/* Special message on last slide */}
              {isLastMemory && (
                <div className="mt-4 p-3 border border-dashed border-love-300 rounded-lg bg-love-100/50">
                  <p className="text-center font-handwritten text-love-700 text-lg">
                    Thank you for being my favorite memory.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-between mt-4 px-2">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrev}
          className="bg-white/70 hover:bg-white"
          disabled={memories.length <= 1}
        >
          Previous
        </Button>
        
        <div className="flex gap-1">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-love-500 w-4' : 'bg-love-200'
              }`}
              aria-label={`Go to memory ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="bg-white/70 hover:bg-white"
          disabled={memories.length <= 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MemoryCarousel;
