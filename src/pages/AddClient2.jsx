// AddClient.jsx
import React, { useState } from "react";
import { createCliente } from "../api/clientes";
import { useNavigate } from "react-router-dom";
import FormClient from "../components/FormClient";
import ImagePreview from "../components/ImagePreview";
import "../styles/AddClient.css";

export default function AddClient() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSend = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) dataToSend.append(key, value);
      });

      await createCliente(dataToSend);
      navigate("/clientes");
    } catch (err) {
      console.error("Error creando cliente:", err);
      alert("Error al crear cliente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>➕ Agregar Cliente</h2>
        <div className="add-client-container">
          <FormClient
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit}
            loading={loading}
            navigate={navigate}
          />
          <ImagePreview imageFile={form.fotografia} />
        </div>
      </div>
    </div>
  );
}
