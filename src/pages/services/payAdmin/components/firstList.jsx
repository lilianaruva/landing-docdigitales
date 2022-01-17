import React from 'react';
import im1 from "../../../../img/services/payAdmin/Screen Shot 2021-12-29 at 14.37.11.png";

const FirstList = () => {
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
                        <div className="description firstList">
                            <ul>
                                <li>Nos encargamos del cálculo y timbrado de tu nomina. <b>Tu solo tienes que registrar las incidencias de tus colaboradores.</b></li>
                                <li><b>Administra las vacaciones</b> de tu personal desde la plataforma.</li>
                                <li><b>Con un solo clic dispersa la nómina</b> de todo tu equipo de manera semanal o quincenal.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default FirstList;