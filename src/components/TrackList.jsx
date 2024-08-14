import { Link } from "react-router-dom";

const TrackList = ({ trackList }) => {
  return (
    <>
      <h1>Track List</h1>
      <Link to="/add-track">Add New Track</Link>
      <ul>
        {trackList.map((track, index) => (
          <li key={index}>
            <p>Title: {track.title}</p>
            <p>Artist: {track.artist}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TrackList;
