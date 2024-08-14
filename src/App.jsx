import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import * as trackService from "./services/trackService";

const App = () => {
  const [trackList, setTrackList] = useState([]);

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
      </Routes>
    </>
  );
};

export default App;
