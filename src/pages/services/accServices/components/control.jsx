import React from 'react';
import img1 from '../../../../img/services/accServices/Group 1474.svg'
import img2 from '../../../../img/services/accServices/Group 1475.svg'
import img3 from '../../../../img/services/accServices/Group 1476.svg'

const Control = () => {
    return (
        <>
        <div className="mainMedium-Container">
                <div className="title-platform">
                    <p style={{fontWeight: '500'}}>Con DocDigitales tienes el control de todo tu negocio en una única plataforma, <b>de forma simplificada y mucho más práctica</b></p>
                </div>
                <div className="Control">
                    <div className="controlItems">
                        <img src={img1}/>
                        <p>Presentamos tus <b>declaraciones</b> y calculamos tus impuestos</p>
                    </div>
                    <div className="controlItems">
                        <img src={img2}/>
                        <p>Te asignamos un <b>contador senior</b> como gerente de cuenta</p>
                    </div>
                    <div className="controlItems">
                        <img src={img3}/>
                        <p>Obtén <b>reportes financieros</b> mensuales y un plan de <b>sanación contable</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Control;