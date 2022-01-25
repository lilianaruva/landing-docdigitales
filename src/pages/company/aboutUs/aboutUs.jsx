import React, { useEffect } from "react";
import im1 from "../../../img/company/main.png"
import call from "../../../img/company/call.png"
import hand from "../../../img/company/hands.png"
import team from "../../../img/company/meet.png"
import simpleza from "../../../img/company/Simpleza_Icon.svg";
import pasion from "../../../img/company/Pasion_Icon.svg";
import empatia from "../../../img/company/Empatia_Icon.svg";
import honestidad from "../../../img/company/Honestidad_Icon.svg";
import confianza from "../../../img/company/Confianza_Icon.svg"
import logoDD from "../../../img/home/DD_Logo.svg"
import './aboutUs.css';
//Animations
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../../../animation";
//Points
//import p1 from "../../../img/pointAqua.png"
//import p2 from "../../../img/pointBlue.png"


const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //<motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" id="backgroundAbout">
    return (
        <motion.div exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show">
            <motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" style={{ backgroundColor: "#F1F5FE" }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs titleResponsive">
                        <p>Estamos listos para <b>solucionar tus problemas</b> contables y de administración</p>
                    </div>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1" style={{ width: "85%" }}></img>
                    {//<img src={p1} alt="pointAqua1" id="pointLeftBottom"></img>
                    }
                </div>
            </motion.div>
            <div className="mainMedium-Container">
                <img src={logoDD} alt="logoDDAboutUs" />
                <div className="title-platform">
                    <p style={{ fontWeight: '500', width: "1080px", marginTop: "35.68px" }}>Nuestra misión es hacer más <b>sencilla</b> y <b>productiva la vida laboral</b> de nuestros clientes con la mejor atención y el mejor producto.</p>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={team} alt="team"></img>
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Somos una empresa 100% mexicana</b>, fundada en 2009</div>
                        <div className="description">Tenemos una enorme experiencia en la oferta de servicios contables y de administración en línea, pensados especialmente para pymes, emprendedores y freelancers.</div>
                        <div className="description">Nos ocupamos de ser vanguardistas e innovar nuestros servicios y tecnología constantemente, para lograr movernos al ritmo del mercado y satisfacer oportunamente sus nuevas necesidades.</div>
                    </div>
                </div>
            </div>
            <div className="mainMedium-Container" style={{ backgroundColor: '#F8FAFE' }}>
                <div className="title-platform">
                    <p style={{ fontWeight: '600' }}>Confiamos en nuestros compañeros, equipo y clientes</p>
                    <p style={{ fontSize: '25px' }}>Entendemos que simple es mejor. Damos confianza y recibimos confianza. Somos directos y nos comunicamos de manera honesta. Escuchamos y nos ponemos en los zapatos de nuestros compañeros y clientes. Somos empáticos. Trabajamos con pasión haciendo lo que nos gusta.</p>
                </div>
                <div className="sectionNumbersContainer">
                    <div className="sectionNumbersChild">
                        <div className="imageValores">
                            <img src={simpleza} alt="iconNumbers1" />
                        </div>
                        <p className="numberSubtitle"><b>SIMPLEZA</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <div className="imageValores">
                            <img src={confianza} alt="iconNumbers2" />
                        </div>
                        <p className="numberSubtitle"><b>CONFIANZA</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <div className="imageValores">
                            <img src={honestidad} alt="iconNumbers3" />
                        </div>
                        <p className="numberSubtitle"><b>HONESTIDAD</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <div className="imageValores">
                            <img src={empatia} alt="iconNumbers4" />
                        </div>
                        <p className="numberSubtitle"><b>EMPATÍA</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <div className="imageValores">
                            <img src={pasion} alt="iconNumbers4" />
                        </div>
                        <p className="numberSubtitle"><b>PASIÓN</b></p>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Un servicio confiable y profesional</b></div>
                        <div className="description">Nuestra plataforma permite a nuestros emprendedores <b>administrar su negocio fácil y eficientemente.</b></div>
                        <div className="description">Contamos con un <b>equipo de contadores expertos</b>, que se encargan de realizar la contabilidad de nuestros clientes y brindarles una <b>asesoría estratégica</b> para una toma de decisiones más informada.</div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={call} alt="call"></img>
                        {//<img src={p1} alt="pointBlue" id="pointLeft"></img>
                        }
                    </div>
                </div>
            </div>
            <div className="main-Container" id="pointBackgroundLeftBottomBlue">
                <div className="description-left">
                    <div className="image">
                        <img src={hand} alt="hand"></img>
                        {// <img src={p2} alt="pointAqua" id="pointRightBottom"></img>
                        }
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Estamos siempre contigo</b></div>
                        <div className="description">En docDigitales <b>nos preocupamos por nuestros clientes</b>. Trabajamos todos los días para brindar una <b>atención personalizada</b>, competente y que resuelva oportunamente cualquier duda o eventualidad de los negocios que ya confían en nosotros.</div>
                        <div className="description">Nuestro compromiso es dar <b>soluciones rápidas y ágiles</b>para una experiencia sin fricciones.</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutUs;