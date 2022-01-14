import React from "react";
import logo1 from "../../../img/home/logo1.png"
import logo2 from "../../../img/home/logo2.png"
import logo3 from "../../../img/home/logo3.png"
import logo4 from "../../../img/home/logo4.png"

const News = () => {
    return (
        <>
            <div className="mainMedium-Container">
                <div className="title-platform">
                    <p style={{fontWeight: '500'}}>Sala de prensa</p>
                </div>
                <div className="News">
                    <img src={logo1} alt="homeNewImage1" className="newItem"/>
                    <img src={logo2} alt="homeNewImage2" className="newItem"/>
                    <img src={logo3} alt="homeNewImage3" className="newItem"/>
                    <img src={logo4} alt="homeNewImage4" className="newItem"/>
                </div>
            </div>
        </>
    )
}

export default News;