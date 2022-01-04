import React from "react";
import im1 from "../../../img/resources/Laptop 04.png"
import ArticleList from "./articleList";
import './resources.css';

const Resources = () => {
    return (
        <>
            <div className="main-Container" id="backgroundResources" style={{ paddingTop: '145px', backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p><b>¡Hola!</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }}>Bienvenido al <b>centro de recursos</b> docDigitales. Aquí podrás conocer noticias relevantes, actualizaciones del SAT y temas de interés para la administración en línea de tu negocio.</h3>
                    </div>
                    <button className="btnResourcesBlue">Mas información</button>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1"></img>
                </div>
            </div>
            <div className="main-ContainerArticle">
                <ArticleList />
            </div>
        </>
    )
}

export default Resources;