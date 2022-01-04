import React from "react";

import im1 from "../../../img/company/cutout4.png"

const Contact = () => {
    return (
        <>
            <div className="main-Container" id="backgroundAboutUs" style={{ paddingTop: '145px' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p>Crece tu negocio con la mejor plataforma de <b>Facturación en Línea</b> y <b>Servicios Contables</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }}>Hacemos tu contabilidad y te ofrecemos el sistema mas facil de usar, ideal para Pymes y Emprendedores.</h3>
                    </div>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1" style={{ width: "85%" }}></img>
                </div>
            </div>
        </>
    )
}

export default Contact;