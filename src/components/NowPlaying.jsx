const NowPlaying = ({ nowPlaying, isPlaying }) => {
  return (
    <>
      {isPlaying ? <h3>Now playing</h3> : <h3>Nothing is being played</h3>}
      <ul>
        {nowPlaying.map((track, index) => (
          <li key={index}>
            <p>Title: {track.title}</p>
            <p>Artist: {track.artist}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NowPlaying;
