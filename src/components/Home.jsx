import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";
import { useState } from "react";

const Home = ({ trackList, handleDeleteTrack }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isPlaying, setIsPLaying] = useState(false);

  const handlePlayTrack = (trackId) => {
    const list = trackList.filter((track) => track._id === trackId);
    setNowPlaying(list);
    setIsPLaying(true)
  };
  return (
    <>
      <TrackList
        trackList={trackList}
        handleDeleteTrack={handleDeleteTrack}
        handlePlayTrack={handlePlayTrack}
      />
      <NowPlaying nowPlaying={nowPlaying} isPlaying={isPlaying}/>
    </>
  );
};
export default Home;
