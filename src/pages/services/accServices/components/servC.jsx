import React from 'react';
import im3 from "../../../../img/services/accServices/headshot-of-a-proffessional-man_t20_Xxkovl.png";
import icon1 from "../../../../img/services/accServices/9713 - Documents Management.svg";
import icon2 from "../../../../img/services/accServices/9716 - Working Time.svg";
import icon3 from "../../../../img/services/accServices/cloud-service.png"
import icon4 from "../../../../img/services/accServices/INSURANCE.svg";
import pointBlue from "../../../../img/pointBlue.png";

const ServC = () => {
    return (
        <>
            <div className="main-Container">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Un servicio contable hecho a la medida</b> del emprendedor</div>
                        <div className="rowContable">
                            <div className="colContable">
                                <div className="imgCol"><img src={icon1} alt="icon1" /></div>
                                <p><b>Automático</b></p>
                                <p>Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador. ¡El proceso es automático!</p>
                            </div>
                            <div className="colContable">
                                <div className="imgCol"><img src={icon2} alt="icon2" /></div>
                                <p><b>Oportuno</b></p>
                                <p>Comunicación fácil y efectiva con tu contador personal en línea.</p>
                            </div>
                        </div>
                        <div className="rowContable">
                            <div className="colContable">
                                <div className="imgCol"><img src={icon3} alt="icon3" /></div>
                                <p><b>Servicio en la nube</b></p>
                                <p>Información contable en tiempo real. Disponible en todo momento y en cualquier lugar.</p>
                            </div>
                            <div className="colContable">
                                <div className="imgCol"><img src={icon4} alt="icon4" /></div>
                                <p><b>Confiable</b></p>
                                <p>Todos los cálculos son hechos por un contador experto. Un servicio profesional para tu negocio.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={im3} alt="im3"></img>
                        <img src={pointBlue} alt="pointBlue" id="pointLeft"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServC;