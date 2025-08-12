import React, { useEffect, useState } from "react";
import { getClientes } from "../api/usersApi"; // ← cambiamos API
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../styles/UserList.css";

export default function ClientesList() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const loadClientes = async () => {
    setLoading(true);
    try {
      const data = await getClientes();
      setClientes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClientes();
  }, []);

  // Filtra clientes por nombre, apellido o correo
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
        <h1>GOLDEN clientes</h1>
        <Link to="/new" className="btn-add">
          ➕ Nuevo Cliente
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
                    <button
                      className="name-button"
                      onClick={() => navigate(`/edit/${c.id}`)}
                    >
                      {c.nombre} {c.apellido}
                    </button>
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
