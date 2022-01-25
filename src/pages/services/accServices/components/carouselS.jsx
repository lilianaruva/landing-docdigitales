import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/carousel.css';
import CardCarousel from './cardCarousel';
import im1 from "../../../../img/services/accServices/Screen Shot 2021-12-29 at 13.46.23.png";
import im2 from "../../../../img/services/accServices/slide2.png";
import im3 from "../../../../img/services/accServices/slide3.png";
import im4 from "../../../../img/services/accServices/slide4.png";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const CarouselS = () => {

    return (
        <>
            <Carousel autoPlay centerMode infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} emulateTouch swipeable
                statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="arrowStyles ArrowLeft" >
                            <IoIosArrowDropleftCircle style={{ color: '#0D66CE' }} size={'47px'}/>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="arrowStyles ArrowRight" >
                            <IoIosArrowDroprightCircle style={{ color: '#0D66CE' }} size={'47px'}/>
                        </button>
                    )
                }
            >
                <div key="slide1" style={{ padding: 20, margin: 20, height: '70vh', backgroundColor: '#F1F5FE', borderRadius: '20px', transform: 'translate3d(0%, 0px, 0px) important!' }}>
                    <div className="CarouselContainer">
                        <CardCarousel image={im1} title="Hacemos tu contabilidad mensual" subtitle="Te asignamos un contador experto, quien se encargara de llevar tu contabilidad y asesorarte con tus finanzas para impulsar el crecimiento de tu negocio." />
                    </div>
                </div>
                <div key="slide2" style={{ padding: 20, margin: 20, height: '70vh', backgroundColor: '#F1F5FE', borderRadius: '20px' }}>
                    <div className="CarouselContainer">
                        <CardCarousel image={im2} title="Calculamos tus impuestos" subtitle="Realizamos todos los cálculos de impuestos y retenciones por ti. Además, generamos un análisis de optimización de gastos deducibles para ahorrarte tiempo y dinero." />
                    </div>
                </div>
                <div key="slide3" style={{ padding: 20, margin: 20, height: '70vh', backgroundColor: '#F1F5FE', borderRadius: '20px' }}>
                    <div className="CarouselContainer">
                        <CardCarousel image={im3} title="Presentamos tus declaraciones ante el SAT" subtitle="Nos ocupamos porque tu empresa cumpla con todas sus obligaciones fiscales, preparamos tus declaraciones y las presentamos ante el SAT para que no tengas que preocuparte por nada más." />
                    </div>
                </div>
                <div key="slide4" style={{ padding: 20, margin: 20, height: '70vh', backgroundColor: '#F1F5FE', borderRadius: '20px' }}>
                    <div className="CarouselContainer">
                        <CardCarousel image={im4} title="Sesiones semestrales de planeación y asesoría" subtitle="Evaluamos las finanzas de tu negocio y te asesoramos para tomar decisiones informadas. Te ofrecemos un acompañamiento constante, acorde a tus necesidades y que evoluciona a la par de tu negocio." />
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default CarouselS;