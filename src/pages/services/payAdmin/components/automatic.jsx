import React from 'react';
import im1 from "../../../../img/services/payAdmin/Group 1481.svg";
import im2 from "../../../../img/services/payAdmin/Group 1482.svg";
import im3 from "../../../../img/services/payAdmin/Group 1483.svg";
import im4 from "../../../../img/services/payAdmin/Group 1484.svg";
import im5 from "../../../../img/services/payAdmin/Group 1485.svg";
import im6 from "../../../../img/services/payAdmin/Group 1486.svg";
import '../css/automatic.css';

const Automatic = () => {
    return (
        <>
            <div className="mainHow-Container">
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', fontSize: '40px', marginBottom: '3rem' }}>
                    <p>La <b>nómina</b> nunca había sido tan <b>fácil y automática.</b></p>
                </div>
                <div className="automaticRow">
                    <div className="automaticCol">
                        <img src={im1} alt="iconNumbers1" />
                        <p className="titleAutomatic"><b>Deducciones y percepciones</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Calculamos por ti las deducciones y percepciones de tus empleados y te damos el neto a pagar.</p>
                    </div>
                    <div className="automaticCol">
                        <img src={im2} alt="iconNumbers2" />
                        <p className="titleAutomatic"><b>Timbrado automático</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Tus nominas son timbradas ante el SAT de manera semanal o quincenal, automáticamente.</p>
                    </div>
                    <div className="automaticCol">
                        <img src={im3} alt="iconNumbers3" />
                        <p className="titleAutomatic"><b>Dispersión fácil</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Dispersa toda tu nomina en solo clic, sin importar el banco receptor.</p>
                    </div>
                </div>
                <div className="automaticRow">
                    <div className="automaticCol">
                        <img src={im4} alt="iconNumbers1" />
                        <p className="titleAutomatic"><b>Recordatorio de pagos</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>¡No olvides nada! Te enviaremos avisos para recordarte sobre los pagos de seguridad social y de nómina.</p>
                    </div>
                    <div className="automaticCol">
                        <img src={im5} alt="iconNumbers2" />
                        <p className="titleAutomatic"><b>Cambios ante el IMSS</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Hacemos las modificaciones pertinentes ante el IMSS: movimientos, cuotas y demás.</p>
                    </div>
                    <div className="automaticCol">
                        <img src={im6} alt="iconNumbers3" />
                        <p className="titleAutomatic"><b>Histórico de nóminas</b></p>
                        <p style={{ fontSize: '22px', padding: '1rem 1rem' }}>Obtén un reporte del histórico de nominas por colaborador, importe, fechas y más. Toda tu información clave, lista cuando la necesites.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Automatic;