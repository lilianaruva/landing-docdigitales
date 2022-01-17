import React from 'react';
import im1 from "../../../../img/services/accServices/young-business-woman-working-laptop-office.png";
import '../css/plans.css';

const Plans = () => {
    return (
        <>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={im1} alt="im12"></img>
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Todos los planes</b> incluyen</div>
                        <div className="description">
                            <ul>
                                <li>Un contador experto asignado únicamente para ti.</li>
                                <li>Respaldo de tu información contable de 5 años (según la legislación vigente).</li>
                                <li>Recordatorio de pago de impuestos.</li>
                                <li>Reporte de estados financieros mensuales.</li>
                                <li>Recomendaciones para el correcto cumplimiento fiscal, por industria.</li>
                                <li>Acceso completo a la plataforma docDigitales con funcionalidades complementarias para administrar todo tu negocio.</li>
                                <li>Garantía docDigitales de cumplimiento puntual.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans;