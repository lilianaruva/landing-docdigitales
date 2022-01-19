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
							<Link to="/">
								<img src={logo} className="self-center" style={{ width: "260px" }} alt="DD_Logo" />
							</Link>
						</div>
					</div>
					<div className="shadow-[0px_3px_20px_#B9CCEF80] px-12 py-8 mb-4 lg:w-[1000px]" style={{ background: 'white' }}>
						<div className="flex">
							<div className="lg:w-[450px] lg:px-[50px] lg:pt-[32px]">
								<div className="lg:text-[32px]">
									Bienvenido/a
								</div>
								<div className="lg:text-[18px] pt-[34px]">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae exercitationem et minus eos nulla distinctio ex nesciunt eius, reiciendis, impedit repellendus, sit fugit. Alias quasi, et hic qui vel assumenda!
								</div>
							</div>
							<div className="lg:pr-[50px] lg:pl-[80px] lg:pt-[22px] justify-center">
								<div className="flex">
									<label className="block">
										<span className="text-green">Correo electrónico</span>
										<input className="mt-1 block bg-[#DDE6F6] lg:w-[300px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" placeholder="nombre@gmail.com" type="email" />
									</label>
								</div>
								<div className="flex pt-[20px]">
									<label className="block">
										<span className="text-green">Constraseña</span>
										<input className="mt-1 block bg-[#DDE6F6] lg:w-[300px] px-4 py-2 rounded hover:shadow-md focus:outline-0 focus:shadow-lg active:shadow-lg" placeholder="Ingresa tu contraseña" type="email" />
									</label>
								</div>
								<div className="flex pt-[30px]">
									<div className="block">
										<Link to="/registro">
											<div className="btn btn--primary lg:w-[300px] py-[10px]">
												<span className="px-[90px] text-[18px]">Ingresar</span>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Link to="/registro">
						<div className="lg:text-[18px] pt-[34px] text-center">
							¿Aún no tienes una cuenta? Crea una
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ServiceTest;
