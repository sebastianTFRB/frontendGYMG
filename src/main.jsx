import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { testApi } from "./testApi";  // Importa la función

testApi(); // Ejecuta la prueba de API

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
