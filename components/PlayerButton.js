import Image from "next/image";
import React from "react";

const PlayerButton = ({
  handlePlayMusic,
  handlePauseMusic,
  isAudioPlaying,
}) => {
  return (
    <div className="fixed z-30 h-10 w-10 right-4 top-1/3">
      {isAudioPlaying ? (
        <div onClick={handlePauseMusic} className="cursor-pointer">
          <Image
            src="/images/player-button/pause.png"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      ) : (
        <div onClick={handlePlayMusic} className="cursor-pointer">
          <Image
            src="/images/player-button/play.png"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      )}
    </div>
  );
};

export default PlayerButton;
