import React from 'react';
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const Bill = () => {
    return (
        <>
            <div className="md:px-[50px] planContainer">
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className="planCard bg-[#F6F9FE] p-[30px]">
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Básico
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $99
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <button id="aqua" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                        </div>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">15 timbres</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">1 Usuario incluido</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de facturación</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Cuentas por cobrar</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de cotizaciones</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Complemento de pagos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gastos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Reportes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Descarga de validación CFDI</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas recurrentes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gráfico corporativo</p>
                            </li>
                        </ul>
                        <p className="text-gray-600 text-[23px]">
                            <b>Complementos</b>
                        </p>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">AdminSAT +$99/mes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">Complementos +$999/año</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px] containerCardT">
                    <div className="triangle">
                        <p>Más + popular</p>
                    </div>
                    <div className="planCard bg-[#fff] p-[30px]" style={{ border: 'none' }} >
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Plus
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $199
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button className="btn btn--primary"><span className="px-[70px] py-[0px] text-[20px]">Contratar</span></button>
                            </Link>
                        </div>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">50 Timbres</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">2 Usuarios incluido</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de facturación</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Cuentas por cobrar</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de cotizaciones</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Complemento de pagos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gastos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Reportes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Descarga de validación CFDI</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas recurrentes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gráfico corporativo</p>
                            </li>
                        </ul>
                        <p className="text-gray-600 text-[23px]">
                            <b>Complementos</b>
                        </p>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">AdminSAT +$99/mes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">Complementos +$999/año</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className="planCard bg-[#F6F9FE] p-[30px]" >
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Ilimitado
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $299
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button id="aqua" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                            </Link>
                        </div>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">Timbres ilimitados</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">3 Usuarios incluido</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de facturación</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Cuentas por cobrar</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de cotizaciones</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Complemento de pagos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gastos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Reportes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Descarga de validación CFDI</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas recurrentes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gráfico corporativo</p>
                            </li>
                        </ul>
                        <p className="text-gray-600 text-[23px]">
                            <b>Complementos</b>
                        </p>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">AdminSAT +$99/mes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">Complementos +$999/año</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center md:px-[10px] md:my-[25px]">
                    <div className="planCard bg-[#F6F9FE] p-[30px]" >
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Premium
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $399
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <Link to="/servicios">
                                <button id="aqua" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                            </Link>
                        </div>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">Timbres ilimitados</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <b className="text-[20px]">5 Usuarios incluido</b>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de facturación</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Cuentas por cobrar</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Módulo de cotizaciones</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Complemento de pagos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gastos</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Reportes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Descarga de validación CFDI</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Nóminas recurrentes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <FiCheckCircle style={{ color: '#2AEAA5' }} size={'16px'} className="mr-2" />
                                <p className="text-[20px]">Gráfico corporativo</p>
                            </li>
                        </ul>
                        <p className="text-gray-600 text-[23px]">
                            <b>Complementos</b>
                        </p>
                        <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">AdminSAT +$99/mes</p>
                            </li>
                            <li className="mb-3 flex items-center">
                                <p className="text-[20px]">Complementos +$999/año</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Bill;