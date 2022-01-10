import React from 'react'
import img from "../../../img/home/a-man-and-a-girl-sit-at-a-desk-in-the-office-and-do-business-analysis-office-work-teamwork-calculate_t20_knpE3r-1.png";
import { FiCheckCircle } from "react-icons/fi";

const Plans = () => {
  return (
    <>
      <div className="h-screen content-center grid justify-center">
        <div className="mx-auto flex">
          <div className="text-center lg:text-[35px] pb-16">
            Todos los <b>planes incluyen</b>
          </div>
        </div>
        <div className="flex">
          <div className="lg:w-1/2 content-around grid justify-center">
            <img src={img} alt="billing" className="w-[28rem] h-[28rem] "></img>
          </div>
          <div className="lg:w-1/2 lg:mr-[100px]">
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[20px] pt-2">
                  <FiCheckCircle style={{color:'#2AEAA5'}} size={'25px'}/>
                </div>
                <div>
                  <p className="text-[24px]"><b>Actualizaciones sin costo</b></p>
                  <p className="text-[18px]">Las actualizaciones en nuestro sistema son totalmente gratuitas para ti.</p>
                </div>
              </div>
            </div>
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[20px] pt-2">
                  <FiCheckCircle style={{color:'#2AEAA5'}} size={'25px'}/>
                </div>
                <div>
                  <p className="text-[24px]"><b>Adminsitración multiempresa</b></p>
                  <p className="text-[18px]">Si administras varias empresas, puedes acceder a todas ellas con un solo usuario y en única plataforma.</p>
                </div>
              </div>
            </div>
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[20px] pt-2">
                  <FiCheckCircle style={{color:'#2AEAA5'}} size={'25px'}/>
                </div>
                <div>
                  <p className="text-[24px]"><b>Migración automatizada</b></p>
                  <p className="text-[18px]">Cambiarte a docDigitales es muy fácil. Solo tienes que cargar tu FIEL y en automático se migran tus facturas, complementos de pago, catalogo de productos, los datos fiscales de tus clientes y servicios con clave SAT.</p>
                </div>
              </div>
            </div>
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[20px] pt-2">
                  <FiCheckCircle style={{color:'#2AEAA5'}} size={'25px'}/>
                </div>
                <div>
                  <p className="text-[24px]"><b>Soporte técnico sin costo</b></p>
                  <p className="text-[18px]">Nos distinguimos por nuestro excelente servicio a clientes. Puedes ponerte en contacto con nosotros en cualquier momento y ponemos a tu disposición nuestro centro de recursos con manuales y artículos de ayuda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plans