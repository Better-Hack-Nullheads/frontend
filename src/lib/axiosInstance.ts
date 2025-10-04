import axios from 'axios';

// Use import.meta.env for client-side access to env variables
const API_URL = 'https://172.18.160.1:3005'

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;