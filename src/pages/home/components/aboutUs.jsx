import React from "react";
import im1 from "../../../img/home/good-business-talk-2021-09-01-10-50-33-utc.png";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../../animation";

const AboutUs = () => {
    return (
        <>
            <div className="Principal-main-Container" id="backgroundAboutUs" style={{paddingTop:'145px'}}>
                <div className="description-left" style={{marginRight: '20px' }}>
                    <motion.div className="titleAboutUs">
                        <motion.p variants={titleAnim}>Crece tu negocio con la mejor plataforma de <b>Facturación en Línea</b> y <b>Servicios Contables</b></motion.p>
                        <motion.h3 variants={titleAnim} style={{fontSize: '25px', marginTop: '20px' }}>Hacemos tu contabilidad y te ofrecemos el sistema mas facil de usar, ideal para Pymes y Emprendedores.</motion.h3>
                    </motion.div>
                    <motion.button variants={titleAnim} className="btnAboutUs">Conoce más de nuestros servicios</motion.button>
                </div>
                <div className="description-right">
                    <motion.img variants={photoAnim} src={im1} alt="im1" style={{ width: "85%" }}></motion.img>
                </div>
            </div>
        </>
    )
}

export default AboutUs;