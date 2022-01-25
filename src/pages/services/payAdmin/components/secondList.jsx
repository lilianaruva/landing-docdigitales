import React from 'react';
import im1 from "../../../../img/services/payAdmin/Screen Shot 2021-12-29 at 13.46.23.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const SecondList = () => {
    return (
        <>
            <div className="flex lg:columns-2 h-screen items-center" style={{ backgroundColor: "#E7F9FA" }}>
                <div className="lg:w-5/12 lg:px-[80px]">
                    <div className="lg:text-[25px] xl:text-[32px] leading-tight pb-[20px]">Conoce nuestro servicio de <b>cálculo y timbrado de nómina</b></div>
                    <div className="text-[22px]">
                        <ul>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Cálculos automáticos
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Control de vacaciones
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Histórico de nominas
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Control de todo tu equipo en un solo lugar
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Reportes
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Validez ante el SAT
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Recurrencia de pagos
                            </li>
                            <li className='flex items-center py-[5px]'> 
                                <MdKeyboardArrowRight style={{ fontSize:'22px', color:'#13BFC9' }}/> Dispersión en un solo clic
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-7/12">
                    <img src={im1} alt="im12" style={{ right:'-20%', float:'right'}}></img>
                </div>
            </div>
        </>
    )
}

export default SecondList;