import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/home/DD_Logo.svg"

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
                    <Link to="/compania">
                        <div className="navbar-item">
                            <p>Compañía</p>
                        </div>
                    </Link>
                    <Link to="/servicios">
                        <div className="navbar-item">
                            <p>Servicios</p>
                        </div>
                    </Link>
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