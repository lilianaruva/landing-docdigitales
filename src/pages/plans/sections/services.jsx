import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <div className="flex md:px-[50px]" style={{ paddingTop: '40px', paddingBottom: '114px' }}>
                <div className="md:w-1/4 flex justify-center md:px-[10px]">
                    <div className="shadow-lg bg-[#fff] p-[30px]">
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center">
                            Emprededor
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $1,000
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>1 a 30 movimientos bancarios /mes Incluye plataforma de facturación ilimitada</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <button className="btn btn--primary">
                                <span className="px-[70px] py-[0px] text-[20px]">Contratar</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className=" bg-[#F6F9FE] p-[30px]" style={{ border: '2px solid #B9CCEF' }}>
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center">
                            Emprendedor Plus
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $2,000
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>31 a 100 movimientos bancarios /mes Incluye plataforma de facturación ilimitada</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button id="blue" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className=" bg-[#F6F9FE] p-[30px]" style={{ border: '2px solid #B9CCEF' }}>
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center">
                            Empresarial
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $3,000
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>101 a 300 movimientos bancarios /mes Incluye plataforma de facturación ilimitada</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button id="blue" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Services;