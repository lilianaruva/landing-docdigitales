import React, { useEffect } from 'react';
import "./css/style.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import InputMask from "react-input-mask";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <hr />
      <div className="lg:flex screen-height">
        <div className="basis-1/2 screen-height justify-items-center content-around whiteSpace">
          <div className="bg-white lg:px-[100px] lg:pt-[3rem]" style={{paddingBottom: "6rem"}}>
            <div className="text-[35px] lg:px-1 leading-6 font-semibold text-gray-900">
              Información de contacto
            </div>
            <div className="text-[28px] font-medium lg:pb-[12px] lg:mt-[45px]">
              Horario de Atención
            </div>
            <ul>
              <li className="text-[22px] font-light lg:pb-[4px] lg:mt-[21px] flex">
                <AiOutlineClockCircle className="text-blue mr-[24px] self-center" /> Lunes a Viernes 9:00am a 7:00pm TC
              </li>
              <li className="text-[22px] font-light lg:pb-[4px] lg:mt-[21px] flex">
                <HiOutlineMail className="text-blue mr-[24px] self-center" /> contacto@docdigitales.com
              </li>
              <li className="text-[22px] font-light lg:pb-[4px] lg:mt-[21px] flex">
                <BsTelephone className="text-blue mr-[24px] self-center" /> 686 520 0523
              </li>
            </ul>
            <div className="text-[28px] font-medium lg:pb-[12px] lg:mt-[52px]">
              ¿Aún no tienes docDigitales?
            </div>
            <div className="text-[22px] font-medium lg:mt-[7px]">
              Prueba la mejor plataforma de Facturación en Línea y Servicios Contables, ideal para PyMes y emprendedores.
              <p className="font-semibold">¡Convéncete de que somos la mejor opción!</p>
            </div>
            <div className="lg:mt-[52px]">
              <button className="btn btn--primary">
                <span className="px-[50px] py-[22px] text-[25px]">Solicitar prueba</span>
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-light-grey justify-items-center content-around whiteSpace" id="backgroundSpot">
          <div className="flex justify-center align-center screen-height" >
            <div className="lg:px-[100px] lg:pt-[3rem]">
              <div className="text-[35px] lg:px-1 leading-6 font-semibold text-gray-900">
                Contacta a soporte
              </div>
              <div className="lg:py-[20px]"></div>
              <div className="lg:pt-[20px]">
                <label className="block">
                  <span className="text-blue">Nombre</span>
                  <input className="mt-1 block lg:w-[400px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
                </label>
              </div>
              <div className="lg:pt-[20px]">
                <label className="block">
                  <span className="text-blue">Correo</span>
                  <input className="mt-1 block lg:w-[400px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" placeholder="ejemplo@gmail.com" />
                </label>
              </div>
              <div className="lg:pt-[20px]">
                <label className="block">
                  <span className="text-blue">Número de teléfono</span>
                  <InputMask className="mt-1 block lg:w-[400px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" mask="999 999 9999" placeholder="_ _ _  _ _ _  _ _ _ _" />
                </label>
              </div>
              <div className="lg:pt-[20px]">
                <label className="block">
                  <span className="text-blue">¿En qué podemos ayudarte?</span>
                  <textarea className="mt-1 block lg:w-[400px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" type="textarea" placeholder="Escribe tu pregunta" rows="3" />
                </label>
              </div>
              <div className="lg:mt-[52px]" style={{marginBottom: "6rem"}}>
                <button className="btn btn--blue">
                  <span className="px-[90px] py-[22px] text-[22px]">Enviar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support