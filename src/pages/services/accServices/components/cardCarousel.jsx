import React from 'react';

const CardCarousel = ({ image, title, subtitle }) => {
    return (
        <>
            <div className="CarouselCard-Container">
                <img src={image} alt={title} style={{ width: '60%'}}/>
                <div className="Carousel-content">
                    <p style={{ fontSize: '24px', width: '450px'}}><b>{title}</b></p>
                    <p>{subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default CardCarousel;