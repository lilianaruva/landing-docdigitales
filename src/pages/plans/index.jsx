import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import './style.css'

const Plans = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="flex justify-center" style={{paddingTop:'87px',background:'#fff'}}>
                <div>
                    <div className="text-center text-[35px] pt-10 pb-14">
                        Planes que se acomodan <b>a tu negocio</b>
                    </div>
                    <div>
                        <ul className="flex flex-wrap justify-center border-gray-200">
                            <li className="mr-2">
                                <button aria-current="page" className="inline-block py-4 px-4 mx-1 text-sm text-center md:text-[18px] bg-green rounded-t-lg active">
                                    <span className="font-medium text-[#fff]">Facturación en línea</span>
                                </button>
                            </li>
                            <li className="mr-2">
                                <button aria-current="page" className="inline-block py-4 px-4 mx-1 text-sm text-center md:text-[18px] bg-[#F6F9FE] rounded-t-lg active">
                                    <span className="font-medium text-[#000] opacity-20">Servicios contables</span>
                                </button>
                            </li>
                            <li className="mr-2">
                                <button aria-current="page" className="inline-block py-4 px-4 mx-1 text-sm text-center md:text-[18px] bg-[#F6F9FE] rounded-t-lg active">
                                    <span className="font-medium text-[#000] opacity-20">Administración de nómina</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{background:'#F5F8FE 0% 0% no-repeat padding-box',paddingTop:'45px'}}>
                <div className="flex md:px-[50px]" style={{paddingTop:'40px',paddingBottom:'114px'}}>
                    <div className="md:w-1/4 flex justify-center md:px-[10px]">
                        <div className="shadow-lg bg-[#fff] p-[30px]">
                            <p className="text-gray-800 text-xl font-medium mb-2 text-center">
                                Básico
                            </p>
                            <p className="text-gray-900 text-[60px] font-bold text-center">
                                $99
                            </p>
                            <p className="text-gray-600 text-center text-[20px]">
                                <small>+IVA / mes</small>
                            </p>
                            <div className=" flex mt-[27px] justify-center mb-4">
                                <button className="btn btn--primary">
                                    <span className="px-[70px] py-[0px] text-[20px]">Contratar</span>
                                </button>
                            </div>
                            <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">15 timbres</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">1 Usuario incluido</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de facturación</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Cuentas por cobrar</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de cotizaciones</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Complemento de pagos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Gastos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Reportes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Descarga de validación CFDI</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas recurrentes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
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
                        <div className=" bg-[#F6F9FE] p-[30px]" style={{ border:'2px solid #B9CCEF' }}>
                            <p className="text-gray-800 text-xl font-medium mb-2 text-center">
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
                                    <button id="aqua" className="font-medium rounded-full p-3 bg-white px-[70px] py-[7px] text-[20px]">Contratar</button>
                                </Link>
                            </div>
                            <ul className="text-sm text-gray-600 w-full mt-8 mb-8">
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">50 Timbres</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">2 Usuarios incluido</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de facturación</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Cuentas por cobrar</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de cotizaciones</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Complemento de pagos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Gastos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Reportes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Descarga de validación CFDI</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas recurrentes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
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
                        <div className=" bg-[#F6F9FE] p-[30px]" style={{ border:'2px solid #B9CCEF' }}>
                            <p className="text-gray-800 text-xl font-medium mb-2 text-center">
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
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">50 Timbres</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">3 Usuarios incluido</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de facturación</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Cuentas por cobrar</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de cotizaciones</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Complemento de pagos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Gastos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Reportes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Descarga de validación CFDI</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas recurrentes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
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
                        <div className=" bg-[#F6F9FE] p-[30px]" style={{ border:'2px solid #B9CCEF' }}>
                            <p className="text-gray-800 text-xl font-medium mb-2 text-center">
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
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">50 Timbres</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <b className="text-[20px]">5 Usuarios incluido</b>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de facturación</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Cuentas por cobrar</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Módulo de cotizaciones</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Complemento de pagos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Gastos</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Reportes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Descarga de validación CFDI</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
                                    <p className="text-[20px]">Nóminas recurrentes</p>
                                </li>
                                <li className="mb-3 flex items-center">
                                    <FiCheckCircle style={{color:'#2AEAA5'}} size={'16px'} className="mr-2"/>
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
            </div>
        </>
    )
}

export default Plans;