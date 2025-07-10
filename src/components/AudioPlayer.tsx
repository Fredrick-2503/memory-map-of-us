
// import { useEffect, useRef, useState } from "react";

// const AudioPlayer = () => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
  
//   // Create audio element when component mounts
//   useEffect(() => {
//     const audio = new Audio("/audio/background.m4a");
//     audio.loop = true;
//     audio.volume = 1;
//     audioRef.current = audio;
    
//     // Try to play (might be blocked by browser autoplay policy)
//     audio.play().then(() => {
//       setIsPlaying(true);
//     }).catch(err => {
//       console.log("Audio autoplay was blocked. User must interact with the page first.", err);
//       setIsPlaying(false);
//     });
    
//     // Cleanup
//     return () => {
//       audio.pause();
//       audio.src = "";
//     };
//   }, []);
  
//   // This component doesn't render anything visible
//   return null;
// };

// export default AudioPlayer;


import { useEffect, useRef } from "react";

interface Props {
  isPlaying: boolean;
}

const AudioPlayer: React.FC<Props> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/mix.mp3"); // use .mp3 for broad support
      audio.loop = true;
      audio.volume = 1;
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    if (isPlaying) {
      audio
        .play()
        .catch((err) => {
          console.warn("Autoplay blocked or failed:", err);
        });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return null;
};

export default AudioPlayer;
