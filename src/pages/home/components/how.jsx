import React from "react";
import imgScreen from "../../../img/home/Screen Shot 2021-10-08 at 5.17.18 PM.png";
import imgLeft from "../../../img/home/[Downloader.la]-61ba510681cc0.png"
import imgRight from "../../../img/home/shutterstock_404098204.png"

const How = () => {
    return (
        <>
            <div className="mainHow-Container" style={{ backgroundColor: '#F1F5FE' }}>
                <div className="title-platform">
                    <p>¿Cómo <b>nos integramos</b> a tu negocio?</p>
                    <p style={{ fontSize: '30px' }}>Trabajamos para ti, llevamos tu contabilidad y te brindamos las herramientas de administración en línea más fáciles de usar.</p>
                </div>
                <div className="howTree">
                    <div className="howLeft">
                        <div className="howTop">
                            <img src={imgLeft} alt="howImgLeft"/>
                            <p>doc<b>Digitales</b></p>
                        </div>
                        <div className="howItem">Hacemos tu contabilidad</div>
                        <div className="howItem">Calculamos tus impuestos</div>
                        <div className="howItem">Presentamos tus declaraciones</div>
                        <div className="howItem">Te brindamos asesoría fiscal ante SAT</div>
                        <div className="howItem">Te brindamos asesoría fiscal</div>
                    </div>
                    <div className="howCenter">
                        <img src={imgScreen} alt="howImgCenter"/>
                    </div>
                    <div className="howRight">
                        <div className="howTop">
                            <img src={imgRight} alt="howImgRight"/>
                            <p>Nuestros <b>Clientes</b></p>
                        </div>
                        <div className="howItem">Facturas, cotizaciones y cuentas por cobrar</div>
                        <div className="howItem">Revisa información clave de tu negocio</div>
                        <div className="howItem">Declaraciones mensuales y anuales</div>
                        <div className="howItem">Lleva el control de tu negocio</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default How;