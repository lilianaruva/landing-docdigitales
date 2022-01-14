import React from "react";
import icon1 from "../../../img/home/business-21.svg"
import icon2 from "../../../img/home/hands.svg"
import icon3 from "../../../img/home/business-03.svg"
import icon4 from "../../../img/home/bill.svg"
import CountUp from 'react-countup';
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../../../animation";
import { useScroll } from "../../../components/useScroll";

const Numbers = () => {
    const [element, controls] = useScroll();
    return (
        <AnimateSharedLayout>
            <div className="mainMedium-Container"
                ref={element}
                animate={controls}
                initial="hidden"
                variants={scrollReveal}>
                <div className="title-platform">
                    <p style={{ fontWeight: '500', maxWidth: '992px' }}>Somos la mejor solución para la <b>vida laboral de PyMES y emprendedores</b></p>
                </div>
                <div className="sectionNumbersContainer">
                    <div className="sectionNumbersChild">
                        <img src={icon1} alt="iconNumbers1" />
                        <p className="numberTitle"><CountUp start={0} end={10} duration={1} />+</p>
                        <p className="numberSubtitle">Años de experiencia</p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={icon2} alt="iconNumbers2" style={{ marginBottom: "55px" }}/>
                        <p className="numberTitle"><CountUp start={0} end={6000} duration={2} />+</p>
                        <p className="numberSubtitle">Empresas ya confían en nosotros</p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={icon3} alt="iconNumbers3" />
                        <p className="numberTitle"><CountUp start={0} end={200000} separator="," duration={2} />+</p>
                        <p className="numberSubtitle">Facturas generadas mensualmente</p>
                    </div>
                    <div className="sectionNumbersChild">
                        <img src={icon4} alt="iconNumbers4"/>
                        <p className="numberTitle"><CountUp start={0} end={2} duration={1} />Bll USD+</p>
                        <p className="numberSubtitle">Facturados anualmente por nuestros clientes</p>
                    </div>
                </div>
            </div>
        </AnimateSharedLayout>
    )
}

export default Numbers;