import API from "../api/axios.js";

export const generateFlashcards = async (content) => {
  const response = await API.post("/ai/flashcards", {
    content,
  });

  return response.data;
};
