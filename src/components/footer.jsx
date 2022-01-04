import React from "react";
import "./FooterStyles.css";
import logo from "../img/home/DD_Logo.svg"
import logoSat from "../img/home/SAT-Logo-750x284 (1).png"
import logoConekta from "../img/home/Page-1.svg"
import logoIzettle from "../img/home/2560px-IZettle_Logo.png"
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <>
            <>
                <div className="ContainerFooter">
                    <div className="RowFooter">
                        <div className="ColumnFooter">
                            <img src={logo} alt="logoDocDigitalesFooter" />
                        </div>
                        <div className="ColumnFooter">
                            <div className="HeadingFooter">Secciones</div>
                            <div className="FooterLink" href="#">Facturación en Linea</div>
                            <div className="FooterLink" href="#">Pagos en línea</div>
                            <div className="FooterLink" href="#">Contador en línea</div>
                            <div className="FooterLink" href="#">Administración de nómina</div>
                            <div className="FooterLink" href="#">API</div>
                            <div className="FooterLink" href="#">Blog</div>
                            <div className="FooterLink" href="#">Planes</div>
                            <div className="FooterLink" href="#">Registro</div>
                            <div className="FooterLink" href="#">Inicio Sesión</div>
                        </div>
                        <div className="ColumnFooter">
                            <div className="HeadingFooter">Socios</div>
                            <div className="FooterLink" href="#">Programa para socios</div>
                        </div>
                        <div className="ColumnFooter">
                            <div className="HeadingFooter">Ayuda</div>
                            <div className="FooterLink" href="#">Manuales</div>
                            <div className="FooterLink" href="#">Preguntas Frecuentes</div>
                            <div className="FooterLink" href="#">Términos y Condiciones</div>
                            <div className="FooterLink" href="#">Política de Privacidad</div>
                            <div className="FooterLink" href="#">Acuerdo de Niveles de Servicio</div>
                            <div className="FooterLink" href="#">Política de Privacidad App Móvil</div>
                            <div className="FooterLink" href="#">Contacto</div>
                        </div>
                        <div className="ColumnFooter">
                            <div className="HeadingFooter">Enlaces SAT</div>
                            <div className="FooterLink" href="#">Trámite de Certificado de Sello</div>
                            <div className="FooterLink" href="#">Digital</div>
                            <div className="FooterLink" href="#">Verifica tus Facturas</div>
                            <div className="FooterLink" href="#">Formato de Factura (Anexo 20)</div>
                        </div>
                    </div>

                    <div className="RowFooter">
                        <hr style={{ color: '#DDE6F699' }} />
                        <div className="BottomContainerFooter">
                            <div className="childBottom">
                                <img src={logoSat} alt="bottomLogo1" />
                                <img src={logoConekta} alt="bottomLogo1" />
                                <img src={logoIzettle} alt="bottomLogo1" />
                            </div>
                            <div className="childBottom">
                                <IconContext.Provider value={{ color: "#0D66CE", size: "2em"}}>
                                    <FaFacebookSquare style={{marginRight:"24.76px"}}/>
                                    <FaLinkedin style={{marginRight:"24.76px"}}/>
                                    <FaGithub/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Footer;