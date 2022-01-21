import React from 'react'
import img from "../../../img/home/Screen Shot 2021-12-27 at 14.59.15@2x.png";
//import img from "../../../img/services/bill/screen.png";

const Functionalities = () => {
  return (
    <>
      <div className="h-screen content-center grid justify-center" id="backgroundAboutUs" style={{ paddingTop: '0px', background: '#F1F5FE' }}>
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
        <div id="backgroundPayImage">
          <div className="bg-white flex pb-14">
            <nav className="tabs flex flex-col sm:flex-row mx-auto">
              <button data-target="panel-1" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-green-500" style={{ borderBottom: "1px solid #2AEAA5", backgroundColor: "#F4FEFA" }}>
                Facturación
              </button>
              <button data-target="panel-2" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Pagos en línea
              </button>
              <button data-target="panel-3" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Cotizaciones
              </button>
              <button data-target="panel-3" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Descarga de CFDI
              </button>
              <button data-target="panel-3" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Facturas
              </button>
              <button data-target="panel-3" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Catálogo de productos
              </button>
              <button data-target="panel-3" className="tab text-gray-600 py-2 px-8 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Gastos
              </button>
              <button data-target="panel-3" className="tab text-gray-600 py-2 px-10 block hover:text-blue-500 focus:outline-none" style={{ backgroundColor: "#FFFFFF" }}>
                Reportes
              </button>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="lg:w-1/2 content-center lg:mx-[80px]">
              <b className="text-[35px]">Facturación</b>
              <p className="text-[20px]">Realiza tu facturación electrónica fácil y rápidamente. Con docDigitales puedes generar, editar, copiar y guardar facturas para trabajar siempre a tu ritmo. Además, puedes usar la función de facturación recurrente para generar tus cuentas periódicas automáticamente.</p>
            </div>
            <div className="lg:w-1/2 content-center lg:mx-[80px]">
              <img src={img} alt="img" className="w-max" ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Functionalities