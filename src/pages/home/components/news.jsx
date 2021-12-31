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
                    <img src={logo1}/>
                    <img src={logo2}/>
                    <img src={logo3}/>
                    <img src={logo4}/>
                </div>
            </div>
        </>
    )
}

export default News;