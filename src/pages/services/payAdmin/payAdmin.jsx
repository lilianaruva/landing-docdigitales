import React, { useEffect } from 'react';
import im1 from "../../../img/services/payAdmin/cutout3.png";
import pointBlue from "../../../img/pointCeleste.png";
import './payAdmin.css';
import FirstList from './components/firstList';
import SecondList from './components/secondList';
import List from './components/list';
import Automatic from './components/automatic';
//React router
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../../../animation";

const PayAdmin = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show">
            <motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" id="backgroundPayAdmin" style={{  backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p>Calculamos y timbramos la <b>nómina de tu empresa</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }} className="titleResponsive">Somos la mejor plataforma para optimizar tu nomina y administrar a tu equipo. Cumplimos las leyes aplicables y normativas al 100%.</h3>
                    </div>
                    <Link to="/planes">
                        <button className="btnResourcesCeleste">Solicitar prueba</button>
                    </Link>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1"></img>
                    <img src={pointBlue} alt="pointBlue" id="pointRightBottom"></img>
                </div>
            </motion.div>
            <FirstList />
            <Automatic />
            <SecondList />
            <List />
        </motion.div>
    )
}

export default PayAdmin;