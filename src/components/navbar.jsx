import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/home/DD_Logo.svg";
import img1 from "../img/account.png";
import "./css/navbar.css";

const Navbar = () => {
    let location = useLocation();

    if (
        location.pathname === '/login'
        || location.pathname === '/registro'
        || location.pathname === '/prueba-30-dias'
    ) {
        return null;
    }

    return (
        <>
            <nav className={`navbar-container ${location.pathname === '/contacto' ? "whiteColor" : ""}`}>
                <div className="navbar-left">
                    <Link to="/">
                        <img src={logo} style={{ width: "260px", height: "51px" }} alt="DD_Logo" />
                    </Link>
                </div>
                <div className="navbar-right">
                    <div className="dropdown">
                        <div className="navbar-item">
                            <p>Compañía</p>
                        </div>
                        <div className="dropdown-content">
                            <Link to="/sobre-nosotros">
                                <p>Sobre Nosotros</p>
                            </Link>
                            <Link to="/recursos">
                                <p>Recursos</p>
                            </Link>
                            <Link to="/contacto">
                                <p>Contacto</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="navbar-item">
                            <p>Servicios</p>
                        </div>
                        <div className="dropdown-content">
                            <Link to="/facturacion">
                                <p>Facturación en linea</p>
                            </Link>
                            <Link to="/servicios-contables">
                                <p>Servicios contables</p>
                            </Link>
                            <Link to="/administracion-nomina">
                                <p>Administración de nómina</p>
                            </Link>
                            <Link to="/api">
                                <p>API</p>
                            </Link>
                        </div>
                    </div>
                    <Link to="/planes">
                        <div className="navbar-item">
                            <p>Planes</p>
                        </div>
                    </Link>
                    <Link to="/registro">
                        <div className="navbar-item-btn">
                            <div className="btnTest">
                                <div className="btnTest">Solicitar Prueba</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className="navbar-item-btn">
                            <div className="btnLogin">
                                <img src={img1}alt="Login" style={{marginRight: "5px" }}/>
                                <p>Iniciar sesión</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;