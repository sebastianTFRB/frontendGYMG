// src/pages/AddCliente.jsx
import React, { useState } from "react";
import { createCliente } from "../api/clientes"; // usamos la API de clientes
import { useNavigate } from "react-router-dom";
import "../styles/UserForm.css";

export default function AddCliente() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    fecha_nacimiento: "",
    telefono: "",
    correo: "",
    direccion: "",
    id_tipo_descuento: "",
    huella_template: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Enviar datos al backend
      await createCliente({
        ...form,
        id_tipo_descuento: parseInt(form.id_tipo_descuento) || null
      });
      navigate("/clientes");
    } catch (err) {
      console.error("Error al crear cliente:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>➕ Nuevo Cliente</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej. Juan"
            required
          />

          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            placeholder="Ej. Pérez"
            required
          />

          <label>Documento</label>
          <input
            type="text"
            name="documento"
            value={form.documento}
            onChange={handleChange}
            placeholder="DNI, Cédula..."
          />

          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="fecha_nacimiento"
            value={form.fecha_nacimiento}
            onChange={handleChange}
          />

          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ej. +54 9 11 1234-5678"
          />

          <label>Correo</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Ej. juan@example.com"
          />

          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            placeholder="Ej. Calle 123, Ciudad"
          />

          <label>ID Tipo Descuento</label>
          <input
            type="number"
            name="id_tipo_descuento"
            value={form.id_tipo_descuento}
            onChange={handleChange}
            placeholder="Ej. 1"
          />

          <label>Huella Template</label>
          <textarea
            name="huella_template"
            value={form.huella_template}
            onChange={handleChange}
            placeholder="Cadena de huella digital"
          ></textarea>

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/clientes")}
            >
              ⬅ Volver
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
