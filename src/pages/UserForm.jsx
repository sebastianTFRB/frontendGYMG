import React, { useState, useEffect } from "react";
import { createUser, getUserById, updateUser } from "../api/usersApi";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/UserForm.css"; // archivo CSS custom

export default function UserForm() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((data) =>
        setForm({ name: data.name, email: data.email })
      );
    }
  }, [userId]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (userId) {
      await updateUser(userId, form);
    } else {
      await createUser(form);
    }
    navigate("/");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>{userId ? "✏ Editar Usuario" : "➕ Nuevo Usuario"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ej. juan@example.com"
            required
          />

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/")}
            >
              ⬅ Volver
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Guardando..." : "💾 Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
