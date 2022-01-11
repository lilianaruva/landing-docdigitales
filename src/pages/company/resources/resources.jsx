import React, { useEffect } from "react";
import im1 from "../../../img/resources/Laptop 04.png"
import ArticleList from "./components/articleList";
import './resources.css';

const Resources = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="Principal-main-Container" id="backgroundResources" style={{ paddingTop: '145px', backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <p><b>¡Hola!</b></p>
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }} className="titleResponsive">Bienvenido al <b>centro de recursos</b> docDigitales. Aquí podrás conocer noticias relevantes, actualizaciones del SAT y temas de interés para la administración en línea de tu negocio.</h3>
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