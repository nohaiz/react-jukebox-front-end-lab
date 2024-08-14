import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackForm = ({ handleCreateTrack }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTrack(formData);
    setFormData({ title: "", artist: "" });
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default TrackForm;
