import React from "react";
import im1 from "../../../img/company/cutout4.png"
import call from "../../../img/company/business-man-working-at-home-home-office-2021-08-30-06-38-21-utc.png"
import hand from "../../../img/company/pexels-sora-shimazaki-5673488.png"
import team from "../../../img/company/pexels-fauxels-3183150.png"
import heart from "../../../img/company/5.svg"
import logoDD from "../../../img/home/DD_Logo.svg"
import './aboutUs.css';

const AboutUs = () => {
    return (
        <>
            <div className="main-Container" id="backgroundAbout" style={{ paddingTop: '145px' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p>Estamos listos para <b>solucionar tus problemas</b> contables y de administración</p>
                    </div>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1" style={{ width: "85%" }}></img>
                </div>
            </div>
            <div className="mainMedium-Container">
                <img src={logoDD} alt="logoDDAboutUs"/>
                <div className="title-platform">
                    <p style={{fontWeight: '500', width: "1080px", marginTop: "35.68px"}}>Nuestra misión es hacer más <b>sencilla</b> y <b>productiva la vida laboral</b> de nuestros clientes con la mejor atención y el mejor producto.</p>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={team} alt="team"></img>
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Somos una empresa 100% mexicana</b>, fundada en 2009</div>
                        <div className="description">Tenemos una enorme experiencia en la oferta de servicios contables y de administración en línea, pensados especialmente para pymes, emprendedores y freelancers.</div>
                        <div className="description">Nos ocupamos de ser vanguardistas e innovar nuestros servicios y tecnología constantemente, para lograr movernos al ritmo del mercado y satisfacer oportunamente sus nuevas necesidades.</div>
                    </div>
                </div>
            </div>
            <div className="mainMedium-Container" style= {{backgroundColor: '#F1F5FE'}}>
                <div className="title-platform">
                    <p style={{fontWeight: '500'}}>Confiamos en nuestros compañeros, equipo y clientes</p>
                    <p style={{fontSize: '25px'}}>Entendemos que simple es mejor. Damos confianza y recibimos confianza. Somos directos y nos comunicamos de manera honesta. Escuchamos y nos ponemos en los zapatos de nuestros compañeros y clientes. Somos empáticos. Trabajamos con pasión haciendo lo que nos gusta.</p>
                </div>
                <div className="sectionNumbersContainer">
                    <div className="sectionNumbersChild">
                        <img src={heart} alt="iconNumbers1" />
                        <p className="numberSubtitle"><b>SIMPLEZA</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={heart} alt="iconNumbers2" />
                        <p className="numberSubtitle"><b>CONFIANZA</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={heart} alt="iconNumbers3" />
                        <p className="numberSubtitle"><b>HONESTIDAD</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={heart} alt="iconNumbers4" />
                        <p className="numberSubtitle"><b>EMPATÍA</b></p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={heart} alt="iconNumbers4" />
                        <p className="numberSubtitle"><b>PASIÓN</b></p>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="simple-description">
                        <div className="title"><b>Un servicio confiable y profesional</b></div>
                        <div className="description">Nuestra plataforma permite a nuestros emprendedores <b>administrar su negocio fácil y eficientemente.</b></div>
                        <div className="description">Contamos con un <b>equipo de contadores expertos</b>, que se encargan de realizar la contabilidad de nuestros clientes y brindarles una <b>asesoría estratégica</b> para una toma de decisiones más informada.</div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="image">
                        <img src={call} alt="call"></img>
                    </div>
                </div>
            </div>
            <div className="main-Container">
                <div className="description-left">
                    <div className="image">
                        <img src={hand} alt="hand"></img>
                    </div>
                </div>
                <div className="description-right">
                    <div className="simple-description">
                        <div className="title"><b>Estamos siempre contigo</b></div>
                        <div className="description">En docDigitales <b>nos preocupamos por nuestros clientes</b>. Trabajamos todos los días para brindar una <b>atención personalizada</b>, competente y que resuelva oportunamente cualquier duda o eventualidad de los negocios que ya confían en nosotros.</div>
                        <div className="description">Nuestro compromiso es dar <b>soluciones rápidas y ágiles</b>para una experiencia sin fricciones.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;