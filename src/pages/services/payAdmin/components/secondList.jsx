import React from 'react';
import im1 from "../../../../img/services/payAdmin/Screen Shot 2021-12-29 at 13.46.23.png";

const SecondList = () => {
    return (
        <>
            <div className="main-Container" style={{ backgroundColor: "#E7F9FA" }}>
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title">Nuestro servicio de <b>administración de nómina</b> incluye:</div>
                        <div className="description secondList">
                            <ul>
                                <li>Cálculos automáticos</li>
                                <li>Control de vacaciones</li>
                                <li>Histórico de nominas</li>
                                <li>Control de todo tu equipo en un solo lugar</li>
                                <li>Reportes</li>
                                <li>Validez ante el SAT</li>
                                <li>Recurrencia de pagos</li>
                                <li>Dispersión en un solo clic</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={im1} alt="im12"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondList;