import React from 'react';

const Admin = () => {
    return (
        <>
            <div className="planContainer">
                <div className="md:w-1/4 flex justify-center md:px-[10px]">
                    <div className="planCardBlue bg-[#fff] p-[30px]" style={{ border: 'none' }}>
                        <p className="text-gray-800 text-xl font-medium mb-2 text-center" style={{ fontWeight: '600' }}>
                            Administración de nómina
                        </p>
                        <p className="text-gray-900 text-[60px] font-bold text-center">
                            $150
                        </p>
                        <p className="text-gray-600 text-center text-[20px]">
                            <small>+IVA / mes</small>
                        </p>
                        <p className="text-gray-600 text-center text-[20px]" style={{ lineHeight: 'normal' }}>
                            <small>por colaborador</small>
                        </p>
                        <div className=" flex mt-[27px] justify-center mb-4">
                            <button className="btn btn--primary" style={{ backgroundColor: '#13BFC9', color: '#FFFFFF' }}>
                                <span className="px-[70px] py-[0px] text-[20px]">Contratar</span>
                            </button>
                        </div>
                    </div>
                    <div className="adminListPlans">
                        <p><b>¿Qué incluye nuestro servicio</b> de administración de nómina?</p>
                        <div className="itemListPlans adminList">
                            <ul>
                                <li>Cálculo y timbrado de nómina.</li>
                                <li>Dispersión de nómina a todo tu equipo en un solo clic.</li>
                                <li>Movimientos ante IDSE.</li>
                                <li>Cálculo mensual del SUA.</li>
                                <li>Cálculos extraordinarios.</li>
                                <li>Recordatorio de pagos de seguridad social y nómina.</li>
                                <li>Modificación de sueldos ante el IMSS.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Admin;