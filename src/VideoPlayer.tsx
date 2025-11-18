import React, { useState, useRef } from "react";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handlePlayPause() {
    const whenIsPlaying = !isPlaying;
    setPlaying(whenIsPlaying);
    //  if(whenIsPlaying){
    //     videoRef.current.play();
    //  }else{
    //     videoRef.current.pause();
    //  }
    whenIsPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  }

  return (
    <main>
      <button
        onClick={handlePlayPause}
        className="bg-blue-300 text-white py-2 px-5 text-lg rounded-xl cursor-p"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        width="600"
        height="350"
        ref={videoRef}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </main>
  );
};
export default VideoPlayer;
