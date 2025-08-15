// src/pages/ClientesList.jsx
import React, { useEffect, useState } from "react";
import { getClientes } from "../api/clientes";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../styles/UserList.css";

export default function ClientesList() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const loadClientes = async () => {
    setLoading(true);
    try {
      const res = await getClientes();
      const lista = Array.isArray(res.data) ? res.data : res.data.data || [];
      setClientes(lista);
    } catch (err) {
      console.error("Error cargando clientes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClientes();
  }, []);

  const filteredClientes = clientes.filter((c) => {
    const fullName = `${c.nombre || ""} ${c.apellido || ""}`.toLowerCase();
    const email = (c.correo || "").toLowerCase();
    return (
      fullName.includes(query.toLowerCase()) ||
      email.includes(query.toLowerCase())
    );
  });

  return (
    <div className="users-container">
      <header className="users-header">
        <h1>GOLDEN Clientes</h1>
        <Link to="/clientes/new" className="btn-add">
          Nuevo Cliente
        </Link>
      </header>

      <SearchBar query={query} onChange={setQuery} />

      <div className="users-card">
        {loading ? (
          <p className="loading-text">Cargando...</p>
        ) : filteredClientes.length === 0 ? (
          <p className="empty-text">No hay clientes registrados.</p>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredClientes.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>
                    <Link
                      to={`/clientes/edit/${c.id}`}
                      className="name-button"
                    >
                      {c.nombre} {c.apellido}
                    </Link>
                  </td>
                  <td>{c.correo || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
