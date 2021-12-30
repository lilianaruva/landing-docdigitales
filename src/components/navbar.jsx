import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/home/DD_Logo.svg"

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/">
                        <img src={logo} style={{width:"260px", height:"51px"}} alt="DD_Logo" />
                    </Link>
                </div>
                <div className="navbar-right">
                    <div className="navbar-item">
                        <Link to="/compania">
                            <p>Compañía</p>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="/servicios">
                            <p>Servicios</p>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="/planes">
                            <p>Planes</p>
                        </Link>
                    </div>
                    <div className="navbar-item-btn">
                        <div className="btnTest">
                            <Link to="/prueba-de-servicio">
                                <div className="btnTest">Solicitar Prueba</div>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-item-btn">
                        <div className="btnLogin">
                            <Link to="/login">
                                <p>Iniciar sesión</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;