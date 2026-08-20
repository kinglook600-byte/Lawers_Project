import axios from 'axios';

export const API_ALL = import.meta.env.VITE_API_ALL

export const apiAll = axios.create({
  baseURL: API_ALL,
});

