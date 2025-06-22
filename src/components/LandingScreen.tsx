
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";

interface LandingScreenProps {
  onEnter: () => void;
  onToggleAudio: () => void;
  audioEnabled: boolean;
}

const LandingScreen = ({ onEnter, onToggleAudio, audioEnabled }: LandingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  
  // Handle smooth transition to map
  const handleEnterClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      onEnter();
    }, 600); // Match the duration of the fade-out animation
  };
  
  return (
    <div 
      className={`h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-love-100 to-secondary p-6
      ${fadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 10}s`
            }}
          >
            <Heart 
              size={10 + Math.random() * 20} 
              className="text-love-400" 
              fill="currentColor"
            />
          </div>
        ))}
      </div>
      
      <div className="max-w-2xl text-center z-10 bg-white/30 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
        <h1 className="font-handwritten text-4xl md:text-6xl mb-8 text-love-700">
          The Map of Us fkjsdfla
        </h1>
        
        <p className="font-serif text-xl md:text-2xl mb-6 text-foreground/90">
          This is the map of our journey together...
          <br />
          Every pin a memory, every memory a treasure.
        </p>
        
        <div className="mt-12 space-y-4">
          <Button 
            onClick={handleEnterClick}
            className="text-lg px-8 py-6 rounded-full bg-love-500 hover:bg-love-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enter Our Memory Map
            <Heart className="ml-2" fill="currentColor" />
          </Button>
          
          <div>
            <button 
              onClick={onToggleAudio} 
              className="mt-4 text-sm text-foreground/70 hover:text-love-600 underline decoration-dashed underline-offset-4"
            >
              {audioEnabled ? "Mute Background Music" : "Play Background Music"}
            </button>
          </div>
        </div>
        
        <p className="mt-8 font-serif italic text-foreground/60">
          "Every love story is beautiful, but ours is my favorite."
        </p>
      </div>
      
      <div className="fixed bottom-4 right-4 text-xs text-foreground/40">
        Made with love, for you.
      </div>
    </div>
  );
};

export default LandingScreen;
