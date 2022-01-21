import React from 'react'
import { Link } from "react-router-dom";
import im1 from "../../../img/home/cutout1.png";
import billing from "../../../img/home/billing-video.png";
import { motion } from "framer-motion";
import { photoAnim } from "../../../animation";
import imPoint from "../../../img/pointAqua.png";
import Easy from './Easy';
import "../style.css";
import ico1 from "../../../img/services/bill/Group 1471.svg";
import ico2 from "../../../img/services/bill/Group 1472.svg";
import ico3 from "../../../img/services/bill/Group 1473.svg";

const Header = () => {
  return (
    <>
      <motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" id="backgroundPay" style={{ background: '#F1F5FE' }}>
        <div className="description-left" style={{ marginRight: '20px' }}>
          <div className="titleAboutUs">
            <p>El sistema de <b>facturación en línea</b> más fácil de usar en México</p>
            <h3 style={{ fontSize: '25px', marginTop: '20px' }}>Genera facturas, cotizaciones, lleva cuentas por cobrar y más. ¡Ideal para PyMEs, empresas de servicios y freelancers!</h3>
          </div>
          <div className="block lg:pt-[50px]">
            <Link to="/prueba-30-dias">
              <div className="btn btn--primary lg:w-[300px] py-[10px]">
                <span className="px-[40px] text-[18px]">Prueba <b>gratis</b> 30 días</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="description-right">
          <img src={im1} alt="im1" style={{ width: "85%" }}></img>
          <img src={imPoint} alt="pointAqua1" id="pointRightBottom"></img>
        </div>
      </motion.div>
      <Easy />
      <div className="main-Container h-screen" id="pointBackgroundRightBottomGreen">
        <div className="flex">
          <div className="lg:w-1/2 lg:mr-[100px]">
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[25px]">
                  <img src={ico1} />
                </div>
                <div>
                  <p className="text-[30px]"><b>Facturación</b></p>
                  <p className="text-[18px]">Aprovecha todas las funcionalidades de nuestro sistema de facturación en línea: edita, timbra, guarda, valida y copia facturas para ahorrar tiempo.</p>
                </div>
              </div>
            </div>
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[25px]" style={{ marginRight: '0' }}>
                  <img src={ico2} style={{ width: '70%', margin: '0' }} />
                </div>
                <div>
                  <p className="text-[30px]"><b>Control de gastos</b></p>
                  <p className="text-[18px]">Carga automáticamente al sistema todas las facturas de tus proveedores, controla tu presupuesto y ahorra dinero.</p>
                </div>
              </div>
            </div>
            <div className="lg:my-[20px]">
              <div className="flex">
                <div className="lg:mx-[25px]">
                  <img src={ico3} />
                </div>
                <div>
                  <p className="text-[30px]"><b>Reportes</b></p>
                  <p className="text-[18px]">Optimiza la toma de decisiones y utiliza la información clave que ponemos a tu alcance. Ventas, facturación, cobranza, pagos y más; todo lo que necesitas para administrar tu negocio efectivamente.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 content-around grid justify-center">
            <img src={billing} alt="billing" className="w-[28rem] h-[28rem] "></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header