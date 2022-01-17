import React, { useEffect } from 'react';
import im1 from "../../../img/services/payAdmin/cutout3.png";
import pointBlue from "../../../img/pointCeleste.png";
import './payAdmin.css';
import FirstList from './components/firstList';
import SecondList from './components/secondList';
import List from './components/list';
import Automatic from './components/automatic';

const PayAdmin = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="Principal-main-Container" id="backgroundPayAdmin" style={{ paddingTop: '100px', backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p>Calculamos y timbramos la <b>nómina de tu empresa</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }} className="titleResponsive">Somos la mejor plataforma para optimizar tu nomina y administrar a tu equipo. Cumplimos las leyes aplicables y normativas al 100%.</h3>
                    </div>
                    <button className="btnResourcesCeleste">Solicitar prueba</button>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1"></img>
                    <img src={pointBlue} alt="pointBlue" id="pointRightBottom"></img>
                </div>
            </div>
            <FirstList />
            <Automatic />
            <SecondList />
            <List />
        </>
    )
}

export default PayAdmin;