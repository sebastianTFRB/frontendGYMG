// src/api/clientesApi.js
const API_URL = "http://127.0.0.1:8001";

// GET: todos los clientes
export const getClientes = async () => {
  const res = await fetch(`${API_URL}/clientes`);
  if (!res.ok) throw new Error("Error al obtener clientes");
  return await res.json();
};

// GET: cliente por ID
export const getClienteById = async (id) => {
  const res = await fetch(`${API_URL}/clientes/${id}`);
  if (!res.ok) throw new Error("Cliente no encontrado");
  return await res.json();
};

// POST: crear cliente
export const createCliente = async (cliente) => {
  const res = await fetch(`${API_URL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error al crear cliente");
  }
  return await res.json();
};

// PUT: actualizar cliente
export const updateCliente = async (id, cliente) => {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error al actualizar cliente");
  }
  return await res.json();
};

// DELETE: eliminar cliente
export const deleteCliente = async (id) => {
  const res = await fetch(`${API_URL}/clientes/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Error al eliminar cliente");
  }
  return await res.json();
};
