import React from "react";
import calendar from "../../../img/home/calendar-blue.png";
import card from "../../../img/home/card-blue.png"
import { Link } from "react-router-dom";

const Ready = () => {
    return (
        <>
            <div className="mainMedium-Container" id="pointsBackground" style={{ backgroundColor: '#0063CE', color: '#FFFFFF' }}>
                <div className="titleAboutUs" style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: '500', marginBottom: '1rem' }}>¿Listo para probar nuestros servicios?</p>
                    <p style={{ fontSize: '25px' }}>Prueba hoy la solución de facturación y contabilidad más sencilla de México</p>
                </div>
                <div className="twoElements">
                    <div className="twoElementsChild" style={{ marginRight: '3rem' }}>
                        <div className="elementImg">
                            <img src={card} alt="card-blue" />
                        </div>
                        <p><b>No</b> necesitas utilizar tu <b>tarjeta</b></p>
                    </div>
                    <div className="twoElementsChild">
                        <div className="elementImg">
                            <img src={calendar} alt="calendar-blue" />
                        </div>
                        <p>30 días de prueba <b>gratis</b></p>
                    </div>
                </div>
                <div className="alreadyBottomBtn">
                    <Link to="/prueba-30-dias">
                        <button>Solicitar prueba</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Ready;