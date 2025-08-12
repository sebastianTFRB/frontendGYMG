import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
//import AddUser from "./pages/AddUser";
//import EditUser from "./pages/EditUser";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
       
      </Routes>
    </Router>
  );
}
// <Route path="/new" element={<AddUser />} />
//  <Route path="/edit/:userId" element={<EditUser />} />
