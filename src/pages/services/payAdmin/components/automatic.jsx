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
            <div className="h-screen">
                <div className="text-center md:text-[25px] lg:text-[25px] xl:text-[35px] lg:py-[35px]">
                    La <b>nómina</b> nunca había sido tan <b>fácil y automática</b>
                </div>
                <div className="lg:columns-3 lg:px-[60px] items-start flex">
                    <div className='w-full items-center text-center lg:p-[20px]'>
                        <img src={im1} alt="iconNumbers1" className='mx-auto py-[20px]' />
                        <p className="lg:text-[25px]"><b>Deducciones y percepciones</b></p>
                        <p className='lg:text-[18px] pa-[1em]'>Calculamos por ti las deducciones y percepciones de tus empleados y te damos el neto a pagar.</p>
                    </div>
                    <div className='w-full items-center text-center lg:p-[20px]'>
                        <img src={im2} alt="iconNumbers1" className='mx-auto py-[20px]' />
                        <p className="lg:text-[25px]"><b>Timbrado automático</b></p>
                        <p className='lg:text-[18px] pa-[1em]'>Tus nominas son timbradas ante el SAT de manera semanal o quincenal, automáticamente.</p>
                    </div>
                    <div className='w-full items-center text-center lg:p-[20px]'>
                        <img src={im3} alt="iconNumbers1" className='mx-auto py-[20px]' />
                        <p className="lg:text-[25px]"><b>Dispersión fácil</b></p>
                        <p className='lg:text-[18px] pa-[1em]'>Dispersa toda tu nomina en solo clic, sin importar el banco receptor.</p>
                    </div>
                </div>
                <div className="lg:columns-3 lg:px-[60px] items-start flex">
                    <div className='w-full items-center text-center lg:p-[20px]'>
                        <img src={im4} alt="iconNumbers1" className='mx-auto py-[20px]' />
                        <p className="lg:text-[25px]"><b>Recordatorio de pagos</b></p>
                        <p className='lg:text-[18px] pa-[1em]'>¡No olvides nada! Te enviaremos avisos para recordarte sobre los pagos de seguridad social y de nómina.</p>
                    </div>
                    <div className='w-full items-center text-center lg:p-[20px]'>
                        <img src={im5} alt="iconNumbers1" className='mx-auto py-[20px]' />
                        <p className="lg:text-[25px]"><b>Cambios ante el IMSS</b></p>
                        <p className='lg:text-[18px] pa-[1em]'>Hacemos las modificaciones pertinentes ante el IMSS: movimientos, cuotas y demás.</p>
                    </div>
                    <div className='w-full items-center text-center lg:p-[20px]'>
                        <img src={im6} alt="iconNumbers1" className='mx-auto py-[20px]' />
                        <p className="lg:text-[25px]"><b>Histórico de nóminas</b></p>
                        <p className='lg:text-[18px] pa-[1em]'>Obtén un reporte del histórico de nominas por colaborador, importe, fechas y más. Toda tu información clave, lista cuando la necesites.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Automatic;