import React from "react";
import "./css/footer.css";
import logo from "../img/home/DD_Logo.svg"
import logoSat from "../img/home/SAT-Logo-750x284 (1).png"
import logoConekta from "../img/home/Page-1.svg"
import logoIzettle from "../img/home/2560px-IZettle_Logo.png"
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    let location = useLocation();

    if (
        location.pathname === '/login'
        || location.pathname === '/registro'
        || location.pathname === '/registro'
        || location.pathname === '/contacto'
    ) {
        return null;
    }

    return (
        <>
            <div className="ContainerFooter">
                <div className="RowFooter">
                    <div className="ColumnFooter">
                        <Link to="/">
                            <img src={logo} alt="logoDocDigitalesFooter" />
                        </Link>
                    </div>
                    <div className="ColumnFooter">
                        <div className="HeadingFooter">Secciones</div>
                        <Link to="/facturacion">
                            <div className="FooterLink">Facturación en Linea</div>
                        </Link>
                        <Link to="/">
                            <div className="FooterLink" >Pagos en línea</div>
                        </Link>
                        <Link to="/">
                            <div className="FooterLink" >Contador en línea</div>
                        </Link>
                        <Link to="/administracion-nomina">
                            <div className="FooterLink" >Administración de nómina</div>
                        </Link>
                        <Link to="/api">
                            <div className="FooterLink" >API</div>
                        </Link>
                        <Link to="/recursos">
                            <div className="FooterLink" >Blog</div>
                        </Link>
                        <Link to="/planes">
                            <div className="FooterLink" >Planes</div>
                        </Link>
                        <Link to="/registro">
                            <div className="FooterLink" >Registro</div>
                        </Link>
                        <Link to="/login">
                            <div className="FooterLink" >Inicio Sesión</div>
                        </Link>
                    </div>
                    <div className="ColumnFooter">
                        <div className="HeadingFooter">Socios</div>
                        <div className="FooterLink" href="/">Programa para socios</div>
                    </div>
                    <div className="ColumnFooter">
                        <div className="HeadingFooter">Ayuda</div>
                        <div className="FooterLink" href="/">Manuales</div>
                        <div className="FooterLink" href="/">Preguntas Frecuentes</div>
                        <div className="FooterLink" href="/">Términos y Condiciones</div>
                        <div className="FooterLink" href="/">Política de Privacidad</div>
                        <div className="FooterLink" href="/">Acuerdo de Niveles de Servicio</div>
                        <div className="FooterLink" href="/">Política de Privacidad App Móvil</div>
                        <Link to="/contacto">
                            <div className="FooterLink">Contacto</div>
                        </Link>
                    </div>
                    <div className="ColumnFooter">
                        <div className="HeadingFooter">Enlaces SAT</div>
                        <a href="https://www.sat.gob.mx/tramites/17507/envia-la-solicitud-para-tu-certificado-de-sello-digital-para-emitir-facturas-electronicas%20" target="_blank">
                            <div className="FooterLink" href="/">Trámite de Certificado de Sello</div>
                        </a>
                        <div className="FooterLink" href="/">Digital</div>
                        <a href="https://www.sat.gob.mx/aplicacion/80523/verifica-tus-facturas-electronicas%20%20" target="_blank">
                            <div className="FooterLink" href="/">Verifica tus Facturas</div>
                        </a>
                        <a href="https://www.sat.gob.mx/consultas/35025/formato-de-factura-electronica-(anexo-20)" target="_blank">
                            <div className="FooterLink">Formato de Factura (Anexo 20)</div>
                        </a>
                    </div>
                </div>

                <div className="RowFooter">
                    <hr style={{ color: '/DDE6F699' }} />
                    <div className="BottomContainerFooter">
                        <div className="childBottom">
                            <a href="https://www.sat.gob.mx/home" target="_blank">
                                <img src={logoSat} alt="bottomLogo1" to="https://www.facebook.com/docDigitales/" />
                            </a>
                            <a href="https://conekta.com/" target="_blank">
                                <img src={logoConekta} alt="bottomLogo1" />
                            </a>
                            <a href="https://www.zettle.com/mx?creative=420899543722&keyword=izettle&matchtype=e&network=g&device=c&gclid=CjwKCAiA55mPBhBOEiwANmzoQk9Y-MB1pulFWa2AhFXcwbQ8VXTwHf2YChhKp0KDKWmn__j9RMZNXhoCA7oQAvD_BwE&gclsrc=aw.ds" target="_blank">
                                <img src={logoIzettle} alt="bottomLogo1" />
                            </a>
                        </div>
                        <div className="childBottom">
                            <IconContext.Provider value={{ color: "#0D66CE", size: "2em" }}>
                                <a href="https://www.facebook.com/docDigitales/" target="_blank">
                                    <FaFacebookSquare style={{ marginRight: "24.76px" }} />
                                </a>
                                <a href="https://www.linkedin.com/company/documentos-digitales-de-mexico/?originalSubdomain=mx" target="_blank">
                                    <FaLinkedin style={{ marginRight: "24.76px" }} />
                                </a>
                                <a href="https://www.facebook.com/docDigitales/" target="_blank">
                                    <FaGithub />
                                </a>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;