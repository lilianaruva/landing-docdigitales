import React from 'react';

const Article02 = () => {
    return (
        <div className="ArticleContent">
            <div>
                <h1 class="entry-title" itemprop="headline">Manual del Complemento de Carta Porte</h1>
            </div>
            <div>
                <p>En <a href="http://www.docdigitales.com">docDigitales</a> te decimos cómo realizar un CFDI con <a href="http://omawww.sat.gob.mx/cartaporte/Paginas/default.htm">complemento de carta porte</a> de una forma rápida y muy sencilla. Lo primero que necesitas hacer es identificar que tipo de CFDI deberás emitir, esto dependerá si la mercancía o bienes que trasladarás son tuyos o bien estás prestando el servicio de traslado.</p>
                <br />
                <div className="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2021/09/Presentación1-1024x576.png" alt="Presentación1" class="wp-image-6678" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2021/09/Presentación1-1024x576.png 1024w, https://www.docdigitales.com/blog/wp-content/uploads/2021/09/Presentación1-300x169.png 300w, https://www.docdigitales.com/blog/wp-content/uploads/2021/09/Presentación1-768x432.png 768w, https://www.docdigitales.com/blog/wp-content/uploads/2021/09/Presentación1.png 1280w" sizes="(max-width: 1024px) 100vw, 1024px" />
                </div>
                <p>Una vez que elegiste el tipo de CFDI llenarás tu factura y agregarás al final en <strong>Opciones adicionales a la factura</strong> los complementos y activarás el botón. Eliges <strong>Carta Porte</strong> y das clic en el botón de <strong>Elegir Complemento</strong>.</p>
                <br />
                <div className="centerImage">
                    <img src="https://lh6.googleusercontent.com/TH_uQpT3Ba7KWHhE0WDNDYnARLIFe8nIl4ZjR11DUsFa6YFjXHQM3uPjmqwWxB0Kpj54UG1rr0ndYKXWqp6ouF24kxJtUJTGHEXuEj6P7L64Le6Sb8-1G_Rqhki1FK_GXEUC2hIF" alt="" />
                </div>
                <p>Al elegir esta opción te aparecerán los campos que debes llenar para este complemento en donde aparecerá:&nbsp;<br /></p>
                <br />
                <ul>
                    <li><strong>Transporte Internacional</strong>: El primer paso es elegir si el transporte de entrada o salida de la mercancía será internacional o no. En caso de ser transporte internacional será necesario indicar el tipo de vía de ingreso o de salida.</li>
                    <li><strong>Ubicaciones</strong>: deberás indicar la Estación de Origen, intermedia o Destino Final, agregando todos los puntos que recorrerá la mercancía o el bien a trasladar, por lo que es necesario llenar en cada uno Origen, Destino y Domicilio.</li>
                </ul>
                <br />
                <p> <strong>Ubicación 1: Origen</strong><strong></strong></p>
                <br />
                <ul>
                    <li>Tipo de Ubicación: Origen</li>
                    <li>ID Ubicación: ORXXXXXX (Asignar en 6 dígitos el origen de la mercancía, empezará con las siglas OR+6 dígitos)</li>
                    <li>RFC Remitente: El RFC de la empresa donde inicia el traslado de la mercancía.</li><li>Nombre Remitente: Nombre de la empresa donde inicia el traslado de la mercancía.</li>
                    <li> Número de identificación o registro fiscal (Num RegldTrib): registrar el número de identificación o registro fiscal del país de residencia para los efectos fiscales del remitente de los bienes o mercancías que se trasladan, cuando sea residente en el extranjero.&nbsp;</li>
                    <li>Residencia Fiscal: seleccionar del catálogo la clave de residencia fiscal del país.&nbsp;<br />Número de Estación: Seleccionar del catálogo la clave del número de estación de salida. (en caso de que la mercancía sea trasladada en diferentes tipos de transporte).</li>
                    <li>Nombre de Estación.   ( en caso de que la mercancía sea trasladada en diferentes tipos de transporte ) <br />Navegación Tráfico: Se deberá seleccionar la opción que corresponda.&nbsp; </li><li>FechaHora Salida Llegada: en formato AAAA-MM-DD<strong>T</strong>HH:MM:SS</li>
                </ul>
                <br />
                <p>Datos del Domicilio</p>
                <br />
                <ul>
                    <li>Calle</li>
                    <li>Numero exterior</li>
                    <li>Luego elegir el Código Postal, País, Estado, Municipio, Localidad y Colonia, es necesario hacerlo en ese orden para que vaya filtrando por entidad el contenido de la siguiente celda. </li>
                </ul>
                <br />
                <div class="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/2-cp.jpg" alt="2 cp" class="wp-image-6738" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/2-cp.jpg 860w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/2-cp-300x174.jpg 300w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/2-cp-768x446.jpg 768w" sizes="(max-width: 860px) 100vw, 860px" />
                </div>
                <p><strong>Ubicación 2: Destino/Intermedio</strong></p>
                <br />
                <ul>
                    <li>ID Ubicación: DEXXXXXX( (Asignar en 6 dígitos el destino de la mercancía, empezará con las siglas DE+6 dígitos) )</li>
                    <li>RFC Remitente-Destinatario</li>
                    <li>Nombre Remitente Destinatario</li>
                    <li>FechaHora Salida Llegada: en formato AAAA-MM-DD<strong>T</strong>HH:MM:SS</li>
                    <li>  Número de identificación o registro fiscal (Num RegldTrib): registrar el número de identificación o registro fiscal del país de residencia para los efectos fiscales del remitente de los bienes o mercancías que se trasladan, cuando sea residente en el extranjero.&nbsp;</li>
                    <li>Residencia Fiscal: seleccionar del catálogo la clave de residencia fiscal del país.&nbsp;</li>
                    <li>Número de Estación: Seleccionar del catálogo la clave del número de estación de salida. (en caso de que la mercancía sea trasladada en diferentes tipos de transporte).</li>
                    <li>Nombre de Estación<em>.</em> (En caso de que la mercancía sea trasladada en diferentes tipos de transporte) <br />Navegación Tráfico: Se deberá seleccionar la opción que corresponda.&nbsp;  </li>
                    <li>Distancia recorrida</li>
                </ul>
                <br />
                <p>Datos del Domicilio</p>
                <br />
                <ul>
                    <li>Calle</li>
                    <li>Numero exterior</li>
                    <li> Luego elegir el Código Postal, País, Estado, Municipio, Localidad y Colonia, es necesario hacerlo en ese orden para que vaya filtrando por entidad el contenido de la siguiente celda.  </li>
                </ul>
                <br />
                <div class="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/1.jpg" alt="1" class="wp-image-6739" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/1.jpg 980w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/1-300x196.jpg 300w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/1-768x502.jpg 768w" sizes="(max-width: 980px) 100vw, 980px" />
                </div>
                <p>3. <strong>Mercancías</strong>: en este apartado se registra toda la información relacionada con los bienes y mercancías que se trasladan.&nbsp;</p>
                <br />
                <ul>
                    <li>Unidad Peso: es la unidad de peso en la que se mide la mercancía</li>
                    <li>Cantidad:  Atributo requerido para registrar el número total de los bienes y/o mercancías que se trasladan </li>
                    <li>Descripción:  Detalle las características de los bienes y/o mercancías que se trasladan en los distintos medios de transporte. </li>
                    <li>Clave Unidad:  Atributo requerido para registrar la clave de la unidad de medida estandarizada aplicable para la cantidad de los bienes y/o mercancías que se trasladan en los distintos medios de transporte. La unidad debe corresponder con la descripción de los bienes y/o mercancías registrados.</li>
                    <li>Clave Bienes Transporte: de la mercancía que se transporta</li>
                    <li>¿Es Material Peligroso?: En caso de ser la respuesta sí, llenar los campos Clave Material Peligroso y campo de embalaje.</li>
                    <li>Clave Material Peligroso:  Atributo condicional para indicar la clave del tipo de material peligroso que se transporta de acuerdo a la NOM-002-SCT/2011. </li>
                    <li>Embalaje:  expresar la descripción del embalaje de los bienes y/o mercancías que se trasladan y que se consideran material o residuo peligroso. </li>
                    <li>Peso en Kg: Del total de la mercancía</li>
                    <li>Valor Mercancía: opcional</li>
                    <li>Moneda: opcional</li>
                    <li>Fracción Arancelaria:  Agregar la clave de la fracción arancelaria que corresponde con la descripción de los bienes y/o mercancías, es opcional.</li>
                    <li>UUID Comercio Exterior:  folio fiscal (UUID) del comprobante de comercio exterior que se relaciona, es opcional.</li>
                </ul>
                <br />
                <div class="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/Picture1.png" alt="Picture1" class="wp-image-6742" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/Picture1.png 890w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/Picture1-300x163.png 300w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/Picture1-768x419.png 768w" sizes="(max-width: 890px) 100vw, 890px" />
                </div>
                <p>Si para tu CFDI es necesario agregar el apartado de <strong>Pedimentos</strong>, se sigue el siguiente formato para expresar el número de pedimento:</p>
                <br />
                <ul>
                    <li>&nbsp;Toma los últimos dos dígitos del año de validación seguido de dos espacios</li>
                    <li>2 dígitos de la aduana de despacho seguidos por dos espacios</li>
                    <li>4 dígitos del número de la patente seguido por dos espacios</li>
                    <li>1 dígito que corresponde al último dígito del año en curso, salvo que se trate de un pedimento consolidado iniciado en el año inmediato anterior o del pedimento original de una rectificación+6 dígitos de la numeración progresiva por aduana. </li>
                </ul>
                <br />
                <p>En total son 21 dígitos tomando en cuenta los espacios. </p>
                <br />
                <div class="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/image-2.png" alt="image 2" class="wp-image-6743" width="234" height="46" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/image-2.png 419w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/image-2-300x59.png 300w" sizes="(max-width: 234px) 100vw, 234px" />
                </div>
                <p><strong>Guía de Identificación</strong>: Es requerido si es necesario registrar información de número de guías que se encuentren asociados al o los paquetes que se trasladan dentro de territorio nacional. </p>
                <br />
                <ul>
                    <li> NumeroGuiaIdentificacion: Agregar el número de guía de cada paquete que se encuentra asociado con el traslado de bienes o mercancías.</li>
                    <li>DescripGuiaIdentificacion: Escribe el contenido del paquete o carga registrada en al guía.</li><li>PesoGuiaIdentificacion: Indica en Kg. el peso del paquete o carga trasladado que se encuentra registrado en la guía o no. de identificación. Puedes agregar hasta 3 decimales en el peso. </li>
                </ul>
                <br />
                <p><strong>Cantidad que trasporta</strong>, será necesario registrarlo en caso de que la cantidad de bienes o mercancías que se trasladan en diferentes medios de transporte y serán distribuidas en distintos puntos. En donde agregarás la cantidad de mercancía que se transporta, ID de origen, ID destino. </p>
                <br />
                <p><strong>Detalle Mercancía</strong>: Si se utilizan ingresar especificaciones de bienes o mercancías que serán trasladados a través de diferentes medios de transporte.</p>
                <br />
                <p><strong>Apartado de Autotransporte</strong></p>
                <br />
                <ul>
                    <li> Tipo de permiso del autotransporte y el número de permiso que proporciona la SCT</li>
                    <li>Contar con una póliza de seguro para el traslado</li>
                    <li>Conocer el número de placas del vehículo donde será transportada la mercancía </li>
                </ul>
                <br />
                <p>Además es necesario contar con la siguiente información:&nbsp;</p>
                <br />
                <ul>
                    <li>RFC del operador (solo en caso de ser nacional)</li><li>Número de licencia</li><li>Nombre del Operador</li><li>Número del registro de identificación tributario del operador (en caso de ser extranjero)</li>
                    <li>Residencial fiscal del operador (en caso de ser extranjero)</li><li>Domicilio del operador(nacional/extranjero). En el domicilio del chofer será necesario agregar su dirección primero agregar País, Estado y Municipio.</li>
                    <li>Si se desea agregar localidad y colonia será necesario agregar con claves del <a href="http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_carta_porte.htm">Catálogos del SAT</a>   en los apartados de colonia y localidad.</li>
                </ul>
                <br />
                <div className="centerImage">
                    <img src="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/autotransporte-1024x726.png" alt="autotransporte" class="wp-image-6751" srcset="https://www.docdigitales.com/blog/wp-content/uploads/2021/12/autotransporte-1024x726.png 1024w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/autotransporte-300x213.png 300w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/autotransporte-768x545.png 768w, https://www.docdigitales.com/blog/wp-content/uploads/2021/12/autotransporte.png 1245w" sizes="(max-width: 1024px) 100vw, 1024px" />
                </div>
                <ul>
                    <li>Si transportas diferentes mercancías para distintos clientes es necesario emitir a cada uno su CFDI con complemento carta porte con la o las mercancías y/o bienes que le transportas a cada uno.</li>
                </ul>
                <br />
                <p style={{ textAlign: "center" }}><strong>Esperamos que esta información haya sido de ayuda.</strong></p>
                <br />
                <p style={{ textAlign: "center" }}>
                    Para generar tus CFDIs con complementos, agrégalo a tu plan de facturación por $999 pesos + IVA, un pago anual, todos los complementos incluidos.
                </p>
                <br />
                <p style={{ textAlign: "center" }}>Si tienes dudas o quieres conocer más sobre las opciones del sistema te invitamos a que explores nuestros&nbsp;<a href="https://docdigitales.com/blog/manuales">manuales</a>. Estamos a tus órdenes en el número de atención a clientes (686) 520 0503 o bien en el correo electrónico&nbsp;<strong>contacto@docdigitales.com&nbsp;</strong>           Visita nuestro sitio web&nbsp;<a href="http://www.docdigitales.com/">www.docdigitales.com</a></p>
                <p style={{ textAlign: "center" }}>Nuestro horario de atención es de 9:00 a 19:00&nbsp;<strong>hora Centro.</strong></p>
            </div>
        </div >
    )
}

export default Article02;