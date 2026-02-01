import axios from "axios";

const API_KEY = "54466300-85ed7471cb23a14c1c7224587"; 
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Помилка при запиті до Pixabay API:", error);
    throw error; 
  }
}