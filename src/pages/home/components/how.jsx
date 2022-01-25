import React from "react";
import imgLeft from "../../../img/home/team/left.png"
import imgRight from "../../../img/home/team/right.png"
import imgCenter from "../../../img/home/team/LaptopCenter2.png"
import { FiCheckCircle } from "react-icons/fi";

const How = () => {
    return (
        <>
            <div className="mainHow-Container" style={{ backgroundColor: '#F1F5FE' }} id="backgroundHow">
                <div className="title-platform">
                    <p>¿Cómo <b>nos integramos</b> a tu negocio?</p>
                    <p style={{ fontSize: '30px' }}>Trabajamos para ti, llevamos tu contabilidad y te brindamos las herramientas de administración en línea más fáciles de usar.</p>
                </div>
                <div className="howRow" style={{ marginBottom: "22px" }}>
                    <div className="howRowItem">
                        <img src={imgLeft} alt="imageLeft" />
                    </div>
                    <div className="howRowItem"></div>
                    <div className="howRowItem">
                        <img src={imgRight} alt="imageRight" />
                    </div>
                </div>
                <div className="howTree" >
                    <div className="howColumn">
                        <div className="howRowTitle">
                            <div className="howSpace"></div>
                            <div className="howTitle" >docDigitales</div>
                            <div className="howSpace" id="topHorizontal"></div>
                        </div>
                        <div className="lineH">
                            <div className="line1" id="verticalR"></div>
                        </div>
                        <div className="howItem"><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-1" /><p>Hacemos tu contabilidad</p></div>
                        <div className="howItem"><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-1" /><p>Calculamos tus impuestos</p></div>
                        <div className="howItem"><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-1" /><p>Presentamos tus declaraciones</p></div>
                        <div className="howItem" style={{ marginBottom: '0' }}><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-2" /><p>Te brindamos asesoría fiscal ante SAT</p></div>
                        <div className="lineH">
                            <div className="line1"></div>
                            <div className="line2" id="bottomLeft"></div>
                        </div>
                    </div>
                    <div className="howColumn" >
                        <div className="lineV" style={{ maxHeight: '24%' }}>
                            <div className="line1" >
                                <div className="howSpaceTop" style={{ minHeight: '26px' }}>
                                    <div className="howSpaceTop" id="topRightCenter"></div>
                                    <div className="howSpaceTop" id="verticalR"></div>
                                </div>
                                <div className="howSpaceTop" id="verticalR"></div>
                            </div>
                            <div className="line2">
                                <div className="howSpaceTop"  style={{ minHeight: '26px' }}>
                                    <div className="howSpaceTop" id="topRightCenter"></div>
                                </div>
                            </div>
                        </div>
                        <div className="lineV" style={{ maxHeight: '59%' }}>
                            <img src={imgCenter} alt="imageCenter" />
                        </div>
                        <div className="lineV" style={{ maxHeight: '21%' }}>
                            <div className="line1" id="bottomLeftCenter"></div>
                            <div className="line2" id="bottomRightCenter"></div>
                        </div>
                    </div>
                    <div className="howColumn">
                        <div className="howRowTitle">
                            <div className="howSpace" id="topHorizontal"></div>
                            <div className="howTitle" >Nuestros Clientes</div>
                            <div className="howSpace"></div>
                        </div>
                        <div className="lineH">
                            <div className="line1" id="verticalR"></div>
                        </div>
                        <div className="howItem"><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-1" /><p>Facturas, cotizaciones y cuentas por cobrar</p></div>
                        <div className="howItem"><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-1" /><p>Revisa información clave de tu negocio</p></div>
                        <div className="howItem"><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-1" /><p>Declaraciones mensuales y anuales</p></div>
                        <div className="howItem" style={{ marginBottom: '0' }}><FiCheckCircle style={{ color: '#0D66CE' }} size={'16px'} className="mr-2" /><p>Lleva el control de tu negocio</p></div>
                        <div className="lineH">
                            <div className="line1" id="bottomRight"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default How;


/*


 <div className="howTree">
                    <div className="howLeft">
                        <div className="howTop">
                            <img src={imgLeft} alt="howImgLeft"/>
                            <p>doc<b>Digitales</b></p>
                        </div>
                        <div className="howItem">Hacemos tu contabilidad</div>
                        <div className="howItem">Calculamos tus impuestos</div>
                        <div className="howItem">Presentamos tus declaraciones</div>
                        <div className="howItem">Te brindamos asesoría fiscal ante SAT</div>
                        <div className="howItem">Te brindamos asesoría fiscal</div>
                    </div>
                    <div className="howCenter">
                        <img src={imgScreen} alt="howImgCenter"/>
                    </div>
                    <div className="howRight">
                        <div className="howTop">
                            <img src={imgRight} alt="howImgRight"/>
                            <p>Nuestros <b>Clientes</b></p>
                        </div>
                        <div className="howItem">Facturas, cotizaciones y cuentas por cobrar</div>
                        <div className="howItem">Revisa información clave de tu negocio</div>
                        <div className="howItem">Declaraciones mensuales y anuales</div>
                        <div className="howItem">Lleva el control de tu negocio</div>
                    </div>
                </div>

*/