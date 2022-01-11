import React from 'react';
import { IconContext } from "react-icons";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => {
    return (
        <>
            <div className="social-mediaContainer">
                <div className="social-mediaItem">
                    <IconContext.Provider value={{ color: "#0D66CE", size: "38px" }}>
                        <FaFacebookSquare />
                    </IconContext.Provider>
                </div>
                <div className="social-mediaItem">
                    <IconContext.Provider value={{ color: "#0D66CE", size: "38px" }}>
                        <BsTwitter />
                    </IconContext.Provider>
                </div>
                <div className="social-mediaItem">
                    <IconContext.Provider value={{ color: "#0D66CE", size: "38px" }}>
                        <GrMail />
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export default SocialMedia;