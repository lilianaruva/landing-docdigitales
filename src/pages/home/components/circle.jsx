import React from "react";
import screen from "../../../img/home/Screen Shot 2021-12-27 at 14.59.15.png"
import icon1 from "../../../img/home/business-23.svg";
import icon3 from "../../../img/home/business-28.svg";

const Circle = () => {
    return (
        <>
            <div className="main-ContainerSection2" id="backgroundHomeSection">
                <div className="descriptionHome-left">
                    <div className="title-platform">
                        <p style={{ fontWeight: '500', width: '600px', textAlign: 'left', fontSize: '30px' }}>Una <b>plataforma</b> robusta y <b>profesional</b> para hacer crecer tu negocio</p>
                    </div>
                    <img src={screen} alt="screenshotHomeSection2" />
                </div>
                <div className="descriptionHome-right">
                    <>
                        <div className="cardColumSection2" id="top">
                            <img src={icon1} alt="icon1Section2" />
                            <p>Facturación en línea</p>
                        </div>
                        <div className="textColumnSection2">
                            <p><b>Facturación</b> en línea</p>
                            <p>Tenemos el sistema de facturación en línea más fácil de usar en todo México.</p>
                        </div>
                        <div className="cardColumSection2">
                            <img src={icon1} alt="icon1Section2" />
                            <p>Facturación en línea</p>
                        </div>
                    </>
                    <div className="columnSection2">
                        <div className="cardColumSection2">
                            <img src={icon1} alt="icon1Section2" />
                            <p>Facturación en línea</p>
                        </div>
                        <div className="cardColumSection2">
                            <img src={icon3} alt="icon1Section2" />
                            <p>Facturación en línea</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Circle;