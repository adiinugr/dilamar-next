import React from "react";
import { HiPlay, HiPause } from "react-icons/hi";

const PlayerButton = ({
  handlePlayMusic,
  handlePauseMusic,
  isAudioPlaying,
  buttonPlayTextColor = "text-green-500",
  buttonPauseTextColor = "text-red-500"
}) => {
  return (
    <div className="fixed z-30 h-10 w-10 right-5 top-1/2">
      {isAudioPlaying ? (
        <HiPause
          className={`cursor-pointer w-full h-full ${buttonPauseTextColor}`}
          onClick={handlePauseMusic}
        />
      ) : (
        <HiPlay
          className={`cursor-pointer w-full h-full ${buttonPlayTextColor}`}
          onClick={handlePlayMusic}
        />
      )}
    </div>
  );
};

export default PlayerButton;
