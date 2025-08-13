// src/api/tipoDescuentoApi.js
import { api } from "./apiConfig";

// Obtener todos los tipos de descuento
export const getTiposDescuento = () => api.get("/tipos_descuento");
export const getTipoDescuento = (id) => api.get(`/tipos_descuento/${id}`);
export const createTipoDescuento = (data) => api.post("/tipos_descuento", data);
export const updateTipoDescuento = (id, data) => api.put(`/tipos_descuento/${id}`, data);
export const deleteTipoDescuento = (id) => api.delete(`/tipos_descuento/${id}`);
