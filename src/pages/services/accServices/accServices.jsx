import React, { useEffect } from 'react';
import im1 from "../../../img/services/accServices/cutout2-2.png";
import im2 from "../../../img/services/accServices/successful-entrepreneur-2021-09-01-07-24-53-utc.png";
import "./services.css";
import pointBlue from "../../../img/pointBlue.png";
import Control from "./components/control";
import CarouselS from './components/carouselS';
import How from "./components/how";
import Plans from "./components/plans";
import ServC from './components/servC';

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
            <Control />
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={im2} alt="im2"></img>
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>¡Somos un nuevo tipo de contador!</b></div>
                        <div className="description">Contamos con un equipo de contadores expertos por industria, que te ofrece un <b>servicio de contabilidad profesional y confiable</b>. Realizamos las tareas contables por ti y mantenemos tus obligaciones al día. Siempre con la <b>garantía</b> de un cumplimiento correcto y a tiempo.</div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', fontSize: '40px', marginBottom: '3rem'}}>
                <p>Tu contabilidad<b> más fácil que nunca</b></p>
            </div>
            <CarouselS />
            <How />
            <ServC />
            <Plans />
        </>
    )
}

export default AccServices;