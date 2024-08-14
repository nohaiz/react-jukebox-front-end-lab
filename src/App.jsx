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

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.updateTrack(formData, trackId);
      const updatedTrackList = trackList.map((track) =>
        track._id === updatedTrack._id ? updatedTrack : track
      );
      setTrackList(updatedTrackList);
    } catch (error) {
      console.error("Failed to update track:", error);
    }
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
        <Route
          path="/edit-track/:trackId"
          element={
            <TrackForm
              trackList={trackList}
              handleUpdateTrack={handleUpdateTrack}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
