import React, { useEffect } from 'react';
import im1 from '../../../img/resources/Laptop 04.png';
import pointPurple from "../../../img/pointPurple.svg";
import './api.css';
import imgTeam from "../../../img/services/api/writing-codes-and-typing-data-code-technology-programmer-cooperating-working-on-web-site-project-in-a_t20_pRVd2Y.png"
import imgDev from "../../../img/services/api/developer-checking-programming-code-2021-08-29-14-43-20-utc.png"
import imgQA from "../../../img/services/api/pexels-yan-krukov-8867434.png"
import FourContain from './fourContain';

const Api = () => {
    /*
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    
    */
    return (
        <>
            <div className="Principal-main-Container" id="backgroundApi" style={{ paddingTop: '100px', backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p><b>Api</b> de facturación en línea</p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }} className="titleResponsive">DocDigitales API es una gran herramienta para integrar la facturación electrónica a tu sistema.</h3>
                    </div>
                    <button className="btnResourcesPurple">Solicitar prueba</button>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1"></img>
                    <img src={pointPurple} alt="pointPurple" id="pointRightBottom"></img>
                </div>
            </div>
            <div className="title-platform" style={{ marginTop: '135px' }}>
                <p>¿Ya tienes un sistema y necesitas <b>integrar timbrado de facturación en línea y complemento de pagos?</b></p>
                <p style={{ fontSize: '20px' }}>Conoce nuestra API y descubre los grandes beneficios de integrar y conectar tu sistema con docDigitales</p>
            </div>
            <div className="main-Container" id="pointBackgroundLeftBottom">
                <div className="description-left">
                    <div className="image">
                        <img src={imgTeam} alt="im1"></img>
                        <img src={pointPurple} alt="pointPurple" id="pointRightBottom" />
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Robustece tu sistema</b></div>
                        <div className="description">Si ya cuentas con un sistema propio, puedes integrar fácilmente la función de facturación electrónica con la API de docDigitales.</div>
                    </div>
                </div>
            </div>
            <div className="main-Container" id="pointBackgroundRightBottom">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Fácil integración</b></div>
                        <div className="description">API en arquitectura Rest, con documentación clara y en distintos lenguajes de programación como C#, Java, PHP y Ruby.</div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={imgDev} alt="im2"></img>
                        <img src={pointPurple} alt="pointPurple" id="pointLeft"></img>
                    </div>
                </div>
            </div>
            <div className="main-Container" id="pointBackgroundLeftBottom">
                <div className="description-left" >
                    <div className="image" >
                        <img src={imgQA} alt="im1"></img>
                        <img src={pointPurple} alt="pointPurple" id="pointRightBottom" />
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Soporte técnico</b></div>
                        <div className="description">Contamos con un equipo de soporte especializado que te ayudara y resolverá todas tus dudas durante el proceso de integración.</div>
                    </div>
                </div>
            </div>
            <FourContain/>
        </>
    )
}

export default Api;