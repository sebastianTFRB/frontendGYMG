import React, { useState, useEffect } from "react";
import { getUserById, updateUser } from "../api/usersApi";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/UserForm.css";

export default function EditUser() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserById(userId).then((data) =>
      setForm({ name: data.name, email: data.email })
    );
  }, [userId]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateUser(userId, form);
    navigate("/");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2 style={{ color: "#f39c12" }}>✏ Editar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
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
            <button
              type="submit"
              className="btn-primary"
              style={{ background: "linear-gradient(135deg, #f39c12, #f1c40f)" }}
              disabled={loading}
            >
              {loading ? "Actualizando..." : "💾 Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
