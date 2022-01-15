import React, { useEffect } from 'react';
import im1 from "../../../img/services/accServices/cutout2-2.png";
import "./services.css";
import pointBlue from "../../../img/pointBlue.png";
import Control from "./components/control";
import How from "./components/how";
import Plans from "./components/plans";

const AccServices = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="Principal-main-Container" id="backgroundServices" style={{ paddingTop: '100px', backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p>Conoce la <b>mejor solución de servicios contables</b> para Pymes y empresas de servicios</p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }} className="titleResponsive">Llevamos tu contabilidad, cumplimos con tus obligaciones fiscales y <b>mantenemos tus números sanos</b>, para que crezcas tu negocio de la mejor manera.</h3>
                    </div>
                    <button className="btnResourcesBlue">Solicitar prueba</button>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1"></img>
                    <img src={pointBlue} alt="pointBlue" id="pointRightBottom"></img>
                </div>
            </div>
            <Control/>
            <How/>
            <Plans />
        </>
    )
}

export default AccServices;