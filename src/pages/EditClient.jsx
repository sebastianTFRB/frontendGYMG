// src/pages/EditClient.jsx
import React, { useState, useEffect } from "react";
import { getCliente, updateCliente, deleteCliente } from "../api/clientes";
import { useNavigate, useParams } from "react-router-dom";
import FormClient from "../components/FormClient";
import ImagePreview from "../components/ImagePreview";
import "../styles/AddClient.css";

export default function EditClient() {
  const { id } = useParams();
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
    huella_template: null,
    fotografia: null
  });

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Cargar datos del cliente
  useEffect(() => {
    async function fetchCliente() {
      try {
        const { data } = await getCliente(id);
        setForm({
          nombre: data.nombre || "",
          apellido: data.apellido || "",
          documento: data.documento || "",
          fecha_nacimiento: data.fecha_nacimiento || "",
          telefono: data.telefono || "",
          correo: data.correo || "",
          direccion: data.direccion || "",
          id_tipo_descuento: data.id_tipo_descuento || "",
          huella_template: null,
          fotografia: null
        });
        // setImagePreview(`data:image/jpeg;base64,${data.fotografia}`);
      } catch (err) {
        console.error("Error cargando cliente:", err);
        alert("Error al cargar datos del cliente");
        navigate("/");
      }
    }
    fetchCliente();
  }, [id, navigate]);

  // Guardar cambios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dataToSend = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) dataToSend.append(key, value);
      });
      await updateCliente(id, dataToSend);
      alert("Cliente actualizado correctamente");
      navigate("/");
    } catch (err) {
      console.error("Error actualizando cliente:", err);
      alert("Error al actualizar cliente");
    } finally {
      setLoading(false);
    }
  };

  // Eliminar cliente
  const handleDelete = async () => {
    if (!window.confirm("¿Seguro que quieres eliminar este cliente?")) return;
    setLoading(true);
    try {
      await deleteCliente(id);
      alert("Cliente eliminado correctamente");
      navigate("/");
    } catch (err) {
      console.error("Error eliminando cliente:", err);
      alert("No se pudo eliminar el cliente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2> Editar Cliente</h2>
        <div className="add-client-container">
          <FormClient
            form={form}
            setForm={(newForm) => {
              setForm(newForm);
              if (newForm.fotografia instanceof File) {
                setImagePreview(URL.createObjectURL(newForm.fotografia));
              }
            }}
            handleSubmit={handleSubmit}
            loading={loading}
            navigate={navigate} // <-- PASAMOS navigate aquí
          />
          <ImagePreview imageFile={imagePreview} />

          {/* Botón de eliminar */}
          <div className="form-actions" style={{ marginTop: "1rem" }}>
            <button
              type="button"
              className="btn-delete"
              onClick={handleDelete}
              disabled={loading}
            >
              Eliminar Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
