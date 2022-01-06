import React from 'react'
import { Link } from "react-router-dom";
import im1 from "../../../img/home/cutout1@2x.png";

const Header = () => {
  return (
    <>
      <div className="main-Container h-screen" id="backgroundAboutUs" style={{paddingTop:'0px',background:'#F1F5FE'}}>
        <div className="description-left" style={{marginRight: '20px' }}>
          <div className="titleAboutUs">
            <p>El sistema de <b>facturación en línea</b> más fácil de usar en México</p>
            <h3 style={{fontSize: '25px', marginTop: '20px' }}>Genera facturas, cotizaciones, lleva cuentas por cobrar y más. ¡Ideal para PyMEs, empresas de servicios y freelancers!</h3>
          </div>
          <div className="block lg:pt-[50px]">
            <Link to="/registro">
              <div className="btn btn--primary lg:w-[300px] py-[10px]">
                <span className="px-[40px] text-[18px]">Prueba <b>gratis</b> 30 días</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="description-right">
          <img src={im1} alt="im1" style={{ width: "85%" }}></img>
        </div>
      </div>
      <div className="main-Container h-screen">
        <div className="flex">
          <div className="grid gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            alo
          </div>
          <div className="grid gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            alo
          </div>
        </div>
      </div>
    </>
  )
}

export default Header