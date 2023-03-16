import React from "react";
import ReactPlayer from "react-player/youtube";

interface IProps {
  movieId: string;
}

const VideoPlayer: React.FC<IProps> = (props) => {
  const { movieId } = props;
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${movieId}`}
      width="100%"
      controls
    />
  );
};

export default VideoPlayer;
