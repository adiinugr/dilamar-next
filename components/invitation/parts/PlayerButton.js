import React from "react";
import { HiPlay, HiPause } from "react-icons/hi";

const PlayerButton = ({
  handlePlayMusic,
  handlePauseMusic,
  isAudioPlaying,
  buttonPlayTextColor = "text-green-700",
  buttonPauseTextColor = "text-red-700"
}) => {
  return (
    <div className="fixed z-30 h-10 w-10 right-5 top-1/2">
      {isAudioPlaying ? (
        <HiPause
          className={`cursor-pointer w-full h-full bg-white rounded-full ${buttonPauseTextColor}`}
          onClick={handlePauseMusic}
        />
      ) : (
        <HiPlay
          className={`cursor-pointer w-full h-full bg-white rounded-full ${buttonPlayTextColor}`}
          onClick={handlePlayMusic}
        />
      )}
    </div>
  );
};

export default PlayerButton;
