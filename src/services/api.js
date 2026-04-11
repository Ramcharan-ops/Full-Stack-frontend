import axios from "axios";

/**
 * Suraksha API Service
 * 
 * NOTE: Switched to REAL BACKEND at http://localhost:8080/api.
 * Mock layer has been removed.
 */

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default api;