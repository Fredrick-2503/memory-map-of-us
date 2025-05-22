
import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Create audio element when component mounts
  useEffect(() => {
    const audio = new Audio("/audio/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    
    // Try to play (might be blocked by browser autoplay policy)
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(err => {
      console.log("Audio autoplay was blocked. User must interact with the page first.", err);
      setIsPlaying(false);
    });
    
    // Cleanup
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default AudioPlayer;
