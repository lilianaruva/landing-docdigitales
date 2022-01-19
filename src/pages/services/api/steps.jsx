import React from 'react';
import step1 from "../../../img/services/api/Group 1487.svg"
import step2 from "../../../img/services/api/Group 1488.svg"
import step3 from "../../../img/services/api/Group 1489.svg"
import step4 from "../../../img/services/api/Group 1490.svg"
import step5 from "../../../img/services/api/Group 1491.svg"


const Steps = () => {
    return (
        <>
            <div className="mainMedium-Container">
                <div className="title-platform">
                    <p style={{ fontWeight: '500' }}>¿Cuáles son los pasos para <b>integrarte a docDigitales API?</b></p>
                </div>
                <div className="StepContainer">
                    <div className="stepCardContainer">
                        <img src={step1} alt="homeNewImage1" />
                        <p style={{ color: '#00000080' }}>Paso 1</p>
                        <p style={{ width: '100px', fontWeight: '500' }}>Regístrate</p>
                    </div>
                    <div className="stepCardContainer">
                        <img src={step2} alt="homeNewImage2" />
                        <p style={{ color: '#00000080' }}>Paso 2</p>
                        <p style={{ width: '100px', fontWeight: '500' }}>Obtén credenciales</p>
                    </div>
                    <div className="stepCardContainer">
                        <img src={step3} alt="homeNewImage3" />
                        <p style={{ color: '#00000080' }}>Paso 3</p>
                        <p style={{ width: '100px', fontWeight: '500' }}>Revisa la documentación</p>
                    </div>
                    <div className="stepCardContainer">
                        <img src={step4} alt="homeNewImage4" />
                        <p style={{ color: '#00000080' }}>Paso 4</p>
                        <p style={{ width: '100px', fontWeight: '500' }}>Intégrate y haz pruebas</p>
                    </div>
                    <div className="stepCardContainer">
                        <img src={step5} alt="homeNewImage4" />
                        <p style={{ color: '#00000080' }}>Paso 5</p>
                        <p style={{ width: '100px', fontWeight: '500' }}>Contrata</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps;