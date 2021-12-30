import React from "react";
import im1 from "../../img/good-business-talk-2021-09-01-10-50-33-utc.png";
import "./css/style.css";

const Home = () =>{
    return(
        <>
        <div className="main-Container">
            <div className="description-left">
                <h1>Crece tu negocio con la mejor plataforma de Facturación en Línea y Servicios Contables</h1>
                <p>Hacemos tu contabilidad y te ofrecemos el sistema mas facil de usar, ideal para Pymes y Emprendedores.</p>
            </div>
            <div>
                <img src={im1} alt="im1"></img>
            </div>
        </div>
        <div className="main-Container">
        <div className="image">
                <img src={im1} alt="im1"></img>
            </div>
            <div className="description-right">
                <h1>Hola desde home lado izq</h1>
            </div>
        </div>
        </>
    )
}

export default Home;