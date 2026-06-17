
import { useState } from "react";
import LandingScreen from "../components/LandingScreen";
import MemoryMap from "../components/MemoryMap";
import AudioPlayer from "../components/AudioPlayer";
import { MemoryLocation } from "../data/memories";

interface IndexProps {
  memories: MemoryLocation[];
}

const Index = ({ memories }: IndexProps) => {
  const [entered, setEntered] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  
  // Function to handle entering the map
  const handleEnterMap = () => {
    setAudioEnabled(true);
    setEntered(true);
  };
  
  // Function to toggle background music
  const handleToggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    console.log("playing")
  };
  
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {!entered ? (
        <LandingScreen onEnter={handleEnterMap} onToggleAudio={handleToggleAudio} audioEnabled={audioEnabled} />
      ) : (
        <div className="animate-fade-in h-full w-full">
          <MemoryMap onToggleAudio={handleToggleAudio} audioEnabled={audioEnabled} memories={memories} />
        </div>
      )}
      
      {/* {audioEnabled && <AudioPlayer />} */}
      <AudioPlayer isPlaying={audioEnabled} />
    </div>
  );
};

export default Index;
