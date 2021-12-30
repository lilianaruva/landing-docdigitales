import React from "react";
import im1 from "../../img/home/good-business-talk-2021-09-01-10-50-33-utc.png";
import "./css/style.css";
import AboutUs from "./components/aboutUs";

const Home = () => {
    return (
        <>
            <AboutUs />
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