import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Billing from "./pages/billing/index";
import Plans from "./pages/plans/index";
import Support from "./pages/support/index";
import Footer from "./components/footer";
import AboutUs from "./pages/company/aboutUs/aboutUs";
import Resources from "./pages/company/resources/resources";
import Contact from "./pages/company/contact/contact";
import ArticlePage from "./pages/company/resources/components/articlePage";
import AccService from "./pages/services/accServices/accServices";
import Api from "./pages/services/api/api";
import PayAdmins from "./pages/services/payAdmin/payAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Plans />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/soporte" element={<Support />} />
        <Route path="/facturacion" element={<Billing />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<ArticlePage />} />
        <Route path="/servicios-contables" element={<AccService />} />
        <Route path="/api" element={<Api />} />
        <Route path="/administracion-nomina" element={< PayAdmins/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
