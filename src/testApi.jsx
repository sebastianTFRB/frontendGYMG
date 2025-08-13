export function testApi() {
  fetch("http://localhost:8003/api/v1/clientes/") // Misma URL que en Postman
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      console.log("✅ Test API OK:", data);
    })
    .catch(err => {
      console.error("❌ Error en Test API:", err.message);
    });
}
