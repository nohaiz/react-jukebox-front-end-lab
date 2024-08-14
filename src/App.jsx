import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useParams } from "react";

import * as trackService from "./services/trackService";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [trackList, setTrackList] = useState([]);

  const handleCreateTrack = async (formData) => {
    const createdTrack = await trackService.createTrack(formData);
    setTrackList([...trackList, createdTrack]);
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

  const handleDeleteTrack = async (trackId) => {
    try {
      await trackService.deleteTrack(trackId);
      const updatedTrackList = trackList.filter(
        (track) => track._id !== trackId
      );
      setTrackList(updatedTrackList);
    } catch (err) {
      console.error("Failed to delete track:", err);
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
        <Route
          path="/"
          element={
            <Home trackList={trackList} handleDeleteTrack={handleDeleteTrack} />
          }
        />
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
