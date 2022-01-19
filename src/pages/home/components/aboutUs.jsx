import React from "react";
import im1 from "../../../img/home/good-business-talk-2021-09-01-10-50-33-utc.png";
import { motion } from "framer-motion";
import { photoAnim } from "../../../animation";
import pointBlue from "../../../img/pointBlue.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" id="backgroundAboutUs" >
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p >Crece tu negocio con la mejor plataforma de <b>Facturación en Línea</b> y <b>Servicios Contables</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }}>Hacemos tu contabilidad y te ofrecemos el sistema mas facil de usar, ideal para Pymes y Emprendedores.</h3>
                    </div>
                    <Link to="/servicios-contables">
                        <button className="btnAboutUs">Conoce más de nuestros servicios</button>
                    </Link>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1" style={{ width: "85%" }}></img>
                    <img src={pointBlue} alt="pointBlue" id="pointLeftBottom"></img>
                </div>
            </motion.div>
        </>
    )
}

export default AboutUs;