import API from "../api/axios";

export const getNotes = async () => {
  const response = await API.get("/notes");
  return response.data;
};

export const getNoteById = async (id) => {
  const response = await API.get(`/notes/${id}`);
  return response.data;
};

export const createNote = async (note) => {
  const response = await API.post("/notes", note);
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await API.put(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await API.delete(`/notes/${id}`);
  return response.data;
};

export const toggleFavorite = async (id) => {
  const res = await API.patch(`/notes/${id}/favorite`);

  return res.data;
};
