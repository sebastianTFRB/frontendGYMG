// src/api/apiConfig.js
import axios from "axios";

export const API_BASE_URL = "http://localhost:8003/api/v1" ; // Cambia a la URL de tu backend

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
