import axios from "axios";

const baseUrl = import.meta.env.VITE_API_ALL || "";

const baseApiReq = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

export { baseApiReq }

