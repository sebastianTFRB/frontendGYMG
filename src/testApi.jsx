// src/testApi.js
export function testApi() {
  fetch("http://127.0.0.1:8001/users") // La misma URL que usas en Postman
    .then(res => res.json()) // Convierte la respuesta en JSON
    .then(data => console.log("Test API:", data)) // Muestra el resultado
    .catch(err => console.error("Error en Test API:", err)); // Si hay error, lo muestra
}
