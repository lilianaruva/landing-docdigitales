import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/carousel.css';
import CardCarousel from './cardCarousel';
import im1 from "../../../../img/services/accServices/Screen Shot 2021-12-29 at 13.46.23.png";
import im2 from "../../../../img/services/accServices/devops-jira-screen-bg.png";

const CarouselS = () => {
    return (
        <>
            <Carousel autoPlay centerMode>
                <div key="slide1" style={{ padding: 20, height: '80vh', backgroundColor: '#F1F5FE', borderRadius: '20px' }}>
                    <div className="CarouselContainer">
                        <CardCarousel image={im1} title="Hacemos tu contabilidad mensual" subtitle="Te asignamos un contador experto, quien se encargara de llevar tu contabilidad y asesorarte con tus finanzas para impulsar el crecimiento de tu negocio." />
                    </div>
                </div>
                <div key="slide2" style={{ padding: 20, height: '80vh', backgroundColor: '#F1F5FE', borderRadius: '20px' }}>
                    <div className="CarouselContainer">
                        <CardCarousel image={im2} title="Hacemos tu contabilidad mensual" subtitle="Te asignamos un contador experto, quien se encargara de llevar tu contabilidad y asesorarte con tus finanzas para impulsar el crecimiento de tu negocio." />
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default CarouselS;