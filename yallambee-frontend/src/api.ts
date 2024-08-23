import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4001/api', // Adjust the URL as needed
});

export default API;
