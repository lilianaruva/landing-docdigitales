import React from "react";
import screen from "../../../img/home/Screen Shot 2021-12-27 at 14.59.15.png"
import icon1 from "../../../img/home/business-23.svg";
import icon3 from "../../../img/home/business-28.svg";

const Circle = () => {
    return (
        <>
            <div className="main-ContainerSection2" id="backgroundHomeSection">
                <div className="descriptionHome-left">
                    <div className="title-platformCircle">
                        <p style={{ fontWeight: '500', textAlign: 'left' }}>Una <b>plataforma</b> robusta y <b>profesional</b> para hacer crecer tu negocio</p>
                    </div>
                    <img src={screen} alt="screenshotHomeSection2" />
                </div>
                <div className="descriptionHome-right">
                    <div className="cardColumSection2" id="first">
                        <img src={icon1} alt="icon1Section2" />
                        <p>Facturación en línea</p>
                    </div>
                    <div className="textColumnSection2">
                        <p className="responsiveTitleCircle"><b>Facturación</b> en línea</p>
                        <p className="responsiveSubtitleCircle">Tenemos el sistema de facturación en línea más fácil de usar en todo México.</p>
                    </div>
                    <div className="cardColumSection2" id="second">
                        <img src={icon3} alt="icon1Section2" />
                        <p>Facturación en línea</p>
                    </div>
                    <div className="cardColumSection2" id="third">
                        <img src={icon3} alt="icon1Section2" />
                        <p>Facturación en línea</p>
                    </div>
                    <div className="cardColumSection2" id="fourth">
                        <img src={icon1} alt="icon1Section2" />
                        <p>Facturación en línea</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Circle;