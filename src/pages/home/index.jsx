import React from "react";
import imglap from "../../img/home/african-american-woman-using-online-banking-close-2021-09-24-04-11-48-utc.png"
import imgBusinessW from "../../img/home/young-business-woman-working-laptop-office (3).png"
import imgLeader from "../../img/home/Leadership-Skills-Advance-Your-Career-Hospitality-Industry.png"
import "./css/style.css";
import AboutUs from "./components/aboutUs";
import How from "./components/how";
import Comment from "./components/comment";
import News from "./components/news";
import Ready from "./components/ready";


const Home = () => {
    return (
        <>
            <AboutUs />
            <div className="title-platform">
                <p>Controla todo desde <b>un mismo lugar</b></p>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Factura en línea</b> sin complicaciones</div>
                        <div className="description">Nuestro sistema de facturación esta diseñado especialmente para ti. Ahorra tiempo y dinero usando las múltiples funcionalidades de nuestra plataforma y gestiona tu negocio de la mejor manera.</div>
                        <button>Conoce más</button>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={imglap} alt="im1"></img>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={imglap} alt="im1"></img>
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
                        <button className="blue"> Conoce más</button>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={imgBusinessW} alt="im1"></img>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={imgLeader} alt="im1"></img>
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title">¿Tienes <b>equipo de trabajo?</b></div>
                        <div className="description">También hacemos la Nómina por ti. Solo tienes que monitorear y aprobar asistencias e incidencias, mientras nosotros nos encargamos de todo lo demás: hacemos los cálculos, las declaraciones ante el IMSS y te damos el neto a pagar, para que disperses en un solo clic.</div>
                        <button> Conoce más</button>
                    </div>
                </div>
            </div>
            <How />
            <Comment clientIndex="1" comment="“En Rentrailer estamos muy agradecidos por el trato tan amable y por el seguimiento personalizado que docDigitales tiene hacia nosotros. El servicio contable fue el plus necesario para que sea el paquete ideal, su equipo de Contadores tienen la disposición real de servicio y aclaraciones hasta en los detalles más mínimos. Contentos con el servicio brindado por esta plataforma y su equipo de trabajo.”" client="Lic. Brenda Sánchez O." clientRole="Administración Contable" clientLogo="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
            <News />
            <Ready />
        </>
    )
}

export default Home;