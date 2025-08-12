// src/components/Header.jsx
import "../styles/Header.css";
import logo from "../assets/images/logo.jpg"; // importa la imagen

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src={logo}
          alt="Golden Inventory Logo"
          style={{
            height: "60px",
            width: "60px",      // Para que sea cuadrada y el círculo quede perfecto
            objectFit: "cover", // Para que la imagen no se deforme
            borderRadius: "50%" // Esto la hace circular
          }}
        />
        <h1 className="header-title">Golden Inventory</h1>
      </div>
    </header>
  );
}
