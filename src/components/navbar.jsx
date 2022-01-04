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
                        <Link to="/compania">
                            <div className="navbar-item">
                                <p>Compañía</p>
                            </div>
                        </Link>
                        <div className="dropdown-content">
                            <Link to="/">
                                <a>Sobre Nosotros</a>
                            </Link>
                            <Link to="/">
                                <a>Recursos</a>
                            </Link>
                            <Link to="/">
                                <a>Contacto</a>
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
                                <a>Facturación en linea</a>
                            </Link>
                            <Link to="/">
                                <a>Servicios contables</a>
                            </Link>
                            <Link to="/">
                                <a>Administración de nómina</a>
                            </Link>
                            <Link to="/">
                                <a>API</a>
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