import React, { useEffect, useState } from "react";
import Bill from './sections/bill';
import Services from './sections/services';
import Admin from './sections/admin';
import './style.css'

const Plans = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="flex justify-center" style={{ paddingTop: '87px', background: '#fff' }}>
                <div>
                    <div className="text-center text-[35px] pt-10 pb-14">
                        Planes que se acomodan <b>a tu negocio</b>
                    </div>
                    <div>
                        <ul className="flex flex-wrap justify-center border-gray-200">
                            <li className="mr-2">
                                <button onClick={() => setIndex(0)} aria-current="page" className={`inline-block py-4 px-4 mx-1 text-sm text-center md:text-[18px] rounded-t-lg active ${index === 0 ? "bg-green" : "bg-[#F6F9FE] text-[#000] opacity-20"}`}>
                                    <span className="font-medium">Facturación en línea</span>
                                </button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => setIndex(1)} aria-current="page" className="inline-block py-4 px-4 mx-1 text-sm text-center md:text-[18px] bg-[#F6F9FE] rounded-t-lg active">
                                    <span className="font-medium">Servicios contables</span>
                                </button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => setIndex(2)} aria-current="page" className="inline-block py-4 px-4 mx-1 text-sm text-center md:text-[18px] bg-[#F6F9FE] rounded-t-lg active">
                                    <span className="font-medium">Administración de nómina</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ background: '#F5F8FE 0% 0% no-repeat padding-box', paddingTop: '45px', boxShadow: '0px -5px 15px #B9CCEF80' }}>
                {
                    index === 0 ?
                        <Bill /> :
                        index === 1 ?
                            <Services /> :
                            <Admin />
                }
            </div>
        </>
    )
}

export default Plans;