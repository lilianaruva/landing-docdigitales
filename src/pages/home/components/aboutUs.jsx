import React from "react";
import im1 from "../../../img/home/good-business-talk-2021-09-01-10-50-33-utc.png";

const AboutUs = () => {
    return (
        <>
            <div className="main-Container" id="backgroundAboutUs">
                <div className="description-left">
                    <div className="titleAboutUs">
                        <p>Crece tu negocio con la mejor plataforma de <b>Facturación en Línea</b> y <b>Servicios Contables</b></p>
                        <h3>Hacemos tu contabilidad y te ofrecemos el sistema mas facil de usar, ideal para Pymes y Emprendedores.</h3>
                    </div>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1" style={{ width: "85%" }}></img>
                </div>
            </div>
        </>
    )
}

export default AboutUs;