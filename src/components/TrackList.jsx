const TrackList = ({ trackList }) => {
  return (
    <>
      <h1>Track List</h1>
      
      <ul>
        {trackList.map((track, index) => (
          <li key={index}>
            <hr />
            <p>Title: {track.title}</p>
            <p>Artist: {track.artist}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TrackList;
