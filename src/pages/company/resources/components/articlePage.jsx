import React, { useEffect } from "react";
import ArticleBottom from "./articleBottom";
import Article01 from "./articles/01";
import Article02 from "./articles/02";
import Article03 from "./articles/03";
import Article04 from "./articles/04";
import Article05 from "./articles/05";
import Article06 from "./articles/06";
import Article07 from "./articles/07";
import Article08 from "./articles/08";
import Article09 from "./articles/09";
import Article10 from "./articles/10";
import SocialMedia from "./articles/socialMedia";
import { useLocation } from "react-router-dom";
import '../resources.css'

const ArticlePage = ({ }) => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {console.log(location.pathname)}
            <div className="mainMedium-Container" style={{ backgroundColor: '#DDE6F699' }}>
            </div>
            <div className="main-ContainerArticle" style={{ marginTop: '134px' }}>
                <SocialMedia />
                {
                    location.pathname === '/recursos/articulo-nuevos-cambios-para-cfdi-factura-4-0/' ?
                        <Article01 /> :
                        location.pathname === '/recursos/articulo-manual-del-complemento-de-carta-porte/' ?
                            <Article02 /> :
                            location.pathname === '/recursos/articulo-como-generar-mi-constancia-de-situacion-fiscal-en-el-sat/' ?
                                <Article03 /> :
                                location.pathname === '/recursos/articulo-conoce-cuando-es-necesario-el-complemento-carta-porte-en-tus-facturas/' ?
                                    <Article04 /> :
                                    location.pathname === '/recursos/articulo-como-presento-mi-aviso-de-actividades-economicas-en-el-sat/' ?
                                        <Article05 /> :
                                        location.pathname === '/recursos/articulo-renovacion-de-e-firma/' ?
                                            <Article06 /> :
                                            location.pathname === '/recursos/articulo-agenda-una-cita-y-obten-tu-e-firma-por-primera-vez/' ?
                                                <Article07 /> :
                                                location.pathname === '/recursos/articulo-como-realizo-el-cambio-de-domicilio-fiscal-en-el-sat/' ?
                                                    <Article08 /> :
                                                    location.pathname === '/recursos/articulo-personas-fisicas-podran-presentar-declaracion-anual-hasta-mayo/' ?
                                                        <Article09 /> :
                                                        <Article10 />

                }
            </div>
            <div className="mainMedium-Container" style={{ borderTop: '2px solid #DDE6F699' }}>
                <div className="title-platform">
                    <p style={{ fontWeight: 'bold', margin: '0' }}>Articulos relacionados</p>
                </div>
                <ArticleBottom />
            </div>
        </>
    )
}

export default ArticlePage;