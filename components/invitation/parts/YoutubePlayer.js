import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  const opts = {
    width: "100%",
  };
  return <YouTube videoId={videoId} opts={opts} />;
};

export default YoutubePlayer;
