import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IconContext } from "react-icons";

const Ask = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="mainMedium-Container">
            <div className="AskContainer">
                <p style={{ fontSize: '40px', fontWeight: 'bold' }}>Preguntas Frecuentes</p>
                <button onClick={() => active === 0 ? setActive(1) : setActive(0)}>
                    <IconContext.Provider value={{ color: "#000000", size: "90px" }}>
                        <IoIosAddCircleOutline />
                    </IconContext.Provider>
                </button>
            </div>
            {
                active === 1 ?

                    <div className="Asks">
                        <p className="AskChild">
                            ¿Qué es docDigitales?
                            Es un sistema completo e integral para facilitar la vida laboral de pequeñas y medianas empresas. Con nuestras soluciones de Facturación electrónica, Servicios Contables y Administración de nomina, y nuestro equipo de atención a clientes, resolvemos todo por ti desde el día 1.
                        </p>
                        <p className="AskChild">
                            ¿Qué necesito para registrarme en docDigitales?
                            •	Estar inscrito el Registro Federal de Contribuyentes (RFC)
                            •	Contar con e.firma, antes Firma Electronica (FIEL)
                            •	Tramitar Certificado de Sello Digital (Para el módulo de Facturación Electrónica)
                            •	Contar con registro patronal (Para el módulo de administración de nómina)
                        </p>
                        <p className="AskChild">
                            ¿Cómo tramito el Certificado de Sello Digital?
                            Se tramita dentro del portal del SAT, es necesario contar con la e.firma vigente. Puedes consultar esta liga tramita tu sello o bien, puedes contactarnos y con gusto te ayudaremos para realizar este trámite.
                        </p>
                        <p className="AskChild">
                            ¿Cómo calculan mi Contabilidad?
                            Asignamos un contador publico profesional a cada uno de nuestros clientes, quien se encarga de realizar todos los cálculos y declaraciones, y las dispone en nuestra plataforma para que la información contable de nuestros clientes este disponible en todo momento y en cualquier lugar.
                        </p>
                        <p className="AskChild">
                            ¿Cómo hacen mi nómina?
                            Solo tienes que hacer un registro inicial de tu equipo de trabajo y nuestra plataforma generara los cálculos automáticamente, para que tu puedas dispersar en un clic. Además, nuestro servicio de nómina cumple con todas las normativas aplicables de seguridad social para tus empleados.
                        </p>
                        <p className="AskChild">
                            ¿Qué puedo hacer en el modulo de Facturación Electrónica?
                            •	Generar Facturas y Complementos de Pago (Ingreso, Egreso y Traslado).
                            •	Agregar complementos a tus facturas tales como: Carta Porte, INE, Comercio Exterior, Donatarias, Leyendas Fiscales, vehículos usados e Instituciones Educativas Privadas.
                            •	Administrar, reenviar y descargar tus facturas y complementos de pago.
                            •	Realizar cotizaciones.
                            •	Llevar tu control de gastos
                            •	Recibir tus facturas recibidas y pagos a proveedores con AdminSAT, para que no tengas que seguir consultando el buzón tributario.
                            •	Personalizar tus facturas y cotizaciones con el logo de tu empresa.
                        </p>
                        <p className="AskChild">¿Cuánto tiempo se almacena mi facturación electrónica en el sistema?
                            Tus facturas se almacenan por todo el tiempo que seas nuestro cliente y hasta un año después si dejas de serlo.
                        </p>
                        <p className="AskChild">
                            ¿Qué pasa cuando termina mi prueba gratis?
                            Puedes renovar tu suscripción con cargo automático a tu tarjeta de crédito o debito, PayPal o transferencia electrónica. Si no deseas continuar con el servicio, podrás irte sin ningún problema. No hay plazos forzosos ni cargos extras.
                        </p>
                    </div> :
                    <></>
            }
        </div>
    )
}

export default Ask;