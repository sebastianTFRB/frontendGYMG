import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientesList from "./pages/ClientesList";
import AddCliente from "./pages/AddClient2";
import EditClient from "./pages/EditClient";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ClientesList />} />
        <Route path="/clientes/new" element={<AddCliente />} />
        <Route path="/clientes/edit/:id" element={<EditClient />} />
      </Routes>
    </Router>
  );
}

