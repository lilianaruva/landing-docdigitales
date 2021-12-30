import React from 'react';
import "./css/style.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Support = () => {
  return (
    <div className="max-h-screen">
      <div className="md:flex justify-center items-center">
        <div className="basis-1/2">
          <div className="bg-white md:pl-[141px] md:pt-[50px]">
            <div className="">
              <div className="text-[35px] md:px-1 leading-6 font-semibold text-gray-900">
                Información de contacto
              </div>
              <div className="text-[28px] font-medium md:pb-[12px] md:mt-[45px]">
                Horario de Atención
              </div>
              <ul>
                <li className="text-[22px] font-light md:pb-[4px] md:mt-[21px] flex">
                  <AiOutlineClockCircle className="text-blue mr-[24px] self-center"/> Lunes a Viernes 9:00am a 7:00pm TC
                </li>
                <li className="text-[22px] font-light md:pb-[4px] md:mt-[21px] flex">
                  <HiOutlineMail className="text-blue mr-[24px] self-center"/> contacto@docdigitales.com
                </li>
                <li className="text-[22px] font-light md:pb-[4px] md:mt-[21px] flex">
                  <BsTelephone className="text-blue mr-[24px] self-center"/> 686 520 0523
                </li>
              </ul>
              <div className="text-[28px] font-medium md:pb-[12px] md:mt-[52px]">
                ¿Aún no tienes docDigitales?
              </div>
              <div className="text-[22px] font-medium md:mt-[7px]">
                Prueba la mejor plataforma de Facturación en Línea y Servicios Contables, ideal para PyMes y emprendedores.
                <p className="font-semibold">¡Convéncete de que somos la mejor opción!</p>
              </div>
              <div className="md:mt-[52px]">
                <button className="btn btn--primary">
                  <span className="px-[88px] py-[22px] text-[25px]">Solicitar prueba</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">03</div>
      </div>
    </div>
  )
}

export default Support