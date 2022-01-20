import React from 'react';
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <div className="planContainer md:px-[50px]">
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className="planCardBlue p-[30px]">
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Emprededor
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $1,000
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]" style={{ lineHeight: 'normal' }}>
                            <small>1 a 30 movimientos bancarios /mes Incluye plataforma de facturación ilimitada</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button id="blue" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px]  containerCardT">
                    <div className="triangleSC">
                        <p>Más + popular</p>
                    </div>
                    <div className="planCardBlue bg-[#fff] p-[30px]" style={{ border: 'none' }}>
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Emprendedor Plus
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $2,000
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]" style={{ lineHeight: 'normal' }}>
                            <small>31 a 100 movimientos bancarios /mes Incluye plataforma de facturación ilimitada</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px] " style={{ backgroundColor: '#0D66CE', color: '#FFFFFF' }}>Contratar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className="planCardBlue p-[30px]">
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Empresarial
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $3,000
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]" style={{ lineHeight: 'normal' }}>
                            <small>101 a 300 movimientos bancarios /mes Incluye plataforma de facturación ilimitada</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button id="blue" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bottomServices">
                    <p><b>¿Tienes más de 300 movimientos bancarios al mes?</b></p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/contacto"><p style={{ marginRight: '4px', color: '#0D66CE', textDecoration: 'underline' }}><b>Contáctanos</b></p></Link>
                        <p>para hacer un paquete acorde a tus necesidades</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Services;