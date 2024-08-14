import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import * as trackService from "./services/trackService";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [trackList, setTrackList] = useState([]);

  const handleCreateTrack = async (formData) => {
    await trackService.createTrack(formData);
    setTrackList([...trackList, formData]);
  };

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const data = await trackService.index();
        setTrackList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchIndex();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home trackList={trackList} />} />
        <Route
          path="/add-track"
          element={<TrackForm handleCreateTrack={handleCreateTrack} />}
        />
      </Routes>
    </>
  );
};

export default App;
