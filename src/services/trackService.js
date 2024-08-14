import { json } from "react-router-dom";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createTrack = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const updateTrack = async (formData, trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, createTrack, updateTrack };
