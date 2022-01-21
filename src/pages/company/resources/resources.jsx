import React, { useEffect } from "react";
import im1 from "../../../img/resources/lap.png"
import ArticleList from "./components/articleList";
import './resources.css';
//React router
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../../../animation";

const Resources = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
//    <motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" id="backgroundResources" style={{ backgroundColor: '#F1F5FE' }}>

    return (
        <motion.div exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show">
            <motion.div variants={photoAnim} className="Principal-main-Container whiteSpace" style={{ backgroundColor: '#F1F5FE' }}>
                <div className="description-left" style={{ marginRight: '20px' }}>
                    <div className="titleAboutUs">
                        <h3 style={{ fontSize: '25px', marginTop: '20px' }} className="titleResponsive">Bienvenido al <b>centro de recursos</b> docDigitales. Aquí podrás conocer noticias relevantes, actualizaciones del SAT y temas de interés para la administración en línea de tu negocio.</h3>
                    </div>
                    <Link to="/planes">
                        <button className="btnResourcesBlue">Mas información</button>
                    </Link>
                </div>
                <div className="description-right">
                    <img src={im1} alt="im1"></img>
                </div>
            </motion.div>
            <div className="main-ContainerArticle">
                <ArticleList />
            </div>
        </motion.div>
    )
}

export default Resources;