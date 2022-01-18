import React, { useEffect } from 'react';
import im1 from '../../../img/resources/Laptop 04.png';
import pointBlue from "../../../img/pointPurple.svg";
import './api.css';

const Api = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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
                    <img src={pointBlue} alt="pointBlue" id="pointRightBottom"></img>
                </div>
            </div>
        </>
    )
}

export default Api;