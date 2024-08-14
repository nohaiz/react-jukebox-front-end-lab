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

export { index };
