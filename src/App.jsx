import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientesList from "./pages/ClientesList";

//import AddCliente from "./pages/AddClient";
import AddCliente from "./pages/AddClient2";
//import EditUser from "./pages/EditUser";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ClientesList />} />
        <Route path="/clientes/new" element={<AddCliente />} />
       
      </Routes>
    </Router>
  );
}
// <Route path="/new" element={<AddUser />} />
//  <Route path="/edit/:userId" element={<EditUser />} />
