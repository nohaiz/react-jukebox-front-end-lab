import { Link } from "react-router-dom";

const TrackList = ({ trackList, handleDeleteTrack, handlePlayTrack }) => {
  return (
    <>
      <h1>Track List</h1>
      <Link to="/add-track">Add New Track</Link>
      <ul>
        {trackList.map((track, index) => (
          <li key={index}>
            <p>Title: {track.title}</p>
            <p>Artist: {track.artist}</p>
            <Link to={`/edit-track/${track._id}`}>Edit</Link>
            <button type="button" onClick={() => handleDeleteTrack(track._id)}>
              Delete
            </button>
            <button type="button" onClick={() => handlePlayTrack(track._id)}>
              Play
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TrackList;
