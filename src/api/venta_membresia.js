// src/api/ventaMembresiaApi.js
import { api } from "./apiConfig";

// Obtener todas las ventas
export const getVentasMembresia = () => api.get("/ventas-membresia");
export const getVentaMembresia = (id) => api.get(`/ventas-membresia/${id}`);
export const createVentaMembresia = (data) => api.post("/ventas-membresia", data);
export const updateVentaMembresia = (id, data) => api.put(`/ventas-membresia/${id}`, data);
export const deleteVentaMembresia = (id) => api.delete(`/ventas-membresia/${id}`);
