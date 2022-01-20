import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/home/DD_Logo.svg"
import './style.css'

const ServiceTest = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className="h-screen service-background-color">
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center lg:pt-[180px]">
					<div className="lg:mx-[100px] xl:mx-[138px]">
						<div className="">
							<Link to="/">
								<img src={logo} style={{ width: "239px" }} alt="DD_Logo" />
							</Link>
						</div>
						<div className="lg:text-[32px] lg:pt-[30px]">
							<b>Regístrate e inicia tu prueba</b> para conocer la mejor plataforma de facturación, servicios contables y nomina en línea
						</div>
						<div className="lg:text-[25px] lg:pt-[25px]">
							<p>Nos alegra que quieras formar parte de la experiencia DocDigitales, déjanos tus datos y uno de nuestros ejecutivos se pondrá en contacto contigo para comenzar a trabajar en tu negocio.</p>
						</div>
					</div>
					<div>
						<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mr-[60px]">
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">Nombre</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">Apellido</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">Correo electrónico</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" type="email" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">Número de teléfono</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">Nombre de tu empresa</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">RFC de tu empresa</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">No. de empleados</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" type="number" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">Industria (a la que pertenece tu empresa)</span>
									<input className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
							<div className="md:mx-[15px] md:py-[10px]">
								<label className="w-full">
									<span className="text-blue">¿En que servicios estás interesado</span>
									<select className="mt-1 block w-full bg-[#fff] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" />
								</label>
							</div>
						</div>
						<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-[25px] mr-[100px]">
							<div className="w-full md:mx-[15px] md:py-[10px]">
								<button className="w-full mr-[15px]">
									<div className="btn btn--blue">
										<span className="px-[90px] py-[15px] text-[18px] text-center">Enviar</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceTest;
