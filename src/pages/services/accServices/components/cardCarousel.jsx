import React from 'react';

const CardCarousel = ({ image, title, subtitle }) => {
    return (
        <>
            <div className="CarouselCard-Container">
                <img src={image} alt={title} style={{ width: '60%', margin:'0px 20px 0px 20px'}}/>
                <div className="Carousel-content">
                    <p style={{ fontSize: '24px', width: 'auto'}}><b>{title}</b></p>
                    <p>{subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default CardCarousel;