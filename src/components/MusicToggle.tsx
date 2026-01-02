import React, { useRef, useState } from 'react';

const MusicToggle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ marginTop: "10px"}}>
      <button onClick={toggleMusic}>
        {isPlaying ? '🔊 Music On ' : '🔇 Music Off'}
      </button>

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicToggle;
