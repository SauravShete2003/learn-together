import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(
      "Authorization Token Set:",
      api.defaults.headers.common["Authorization"]
    );
  } else {
    delete api.defaults.headers.common["Authorization"];
    console.log("Authorization Token Removed");
  }
};

export default api;
