import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true, // Ensure credentials are sent with requests (important for CORS)
});

export const crsf = () => api.get('/sanctum/csrf-cookie');

export default api;