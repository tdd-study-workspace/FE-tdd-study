import axios from 'axios';
const BASE_URL = 'https://api.realworld.io/api';
const api = axios.create({
  baseURL: BASE_URL,
});

export const baseurl = (path: string) => {
  return `${BASE_URL}${path}`;
};

export default api;
