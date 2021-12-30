import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/compania">
                    <p>Compañía</p>
                </Link>
                <Link to="/servicios">
                    <p>Servicios</p>
                </Link>
                <Link to="/planes">
                    <p>Planes</p>
                </Link>
                <Link to="/prueba-de-servicio">
                    <p>Solicitar Prueba</p>
                </Link>
                <Link to="/login">
                    <p>Iniciar sesión</p>
                </Link>
            </div>
        </>
    )
}

export default Navbar;