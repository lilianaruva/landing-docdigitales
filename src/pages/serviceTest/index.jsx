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
			<div className="flex h-screen service-background-color" id="greenSpot">
				<div className="m-auto">
					<div className="flex py-[30px]">
						<div className="m-auto">
							<img src={logo} className="self-center" style={{ width: "260px" }} alt="DD_Logo" />
						</div>
					</div>
					<div className="shadow-[0px_3px_20px_#B9CCEF80] px-12 py-8 mb-4 lg:w-[1000px]" style={{ background: 'white' }}>
						<div className="flex">
							<div className="lg:w-[450px] lg:px-[50px] lg:pt-[32px]">
								<div className="lg:text-[32px]">
									Regístrate y <b>Prueba Gratis 30 días el Plan Premium</b> con Facturación ilimitada
								</div>
								<div className="lg:text-[18px] pt-[34px]">
									No te preocupes, no te pediremos los datos de tu tarjeta de crédito, ni hay contrato forzoso.
								</div>
							</div>
							<div className="lg:pr-[50px] lg:pl-[80px] lg:pt-[22px] justify-center">
								<div className="flex">
									<label className="block">
										<span className="text-green">Correo electrónico</span>
										<input className="mt-1 block bg-[#DDE6F6] lg:w-[300px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" placeholder="andrea@gmail.com" type="email" />
									</label>
								</div>
								<div className="flex pt-[20px]">
									<label className="block">
										<span className="text-green">Constraseña</span>
										<input className="mt-1 block bg-[#DDE6F6] lg:w-[300px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" placeholder="Ingresa tu contraseña" type="email" />
									</label>
								</div>
								<div className="flex pt-[20px]">
									<label className="block">
										<span className="text-green">RFC</span>
										<input className="mt-1 block bg-[#DDE6F6] lg:w-[300px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" placeholder="Ingresa tu RFC" type="email" />
									</label>
								</div>
								<div className="flex pt-[20px] text-[15px] opacity-20">
									<a href="javascript:void(0)">¿Cuentas con un código de promoción?</a>
								</div>
								<div className="flex pt-[30px]">
									<div className="block">
										<Link to="/registro">
											<div className="btn btn--primary lg:w-[300px] py-[10px]">
												<span className="px-[90px] text-[18px]">Regístrate</span>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:text-[14px] pt-[34px] text-center opacity-20 lg:mx-[50px]">
							Términos y condiciones | Niveles de Servicio | Políticas de Privacidad Al registrarte aceptas los términos y condiciones
						</div>
					</div>
					<Link to="/login">
						<div className="lg:text-[18px] pt-[34px] text-center">
							¿Ya estás registrado? Ingresa al sistema
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ServiceTest;
