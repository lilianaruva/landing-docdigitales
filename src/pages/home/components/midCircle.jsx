import React, { useState, useEffect } from 'react';
import { LayoutGroup, motion } from "framer-motion";
import { useScroll } from "../../../components/useScroll";
import { scrollReveal, cardAnimation, list } from "../../../animation";
import screen from "../../../img/home/Screen Shot 2021-12-27 at 14.59.15.png"
import icon1 from "../../../img/home/business-23.svg";
import icon3 from "../../../img/home/business-28.svg";

const MidCircle = () => {

    const menuOption = [
        {
            strongTitle: "Facturación",
            simpleTitle: "en línea",
            bigTitle: "Una plataforma robusta y profesional para hacer crecer tu negocio",
            description: "Tenemos el sistema de facturación en línea más fácil de usar en todo México",
            image: screen
        },
        {
            strongTitle: "Recibe",
            simpleTitle: "pagos en linea",
            bigTitle: "Una plataforma robusta y profesional para hacer crecer tu negocio Op2",
            description: "opt desc2",
            image: screen
        },
        {
            strongTitle: "Servicios",
            simpleTitle: "contables",
            bigTitle: "Una plataforma robusta y profesional para hacer crecer tu negocio Op3",
            description: "opt desc3",
            image: screen
        },
        {
            strongTitle: "Administración",
            simpleTitle: "de nómina",
            bigTitle: "Una plataforma robusta y profesional para hacer crecer tu negocio Op4",
            description: "opt desc",
            image: screen
        }
    ]

    const [animation, setAnimation] = useState(true);
    const [textOption, setTextOption] = useState(menuOption[0]);
    const [index, setIndex] = useState(0);
    const [element, controls] = useScroll();

    const changeContent = (index) => {
        setTextOption(menuOption[index]);
        setIndex(index);
        if (animation)
            setAnimation(false);
    }

    const changeContentIn = (index) => {
        setTextOption(menuOption[index]);
    }

    useEffect(() => {
        var delayInMilliseconds = 5000;


        if (animation)
            setTimeout(function () {
                let i = (index + 1 <= 3) ? index + 1 : 0;
                setIndex(i);
                changeContentIn(i)
            }, delayInMilliseconds);


    })

    return (
        <>
            <div className="main-ContainerSection2" id="backgroundHomeSection"
                ref={element}
                animate={controls}
                initial="hidden"
                variants={scrollReveal}>
                <div className="descriptionHome-left">
                    <div className="title-platformCircle">
                        <p style={{ fontWeight: '500', textAlign: 'left' }}>{textOption?.bigTitle ?? ""}</p>
                    </div>
                    <img src={textOption?.image ?? ""} alt="screenshotHomeSection2" />
                </div>
                <LayoutGroup>
                    <motion.div className="descriptionHome-right" variants={list} initial="hidden" animate="visible">
                        <div className="cardMidCircle">
                            <motion.div className={`cardColumSection2 ${index === 0 ? "selected" : ""}`}
                                animate={{ scale: 1 }}
                                variants={cardAnimation}
                                whileHover={{ scale: 0.9 }}
                                onTap={() => { changeContent(0) }}
                                onMouseOver={() => { changeContent(0) }}
                            >
                                <img src={icon1} alt="icon1Section2" />
                                <p>Facturación en línea</p>
                            </motion.div>
                            <motion.div className={`cardColumSection2 ${index === 1 ? "selected" : ""}`}
                                animate={{ scale: 1 }}
                                variants={cardAnimation}
                                whileHover={{ scale: 0.9 }}
                                onTap={() => { changeContent(1) }}
                                onMouseOver={() => { changeContent(1) }}
                            >
                                <img src={icon3} alt="icon1Section2" />
                                <p>Recibe pagos en línea</p>
                            </motion.div>
                        </div>
                        <div className="cardMidCircle">
                            <motion.div className={`cardColumSection2 ${index === 2 ? "selected" : ""}`}
                                animate={{ scale: 1 }}
                                variants={cardAnimation}
                                whileHover={{ scale: 0.9 }}
                                onTap={() => { changeContent(2) }}
                                onMouseOver={() => { changeContent(2) }}
                            >
                                <img src={icon3} alt="icon1Section2" />
                                <p>Servicios contables</p>
                            </motion.div>
                            <motion.div className={`cardColumSection2 ${index === 3 ? "selected" : ""}`}
                                animate={{ scale: 1 }}
                                variants={cardAnimation}
                                whileHover={{ scale: 0.9 }}
                                onTap={() => { changeContent(3) }}
                                onMouseOver={() => { changeContent(3) }}
                            >
                                <img src={icon1} alt="icon1Section2" />
                                <p>Administración de nómina</p>
                            </motion.div>
                        </div>
                        <motion.div className="TextMidCicle">
                            <p className="responsiveTitleCircle"><b>{textOption?.strongTitle ?? ""}</b> {textOption?.simpleTitle ?? ""}</p>
                            <p className="responsiveSubtitleCircle">{textOption?.description ?? ""}</p>
                        </motion.div>
                    </motion.div>
                </LayoutGroup>
            </div>
        </>
    )
}

export default MidCircle;