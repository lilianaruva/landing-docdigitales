import React from 'react';
import img3 from '../../../img/services/bill/PROFITS.svg';
import img2 from '../../../img/services/bill/9759 - Experience.svg';

const Easy = () => {
    return (
        <>
            <div className="mainMedium-Container splitBackground">
                <div className="cardEasy">
                    <div className="cardEasyChild">
                        <img src={img2} />
                        <p className="titleCardEasy"><b>Fácil de usar</b></p>
                        <p>Nuestro sistema esta diseñado especialmente para ti. Es simple e intuitivo para que trabajes sin complicaciones.</p>
                    </div>
                    <div className="cardEasyChild">
                        <img src={img2} />
                        <p className="titleCardEasy"><b>Fácil de usar</b></p>
                        <p>Personaliza tus facturas y cotizaciones con tu logo e imagen, y mejora tu presencia con los clientes.</p>
                    </div>
                    <div className="cardEasyChild">
                        <img src={img3} />
                        <p className="titleCardEasy"><b>Fácil de usar</b></p>
                        <p>Genera tus facturas, envíalas a tus clientes y recibe el pago correspondiente, todo dentro de nuestra plataforma. ¡Fácil y seguro!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Easy;