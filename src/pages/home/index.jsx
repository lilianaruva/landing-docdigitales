import React, { useEffect } from "react";
import imglap from "../../img/home/african-american-woman-using-online-banking-close-2021-09-24-04-11-48-utc.png"
import imgBusinessW from "../../img/home/young-business-woman-working-laptop-office (3).png"
import imgLeader from "../../img/home/Leadership-Skills-Advance-Your-Career-Hospitality-Industry.png"
import imgLentes from "../../img/home/man-glass.png"
import "./css/style.css";
import AboutUs from "./components/aboutUs";
import Circle from "./components/circle";
import MidCircle from './components/midCircle';
import How from "./components/how";
import Numbers from "./components/numbers";
import Comment from "./components/comment";
import News from "./components/news";
import Ready from "./components/ready";
import Ask from "./components/ask";

//react router
import { Link } from 'react-router-dom';
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
//Points
import pointAqua from "../../img/pointAqua.png";
import pointGreen from "../../img/pointGreen.png";
import pointBlue from "../../img/pointBlue.png";
import pointCeleste from "../../img/pointCeleste.png";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            id="backgroundAboutUs2"
        >
            <AboutUs />
            {
                window.innerWidth >= 1300 ?
                    <Circle /> :
                    <MidCircle />
            }
            <div className="title-platform" style={{ marginTop: '135px' }}>
                <p>Controla todo desde <b>un mismo lugar</b></p>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Factura en línea</b> sin complicaciones</div>
                        <div className="description">Nuestro sistema de facturación esta diseñado especialmente para ti. Ahorra tiempo y dinero usando las múltiples funcionalidades de nuestra plataforma y gestiona tu negocio de la mejor manera.</div>
                        <Link to="/facturacion">
                            <button id="aqua">Conoce más</button>
                        </Link>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={imgLentes} alt="im1"></img>
                        <img src={pointAqua} alt="pointAqua" id="pointRightCenter" />
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={imglap} alt="im1"></img>
                        <img src={pointGreen} alt="pointAqua" id="pointRightTop" />
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title">Impulsa tu negocio con <b>pagos en línea</b></div>
                        <div className="description">Simplifica tus ventas y recibe el pago de tus facturas, de forma fácil y segura dentro de nuestra plataforma. Transacciones sin complicaciones para ti y tus clientes.</div>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title">¡Somos tu <b>nuevo contador!</b></div>
                        <div className="description">Hacemos tu contabilidad y te ofrecemos la plataforma más fácil de usar.</div>
                        <div className="description">Crece tu negocio, mientras trabajamos por ti. Presentamos tus declaraciones, calculamos tus impuestos y te ayudamos a mantener números sanos.</div>
                        <Link to="/servicios-contables">
                            <button id="blue">Conoce más</button>
                        </Link>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={imgBusinessW} alt="im2"></img>
                        <img src={pointBlue} alt="pointBlue" id="pointRightCenter"></img>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={imgLeader} alt="im3"></img>
                        <img src={pointCeleste} alt="pointCeleste" id="pointRightTop" />
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title">¿Tienes <b>equipo de trabajo?</b></div>
                        <div className="description">También hacemos la Nómina por ti. Solo tienes que monitorear y aprobar asistencias e incidencias, mientras nosotros nos encargamos de todo lo demás: hacemos los cálculos, las declaraciones ante el IMSS y te damos el neto a pagar, para que disperses en un solo clic.</div>
                        <Link to="/administracion-nomina">
                            <button> Conoce más</button>
                        </Link>
                    </div>
                </div>
            </div>
            <How />
            <Numbers />
            <Comment />
            <News />
            <Ask />
            <Ready />
        </motion.div >
    )
}

export default Home;