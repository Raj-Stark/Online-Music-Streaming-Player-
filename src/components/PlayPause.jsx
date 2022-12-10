import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    ></FaPauseCircle>
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    ></FaPlayCircle>
  );
};

export default PlayPause;
