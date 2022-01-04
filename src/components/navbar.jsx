import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/home/DD_Logo.svg"
import "./css/navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar-container">
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
                        <Link to="/servicios">
                            <div className="navbar-item">
                                <p>Servicios</p>
                            </div>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/">
                                <p>Facturación en linea</p>
                            </Link>
                            <Link to="/">
                                <p>Servicios contables</p>
                            </Link>
                            <Link to="/">
                                <p>Administración de nómina</p>
                            </Link>
                            <Link to="/">
                                <p>API</p>
                            </Link>
                        </div>
                    </div>
                    <Link to="/planes">
                        <div className="navbar-item">
                            <p>Planes</p>
                        </div>
                    </Link>
                    <Link to="/prueba-de-servicio">
                        <div className="navbar-item-btn">
                            <div className="btnTest">
                                <div className="btnTest">Solicitar Prueba</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className="navbar-item-btn">
                            <div className="btnLogin">
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