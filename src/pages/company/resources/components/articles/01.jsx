import React from 'react';

const Article01 = () => {
    return (
        <div className="ArticleContent">
            <div>
                <h1 className="entry-title">Nuevos cambios para CFDI Factura 4.0</h1>
            </div>
            <div>
                <div className="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2019/06/image3-01-1024x597.png" alt="image3 01" className="wp-image-4441" width="556" height="323" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2019/06/image3-01-1024x597.png 1024w, https://www.docdigitales.com/blog/wp-content/uploads/2019/06/image3-01-300x175.png 300w, https://www.docdigitales.com/blog/wp-content/uploads/2019/06/image3-01-768x447.png 768w" sizes="(max-width: 556px) 100vw, 556px" />
                </div>
                <p>En <strong><a rel="noreferrer noopener" aria-label=" (abre en una nueva pestaña)" href="http://www.docdigitales.com" target="_blank">docDigitales</a></strong> nos gusta que siempre estés informado sobre cambios establecidos por el Servicio de Administración Tributaria <a rel="noreferrer noopener" aria-label="SAT (abre en una nueva pestaña)" href="https://www.sat.gob.mx/home" target="_blank">
                    <strong>SAT</strong></a>, por eso te compartimos información sobre cuáles son algunos de estos cambios para el 2022.  Entre los cambios más importantes está la <strong><a rel="noreferrer noopener" aria-label=" (abre en una nueva pestaña)" href="https://www.sat.gob.mx/consultas/43074/actualizacion-factura-electronica---reforma-fiscal-2022-" target="_blank">versión 4.0 de Facturación</a>
                </strong> que estará disponible a partir del 1 de enero 2022 pero será de forma obligatoria  el 1 de Mayo 2022 . Te compartimos información sobre cuales serán algunos de estos cambios. </p>
                <br />
                <p><strong>Facturación electrónica 4.0</strong> </p>
                <br />
                <ul>
                    <li>Ahora será obligatorio el <strong>nombre</strong> y <strong>domicilio</strong> fiscal del <strong>emisor</strong> y del <strong>receptor</strong>.</li>
                    <li>Será necesario incluir campos para identificar las operaciones donde exista una exportación de mercancías.</li>
                    <li>Se tendrá que identificar si las operaciones que ampara el comprobante son objeto de impuestos indirectos.</li>
                    <li>Se incorporarán nuevos apartados para reportar información respecto de las operaciones con el público en general; así como, aquellas que se realicen a cuenta de terceras personas.</li>
                </ul>
                <br />
                <p><strong>Se añaden dos nuevos nodos:</strong></p>
                <br />
                <ul>
                    <li>a) Información global: para los comprobantes globales expedidos a público en general.</li>
                    <li>b) A cuenta de terceros: la información que se pide para efectos de la facturación a cuenta de terceros se incluye en el cuerpo del CFDI.</li>
                </ul>
                <br />
                <p style={{ textAlign: "center" }}>
                    Estos son algunos de los cambios que entrarán con la <strong>versión 4.0</strong> sin embargo no solamente existen cambios para la emisión de CFDI, se realizan también ajustes a otros documentos complementarios.
                </p>
                <br />
                <p><strong> En el caso de los complementos de Recepción de Pago entrará en vigor la versión 2.0 que incluye los siguientes cambios: </strong></p>
                <br />
                <ul>
                    <li>Se incluyen nuevos campos para identificar sí los pagos de las operaciones que ampara el comprobante son objeto de impuestos.</li>
                    <li>Se incluirá un nuevo apartado con el resumen de los importes totales de los pagos realizados expresados en moneda nacional, así como los impuestos que se trasladan.</li>
                </ul>
                <br />
                <p><strong>Para la cancelación del CFDI también se establecieron cambios:</strong></p>
                <br />
                <ul>
                    <li>A partir del 2022 será necesario señalar el motivo de la cancelación de los comprobantes.</li>
                    <li>Al seleccionar como motivo de cancelación la clave 01 “Comprobante emitido con errores con relación” deberá relacionarse el folio fiscal del comprobante que sustituye al cancelado.</li>
                    <li>Se actualizan los plazos para realizar la cancelación de facturas</li>
                </ul>
                <br />
                <p> De forma adicional el <a href="https://www.sat.gob.mx/home" target="_blank" rel="noreferrer noopener" aria-label="Sistema de Administración Tributaria SAT (abre en una nueva pestaña)">Sistema de Administración Tributaria SAT</a> añadió que existirán cambios también en <a rel="noreferrer noopener" aria-label="catálogos (abre en una nueva pestaña)" href="http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm" target="_blank">catálogos</a> entre otros.</p>
                <br />
                <p style={{ textAlign: "center" }}><strong>Esperamos que esta información haya sido de ayuda.</strong></p>
                <p style={{ textAlign: "center" }}>Si tienes dudas o quieres conocer más sobre las opciones del sistema te invitamos a que explores nuestros&nbsp;<a href="https://docdigitales.com/blog/manuales">manuales</a>. Estamos a tus órdenes en el número de atención a clientes (686) 520 0503 o bien en el correo electrónico&nbsp;<strong>contacto@docdigitales.com&nbsp;</strong>&nbsp;Visita nuestro sitio web&nbsp;<a href="http://www.docdigitales.com/">www.docdigitales.com</a></p>
                <p style={{ textAlign: "center" }}>Nuestro horario de atención es de 9:00 a 19:00&nbsp;<strong>hora Centro.</strong></p>
            </div>
        </div>
    )
}

export default Article01;