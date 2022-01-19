import React, { useEffect } from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../../../animation";
import im1 from "../../../img/company/cutout4.png"

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show">
            <motion.div variants={photoAnim} className="main-Container whiteSpace" id="backgroundAboutUs" >
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p>Crece tu negocio con la mejor plataforma de <b>Facturación en Línea</b> y <b>Servicios Contables</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }}>Hacemos tu contabilidad y te ofrecemos el sistema mas facil de usar, ideal para Pymes y Emprendedores.</h3>
                    </div>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1" style={{ width: "85%" }}></img>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Contact;