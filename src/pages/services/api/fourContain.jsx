import React from 'react';
import imglap from "../../../img/services/api/clement-helardot-95YRwf6CNw8-unsplash.png"


const FourContain = () => {
    return (
        <>
            <div className="main-Container" id="pointBackgroundLeftBottom4">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Un servicio contable hecho a la medida</b> del emprendedor</div>
                        <div className="rowContable">
                            <div className="colContable">
                                <p><b>Cambios de SAT ¡Sin complicaciones!</b></p>
                                <p>No necesitas tomar cursos, ni descifrar los cambios del CFDI en el SAT, en docDigitales API lo hacemos por ti.</p>
                            </div>
                            <div className="colContable">
                                <p><b>Plataforma Amigable</b></p>
                                <p>Podrás ver consumo histórico, detalle de peticiones y respuestas, descarga de XML y PDF, entre otras funciones.</p>
                            </div>
                        </div>
                        <div className="rowContable">
                            <div className="colContable">
                                <p><b>Timbra, Cancela y Envía</b></p>
                                <p>Con el API docDigitales podrás timbrar, cancelar y enviar tus CFDIs con la versión 3.3</p>
                            </div>
                            <div className="colContable">
                                <p><b>Descarga, Almacena y Gestiona</b></p>
                                <p>Podrás descargar los CFDI en formato XML y PDF, almacenar peticiones, respuestas y XML, al igual que gestionar múltiples RFC.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-right" >
                    <div className="image">
                        
                        <img src={imglap} alt="im3" style={{ width: '70%' }}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
<img src={pointPurple} alt="pointPurple" id="pointBackgroundLeftBottom" />
*/

export default FourContain;