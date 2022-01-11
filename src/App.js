import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Services from "./pages/services/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Billing from "./pages/billing/index";
import Plans from "./pages/plans/index";
import ServiceTest from "./pages/serviceTest/index";
import Support from "./pages/support/index";
import Footer from "./components/footer";
import AboutUs from "./pages/company/aboutUs/aboutUs";
import Resources from "./pages/company/resources/resources";
import Contact from "./pages/company/contact/contact";
import ArticlePage from "./pages/company/resources/components/articlePage"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/planes" element={<Plans />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prueba-de-servicio" element={<ServiceTest />} />
        <Route path="/soporte" element={<Support />} />
        <Route path="/facturacion" element={<Billing />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
