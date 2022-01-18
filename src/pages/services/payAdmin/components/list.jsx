import React from 'react';
import '../css/list.css';
import im1 from "../../../../img/services/payAdmin/image1.png";

const List = () => {
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
                        <div className="title">Nuestro servicio de <b>administración de nómina</b> incluye:</div>
                        <div className="description adminList">
                            <ul>
                                <li>Cálculo mensual del SUA.</li>
                                <li>Cálculos extraordinarios.</li>
                                <li>Recordatorio de pagos de seguridad social y nómina.</li>
                                <li>Modificación de sueldos ante el IMSS.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List;