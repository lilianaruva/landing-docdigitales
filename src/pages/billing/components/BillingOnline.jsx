import React from 'react'
import img from "../../../img/home/10@2x.png";
import appStore from "../../../img/home/apple-store.png";
import playStore from "../../../img/home/google-play-badge.png";

const BillingOnline = () => {
  return (
    <>
      <div className="h-[450px]" style={{ background:'rgba(42, 234, 165,0.3)' }}>
        <div className="">
          <div className="flex space-between">
            <div className="w-2/5 flex">
              <div className="flex mx-auto items-center">
                <div className="mx-[80px]">
                  <div className="lg:text-[35px]">
                    <b>Factura en línea</b> desde cualquier lugar
                  </div>
                  <div className="lg:text-[18px]">
                    Descarga la app móvil y lleva tu facturación en línea a cualquier parte.
                  </div>
                  <div className="flex pt-[47px]">
                    <img src={appStore} alt="appStore" className="w-[180px] px-[5px]"></img>
                    <img src={playStore} alt="playStore" className="w-[180px] px-[5px]"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 flex items-end justify-end">
              <img src={img} alt="phones" className="h-[450px]"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillingOnline
