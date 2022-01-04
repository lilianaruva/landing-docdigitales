import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Company from "./pages/company/index";
import Services from "./pages/services/index";
import Login from "./pages/login/index";
import Plans from "./pages/plans/index";
import ServiceTest from "./pages/serviceTest/index";
import Support from "./pages/support/index";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compania" element={<Company />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prueba-de-servicio" element={<ServiceTest />} />
          <Route path="/soporte" element={<Support />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
