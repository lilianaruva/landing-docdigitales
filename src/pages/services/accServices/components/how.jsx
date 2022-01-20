import React from 'react';
import im1 from "../../../../img/services/accServices/Group 1477.svg";
import im2 from "../../../../img/services/accServices/Group 1478.svg";
import im3 from "../../../../img/services/accServices/Group 1479.svg";
import im4 from "../../../../img/services/accServices/Group 1480.svg";
import '../css/how.css';

const How = () => {
    return (
        <>
            <div className="mainMedium-Container" style={{ backgroundColor: '#F1F5FE' }}>
                <div className="titleAboutUs">
                    <p><b>¿Cómo lo hacemos?</b></p>
                </div>
                <div className="sectionNumbersContainer">
                    <div className="sectionNumbersChild">
                        <div id="pointer"></div>
                        <img src={im1} alt="iconNumbers1" />
                        <p><b>1</b></p>
                        <p className="numberSubtitle"><b>Agrega tu FIEL</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>A través de la firma electrónica, recibimos automáticamente toda la información de tus facturas y cuentas registradas ante el SAT para crear tu perfil contable.</p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={im2} alt="iconNumbers2" />
                        <p><b>2</b></p>
                        <p className="numberSubtitle"><b>Sincroniza tus cuentas bancarias</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Con la sincronización obtenemos tus movimientos bancarios de forma directa o, si lo prefieres, puedes subir tu mismo tus estados bancarios.</p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={im3} alt="iconNumbers3" />
                        <p><b>3</b></p>
                        <p className="numberSubtitle"><b>Aprobación y control</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Elige si quieres preaprobar tus declaraciones antes de que las enviemos. También tienes la opción de automatizar todo el proceso y permitir que hagamos el trabajo por ti.</p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={im4} alt="iconNumbers4" />
                        <p><b>4</b></p>
                        <p className="numberSubtitle" style={{ fontSize: '24px' }}><b>Recibe tus declaraciones mensuales</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 0.5rem' }}>Conciliamos tus ingresos y egresos, deducimos gastos, calculamos los impuestos y presentamos tus declaraciones mensuales y anuales.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default How;