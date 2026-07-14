import axios from "axios";

const API = axios.create({
  baseURL: "https://notehub-api-5i0w.onrender.com/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
