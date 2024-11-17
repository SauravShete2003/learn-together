import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});


export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
