import React from 'react'
// import { Link } from "react-router-dom";
import img from "../../../img/home/Screen Shot 2021-12-27 at 14.59.15@2x.png";

const Functionalities = () => {
  return (
    <>
      <div className="h-screen content-center grid justify-center" id="backgroundAboutUs" style={{paddingTop:'0px',background:'#F1F5FE'}}>
        <div className="mx-auto flex">
          <div className="text-center lg:text-[35px] pb-16">
            Conoce <b>todas las funcionalidades</b> de nuestra plataforma
          </div>
        </div>
        {/* <div className="flex">
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
        </div> */}
        <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
          <li className="mr-2">
              <a href="#" aria-current="page" className="inline-block bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 dark:text-blue-500">Profile</a>
          </li>
          <li className="mr-2">
              <a href="#" className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
          </li>
          <li className="mr-2">
              <a href="#" className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
          </li>
          <li className="mr-2">
              <a href="#" className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
          </li>
          <li>
              <a className="inline-block text-gray-400 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-500 cursor-not-allowed">Disabled</a>
          </li>
      </ul>
        <div className="flex items-center">
          <div className="lg:w-1/2 content-center lg:mx-[80px]">
            <b className="text-[35px]">Facturación</b>
            <p className="text-[20px]">Realiza tu facturación electrónica fácil y rápidamente. Con docDigitales puedes generar, editar, copiar y guardar facturas para trabajar siempre a tu ritmo. Además, puedes usar la función de facturación recurrente para generar tus cuentas periódicas automáticamente.</p>
          </div>
          <div className="lg:w-1/2 content-center lg:mx-[80px]">
            <img src={img} alt="img" className="w-max"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Functionalities